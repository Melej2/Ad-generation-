"use client";

import { useMemo, useRef, useState } from "react";
import type { LandingPage } from "@/app/api/generate-landing/route";
import { landingToPageModel } from "@/utils/landingToPageModel";
import { pageModelToHtml } from "@/utils/pageModelToHtml";
import { applyEditActions } from "@/utils/applyEditActions";
import type { EditAction, HistoryEntry, PageModel } from "@/types/pageModel";

// ── Types ──────────────────────────────────────────────────────────────────
type EditMode = "copy" | "design" | "layout" | "full";

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

// ── Mock client fallback (GitHub Pages static export) ─────────────────────
function getClientMockEditResponse(
  userMessage: string,
  mode: string
): { actions: EditAction[]; summary: string } {
  const msg = userMessage.toLowerCase();
  if (msg.includes("headline") || msg.includes("title")) {
    return {
      actions: [{ type: "update_text", target: "hero.headline", value: "The Last Solution You'll Ever Need" }],
      summary: "Updated the hero headline.",
    };
  }
  if (msg.includes("cta") || msg.includes("button")) {
    return {
      actions: [
        { type: "update_text", target: "hero.cta", value: "Claim Your Discount →" },
        { type: "update_text", target: "cta.cta", value: "Claim Your Discount →" },
      ],
      summary: "Updated CTA buttons with urgency.",
    };
  }
  if (msg.includes("benefit")) {
    return {
      actions: [{ type: "update_text", target: "benefits.heading", value: "Why Thousands Switch Every Month" }],
      summary: "Updated benefits heading.",
    };
  }
  if (msg.includes("review") || msg.includes("testimonial")) {
    return {
      actions: [{ type: "update_text", target: "reviews.heading", value: "Join 2,847+ Happy Customers" }],
      summary: "Updated reviews heading.",
    };
  }
  if (mode === "design") {
    return {
      actions: [{ type: "update_style", target: "hero", style: { backgroundColor: "#0f172a" } }],
      summary: "Darkened hero background.",
    };
  }
  if (msg.includes("problem") || msg.includes("pain")) {
    return {
      actions: [{ type: "update_text", target: "problem.heading", value: "Does Any of This Sound Familiar?" }],
      summary: "Updated the problem section heading.",
    };
  }
  return {
    actions: [{ type: "update_text", target: "hero.subheadline", value: "Trusted by thousands. Built to last." }],
    summary: "Applied a general improvement.",
  };
}

const SUGGESTED_PROMPTS: Record<EditMode, string[]> = {
  copy: [
    "Make the headline more urgent",
    "Rewrite the CTA to be more action-oriented",
    "Add more emotion to the problem section",
    "Make the benefits punchier",
  ],
  design: [
    "Make the hero darker and more dramatic",
    "Add a warm accent color to the benefits",
    "Make the CTA section stand out more",
  ],
  layout: [
    "Move the benefits section higher",
    "Hide the trust bar",
    "Bring the reviews closer to the hero",
  ],
  full: [
    "Make it feel more premium and exclusive",
    "Add more urgency throughout",
    "Simplify — remove anything that isn't essential",
    "Rewrite for a younger audience",
  ],
};

