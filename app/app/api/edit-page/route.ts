import Anthropic from "@anthropic-ai/sdk";
import type { EditAction, PageModel } from "@/types/pageModel";

export interface EditPageRequest {
  model: PageModel;
  userMessage: string;
  mode: "copy" | "design" | "layout" | "full";
}

export interface EditPageResponse {
  actions: EditAction[];
  summary: string;
}

// ── Mock fallback (used when API key is absent or on static export) ────────
function getMockResponse(userMessage: string, mode: string): EditPageResponse {
  const msg = userMessage.toLowerCase();

  if (msg.includes("headline") || msg.includes("title") || msg.includes("heading")) {
    return {
      actions: [{ type: "update_text", target: "hero.headline", value: "The Last Solution You'll Ever Need" }],
      summary: "Updated the hero headline to be more compelling.",
    };
  }
  if (msg.includes("cta") || msg.includes("button")) {
    return {
      actions: [
        { type: "update_text", target: "hero.cta", value: "Claim Your Discount →" },
        { type: "update_text", target: "cta.cta", value: "Claim Your Discount →" },
      ],
      summary: "Updated CTA buttons with urgency-driven copy.",
    };
  }
  if (msg.includes("benefit") || msg.includes("feature")) {
    return {
      actions: [{ type: "update_text", target: "benefits.heading", value: "Why Thousands Switch Every Month" }],
      summary: "Updated the benefits section heading.",
    };
  }
  if (msg.includes("review") || msg.includes("testimonial")) {
    return {
      actions: [{ type: "update_text", target: "reviews.heading", value: "Join 2,847+ Happy Customers" }],
      summary: "Updated reviews section heading.",
    };
  }
  if ((msg.includes("hide") || msg.includes("remove")) && msg.includes("trust")) {
    return {
      actions: [{ type: "remove_section", key: "trust_bar" }],
      summary: "Hid the trust bar section.",
    };
  }
  if (msg.includes("move") || msg.includes("reorder")) {
    return {
      actions: [{ type: "reorder_section", key: "benefits", direction: "up" }],
      summary: "Moved the benefits section up.",
    };
  }
  if (mode === "design") {
    return {
      actions: [{ type: "update_style", target: "hero", style: { backgroundColor: "#0f172a" } }],
      summary: "Adjusted hero background color for a darker feel.",
    };
  }

  return {
    actions: [{ type: "update_text", target: "hero.subheadline", value: "Trusted by thousands. Built to last." }],
    summary: "Applied a general improvement based on your request.",
  };
}

// ── Section summary for prompt ────────────────────────────────────────────
function summarizeModel(model: PageModel): string {
  const s = model.sections;
  return JSON.stringify({
    hero: { headline: s.hero.headline, subheadline: s.hero.subheadline, cta: s.hero.cta },
    problem: { heading: s.problem.heading, painPoints: s.problem.painPoints.map((p) => p.text) },
    solution: { heading: s.solution.heading, cta: s.solution.cta },
    benefits: { heading: s.benefits.heading, items: s.benefits.items.map((b) => b.headline) },
    reviews: { heading: s.reviews.heading },
    cta: { headline: s.cta.headline, cta: s.cta.cta },
    sectionOrder: model.sectionOrder,
  }, null, 2);
}

export async function POST(req: Request): Promise<Response> {
  let body: EditPageRequest;
  try {
    body = await req.json() as EditPageRequest;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { model, userMessage, mode } = body;
  if (!model || !userMessage) {
    return Response.json({ error: "Missing model or userMessage" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(getMockResponse(userMessage, mode));
  }

  const modeInstructions: Record<string, string> = {
    copy: "Focus ONLY on text changes. Do not suggest style or layout changes.",
    design: "Focus ONLY on style/colour changes using update_style actions.",
    layout: "Focus ONLY on section visibility and order (remove_section, reorder_section, add_section).",
    full: "You may suggest any combination of actions.",
  };

  const systemPrompt = `You are an expert conversion copywriter and landing page editor.
You receive the current landing page content as JSON and the user's edit request.
You must respond with ONLY a valid JSON object (no markdown, no explanation) with this structure:
{
  "actions": [...],
  "summary": "Brief description of changes"
}

Valid action types:
- { "type": "update_text", "target": "dot.notation.path", "value": "new text" }
  Valid targets: hero.headline, hero.subheadline, hero.cta, hero.trustBadge, hero.trustLine,
  problem.heading, problem.body, problem.painPoints.N.text (N=index),
  solution.eyebrow, solution.heading, solution.body, solution.cta,
  benefits.heading, benefits.items.N.headline, benefits.items.N.body, benefits.items.N.betterThan,
  reviews.heading, reviews.ratingScore, reviews.ratingCount,
  reviews.items.N.quote, reviews.items.N.result, reviews.items.N.name,
  cta.headline, cta.paragraphs.N, cta.cta, cta.trustLine

- { "type": "update_style", "target": "sectionKey", "style": { "backgroundColor": "#hex" } }
  Valid sectionKeys: hero, trust_bar, problem, solution, benefits, reviews, cta

- { "type": "remove_section", "key": "sectionKey" }
- { "type": "add_section", "key": "sectionKey" }
- { "type": "reorder_section", "key": "sectionKey", "direction": "up" | "down" }

Rules:
- Be surgical. Return maximum 8 actions.
- Preserve the product's core message unless explicitly asked to change it.
- ${modeInstructions[mode] ?? modeInstructions.full}`;

  const userPrompt = `Current page content:
${summarizeModel(model)}

User request: ${userMessage}`;

  try {
    const client = new Anthropic({ apiKey });
    const message = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });

    const rawText = message.content[0].type === "text" ? message.content[0].text : "";
    // Strip markdown code fences if present
    const jsonText = rawText.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/i, "").trim();
    const parsed = JSON.parse(jsonText) as EditPageResponse;
    return Response.json(parsed);
  } catch (err) {
    console.error("edit-page API error:", err);
    // Fallback to mock
    return Response.json(getMockResponse(userMessage, mode));
  }
}
