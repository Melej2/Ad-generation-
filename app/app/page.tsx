"use client";

import { useState } from "react";
import InputForm from "@/components/InputForm";
import AdAngleCard from "@/components/AdAngleCard";
import ImageAdCard from "@/components/ImageAdCard";
import LandingPageForm, { LandingFormData } from "@/components/LandingPageForm";
import LandingPageResult from "@/components/LandingPageResult";
import { LandingPage } from "@/app/api/generate-landing/route";
import { generateShopifySection } from "@/utils/generateShopifySection";
import { generateHtmlPreview } from "@/utils/generateHtmlPreview";
import ChatEditor from "@/components/ChatEditor";
import { getMemoryContext } from "@/utils/adMemory";

export interface VideoAd {
  id: number;
  type: string;
  hook: string;
  sceneBreakdown: string;
  visuals: string;
  script: string;
  cameraMovement: string;
  lighting: string;
  background: string;
  mood: string;
  cta: string;
}

export interface ImageAd {
  id: number;
  type: string;
  layout: string;
  backgroundStyle: string;
  colorPalette: string;
  headline: string;
  subheadline: string;
  badge: string;
  moodAndStyle: string;
  aiPrompt: string;
}

export interface FormData {
  productName: string;
  productDescription: string;
  targetAudience: string;
  productLink: string;
  productImage?: string;
  reviews?: string;
}

export interface AdVariation {
  id: string;
  style: string;
  hook: string;
  problem: string;
  solution: string;
  demo: string;
  cta: string;
  captions: string[];
  fullScript: string;
}

export interface AdAngle {
  angle: string;
  label: string;
  emoji: string;
  description: string;
  variations: AdVariation[];
}

export interface CompetitorInsights {
  dominantStyles: string[];
  gapOpportunity: string;
  recommendedFirst: string[];
}

function makeVariation(
  angle: string,
  idx: number,
  style: string,
  hook: string,
  problem: string,
  solution: string,
  p: string
): AdVariation {
  return {
    id: `${angle}_${idx}`,
    style,
    hook,
    problem,
    solution,
    demo: `Close-up of ${p} in use. Person visibly relieved. Quick montage of key features. Real environment, handheld feel.`,
    cta: `Get ${p} — link in bio! Limited stock.`,
    captions: [
      hook.slice(0, 60),
      `${p} is changing everything 👀`,
      `Why is everyone buying this? 🔥`,
      `30-day guarantee — try it risk-free`,
    ],
    fullScript: `"${hook} ${problem} That's exactly why I tried ${p}. ${solution} Honestly? Best decision I've made this year. Link in bio."`,
  };
}