// ── Component ──────────────────────────────────────────────────────────────
export default function ChatEditor({ initialLanding }: { initialLanding: LandingPage }) {
  const productName = initialLanding.hero.headline.split(" ").slice(0, 3).join(" ");
  const initialModel = useMemo(() => landingToPageModel(initialLanding, productName), [initialLanding, productName]);

  const [history, setHistory] = useState<HistoryEntry[]>([
    { model: initialModel, timestamp: new Date().toISOString(), label: "Initial version" },
  ]);
  const [historyPointer, setHistoryPointer] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: "Hi! I'm your AI page editor. Tell me what you'd like to change — copy, design, layout, or anything else." },
  ]);
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState<EditMode>("full");
  const [loading, setLoading] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const currentModel: PageModel = history[historyPointer].model;
  const iframeSrcdoc = useMemo(() => pageModelToHtml(currentModel), [currentModel]);

  function pushHistory(model: PageModel, label: string) {
    setHistory((prev) => {
      const truncated = prev.slice(0, historyPointer + 1);
      return [...truncated, { model, timestamp: new Date().toISOString(), label }];
    });
    setHistoryPointer((p) => p + 1);
    setIframeKey((k) => k + 1);
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setLoading(true);

    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);

    let actions: EditAction[] = [];
    let summary = "";

    try {
      const res = await fetch("/Ad-generation-/api/edit-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: currentModel, userMessage: text, mode: editMode }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json() as { actions: EditAction[]; summary: string };
      actions = data.actions ?? [];
      summary = data.summary ?? "";
    } catch {
      // Try root path (local dev)
      try {
        const res = await fetch("/api/edit-page", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model: currentModel, userMessage: text, mode: editMode }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json() as { actions: EditAction[]; summary: string };
        actions = data.actions ?? [];
        summary = data.summary ?? "";
      } catch {
        const mock = getClientMockEditResponse(text, editMode);
        actions = mock.actions;
        summary = mock.summary;
      }
    }

    const newModel = applyEditActions(currentModel, actions);
    pushHistory(newModel, text.slice(0, 40));
    setMessages((m) => [...m, { role: "assistant", text: summary || "Done! The page has been updated." }]);
    setLoading(false);
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  }

  function undo() {
    if (historyPointer > 0) {
      setHistoryPointer((p) => p - 1);
      setIframeKey((k) => k + 1);
    }
  }

  function redo() {
    if (historyPointer < history.length - 1) {
      setHistoryPointer((p) => p + 1);
      setIframeKey((k) => k + 1);
    }
  }

  function downloadHtml() {
    const html = pageModelToHtml(currentModel);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "landing-page.html";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function downloadLiquid() {
    const { generateShopifySection } = await import("@/utils/generateShopifySection");
    // Reconstruct a minimal LandingPage from the current model for the liquid generator
    const s = currentModel.sections;
    const partialLanding: LandingPage = {
      coreMassDesire: {
        statement: "",
        painPoints: s.problem.painPoints.map((p) => p.text),
        desiredOutcomes: [],
        proofElements: [],
      },
      hero: {
        trustBadge: s.hero.trustBadge,
        headline: s.hero.headline,
        subheadline: s.hero.subheadline,
        bullets: [],
        cta: s.hero.cta,
      },
      transformation: { paragraphs: [s.problem.body, s.solution.body], cta: s.solution.cta },
      valueProps: s.benefits.items.map((b) => ({ headline: b.headline, explanation: b.body, betterThan: b.betterThan })),
      howItWorks: [],
      testimonials: s.reviews.items.map((r) => ({ story: r.quote, result: r.result, timeframe: r.timeframe, name: r.name })),
      objections: { doesItWork: "", isSafe: "", worthThePrice: "", betterThanAlternatives: "" },
      finalClose: { headline: s.cta.headline, paragraphs: s.cta.paragraphs, cta: s.cta.cta },
    };
    const liquid = await generateShopifySection(partialLanding);
    const blob = new Blob([liquid], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "landing-page.liquid";
    a.click();
    URL.revokeObjectURL(url);
  }

  const canUndo = historyPointer > 0;
  const canRedo = historyPointer < history.length - 1;

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* ── Top bar ── */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-white flex-shrink-0 flex-wrap">
        {/* Mode selector */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          {(["copy", "design", "layout", "full"] as EditMode[]).map((m) => (
            <button
              key={m}
              onClick={() => setEditMode(m)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors capitalize ${
                editMode === m
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Undo/Redo */}
        <div className="flex items-center gap-1 ml-auto">
          <button
            onClick={undo}
            disabled={!canUndo}
            title="Undo"
            className="p-1.5 rounded text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 010 16H3m0-6l-4-4 4-4" />
            </svg>
          </button>
          <span className="text-xs text-gray-400 tabular-nums">{historyPointer + 1}/{history.length}</span>
          <button
            onClick={redo}
            disabled={!canRedo}
            title="Redo"
            className="p-1.5 rounded text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 000 16h10m0-6l4-4-4-4" />
            </svg>
          </button>
        </div>

        {/* Download buttons */}
        <button
          onClick={downloadHtml}
          className="px-3 py-1.5 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
        >
          Download HTML
        </button>
        <button
          onClick={() => void downloadLiquid()}
          className="px-3 py-1.5 text-xs font-medium bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg transition-colors"
        >
          Download .liquid
        </button>
      </div>

      {/* ── Main area ── */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* ── Preview pane (60%) ── */}
        <div className="w-3/5 flex-shrink-0 border-r border-gray-200 bg-gray-100">
          <iframe
            key={iframeKey}
            srcDoc={iframeSrcdoc}
            className="w-full h-full border-0"
            title="Landing Page Preview"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>

        {/* ── Chat pane (40%) ── */}
        <div className="flex-1 flex flex-col min-h-0 bg-white">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                )}
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white rounded-tr-sm"
                      : "bg-gray-100 text-gray-800 rounded-tl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {loading && (
              <div className="flex gap-2 justify-start">
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Suggested prompts */}
          {!loading && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {SUGGESTED_PROMPTS[editMode].slice(0, 3).map((p) => (
                <button
                  key={p}
                  onClick={() => { setInput(p); textareaRef.current?.focus(); }}
                  className="text-xs px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors truncate max-w-[180px]"
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex gap-2 items-end">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Tell me what to change (${editMode} mode)…`}
                rows={2}
                className="flex-1 resize-none text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                onClick={() => void sendMessage()}
                disabled={!input.trim() || loading}
                className="p-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-1.5 text-center">Enter to send · Shift+Enter for new line</p>
          </div>
        </div>
      </div>
    </div>
  );
}
