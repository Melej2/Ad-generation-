import Anthropic from "@anthropic-ai/sdk";

function getMockAngles(productName: string) {
  const p = productName || "your product";

  function makeVar(angle: string, idx: number, style: string, hook: string, problem: string, solution: string) {
    return {
      id: `${angle}_${idx}`,
      style,
      hook,
      problem,
      solution,
      demo: `Close-up of ${p} in use. Person visibly relieved. Real environment, handheld feel.`,
      cta: `Get ${p} — link in bio! Limited stock.`,
      captions: [hook.slice(0, 60), `${p} is changing everything 👀`, `Why is everyone buying this? 🔥`, `30-day guarantee — risk-free`],
      fullScript: `"${hook} ${problem} That's exactly why I tried ${p}. ${solution} Honestly? Best decision I've made this year. Link in bio."`,
    };
  }

  return {
    angles: [
      { angle: "pain", label: "Pain Point", emoji: "😤", description: "Lead with the core frustration your customer feels every day", variations: [makeVar("pain", 1, "Direct", `Fed up with the same problem? ${p} finally fixes it.`, "Nothing worked. You wasted time and money.", `${p} attacks the root cause. Most see results within the first week.`), makeVar("pain", 2, "Story", `I spent 2 years dealing with this before I found ${p}.`, "I tried everything. I was about to give up.", `Then ${p} fixed it in days. I wish I found it sooner.`)] },
      { angle: "problem_solution", label: "Problem → Solution", emoji: "💡", description: "Classic direct-response: name the problem, present the answer", variations: [makeVar("problem_solution", 1, "Contrast", `Here's why nothing has worked — and what actually does.`, "Most solutions treat the symptom, not the cause.", `${p} targets the root cause. That's why it works when everything else fails.`), makeVar("problem_solution", 2, "Educational", `The real reason people struggle (and how ${p} solves it).`, "The industry keeps you buying temporary fixes.", `${p} is different. It's built to actually solve the problem.`)] },
      { angle: "emotional", label: "Emotional", emoji: "💔", description: "Connect deeply with feelings, not just logic", variations: [makeVar("emotional", 1, "Vulnerable", `I bought this for my mom and she cried.`, "Watching someone struggle is heartbreaking.", `${p} gave her relief she hadn't felt in years.`), makeVar("emotional", 2, "Pride", `The moment I realised ${p} changed my life.`, "I'd gotten so used to the problem I forgot what life without it felt like.", `Then one day I realised I hadn't thought about it in weeks.`)] },
      { angle: "luxury", label: "Luxury & Aspiration", emoji: "✨", description: "Premium positioning — for people who deserve the best", variations: [makeVar("luxury", 1, "Prestige", `Stop settling. You deserve a ${p} that actually performs.`, "Most people buy the cheap version and suffer through it.", `${p} is what people who've tried everything finally upgrade to.`), makeVar("luxury", 2, "Lifestyle", `This is what your routine looks like when you stop compromising.`, "Your time is too valuable for products that underdeliver.", `${p} is engineered for people who expect more. Welcome to the upgrade.`)] },
      { angle: "ugc", label: "UGC / Authentic", emoji: "📱", description: "Raw, real, unscripted — the trust-building angle", variations: [makeVar("ugc", 1, "Honest Review", `Okay I wasn't going to post this but I have to talk about ${p}.`, "I was sceptical. I've been burned before.", `Three weeks later I'm recommending it to everyone.`), makeVar("ugc", 2, "Unboxing", `POV: your ${p} just arrived and you're about to understand the hype.`, "I'd been seeing it everywhere. I finally caved.", `It's been 10 days and I'm already on my second order.`)] },
      { angle: "viral", label: "Viral / FOMO", emoji: "🚀", description: "High-energy, trend-driven, urgency-first", variations: [makeVar("viral", 1, "Trending", `Why is ${p} everywhere right now? 👀 I had to find out.`, "Millions of views. Everyone talking about it.", `Turns out the hype is real. Here's why you need to see this before it sells out.`), makeVar("viral", 2, "Urgency", `This deal on ${p} ends tonight — don't wait.`, "I've been watching this sell out repeatedly.", `50% off, free shipping, 30-day guarantee. Link in bio NOW.`)] },
    ],
    competitorInsights: {
      dominantStyles: ["UGC", "Before-After", "Testimonial"],
      gapOpportunity: "Most competitors rely on generic testimonials — luxury positioning and emotional storytelling are underused.",
      recommendedFirst: ["pain", "ugc"],
    },
    imageAds: [
      { id: 1, type: "Product in Hand", layout: `Hero ${p} held naturally in foreground, soft background. Bold headline, CTA badge.`, backgroundStyle: "Soft bokeh lifestyle scene.", colorPalette: "Warm whites, cream tones, brand accent.", headline: `Meet ${p} — The One You've Been Waiting For`, subheadline: "Transform your daily routine.", badge: "⭐ #1 Bestseller", moodAndStyle: "Authentic, aspirational.", aiPrompt: `Lifestyle photo, ${p} held naturally, soft bokeh, warm golden light, UGC aesthetic, 9:16 vertical` },
      { id: 2, type: "Before-After", layout: "Bold split — dark 'before', bright 'after'. Product at split line.", backgroundStyle: "Left desaturated, right vibrant.", colorPalette: "Before muted grays, after warm golds.", headline: `The ${p} Difference Is Real`, subheadline: "See what 30 days can do.", badge: "30-Day Results", moodAndStyle: "Dramatic transformation.", aiPrompt: `Split-screen before/after, ${p} results, high contrast, bold typography, 1:1 square` },
      { id: 3, type: "Clean Brand", layout: "Minimal centered on white. Maximum whitespace.", backgroundStyle: "Pure white studio.", colorPalette: "White, black, one premium accent.", headline: p, subheadline: "Engineered for those who expect the best.", badge: "Premium Quality", moodAndStyle: "Apple-level minimalism.", aiPrompt: `Minimalist product shot, ${p} on white, studio lighting, luxury aesthetic, 1:1 square` },
      { id: 4, type: "Lifestyle", layout: "Environmental storytelling. Product integrated naturally.", backgroundStyle: "Aspirational real-world setting.", colorPalette: "Earth tones, warm and inviting.", headline: `Live Better with ${p}`, subheadline: "Join 10,000+ happy customers.", badge: "Free Shipping", moodAndStyle: "Aspirational but achievable.", aiPrompt: `Lifestyle photo, ${p} in aspirational setting, golden hour, cinematic, 16:9` },
      { id: 5, type: "Testimonial", layout: "Customer photo left. Quote right. Stars prominent.", backgroundStyle: "Soft gradient, warm and trustworthy.", colorPalette: "Peach, warm white, gold stars.", headline: '"This actually works — I\'m obsessed"', subheadline: `— Verified ${p} customer`, badge: "★★★★★ 4.9/5", moodAndStyle: "Social proof powerhouse.", aiPrompt: `Testimonial ad, ${p}, customer portrait, gold stars, quote typography, peach gradient, 1:1` },
    ],
  };
}