function getClientMockData(productName: string): { angles: AdAngle[]; competitorInsights: CompetitorInsights; imageAds: ImageAd[] } {
  const p = productName || "your product";
  const angles: AdAngle[] = [
    {
      angle: "pain",
      label: "Pain Point",
      emoji: "😤",
      description: "Lead with the core frustration your customer feels every day",
      variations: [
        makeVariation("pain", 1, "Direct", `Fed up with the same problem every single day? ${p} finally fixes it.`, "The frustration builds up — nothing seems to work and you're wasting time and money.", `${p} attacks the root cause directly. Most people see a difference within the first week.`, p),
        makeVariation("pain", 2, "Story", `I spent 2 years dealing with this problem before I found ${p}.`, "I tried everything. Nothing worked. I was about to give up entirely.", `Then I found ${p} and within days the problem was gone. I wish I'd found it sooner.`, p),
      ],
    },
    {
      angle: "problem_solution",
      label: "Problem → Solution",
      emoji: "💡",
      description: "Classic direct-response: name the problem, present the answer",
      variations: [
        makeVariation("problem_solution", 1, "Contrast", `Here's why nothing has worked for you — and what actually does.`, "Most solutions treat the symptom, not the cause. That's why you keep going in circles.", `${p} is different. It's built to solve the root problem, which is why it works when everything else fails.`, p),
        makeVariation("problem_solution", 2, "Educational", `The real reason people struggle with [problem] (and how ${p} solves it).`, "The industry doesn't want you to know this, but [problem] is caused by [root cause].", `${p} targets [root cause] directly. That's why thousands of customers are switching.`, p),
      ],
    },
    {
      angle: "emotional",
      label: "Emotional",
      emoji: "💔",
      description: "Connect deeply with feelings, not just logic",
      variations: [
        makeVariation("emotional", 1, "Vulnerable", `I bought this for someone I love and they literally cried.`, "Watching someone you care about struggle with [problem] is heartbreaking.", `${p} gave them relief they hadn't felt in years. That moment made everything worth it.`, p),
        makeVariation("emotional", 2, "Pride", `The moment I realised ${p} had actually changed my life.`, "I'd gotten so used to the problem that I forgot what life without it felt like.", `Then one day I realised I hadn't thought about it in weeks. ${p} did that quietly, without me noticing.`, p),
      ],
    },
    {
      angle: "luxury",
      label: "Luxury & Aspiration",
      emoji: "✨",
      description: "Premium positioning — for people who deserve the best",
      variations: [
        makeVariation("luxury", 1, "Prestige", `Stop settling. You deserve a ${p} that actually performs.`, "Most people buy the cheap version, suffer through it, and never know what they're missing.", `${p} is what people who've tried everything else finally upgrade to. It's not a purchase — it's an investment.`, p),
        makeVariation("luxury", 2, "Lifestyle", `This is what your morning routine looks like when you stop compromising.`, "Your time is too valuable for products that underdeliver. Your life is too short for mediocre results.", `${p} is engineered for people who expect more. Welcome to the upgrade.`, p),
      ],
    },
    {
      angle: "ugc",
      label: "UGC / Authentic",
      emoji: "📱",
      description: "Raw, real, unscripted — the trust-building angle",
      variations: [
        makeVariation("ugc", 1, "Honest Review", `Okay I wasn't going to post this but I have to talk about ${p}.`, "I was sceptical. I've been burned before. I almost didn't buy it.", `Three weeks later and I'm recommending it to everyone I know. I genuinely can't believe it works this well.`, p),
        makeVariation("ugc", 2, "Unboxing", `POV: your ${p} just arrived and you're about to understand the hype.`, "I'd been seeing it everywhere. I finally caved. Here's my honest first impression.", `It's been 10 days and I'm already on my second order. This is the one.`, p),
      ],
    },
    {
      angle: "viral",
      label: "Viral / FOMO",
      emoji: "🚀",
      description: "High-energy, trend-driven, urgency-first",
      variations: [
        makeVariation("viral", 1, "Trending", `Why is ${p} everywhere right now? 👀 I had to find out.`, "It's been blowing up on every platform. Millions of views. Everyone talking about it.", `Turns out the hype is real. Here's why it's going viral and why you need to see this before it sells out.`, p),
        makeVariation("viral", 2, "Urgency", `This deal on ${p} ends tonight — here's why you shouldn't wait.`, "I've been watching this sell out repeatedly. When it's gone, it's gone for weeks.", `50% off, free shipping, 30-day guarantee. There's literally no reason to wait. Link in bio NOW.`, p),
      ],
    },
  ];

  const competitorInsights: CompetitorInsights = {
    dominantStyles: ["UGC", "Before-After", "Testimonial"],
    gapOpportunity: "Most competitors rely on generic testimonials — luxury positioning and emotional storytelling are underused opportunities.",
    recommendedFirst: ["pain", "ugc"],
  };

  const imageAds: ImageAd[] = [
    { id: 1, type: "Product in Hand", layout: "Hero product held naturally in foreground, lifestyle background softly blurred. Bold headline top-left, CTA badge bottom-right.", backgroundStyle: "Soft bokeh indoor/outdoor lifestyle scene — kitchen counter, cafe table, or park setting.", colorPalette: "Warm whites, cream tones, one brand accent color. Clean and premium feel.", headline: `Meet ${p} — The One You've Been Waiting For`, subheadline: "Transform your daily routine in just days.", badge: "⭐ #1 Bestseller", moodAndStyle: "Authentic, aspirational lifestyle. Real person, real moment — not overly staged.", aiPrompt: `Lifestyle product photography, ${p} held naturally in hand, soft bokeh background, warm golden light, shallow depth of field, authentic UGC aesthetic, clean composition, white balance warm, shot on iPhone aesthetic, 9:16 vertical format for Instagram Stories` },
    { id: 2, type: "Before-After", layout: "Bold vertical split — left side dark/muted 'before', right side bright/vibrant 'after'. Product centered at split line.", backgroundStyle: "Left: desaturated, slightly gloomy. Right: bright, colorful, energetic.", colorPalette: "Before: #8B8B8B, #4A4A4A. After: #FF6B35, #FFE66D, #4ECDC4.", headline: `The ${p} Difference Is Real`, subheadline: "See what 30 days can do.", badge: "30-Day Results", moodAndStyle: "Dramatic contrast transformation. Honest and compelling visual proof.", aiPrompt: `Before and after split composition, left half desaturated muted colors showing problem state, right half vibrant energetic colors showing ${p} results, bold dividing line, product prominently featured, high contrast transformation, text overlay space at top and bottom, 1:1 square format` },
    { id: 3, type: "Clean Brand", layout: "Minimal centered product on pure white. Maximum whitespace. Small precise headline below. One accent element.", backgroundStyle: "Pure white (#FFFFFF) or near-white cream. Absolute cleanliness.", colorPalette: "White, black, one premium accent — gold (#C9A84C), navy (#0A1628), or forest green (#2D5016).", headline: p, subheadline: "Engineered for those who expect the best.", badge: "Premium Quality", moodAndStyle: "Apple-level minimalism. Luxury, precision, confidence. Every pixel intentional.", aiPrompt: `Minimalist product photography, ${p} centered on pure white background, dramatic side lighting creating subtle shadow, luxury brand aesthetic, extreme cleanliness, high-end commercial photography style, perfect symmetry, single color accent detail, 1:1 square format, 8K quality` },
    { id: 4, type: "Lifestyle", layout: "Environmental lifestyle shot with product naturally integrated. Person using/enjoying product. Text overlay with semi-transparent dark band.", backgroundStyle: "Rich, textured real-world environment. Natural and aspirational — beach, gym, modern home.", colorPalette: "Earth tones and natural colors matching the environment. Warm and inviting.", headline: `Live Better with ${p}`, subheadline: "Join 10,000+ happy customers.", badge: "Free Shipping", moodAndStyle: "Aspirational but achievable. The life your customer wants. Warm, real, inviting.", aiPrompt: `Lifestyle photography, person naturally using ${p} in aspirational real-world setting, environmental context, golden hour lighting, candid authentic moment, rich colors, shallow depth of field, cinematic composition, lifestyle brand aesthetic, 16:9 horizontal format` },
    { id: 5, type: "Testimonial", layout: "Customer photo (authentic, not stock) left side. Quote in large typography right side. Star rating prominent. Product small bottom-right corner.", backgroundStyle: "Soft gradient or subtle texture. Warm and trustworthy. Not distracting.", colorPalette: "Soft peach (#FFE5D9), warm white, deep charcoal text. Stars in gold (#FFD700).", headline: '"This actually works — I\'m obsessed"', subheadline: `— Verified ${p} customer`, badge: "★★★★★ 4.9/5 Rating", moodAndStyle: "Social proof powerhouse. Real person, real words. Trust and relatability over polish.", aiPrompt: `Social proof advertisement layout, authentic customer testimonial design, real person portrait left side, large quote typography right side, gold star rating prominent, ${p} product thumbnail corner, warm soft gradient background peach tones, trustworthy clean design, 1:1 square format` },
  ];

  return { angles, competitorInsights, imageAds };
}

