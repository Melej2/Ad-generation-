import type { LandingPage } from "@/app/api/generate-landing/route";
import type { PageModel } from "@/types/pageModel";

const BENEFIT_ICONS = ["⚡", "🔒", "✓", "🎯"];

export function landingToPageModel(landing: LandingPage, productName = "Product"): PageModel {
  return {
    meta: {
      productName,
      createdAt: new Date().toISOString(),
    },
    sectionOrder: ["hero", "trust_bar", "problem", "solution", "benefits", "reviews", "cta"],
    sections: {
      hero: {
        headline: landing.hero.headline,
        subheadline: landing.hero.subheadline,
        cta: landing.hero.cta,
        trustBadge: landing.hero.trustBadge,
        trustLine: "🔒 30-Day Risk-Free Guarantee · Free Shipping · Secure Checkout",
        style: {},
        visible: true,
      },
      trust_bar: {
        badges: [
          { icon: "🔒", text: "30-Day Money-Back Guarantee" },
          { icon: "🚚", text: "Free Tracked Shipping" },
          { icon: "✓", text: "Secure Checkout" },
          { icon: "⭐", text: "4.9/5 Average Rating" },
          { icon: "💳", text: "No Hidden Fees" },
        ],
        style: {},
        visible: true,
      },
      problem: {
        heading: "Still Struggling? You're Not Alone.",
        body: landing.transformation.paragraphs[0] ?? "",
        painPoints: landing.coreMassDesire.painPoints.map((p) => ({
          text: p,
          icon: "✗",
        })),
        style: {},
        visible: true,
      },
      solution: {
        eyebrow: "Why this one is different",
        heading: landing.valueProps[0]?.headline ?? "Built for Real People",
        body: landing.transformation.paragraphs[1] ?? "",
        cta: landing.transformation.cta,
        style: {},
        visible: true,
      },
      benefits: {
        heading: "Everything You Need. Nothing You Don't.",
        items: landing.valueProps.map((vp, i) => ({
          icon: BENEFIT_ICONS[i] ?? "✓",
          headline: vp.headline,
          body: vp.explanation,
          betterThan: vp.betterThan,
        })),
        style: {},
        visible: true,
      },
      reviews: {
        heading: "Real People. Real Results. No Cherry-Picking.",
        ratingScore: "4.9",
        ratingCount: "2,847 verified reviews",
        items: landing.testimonials.map((t) => ({
          stars: 5,
          quote: t.story,
          result: t.result,
          name: t.name,
          timeframe: t.timeframe,
        })),
        style: {},
        visible: true,
      },
      cta: {
        headline: landing.finalClose.headline,
        paragraphs: landing.finalClose.paragraphs,
        cta: landing.finalClose.cta,
        trustLine: "🔒 30-Day Risk-Free Guarantee · 🚚 Free Tracked Shipping · ✓ Secure Checkout · 💳 No Hidden Fees",
        style: {},
        visible: true,
      },
    },
  };
}