function parseDataUrl(dataUrl: string): { mediaType: "image/jpeg" | "image/png" | "image/gif" | "image/webp"; data: string } | null {
  const match = dataUrl.match(/^data:(image\/(?:jpeg|png|gif|webp));base64,(.+)$/);
  if (!match) return null;
  return {
    mediaType: match[1] as "image/jpeg" | "image/png" | "image/gif" | "image/webp",
    data: match[2],
  };
}

export async function POST(req: Request) {
  try {
    const { productName, productDescription, targetAudience, productLink, productImage, reviews, styleModifier, memoryContext } =
      await req.json() as {
        productName: string;
        productDescription: string;
        targetAudience: string;
        productLink?: string;
        productImage?: string;
        reviews?: string;
        styleModifier?: string;
        memoryContext?: string;
      };

    if (!productName || !productDescription || !targetAudience) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json({ ...getMockAngles(productName), _demo: true });
    }

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const imageNote = productImage
      ? `\nA product image has been provided. Study it carefully — note the product's appearance, colours, shape, size, packaging, and any visual details. Use these specifics to make every ad prompt visually accurate and unique to this exact product.\n`
      : "";

    const reviewsNote = reviews
      ? `\nReal customer reviews to mine for hooks and pain points:\n${reviews}\n`
      : "";

    const memoryNote = memoryContext
      ? `\n${memoryContext}\n`
      : "";

    const styleNote = styleModifier
      ? `\nSTYLE MODIFIER — apply this style to ALL variations: ${styleModifier.toUpperCase()}. Adjust tone, language, and energy accordingly.\n`
      : "";

    const prompt = `You are an expert ecommerce ad creative strategist specialising in high-converting video ads for dropshipping and direct-to-consumer brands.
${imageNote}${reviewsNote}${memoryNote}${styleNote}
Generate ad content for this product:
Product Name: ${productName}
Product Description: ${productDescription}
Target Audience: ${targetAudience}
${productLink ? `Product Link: ${productLink}` : ""}

Generate exactly 6 AD ANGLES, each with 2 VARIATIONS. Also include competitor insights and 5 image ad prompts.

ANGLE TYPES: pain, problem_solution, emotional, luxury, ugc, viral

For each VARIATION include ALL fields:
- id: "${`<angle>`}_1" or "${`<angle>`}_2" (e.g. "pain_1")
- style: short descriptor (e.g. "Direct", "Story", "Vulnerable", "Prestige")
- hook: first 3 seconds — single punchy sentence
- problem: 1-2 sentences describing the pain/situation
- solution: 1-2 sentences on how the product solves it
- demo: visual direction for showing the product in action
- cta: call to action line
- captions: array of exactly 4 short caption variants (under 80 chars each)
- fullScript: complete 15-30 second UGC-style script

For COMPETITOR INSIGHTS:
- dominantStyles: array of 2-3 common approaches competitors use
- gapOpportunity: 1-2 sentences on what's underused and why to exploit it
- recommendedFirst: array of 2 angle names to prioritise (from the 6 types)

For each IMAGE AD (5 total) include: id, type, layout, backgroundStyle, colorPalette, headline, subheadline, badge, moodAndStyle, aiPrompt

Return ONLY valid JSON with this exact structure:
{
  "angles": [
    {
      "angle": "pain",
      "label": "Pain Point",
      "emoji": "😤",
      "description": "...",
      "variations": [
        {
          "id": "pain_1",
          "style": "Direct",
          "hook": "...",
          "problem": "...",
          "solution": "...",
          "demo": "...",
          "cta": "...",
          "captions": ["...", "...", "...", "..."],
          "fullScript": "..."
        },
        { "id": "pain_2", "style": "Story", ... }
      ]
    }
  ],
  "competitorInsights": {
    "dominantStyles": ["..."],
    "gapOpportunity": "...",
    "recommendedFirst": ["pain", "ugc"]
  },
  "imageAds": [
    {
      "id": 1,
      "type": "Product in Hand",
      "layout": "...",
      "backgroundStyle": "...",
      "colorPalette": "...",
      "headline": "...",
      "subheadline": "...",
      "badge": "...",
      "moodAndStyle": "...",
      "aiPrompt": "..."
    }
  ]
}`;

    type ContentBlock =
      | { type: "image"; source: { type: "base64"; media_type: "image/jpeg" | "image/png" | "image/gif" | "image/webp"; data: string } }
      | { type: "text"; text: string };

    const content: ContentBlock[] = [];
    if (productImage) {
      const parsed = parseDataUrl(productImage);
      if (parsed) {
        content.push({ type: "image", source: { type: "base64", media_type: parsed.mediaType, data: parsed.data } });
      }
    }
    content.push({ type: "text", text: prompt });

    const response = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 12000,
      messages: [{ role: "user", content }],
    });

    const textContent = response.content.find((b) => b.type === "text");
    if (!textContent || textContent.type !== "text") throw new Error("No text response from Claude");

    const jsonMatch = textContent.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Could not parse JSON from response");

    return Response.json(JSON.parse(jsonMatch[0]));
  } catch (error) {
    console.error("Error generating ads:", error);
    return Response.json({ error: "Failed to generate ads. Please try again." }, { status: 500 });
  }
}