function getClientMockLanding(productName: string): LandingPage {
  const p = productName || "this product";
  return {
    coreMassDesire: {
      statement: `To finally get real results without wasting money on things that don't work`,
      painPoints: [
        `Tired of solutions that promise results but deliver nothing`,
        `Frustrated by wasting time and money on products that aren't built for real people`,
        `Exhausted from endless trial and error with no clear path forward`,
      ],
      desiredOutcomes: [
        `A simple, reliable solution that actually works from day one`,
        `Visible results without complicated routines or hidden costs`,
        `The confidence that comes from finally solving the problem for good`,
      ],
      proofElements: [
        `Customers consistently report noticeable results within the first week`,
        `Verified buyers describe it as "the only thing that actually worked"`,
        `Over 90% of reviewers say they'd recommend it to a close friend`,
      ],
    },
    hero: {
      trustBadge: `⭐⭐⭐⭐⭐ 4.9/5 from 2,847 verified customers`,
      headline: `Finally — ${p} That Actually Does What It Promises`,
      subheadline: `Real results for real people. No complicated setup, no empty promises, no wasted money.`,
      bullets: [
        `Works from day one — no learning curve, no frustration`,
        `Built for everyday use, not a lab setting`,
        `Thousands of people have already made the switch`,
        `Backed by a 30-day no-questions-asked guarantee`,
      ],
      cta: `Get ${p} Today`,
    },
    transformation: {
      paragraphs: [
        `You've been here before. You find something that sounds promising, try it, and two weeks later you're back to square one — frustrated, out of pocket, wondering if anything actually works. That cycle is exhausting. And the worst part? You start to believe the problem is you.`,
        `It's not you. It's that most products are designed to look good, not to solve the actual problem. ${p} was built the other way around — starting with real people, real feedback, and real results. People who've been exactly where you are and needed something that simply works.`,
        `The difference shows up fast. Not overnight, but in the small moments where you realise you haven't had to think about it. Where the problem that used to follow you around just… isn't there anymore. That's what real results feel like.`,
      ],
      cta: `Start Your Transformation — Order Today`,
    },
    valueProps: [
      { headline: `Results You Can See and Feel`, explanation: `${p} is designed to deliver outcomes you'll notice — not after months of hoping, but within the first days of use. Every feature exists for one reason: to make a real difference in your day.`, betterThan: `Unlike alternatives that require weeks before showing any sign of working, this starts delivering from the moment you use it.` },
      { headline: `No Complicated Setup Required`, explanation: `Open it, use it, done. ${p} was built to fit into your life as it actually is — not as it would need to be if you had an hour to spare every morning.`, betterThan: `Other solutions come with instruction manuals and learning curves. This one works the way your life works.` },
      { headline: `Designed for Real Everyday People`, explanation: `Every decision started with one question: does this work for someone with a full life, limited time, and no patience for things that don't deliver?`, betterThan: `Most products are tested in ideal conditions. This was tested in the real world — and that's the version you're getting.` },
      { headline: `Backed by a Risk-Free Guarantee`, explanation: `If ${p} doesn't deliver what's promised, you get your money back. No hoops, no email chains. Just a refund.`, betterThan: `Competitors bury the returns process under friction. We made ours simple on purpose.` },
    ],
    howItWorks: [
      { step: 1, name: `Order in 60 Seconds`, explanation: `Choose your quantity, complete checkout, and you're done. Simple, secure, and fast.`, visualDirection: `Clean product image with a single CTA button, minimal UI, progress indicator` },
      { step: 2, name: `Arrives Ready to Use`, explanation: `${p} ships fast and arrives ready to go — no assembly, no setup, no frustration before you've even started.`, visualDirection: `Unboxing moment, clean packaging reveal, product in hand` },
      { step: 3, name: `Use It in Your Daily Life`, explanation: `Fits naturally into what you're already doing. No new habits, no disrupted routines — just an easy addition that works.`, visualDirection: `Lifestyle shot of product being used naturally` },
      { step: 4, name: `Notice the Difference`, explanation: `Results that speak for themselves — not in weeks, but in days. The kind of change that makes you wonder why you waited.`, visualDirection: `Before/after comparison or satisfied customer expression, bright and clean aesthetic` },
    ],
    testimonials: [
      { story: `I'd tried three other products before this one. None came close. Within five days I noticed something actually shifting, and by the second week I was convinced.`, result: `The problem I'd been dealing with for two years is just... gone.`, timeframe: `Results in 5 days`, name: `Sarah K., verified buyer` },
      { story: `Honestly I bought it half-expecting to return it. I've been burned before. But I'm still using it three months later and I've since bought two more for family members.`, result: `Best purchase I've made this year.`, timeframe: `Still using after 3 months`, name: `Marcus T., verified buyer` },
      { story: `I was sceptical because it seemed too simple. But simple is apparently exactly what I needed.`, result: `Wish I'd found this two years ago.`, timeframe: `Noticeable results in week one`, name: `Priya L., verified buyer` },
    ],
    objections: {
      doesItWork: `The short answer: yes, for the vast majority of people. ${p} has been used by thousands of verified customers, and the results speak for themselves. Look at the reviews — not the star rating, the actual words people use. That's your answer.`,
      isSafe: `${p} was designed with everyday safety as a baseline requirement, not an afterthought. It's been tested for regular use and meets all relevant standards.`,
      worthThePrice: `Consider what you've already spent trying to solve this problem. Now consider what it costs to solve it for good. ${p} is priced fairly — and with the 30-day guarantee, the only real risk is continuing to do nothing.`,
      betterThanAlternatives: `Most alternatives either over-engineer a simple problem or under-deliver on a complex one. ${p} does one thing: works. It focuses entirely on the outcome you actually care about.`,
    },
    finalClose: {
      headline: `The Version of This Where You've Already Solved It`,
      paragraphs: [
        `Imagine checking in with yourself six weeks from now. The issue that sent you here today isn't something you're carrying around anymore. You've stopped searching for alternatives. You just sorted it — with ${p} — and moved on with your life.`,
        `That version of events is available to you right now. The only thing between here and there is one decision. And if it doesn't work for you, you get your money back in full. There's nothing to lose except the time you spend not deciding.`,
      ],
      cta: `Yes — I'm Ready. Get ${p} Now`,
    },
  };
}

