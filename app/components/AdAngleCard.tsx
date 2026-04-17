"use client";

import { useState, useEffect, useCallback } from "react";
import { AdAngle, AdVariation } from "@/app/page";
import { getRatings, saveRating, RatingLabel, RatingsStore } from "@/utils/adMemory";
import CopyButton from "./CopyButton";

interface AdAngleCardProps {
  angle: AdAngle;
  isRecommended: boolean;
}

type SectionTab = "hook" | "problem" | "solution" | "demo" | "cta" | "script";

const TABS: { key: SectionTab; label: string; emoji: string }[] = [
  { key: "hook", label: "Hook", emoji: "⚡" },
  { key: "problem", label: "Problem", emoji: "😤" },
  { key: "solution", label: "Solution", emoji: "💡" },
  { key: "demo", label: "Demo", emoji: "🎬" },
  { key: "cta", label: "CTA", emoji: "📣" },
  { key: "script", label: "Full Script", emoji: "🎙️" },
];

const RATING_CONFIG: { label: RatingLabel; emoji: string; color: string; activeColor: string }[] = [
  { label: "Winner", emoji: "🏆", color: "border-gray-200 text-gray-600 hover:border-emerald-300 hover:text-emerald-700", activeColor: "bg-emerald-50 border-emerald-400 text-emerald-800 font-semibold" },
  { label: "Test", emoji: "🧪", color: "border-gray-200 text-gray-600 hover:border-amber-300 hover:text-amber-700", activeColor: "bg-amber-50 border-amber-400 text-amber-800 font-semibold" },
  { label: "Trash", emoji: "🗑️", color: "border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-700", activeColor: "bg-red-50 border-red-400 text-red-800 font-semibold" },
];

function VariationPanel({ variation, angle }: { variation: AdVariation; angle: string }) {
  const [activeTab, setActiveTab] = useState<SectionTab>("hook");
  const [ratings, setRatings] = useState<RatingsStore>({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setRatings(getRatings());
  }, []);

  const current = ratings[variation.id];
  const currentRating = current?.rating;
  const currentStars = current?.stars ?? 0;

  const handleRating = useCallback((label: RatingLabel, stars: number) => {
    saveRating(variation.id, label, stars, variation.hook, angle);
    setRatings(getRatings());
  }, [variation.id, variation.hook, angle]);

  const handleCopyScript = async () => {
    await navigator.clipboard.writeText(variation.fullScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabContent = activeTab === "script" ? variation.fullScript : variation[activeTab];

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      {/* Section tabs */}
      <div className="flex overflow-x-auto bg-gray-50 border-b border-gray-100 gap-0.5 p-1">
        {TABS.map(({ key, label, emoji }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              activeTab === key
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {emoji} {label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-4">
        <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">{tabContent}</p>

        {/* Captions */}
        {activeTab === "script" && (
          <div className="mt-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Caption variants</p>
            <div className="flex flex-wrap gap-1.5">
              {variation.captions.map((c, i) => (
                <span key={i} className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-lg">{c}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Rating row */}
      <div className="px-4 pb-4 flex items-center gap-3 flex-wrap">
        {/* Rating buttons */}
        <div className="flex gap-1.5">
          {RATING_CONFIG.map(({ label, emoji, color, activeColor }) => (
            <button
              key={label}
              onClick={() => handleRating(label, currentRating === label ? currentStars : 3)}
              className={`px-2.5 py-1 text-xs rounded-lg border transition-all ${
                currentRating === label ? activeColor : color
              }`}
            >
              {emoji} {label}
            </button>
          ))}
        </div>

        {/* Stars */}
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(currentRating ?? "Test", star)}
              className="text-base leading-none transition-transform hover:scale-110"
            >
              {star <= currentStars ? "★" : "☆"}
            </button>
          ))}
        </div>

        {/* Copy script */}
        <div className="ml-auto flex items-center gap-2">
          <CopyButton text={tabContent} label="Copy" />
          <button
            onClick={handleCopyScript}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-all"
          >
            {copied ? (
              <><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Copied!</>
            ) : (
              <><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Full Script</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdAngleCard({ angle, isRecommended }: AdAngleCardProps) {
  const [expanded, setExpanded] = useState(true);
  const [activeVar, setActiveVar] = useState(0);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <button onClick={() => setExpanded(!expanded)} className="w-full text-left">
        <div className="px-6 py-5 flex items-center gap-4">
          <span className="text-2xl flex-shrink-0">{angle.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-gray-900">{angle.label}</span>
              {isRecommended && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                  ⭐ Recommended
                </span>
              )}
            </div>
            <p className="text-gray-500 text-sm mt-0.5">{angle.description}</p>
          </div>
          <div className={`transition-transform duration-200 flex-shrink-0 ${expanded ? "rotate-180" : ""}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </button>

      {/* Expanded */}
      {expanded && (
        <div className="border-t border-gray-50">
          {/* Variation selector */}
          <div className="px-6 pt-4 flex gap-2">
            {angle.variations.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActiveVar(i)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${
                  activeVar === i
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:border-indigo-300"
                }`}
              >
                Variation {i + 1}
                <span className={`ml-1.5 ${activeVar === i ? "opacity-80" : "opacity-60"}`}>· {v.style}</span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="px-6 py-4">
            <VariationPanel variation={angle.variations[activeVar]} angle={angle.angle} />
          </div>
        </div>
      )}
    </div>
  );
}
