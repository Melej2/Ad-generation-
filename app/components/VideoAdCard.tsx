"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { VideoAd } from "@/app/page";
import CopyButton from "./CopyButton";

interface VideoAdCardProps {
  ad: VideoAd;
  index: number;
}

type VideoStatus = "idle" | "generating" | "done" | "error";

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

function buildVeoPrompt(ad: VideoAd): string {
  return `${ad.hook} ${ad.visuals} ${ad.cameraMovement} Lighting: ${ad.lighting}. Background: ${ad.background}. Mood: ${ad.mood}. ${ad.cta}`.trim();
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
  const [videoStatus, setVideoStatus] = useState<VideoStatus>("idle");
  const [operationName, setOperationName] = useState<string | null>(null);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const color = getTypeColor(ad.type);
  const fullPrompt = buildFullPrompt(ad);
  const veoPrompt = buildVeoPrompt(ad);

  // Revoke old blob URL on unmount
  useEffect(() => {
    return () => { if (blobUrl) URL.revokeObjectURL(blobUrl); };
  }, [blobUrl]);

  const stopPolling = useCallback(() => {
    if (pollRef.current) { clearInterval(pollRef.current); pollRef.current = null; }
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  useEffect(() => () => stopPolling(), [stopPolling]);

  const pollOperation = useCallback(async (opName: string) => {
    try {
      const res = await fetch("/api/veo/poll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ operationName: opName }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error ?? "Poll failed");

      if (data.done) {
        stopPolling();
        if (data.videoUri) {
          setVideoUri(data.videoUri);
          // Fetch the video through the proxy and create a local blob URL
          try {
            const dlRes = await fetch("/api/veo/download", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ videoUri: data.videoUri }),
            });
            const blob = await dlRes.blob();
            const url = URL.createObjectURL(blob);
            setBlobUrl(url);
          } catch {
            // Non-fatal: video URI is still available for manual download
          }
          setVideoStatus("done");
        } else {
          setVideoError("Video generation completed but no video was returned.");
          setVideoStatus("error");
        }
      }
    } catch (err) {
      stopPolling();
      setVideoError(err instanceof Error ? err.message : "Poll failed");
      setVideoStatus("error");
    }
  }, [stopPolling]);

  const handleGenerateVideo = async () => {
    setVideoStatus("generating");
    setVideoError(null);
    setVideoUri(null);
    setBlobUrl(null);
    setOperationName(null);
    setElapsed(0);

    try {
      const res = await fetch("/api/veo/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: veoPrompt }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error ?? "Failed to start generation");

      const opName = data.operationName;
      setOperationName(opName);

      // Elapsed timer
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);

      // Poll every 5 seconds
      pollRef.current = setInterval(() => pollOperation(opName), 5000);
    } catch (err) {
      setVideoError(err instanceof Error ? err.message : "Failed to start video generation");
      setVideoStatus("error");
    }
  };

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm card-hover overflow-hidden">
      {/* Card Header */}
      <button onClick={() => setExpanded(!expanded)} className="w-full text-left">
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
              {videoStatus === "done" && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Video ready
                </span>
              )}
              {videoStatus === "generating" && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
                  <span className="w-3 h-3 rounded-full border border-indigo-400 border-t-transparent animate-spin"></span>
                  Generating… {formatTime(elapsed)}
                </span>
              )}
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
          {/* Video Player */}
          {videoStatus === "done" && (
            <div className="px-6 pt-5">
              <div className="rounded-xl overflow-hidden bg-black aspect-[9/16] max-w-xs mx-auto">
                {blobUrl ? (
                  <video
                    src={blobUrl}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-sm opacity-60">
                    Loading video…
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center gap-3 mt-3 mb-1">
                {blobUrl && (
                  <a
                    href={blobUrl}
                    download={`ad-${ad.type.toLowerCase().replace(/\s+/g, "-")}.mp4`}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download MP4
                  </a>
                )}
                <button
                  onClick={handleGenerateVideo}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-all"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 4 23 10 17 10" />
                    <polyline points="1 20 1 14 7 14" />
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                  </svg>
                  Regenerate
                </button>
              </div>
            </div>
          )}

          {/* Error */}
          {videoStatus === "error" && videoError && (
            <div className="mx-6 mt-5 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 flex items-start gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{videoError}</span>
            </div>
          )}

          {/* Generating Progress */}
          {videoStatus === "generating" && (
            <div className="mx-6 mt-5 bg-indigo-50 border border-indigo-100 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-indigo-200 border-t-indigo-600 animate-spin flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-semibold text-indigo-900">Generating video with Veo 3…</p>
                  <p className="text-xs text-indigo-600 mt-0.5">This takes about 1–2 minutes · {formatTime(elapsed)} elapsed</p>
                </div>
              </div>
              <div className="mt-3 h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((elapsed / 90) * 100, 95)}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Fields */}
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

          {/* Footer */}
          <div className="px-6 py-4 bg-indigo-50 border-t border-indigo-100 flex items-center justify-between gap-3">
            <CopyButton text={fullPrompt} label="Copy Full Prompt" />
            <button
              onClick={handleGenerateVideo}
              disabled={videoStatus === "generating"}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              {videoStatus === "generating" ? (
                <>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                  Generating…
                </>
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Generate Video
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