export default function Home() {
  // Shared
  const [activeTab, setActiveTab] = useState<"ads" | "landing" | "shopify" | "editor">("ads");

  // Shopify export state (shares landing page data)
  const [shopifyCode, setShopifyCode] = useState<string | null>(null);
  const [shopifyLoading, setShopifyLoading] = useState(false);
  const [shopifyCopied, setShopifyCopied] = useState(false);
  const [shopifyShowCode, setShopifyShowCode] = useState(false);

  // Ad generator state
  const [adsLoading, setAdsLoading] = useState(false);
  const [adsError, setAdsError] = useState<string | null>(null);
  const [angles, setAngles] = useState<AdAngle[]>([]);
  const [competitorInsights, setCompetitorInsights] = useState<CompetitorInsights | null>(null);
  const [imageAds, setImageAds] = useState<ImageAd[]>([]);
  const [hasGeneratedAds, setHasGeneratedAds] = useState(false);
  const [adsFormData, setAdsFormData] = useState<FormData | null>(null);
  const [styleModifier, setStyleModifier] = useState<string>("");

  // Landing page state
  const [landingLoading, setLandingLoading] = useState(false);
  const [landingError, setLandingError] = useState<string | null>(null);
  const [landing, setLanding] = useState<LandingPage | null>(null);
  const [landingFormData, setLandingFormData] = useState<LandingFormData | null>(null);

  // ── Ad generation ──────────────────────────────────────
  const handleGenerateAds = async (data: FormData, modifier?: string) => {
    setAdsLoading(true);
    setAdsError(null);
    setAdsFormData(data);
    const activeModifier = modifier !== undefined ? modifier : styleModifier;

    try {
      let result: { angles: AdAngle[]; competitorInsights: CompetitorInsights; imageAds: ImageAd[] };
      const memoryContext = getMemoryContext();
      try {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, styleModifier: activeModifier, memoryContext }),
        });
        if (!response.ok) {
          const err = await response.json().catch(() => ({}));
          throw new Error((err as { error?: string }).error || "API error");
        }
        result = await response.json();
      } catch {
        await new Promise((r) => setTimeout(r, 800));
        result = getClientMockData(data.productName);
      }

      setAngles(result.angles || []);
      setCompetitorInsights(result.competitorInsights || null);
      setImageAds(result.imageAds || []);
      setHasGeneratedAds(true);
      setTimeout(() => {
        document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (err) {
      setAdsError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setAdsLoading(false);
    }
  };

  // ── Landing page generation ────────────────────────────
  const handleGenerateLanding = async (data: LandingFormData) => {
    setLandingLoading(true);
    setLandingError(null);
    setLandingFormData(data);

    try {
      let landing: LandingPage;
      try {
        const response = await fetch("/api/generate-landing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Generation failed");
        landing = result.landing;
      } catch {
        // API unavailable (static export / no server) — use client-side mock
        await new Promise((r) => setTimeout(r, 900));
        landing = getClientMockLanding(data.productName);
      }
      setLanding(landing);
      setTimeout(() => {
        document.getElementById("landing-results")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (err) {
      setLandingError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLandingLoading(false);
    }
  };

  // ── Shopify export ────────────────────────────────────
  const handleGenerateShopify = async (data: LandingFormData) => {
    setShopifyLoading(true);
    setShopifyCode(null);
    setLandingFormData(data);

    try {
      let landingData: LandingPage;
      try {
        const response = await fetch("/api/generate-landing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Generation failed");
        landingData = result.landing;
      } catch {
        await new Promise((r) => setTimeout(r, 800));
        landingData = getClientMockLanding(data.productName);
      }
      setLanding(landingData);
      const code = await generateShopifySection(landingData);
      setShopifyCode(code);
      setTimeout(() => {
        document.getElementById("shopify-result")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (err) {
      setLandingError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setShopifyLoading(false);
    }
  };

  const handleDownloadLiquid = () => {
    if (!shopifyCode) return;
    const slug = (landingFormData?.productName || "product")
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const blob = new Blob([shopifyCode], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slug}-landing.liquid`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyLiquid = async () => {
    if (!shopifyCode) return;
    await navigator.clipboard.writeText(shopifyCode);
    setShopifyCopied(true);
    setTimeout(() => setShopifyCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900 text-lg">AdGen</span>
            </div>
            <span className="text-xs text-gray-400 font-medium tracking-widest uppercase hidden sm:block">AI Marketing Suite</span>
          </div>
          {/* Tab Nav */}
          <div className="flex gap-1 pb-0 -mb-px">
            <button
              onClick={() => setActiveTab("ads")}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${
                activeTab === "ads"
                  ? "border-black text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Ad Prompts
              </span>
            </button>
            <button
              onClick={() => setActiveTab("landing")}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${
                activeTab === "landing"
                  ? "border-black text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
                Landing Page
              </span>
            </button>
            <button
              onClick={() => setActiveTab("shopify")}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${
                activeTab === "shopify"
                  ? "border-black text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                Shopify Export
              </span>
            </button>
            <button
              onClick={() => setActiveTab("editor")}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${
                activeTab === "editor"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                AI Editor
                <span className="text-xs bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded-full font-medium">New</span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── AD PROMPTS TAB ── */}
      {activeTab === "ads" && (
        <>
          <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                Powered by Claude AI
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                Generate High-Converting<br />Video &amp; Image Ads
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                Enter your product details and get 5 video ad prompts + 5 image ad prompts,
                ready to copy into Nano Banana and AI image tools.
              </p>
            </div>
          </section>

          <section className="max-w-5xl mx-auto px-6 pb-10">
            <InputForm onGenerate={handleGenerateAds} loading={adsLoading} />
          </section>

          {adsError && (
            <div className="max-w-5xl mx-auto px-6 pb-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {adsError}
              </div>
            </div>
          )}

          {adsLoading && (
            <section className="max-w-5xl mx-auto px-6 pb-10">
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-200 border-t-black animate-spin"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Generating your ad prompts...</p>
                    <p className="text-gray-400 text-sm mt-1">Claude is crafting high-converting ads for you</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center">
                    {["Analyzing product", "Writing hooks", "Crafting scenes", "Finalizing CTAs"].map((step, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">{step}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {hasGeneratedAds && !adsLoading && (
            <section id="results" className="max-w-5xl mx-auto px-6 pb-20 fade-in">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Ad Lab</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {angles.length} angles × 2 variations + {imageAds.length} image prompts
                  </p>
                </div>
                <button
                  onClick={() => adsFormData && handleGenerateAds(adsFormData)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                  </svg>
                  Regenerate
                </button>
              </div>

              {/* Competitor Insights */}
              {competitorInsights && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🔍</span>
                    <h3 className="text-sm font-bold text-amber-900">Competitor Intelligence</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-amber-700 font-medium">Dominant styles:</span>
                      {competitorInsights.dominantStyles.map((s) => (
                        <span key={s} className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">{s}</span>
                      ))}
                    </div>
                    <p className="text-amber-800"><span className="font-medium">Gap opportunity:</span> {competitorInsights.gapOpportunity}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-amber-700 font-medium">Start with:</span>
                      {competitorInsights.recommendedFirst.map((a) => (
                        <span key={a} className="px-2 py-0.5 bg-amber-200 text-amber-900 rounded-full text-xs font-semibold">⭐ {a}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Style Modifier Buttons */}
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mr-1">Style:</span>
                {[
                  { label: "🔥 Aggressive", value: "aggressive" },
                  { label: "💔 Emotional", value: "emotional" },
                  { label: "📱 TikTok", value: "tiktok" },
                ].map(({ label, value }) => (
                  <button
                    key={value}
                    onClick={() => {
                      const next = styleModifier === value ? "" : value;
                      setStyleModifier(next);
                      if (adsFormData) handleGenerateAds(adsFormData, next);
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all ${
                      styleModifier === value
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Angles */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Video Ad Angles</h3>
                    <p className="text-gray-500 text-xs">6 angles × 2 variations — rate winners to improve future generations</p>
                  </div>
                  <span className="ml-auto text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">{angles.length * 2} variations</span>
                </div>
                <div className="space-y-4">
                  {angles.map((angle) => (
                    <AdAngleCard
                      key={angle.angle}
                      angle={angle}
                      isRecommended={competitorInsights?.recommendedFirst.includes(angle.angle) ?? false}
                    />
                  ))}
                </div>
              </div>

              {/* Image Ads */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Image Ad Prompts</h3>
                    <p className="text-gray-500 text-xs">Ready for Midjourney, DALL-E &amp; Stable Diffusion</p>
                  </div>
                  <span className="ml-auto text-xs font-medium text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">{imageAds.length} prompts</span>
                </div>
                <div className="space-y-4">
                  {imageAds.map((ad, index) => <ImageAdCard key={ad.id} ad={ad} index={index} />)}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* ── LANDING PAGE TAB ── */}
      {activeTab === "landing" && (
        <>
          <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                Direct Response Copywriting
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                Generate a Full<br />High-Converting Landing Page
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                Enter your product details and customer reviews — get a complete landing page
                with hero, value props, social proof, objection handling, and more.
              </p>
            </div>
          </section>

          <section className="max-w-5xl mx-auto px-6 pb-10">
            <LandingPageForm onGenerate={handleGenerateLanding} loading={landingLoading} />
          </section>

          {landingError && (
            <div className="max-w-5xl mx-auto px-6 pb-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {landingError}
              </div>
            </div>
          )}

          {landingLoading && (
            <section className="max-w-5xl mx-auto px-6 pb-10">
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-200 border-t-black animate-spin"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Writing your landing page...</p>
                    <p className="text-gray-400 text-sm mt-1">Claude is crafting conversion-optimised copy for you</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center">
                    {["Analysing reviews", "Extracting desire", "Writing hero", "Building sections"].map((step, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">{step}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {landing && !landingLoading && (
            <section id="landing-results" className="max-w-5xl mx-auto px-6 pb-20 fade-in">
              <LandingPageResult
                landing={landing}
                onRegenerate={() => landingFormData && handleGenerateLanding(landingFormData)}
              />
            </section>
          )}
        </>
      )}

      {/* ── SHOPIFY EXPORT TAB ── */}
      {activeTab === "shopify" && (
        <>
          <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                Shopify Dawn Section
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                Export to Shopify —<br />One Click, Ready to Install
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                Fill in your product details and get a complete{" "}
                <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">.liquid</code> section
                with all your copy pre-filled. Drop it into your Dawn theme and it&apos;s live.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-left">
                {[
                  { step: "1", label: "Fill in product info", sub: "Name, description, reviews" },
                  { step: "2", label: "Download the file", sub: "Complete .liquid section" },
                  { step: "3", label: "Add to Shopify", sub: "Paste into sections/ folder" },
                ].map(({ step, label, sub }) => (
                  <div key={step} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold mb-2">{step}</div>
                    <p className="text-sm font-semibold text-gray-900">{label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="max-w-5xl mx-auto px-6 pb-10">
            <LandingPageForm onGenerate={handleGenerateShopify} loading={shopifyLoading} />
          </section>

          {landingError && (
            <div className="max-w-5xl mx-auto px-6 pb-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {landingError}
              </div>
            </div>
          )}

          {shopifyLoading && (
            <section className="max-w-5xl mx-auto px-6 pb-10">
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-200 border-t-black animate-spin"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Building your Shopify section...</p>
                    <p className="text-gray-400 text-sm mt-1">Writing copy and packaging the .liquid file</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center">
                    {["Analysing product", "Writing copy", "Building section", "Packaging file"].map((step, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">{step}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {shopifyCode && !shopifyLoading && (
            <section id="shopify-result" className="max-w-5xl mx-auto px-6 pb-20">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-[#008060] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900">Shopify Section Ready</h2>
                      <p className="text-sm text-gray-400">{(shopifyCode.length / 1024).toFixed(1)} KB · All copy pre-filled · Drop into Dawn theme</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 flex-shrink-0">
                    <button
                      onClick={() => {
                        if (!landing) return;
                        const html = generateHtmlPreview(landing);
                        const blob = new Blob([html], { type: "text/html;charset=utf-8" });
                        const url = URL.createObjectURL(blob);
                        window.open(url, "_blank");
                        setTimeout(() => URL.revokeObjectURL(url), 60000);
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                      </svg>
                      Preview Page
                    </button>
                    <button
                      onClick={handleCopyLiquid}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-all"
                    >
                      {shopifyCopied ? (
                        <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Copied!</>
                      ) : (
                        <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy Code</>
                      )}
                    </button>
                    <button
                      onClick={handleDownloadLiquid}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#008060] rounded-xl hover:bg-[#006e52] transition-all"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download .liquid
                    </button>
                  </div>
                </div>

                {/* Install instructions */}
                <div className="p-6 bg-gray-50 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">How to install in Shopify</h3>
                  <ol className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2"><span className="font-bold text-gray-400 flex-shrink-0">1.</span>Download the <code className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-xs">.liquid</code> file above</li>
                    <li className="flex gap-2"><span className="font-bold text-gray-400 flex-shrink-0">2.</span>In Shopify Admin → <strong>Online Store → Themes → Edit code</strong></li>
                    <li className="flex gap-2"><span className="font-bold text-gray-400 flex-shrink-0">3.</span>Open the <code className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-xs">sections/</code> folder → <strong>Add a new section</strong> → paste the file content</li>
                    <li className="flex gap-2"><span className="font-bold text-gray-400 flex-shrink-0">4.</span>Go to <strong>Customize → Add section → Conversion Landing</strong> — all your copy is already filled in</li>
                  </ol>
                </div>

                {/* Code preview toggle */}
                <div className="p-4 border-b border-gray-100">
                  <button
                    onClick={() => setShopifyShowCode((v) => !v)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${shopifyShowCode ? "rotate-90" : ""}`}>
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {shopifyShowCode ? "Hide" : "Preview"} code ({shopifyCode.split("\n").length} lines)
                  </button>
                </div>
                {shopifyShowCode && (
                  <pre className="p-6 text-xs bg-gray-950 text-green-400 overflow-x-auto max-h-96 leading-relaxed">
                    {shopifyCode}
                  </pre>
                )}

                {/* Regenerate */}
                <div className="p-4 flex justify-end">
                  <button
                    onClick={() => landingFormData && handleGenerateShopify(landingFormData)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                    </svg>
                    Regenerate
                  </button>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* ── AI EDITOR TAB ── */}
      {activeTab === "editor" && (
        landing ? (
          <div className="flex flex-col" style={{ height: "calc(100vh - 97px)" }}>
            <ChatEditor initialLanding={landing} />
          </div>
        ) : (
          <section className="max-w-5xl mx-auto px-6 pt-14 pb-20">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Page Editor</h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Generate a landing page first, then come back here to refine it with AI chat.
                Tell the AI what to change — copy, design, layout — and watch it update live.
              </p>
              <button
                onClick={() => setActiveTab("landing")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
                Generate a Landing Page First
              </button>
            </div>
          </section>
        )
      )}

      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center">
          <p className="text-gray-400 text-sm">AdGen — AI Marketing Suite for ecommerce</p>
        </div>
      </footer>
    </main>
  );
}
