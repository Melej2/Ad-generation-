"use client";

import { useState } from "react";
import { ImageAd } from "@/app/page";
import CopyButton from "./CopyButton";

interface ImageAdCardProps {
  ad: ImageAd;
  index: number;
}

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  "Product in Hand": { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  "Before-After": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Clean Brand": { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200" },
  "Lifestyle": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  "Testimonial": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
};

function getTypeColor(type: string) {
  for (const key of Object.keys(typeColors)) {
    if (type.toLowerCase().includes(key.toLowerCase())) {
      return typeColors[key];
    }
  }
  return { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" };
}

function buildFullPrompt(ad: ImageAd): string {
  return `IMAGE AD PROMPT — ${ad.type.toUpperCase()}

📐 Layout:
${ad.layout}

🖼️ Background Style:
${ad.backgroundStyle}

🎨 Color Palette:
${ad.colorPalette}

✍️ Headline:
${ad.headline}

💬 Subheadline:
${ad.subheadline}

🏷️ Badge:
${ad.badge}

✨ Mood & Style:
${ad.moodAndStyle}

🤖 AI Image Prompt (ready to paste):
${ad.aiPrompt}`;
}

const fields: Array<{ key: keyof ImageAd; label: string; emoji: string; highlight?: boolean }> = [
  { key: "layout", label: "Layout", emoji: "📐" },
  { key: "backgroundStyle", label: "Background Style", emoji: "🖼️" },
  { key: "colorPalette", label: "Color Palette", emoji: "🎨" },
  { key: "headline", label: "Headline", emoji: "✍️" },
  { key: "subheadline", label: "Subheadline", emoji: "💬" },
  { key: "badge", label: "Badge", emoji: "🏷️" },
  { key: "moodAndStyle", label: "Mood & Style", emoji: "✨" },
  { key: "aiPrompt", label: "AI Image Prompt", emoji: "🤖", highlight: true },
];

export default function ImageAdCard({ ad, index }: ImageAdCardProps) {
  const [expanded, setExpanded] = useState(false);
  const color = getTypeColor(ad.type);
  const fullPrompt = buildFullPrompt(ad);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm card-hover overflow-hidden">
      {/* Card Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left"
      >
        <div className="px-6 py-5 flex items-center gap-4">
          <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 font-bold text-sm flex-shrink-0">
            {index + 1}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${color.bg} ${color.text} border ${color.border}`}>
                {ad.type}
              </span>
              <span className="text-gray-400 text-xs">Image Ad</span>
            </div>
            {!expanded && (
              <p className="text-gray-800 text-sm mt-1 font-medium truncate">{ad.headline}</p>
            )}
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <CopyButton text={ad.aiPrompt} label="Copy AI Prompt" />
            <div className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
      </button>

      {/* Preview bar when collapsed */}
      {!expanded && (
        <div className="px-6 pb-4 flex flex-wrap gap-2">
          {ad.badge && (
            <span className="inline-flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-md">
              🏷️ {ad.badge}
            </span>
          )}
          {ad.colorPalette && (
            <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
              🎨 {ad.colorPalette.substring(0, 40)}...
            </span>
          )}
        </div>
      )}

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t border-gray-50">
          <div className="px-6 py-5 space-y-5">
            {fields.map(({ key, label, emoji, highlight }) => (
              <div key={key} className="group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                    <span>{emoji}</span>
                    {label}
                  </span>
                  <CopyButton
                    text={String(ad[key])}
                    label="Copy"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className={`rounded-xl p-3.5 ${highlight ? "bg-violet-50 border border-violet-100" : "bg-gray-50"}`}>
                  {key === "badge" ? (
                    <span className="inline-flex items-center bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md">
                      {String(ad[key])}
                    </span>
                  ) : (
                    <p className={`text-sm leading-relaxed ${highlight ? "text-violet-800 font-mono" : "text-gray-800"}`}>
                      {String(ad[key])}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-violet-50 border-t border-violet-100 flex items-center justify-between">
            <span className="text-xs text-violet-600 font-medium">Ready for Midjourney / DALL-E</span>
            <CopyButton text={fullPrompt} label="Copy Full Prompt" />
          </div>
        </div>
      )}
    </div>
  );
}
