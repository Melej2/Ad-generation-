"use client";

import { useState } from "react";
import { VideoAd } from "@/app/page";
import CopyButton from "./CopyButton";

interface VideoAdCardProps {
  ad: VideoAd;
  index: number;
}

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  "Problem-Solution": { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  "Emotional": { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
  "Curiosity": { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
  "Before-After": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Fast Dropshipping": { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
};

function getTypeColor(type: string) {
  for (const key of Object.keys(typeColors)) {
    if (type.toLowerCase().includes(key.toLowerCase())) {
      return typeColors[key];
    }
  }
  return { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" };
}

function buildFullPrompt(ad: VideoAd): string {
  return `VIDEO AD PROMPT — ${ad.type.toUpperCase()}

🎬 HOOK (First 3 Seconds):
${ad.hook}

📽️ SCENE BREAKDOWN:
${ad.sceneBreakdown}

👁️ VISUALS:
${ad.visuals}

🎙️ SCRIPT / VOICEOVER (UGC Style):
${ad.script}

📷 CAMERA MOVEMENT:
${ad.cameraMovement}

💡 LIGHTING:
${ad.lighting}

🏞️ BACKGROUND:
${ad.background}

🎭 MOOD:
${ad.mood}

📣 CTA (Call To Action):
${ad.cta}`;
}

const fields: Array<{ key: keyof VideoAd; label: string; emoji: string }> = [
  { key: "hook", label: "Hook (First 3 Seconds)", emoji: "⚡" },
  { key: "sceneBreakdown", label: "Scene Breakdown", emoji: "🎬" },
  { key: "visuals", label: "Visuals", emoji: "👁️" },
  { key: "script", label: "Script / Voiceover", emoji: "🎙️" },
  { key: "cameraMovement", label: "Camera Movement", emoji: "📷" },
  { key: "lighting", label: "Lighting", emoji: "💡" },
  { key: "background", label: "Background", emoji: "🏞️" },
  { key: "mood", label: "Mood", emoji: "🎭" },
  { key: "cta", label: "Call To Action", emoji: "📣" },
];

export default function VideoAdCard({ ad, index }: VideoAdCardProps) {
  const [expanded, setExpanded] = useState(index === 0);
  const color = getTypeColor(ad.type);
  const fullPrompt = buildFullPrompt(ad);

  return (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm card-hover overflow-hidden`}>
      {/* Card Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left"
      >
        <div className="px-6 py-5 flex items-center gap-4">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0">
            {index + 1}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${color.bg} ${color.text} border ${color.border}`}>
                {ad.type}
              </span>
              <span className="text-gray-400 text-xs">Video Ad</span>
            </div>
            {!expanded && (
              <p className="text-gray-600 text-sm mt-1 truncate">{ad.hook}</p>
            )}
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <CopyButton text={fullPrompt} label="Copy All" />
            <div className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t border-gray-50">
          <div className="px-6 py-5 space-y-5">
            {fields.map(({ key, label, emoji }) => (
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
                <p className="text-gray-800 text-sm leading-relaxed bg-gray-50 rounded-xl p-3.5">
                  {String(ad[key])}
                </p>
              </div>
            ))}
          </div>

          {/* Footer with full copy */}
          <div className="px-6 py-4 bg-indigo-50 border-t border-indigo-100 flex items-center justify-between">
            <span className="text-xs text-indigo-600 font-medium">Ready for Nano Banana</span>
            <CopyButton text={fullPrompt} label="Copy Full Prompt" />
          </div>
        </div>
      )}
    </div>
  );
}
