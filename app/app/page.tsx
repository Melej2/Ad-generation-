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
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to generate ads");
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
