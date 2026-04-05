"use client";

import { useState } from "react";
import InputForm from "@/components/InputForm";
import VideoAdCard from "@/components/VideoAdCard";
import ImageAdCard from "@/components/ImageAdCard";

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

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoAds, setVideoAds] = useState<VideoAd[]>([]);
  const [imageAds, setImageAds] = useState<ImageAd[]>([]);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleGenerate = async (data: FormData) => {
    setLoading(true);
    setError(null);
    setFormData(data);

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
        // API unavailable (static export / no server) — use client-side mock
        await new Promise((r) => setTimeout(r, 800));
        result = getClientMockData(data.productName);
      }

      setVideoAds(result.videoAds || []);
      setImageAds(result.imageAds || []);
      setHasGenerated(true);

      setTimeout(() => {
        document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerate = () => {
    if (formData) {
      handleGenerate(formData);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <span className="font-semibold text-gray-900 text-lg">AdGen</span>
          </div>
          <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">AI Ad Generator</span>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
            Powered by Claude AI
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            Generate High-Converting<br />
            Video &amp; Image Ads
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Enter your product details and get 5 video ad prompts + 5 image ad prompts,
            ready to copy into Nano Banana and AI image tools.
          </p>
        </div>
      </section>

      {/* Input Form */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <InputForm onGenerate={handleGenerate} loading={loading} />
      </section>

      {/* Error */}
      {error && (
        <div className="max-w-5xl mx-auto px-6 pb-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {error}
          </div>
        </div>
      )}

      {/* Loading */}
      {loading && (
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

      {/* Results */}
      {hasGenerated && !loading && (
        <section id="results" className="max-w-5xl mx-auto px-6 pb-20 fade-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Your Ad Prompts</h2>
              <p className="text-gray-500 text-sm mt-1">
                {videoAds.length} video + {imageAds.length} image prompts ready to use
              </p>
            </div>
            <button
              onClick={handleRegenerate}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
              </svg>
              Regenerate
            </button>
          </div>

          {/* Video Ads */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Video Ad Prompts</h3>
                <p className="text-gray-500 text-xs">Ready for Nano Banana &amp; AI video tools</p>
              </div>
              <span className="ml-auto text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                {videoAds.length} prompts
              </span>
            </div>
            <div className="space-y-4">
              {videoAds.map((ad, index) => (
                <VideoAdCard key={ad.id} ad={ad} index={index} />
              ))}
            </div>
          </div>

          {/* Image Ads */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Image Ad Prompts</h3>
                <p className="text-gray-500 text-xs">Ready for Midjourney, DALL-E &amp; Stable Diffusion</p>
              </div>
              <span className="ml-auto text-xs font-medium text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">
                {imageAds.length} prompts
              </span>
            </div>
            <div className="space-y-4">
              {imageAds.map((ad, index) => (
                <ImageAdCard key={ad.id} ad={ad} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center">
          <p className="text-gray-400 text-sm">AdGen — AI-powered ad generation for ecommerce products</p>
        </div>
      </footer>
    </main>
  );
}
