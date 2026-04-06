import type { LandingPage } from "@/app/api/generate-landing/route";

/**
 * Fetches the base conversion-landing.liquid template, then replaces the
 * {% schema %} block with one that has the generated landing page content
 * pre-populated as defaults and presets.
 */
export async function generateShopifySection(landing: LandingPage): Promise<string> {
  // Next.js serves public/ at basePath in both dev + static export
  const url = "/Ad-generation-/conversion-landing.liquid";
  let template: string;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status}`);
    template = await res.text();
  } catch {
    // Fallback: try root path (local dev without basePath)
    const res = await fetch("/conversion-landing.liquid");
    template = await res.text();
  }

  const SCHEMA_OPEN = "{% schema %}";
  const SCHEMA_CLOSE = "{% endschema %}";
  const schemaStart = template.indexOf(SCHEMA_OPEN);
  const schemaEnd = template.indexOf(SCHEMA_CLOSE);
  if (schemaStart === -1 || schemaEnd === -1) return template;

  const staticPart = template.slice(0, schemaStart);
  const existingSchemaJson = template.slice(schemaStart + SCHEMA_OPEN.length, schemaEnd).trim();

  // Parse the existing schema so we keep all settings/blocks definitions intact
  const schema = JSON.parse(existingSchemaJson) as Record<string, unknown>;

  // ── Update section-level setting defaults ───────────────────────────────
  const settingDefaults: Record<string, string> = {
    hero_eyebrow:        landing.hero.trustBadge,
    hero_heading:        landing.hero.headline,
    hero_subheading:     landing.hero.subheadline,
    hero_cta_label:      landing.hero.cta,
    sticky_bar_label:    landing.hero.cta,
    problem_heading:     "Sound Familiar?",
    problem_body:        `<p>${landing.transformation.paragraphs[0] ?? ""}</p>`,
    solution_eyebrow:    "Why This One Is Different",
    solution_heading:    landing.valueProps[0]?.headline ?? "Built for Real People",
    solution_body:       `<p>${landing.transformation.paragraphs[1] ?? ""}</p>`,
    solution_cta_label:  landing.transformation.cta,
    benefits_heading:    "Everything You Need. Nothing You Don't.",
    proof_heading:       "Real People. Real Results. No Cherry-Picking.",
    cta_heading:         landing.finalClose.headline,
    cta_body_1:          landing.finalClose.paragraphs[0] ?? "",
    cta_body_2:          landing.finalClose.paragraphs[1] ?? "",
    cta_primary_label:   landing.finalClose.cta,
    cta_guarantee:       "🔒 30-Day Risk-Free Guarantee · 🚚 Free Tracked Shipping · ✓ Secure Checkout",
  };

  const settings = schema.settings as Array<Record<string, unknown>>;
  schema.settings = settings.map((s) => {
    const id = s.id as string | undefined;
    if (id && settingDefaults[id] !== undefined) {
      return { ...s, default: settingDefaults[id] };
    }
    return s;
  });

  // ── Generate preset blocks from landing page content ────────────────────
  const benefitIcons = ["⚡", "🔒", "✓", "🎯"];

  const painBlocks = landing.coreMassDesire.painPoints.map((pain) => ({
    type: "pain_point",
    settings: { pain_icon: "✗", pain_text: pain },
  }));

  const benefitBlocks = landing.valueProps.map((vp, i) => ({
    type: "benefit",
    settings: {
      benefit_icon:    benefitIcons[i] ?? "✓",
      benefit_heading: vp.headline,
      benefit_body:    vp.explanation,
      benefit_vs:      vp.betterThan,
    },
  }));

  const testimonialBlocks = landing.testimonials.map((t) => ({
    type: "testimonial",
    settings: {
      star_count:            5,
      testimonial_quote:     t.story,
      testimonial_result:    t.result,
      testimonial_name:      t.name,
      testimonial_verified:  true,
      testimonial_timeframe: t.timeframe,
    },
  }));

  schema.presets = [
    {
      name: "Conversion Landing",
      blocks: [...painBlocks, ...benefitBlocks, ...testimonialBlocks],
    },
  ];

  const newSchema =
    SCHEMA_OPEN + "\n" +
    JSON.stringify(schema, null, 2) + "\n" +
    SCHEMA_CLOSE + "\n";

  return staticPart + newSchema;
}
