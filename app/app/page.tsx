"use client";

import { useState } from "react";
import InputForm from "@/components/InputForm";
import VideoAdCard from "@/components/VideoAdCard";
import ImageAdCard from "@/components/ImageAdCard";
import LandingPageForm, { LandingFormData } from "@/components/LandingPageForm";
import LandingPageResult from "@/components/LandingPageResult";
import { LandingPage } from "@/app/api/generate-landing/route";

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
}

function getClientMockData(productName: string) {
  const p = productName || "your product";
  return {
    videoAds: [
      { id: 1, type: "Problem-Solution", hook: `Struggling with the same old problem? ${p} changes everything.`, sceneBreakdown: `Scene 1 (0-3s): Close-up of frustrated person. Scene 2 (3-8s): Introduction of ${p}. Scene 3 (8-20s): Transformation montage. Scene 4 (20-27s): Happy result. Scene 5 (27-30s): CTA overlay.`, visuals: `Warm natural lighting, authentic UGC-style handheld footage, real home/office setting for ${p}.`, script: `"I was dealing with this every single day... until I found ${p}. I was skeptical at first but within a week, everything changed. Seriously, this is the product I've been searching for. Link in bio."`, cameraMovement: "Handheld shaky open, smooth slow-push mid, locked down for CTA.", lighting: "Natural window light, golden hour warmth.", background: "Authentic lived-in home environment.", mood: "Relatable → Hopeful → Satisfied", cta: `Get ${p} — link in bio! Limited stock.` },
      { id: 2, type: "Emotional", hook: `This ${p} made me cry happy tears 😭`, sceneBreakdown: `Scene 1 (0-3s): Emotional reaction shot. Scene 2 (3-10s): Story buildup — life before. Scene 3 (10-22s): The moment of discovery. Scene 4 (22-28s): Emotional payoff. Scene 5 (28-30s): CTA.`, visuals: `Soft bokeh backgrounds, close-up facial expressions, candid moments of joy with ${p}.`, script: `"I never thought something so simple could make such a difference. ${p} gave me back something I didn't realize I was missing. If you're on the fence — just try it."`, cameraMovement: "Slow zoom on face, gentle rack focus, cinematic wide for payoff.", lighting: "Soft diffused light, slightly warm tones for emotional warmth.", background: "Cozy indoor setting, slightly blurred.", mood: "Vulnerable → Moved → Grateful", cta: `Try ${p} risk-free — 30-day guarantee. Link in bio.` },
      { id: 3, type: "Curiosity", hook: `Why is everyone obsessed with ${p} right now? 👀`, sceneBreakdown: `Scene 1 (0-3s): Mysterious partial reveal. Scene 2 (3-10s): Building intrigue with teaser clips. Scene 3 (10-20s): The big reveal and demonstration. Scene 4 (20-27s): Social proof / results. Scene 5 (27-30s): CTA with urgency.`, visuals: `Quick cuts, partial reveals, reaction shots, satisfying product reveal of ${p}.`, script: `"Okay so I finally caved and tried ${p} that's been all over my feed. And honestly? The hype is 100% real. Here's what it actually does..."`, cameraMovement: "Quick handheld cuts, slow reveal pan, pull-back for wow moment.", lighting: "Bright, punchy, high-contrast for visual interest.", background: "Clean neutral, switches to lifestyle context.", mood: "Intrigued → Building → Amazed → FOMO", cta: `See why everyone's switching to ${p}. Link in bio!` },
      { id: 4, type: "Before-After", hook: `BEFORE vs AFTER using ${p} for 30 days 🤯`, sceneBreakdown: `Scene 1 (0-3s): Split-screen before/after title card. Scene 2 (3-12s): Authentic 'before' footage — the problem. Scene 3 (12-22s): Transformation journey with ${p}. Scene 4 (22-28s): Dramatic after result. Scene 5 (28-30s): CTA.`, visuals: `Split-screen comparisons, time-lapse style cuts, real results without heavy editing for ${p}.`, script: `"Day 1 vs Day 30 with ${p}. No filters, no edits — just real results. I documented everything so you could see exactly what happened."`, cameraMovement: "Static locked shots for comparison, match cuts between before/after.", lighting: "Consistent lighting for fair before/after comparison.", background: "Same location before and after for direct comparison.", mood: "Honest → Transformative → Convincing", cta: `Start your transformation with ${p}. 30-day results guaranteed.` },
      { id: 5, type: "Fast Dropshipping", hook: `POV: You just discovered the product that sells itself 🚀`, sceneBreakdown: `Scene 1 (0-2s): Bold product reveal — ${p} hero shot. Scene 2 (2-6s): Key feature callouts in rapid succession. Scene 3 (6-15s): Product in action — clear benefit demo. Scene 4 (15-22s): Social proof flash (reviews, numbers). Scene 5 (22-30s): Offer + scarcity CTA.`, visuals: `High-energy cuts, bold text overlays, clean product shots mixed with use-case clips for ${p}.`, script: `"This is ${p} — and here's why it's selling out everywhere. [Feature 1]. [Feature 2]. [Feature 3]. Over 10,000 happy customers. Get yours before it's gone."`, cameraMovement: "Fast-paced cuts under 2 seconds, smooth product spins, snap zooms.", lighting: "Studio-quality bright and clean, no shadows.", background: "White/gradient studio or trendy lifestyle context.", mood: "High-energy → Exciting → Urgent", cta: `Order ${p} NOW — 50% OFF + Free Shipping! Link in bio. Offer ends soon.` },
    ],
    imageAds: [
      { id: 1, type: "Product in Hand", layout: "Hero product held naturally in foreground, lifestyle background softly blurred. Bold headline top-left, CTA badge bottom-right.", backgroundStyle: "Soft bokeh indoor/outdoor lifestyle scene — kitchen counter, cafe table, or park setting.", colorPalette: "Warm whites, cream tones, one brand accent color. Clean and premium feel.", headline: `Meet ${p} — The One You've Been Waiting For`, subheadline: "Transform your daily routine in just days.", badge: "⭐ #1 Bestseller", moodAndStyle: "Authentic, aspirational lifestyle. Real person, real moment — not overly staged.", aiPrompt: `Lifestyle product photography, ${p} held naturally in hand, soft bokeh background, warm golden light, shallow depth of field, authentic UGC aesthetic, clean composition, white balance warm, shot on iPhone aesthetic, 9:16 vertical format for Instagram Stories` },
      { id: 2, type: "Before-After", layout: "Bold vertical split — left side dark/muted 'before', right side bright/vibrant 'after'. Product centered at split line.", backgroundStyle: "Left: desaturated, slightly gloomy. Right: bright, colorful, energetic.", colorPalette: "Before: #8B8B8B, #4A4A4A. After: #FF6B35, #FFE66D, #4ECDC4.", headline: `The ${p} Difference Is Real`, subheadline: "See what 30 days can do.", badge: "30-Day Results", moodAndStyle: "Dramatic contrast transformation. Honest and compelling visual proof.", aiPrompt: `Before and after split composition, left half desaturated muted colors showing problem state, right half vibrant energetic colors showing ${p} results, bold dividing line, product prominently featured, high contrast transformation, text overlay space at top and bottom, 1:1 square format` },
      { id: 3, type: "Clean Brand", layout: "Minimal centered product on pure white. Maximum whitespace. Small precise headline below. One accent element.", backgroundStyle: "Pure white (#FFFFFF) or near-white cream. Absolute cleanliness.", colorPalette: "White, black, one premium accent — gold (#C9A84C), navy (#0A1628), or forest green (#2D5016).", headline: p, subheadline: "Engineered for those who expect the best.", badge: "Premium Quality", moodAndStyle: "Apple-level minimalism. Luxury, precision, confidence. Every pixel intentional.", aiPrompt: `Minimalist product photography, ${p} centered on pure white background, dramatic side lighting creating subtle shadow, luxury brand aesthetic, extreme cleanliness, high-end commercial photography style, perfect symmetry, single color accent detail, 1:1 square format, 8K quality` },
      { id: 4, type: "Lifestyle", layout: "Environmental lifestyle shot with product naturally integrated. Person using/enjoying product. Text overlay with semi-transparent dark band.", backgroundStyle: "Rich, textured real-world environment. Natural and aspirational — beach, gym, modern home.", colorPalette: "Earth tones and natural colors matching the environment. Warm and inviting.", headline: `Live Better with ${p}`, subheadline: "Join 10,000+ happy customers.", badge: "Free Shipping", moodAndStyle: "Aspirational but achievable. The life your customer wants. Warm, real, inviting.", aiPrompt: `Lifestyle photography, person naturally using ${p} in aspirational real-world setting, environmental context, golden hour lighting, candid authentic moment, rich colors, shallow depth of field, cinematic composition, lifestyle brand aesthetic, 16:9 horizontal format` },
      { id: 5, type: "Testimonial", layout: "Customer photo (authentic, not stock) left side. Quote in large typography right side. Star rating prominent. Product small bottom-right corner.", backgroundStyle: "Soft gradient or subtle texture. Warm and trustworthy. Not distracting.", colorPalette: "Soft peach (#FFE5D9), warm white, deep charcoal text. Stars in gold (#FFD700).", headline: '"This actually works — I\'m obsessed"', subheadline: `— Verified ${p} customer`, badge: "★★★★★ 4.9/5 Rating", moodAndStyle: "Social proof powerhouse. Real person, real words. Trust and relatability over polish.", aiPrompt: `Social proof advertisement layout, authentic customer testimonial design, real person portrait left side, large quote typography right side, gold star rating prominent, ${p} product thumbnail corner, warm soft gradient background peach tones, trustworthy clean design, 1:1 square format` },
    ],
  };
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
  const [activeTab, setActiveTab] = useState<"ads" | "landing">("ads");

  // Ad generator state
  const [adsLoading, setAdsLoading] = useState(false);
  const [adsError, setAdsError] = useState<string | null>(null);
  const [videoAds, setVideoAds] = useState<VideoAd[]>([]);
  const [imageAds, setImageAds] = useState<ImageAd[]>([]);
  const [hasGeneratedAds, setHasGeneratedAds] = useState(false);
  const [adsFormData, setAdsFormData] = useState<FormData | null>(null);

  // Landing page state
  const [landingLoading, setLandingLoading] = useState(false);
  const [landingError, setLandingError] = useState<string | null>(null);
  const [landing, setLanding] = useState<LandingPage | null>(null);
  const [landingFormData, setLandingFormData] = useState<LandingFormData | null>(null);

  // ── Ad generation ──────────────────────────────────────
  const handleGenerateAds = async (data: FormData) => {
    setAdsLoading(true);
    setAdsError(null);
    setAdsFormData(data);

    try {
      let result: { videoAds: VideoAd[]; imageAds: ImageAd[] };
      try {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
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

      setVideoAds(result.videoAds || []);
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
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Ad Prompts</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {videoAds.length} video + {imageAds.length} image prompts ready to use
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

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Video Ad Prompts</h3>
                    <p className="text-gray-500 text-xs">Ready for Nano Banana &amp; AI video tools</p>
                  </div>
                  <span className="ml-auto text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">{videoAds.length} prompts</span>
                </div>
                <div className="space-y-4">
                  {videoAds.map((ad, index) => <VideoAdCard key={ad.id} ad={ad} index={index} />)}
                </div>
              </div>

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

      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center">
          <p className="text-gray-400 text-sm">AdGen — AI Marketing Suite for ecommerce</p>
        </div>
      </footer>
    </main>
  );
}
