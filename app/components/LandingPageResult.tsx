"use client";

import { useState } from "react";
import { LandingPage } from "@/app/api/generate-landing/route";
import CopyButton from "./CopyButton";

interface LandingPageResultProps {
  landing: LandingPage;
  onRegenerate: () => void;
}

function Section({
  id,
  label,
  badge,
  color,
  children,
  copyText,
}: {
  id: string;
  label: string;
  badge?: string;
  color: string;
  children: React.ReactNode;
  copyText: string;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" id={id}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 flex items-center gap-3"
      >
        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${color}`}>{badge || label}</span>
        <span className="flex-1 text-sm font-semibold text-gray-700">{label}</span>
        <CopyButton text={copyText} label="Copy Section" />
        <div className={`transition-transform duration-200 ml-1 ${open ? "rotate-180" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>
      {open && <div className="border-t border-gray-50 px-6 pb-6 pt-5">{children}</div>}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">{label}</span>
        <CopyButton
          text={value}
          label="Copy"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <p className="text-sm text-gray-800 leading-relaxed bg-gray-50 rounded-xl px-4 py-3">{value}</p>
    </div>
  );
}

function ListField({ label, items }: { label: string; items: string[] }) {
  const text = items.join("\n");
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">{label}</span>
        <CopyButton text={text} label="Copy" className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-gray-800 leading-relaxed bg-gray-50 rounded-xl px-4 py-2.5 flex gap-2">
            <span className="text-gray-400 flex-shrink-0">{i + 1}.</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function buildSectionCopy(label: string, content: Record<string, unknown>): string {
  const lines: string[] = [`=== ${label.toUpperCase()} ===`, ""];
  for (const [k, v] of Object.entries(content)) {
    if (Array.isArray(v)) {
      lines.push(`${k.toUpperCase()}:`);
      v.forEach((item, i) => lines.push(`  ${i + 1}. ${item}`));
    } else if (typeof v === "string") {
      lines.push(`${k.toUpperCase()}:`);
      lines.push(`  ${v}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

function buildFullCopy(landing: LandingPage): string {
  const sections: string[] = [];

  sections.push(`=== CORE MASS DESIRE ===
${landing.coreMassDesire.statement}

Pain Points:
${landing.coreMassDesire.painPoints.map((p, i) => `${i + 1}. ${p}`).join("\n")}

Desired Outcomes:
${landing.coreMassDesire.desiredOutcomes.map((d, i) => `${i + 1}. ${d}`).join("\n")}

Proof Elements:
${landing.coreMassDesire.proofElements.map((p, i) => `${i + 1}. ${p}`).join("\n")}`);

  sections.push(`=== HERO SECTION ===
${landing.hero.trustBadge}

HEADLINE: ${landing.hero.headline}
SUBHEADLINE: ${landing.hero.subheadline}

BULLETS:
${landing.hero.bullets.map((b) => `• ${b}`).join("\n")}

CTA: ${landing.hero.cta}`);

  sections.push(`=== RESULTS / TRANSFORMATION ===
${landing.transformation.paragraphs.join("\n\n")}

CTA: ${landing.transformation.cta}`);

  sections.push(`=== VALUE PROPOSITIONS ===
${landing.valueProps.map((vp, i) => `${i + 1}. ${vp.headline}\n${vp.explanation}\nBetter than alternatives: ${vp.betterThan}`).join("\n\n")}`);

  sections.push(`=== HOW IT WORKS ===
${landing.howItWorks.map((s) => `Step ${s.step}: ${s.name}\n${s.explanation}\nVisual: ${s.visualDirection}`).join("\n\n")}`);

  sections.push(`=== SOCIAL PROOF ===
${landing.testimonials.map((t, i) => `${i + 1}. "${t.story}"\nResult: ${t.result}\nTimeframe: ${t.timeframe}\n— ${t.name}`).join("\n\n")}`);

  sections.push(`=== OBJECTION HANDLING ===
Does it work? ${landing.objections.doesItWork}

Is it safe? ${landing.objections.isSafe}

Worth the price? ${landing.objections.worthThePrice}

Better than alternatives? ${landing.objections.betterThanAlternatives}`);

  sections.push(`=== FINAL CLOSE ===
${landing.finalClose.headline}

${landing.finalClose.paragraphs.join("\n\n")}

CTA: ${landing.finalClose.cta}`);

  return sections.join("\n\n---\n\n");
}

export default function LandingPageResult({ landing, onRegenerate }: LandingPageResultProps) {
  const fullCopy = buildFullCopy(landing);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Landing Page Copy</h2>
          <p className="text-gray-500 text-sm mt-1">7 sections · Ready to use</p>
        </div>
        <div className="flex items-center gap-3">
          <CopyButton text={fullCopy} label="Copy All Sections" />
          <button
            onClick={onRegenerate}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
            Regenerate
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* 1. Core Mass Desire */}
        <Section
          id="lp-desire"
          label="Core Mass Desire"
          badge="Strategy"
          color="bg-purple-50 text-purple-700"
          copyText={buildSectionCopy("Core Mass Desire", {
            Statement: landing.coreMassDesire.statement,
            "Pain Points": landing.coreMassDesire.painPoints,
            "Desired Outcomes": landing.coreMassDesire.desiredOutcomes,
            "Proof Elements": landing.coreMassDesire.proofElements,
          })}
        >
          <div className="space-y-5">
            <Field label="Core Desire Statement" value={landing.coreMassDesire.statement} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ListField label="Pain Points" items={landing.coreMassDesire.painPoints} />
              <ListField label="Desired Outcomes" items={landing.coreMassDesire.desiredOutcomes} />
              <ListField label="Proof Elements" items={landing.coreMassDesire.proofElements} />
            </div>
          </div>
        </Section>

        {/* 2. Hero */}
        <Section
          id="lp-hero"
          label="Hero Section"
          badge="1"
          color="bg-blue-50 text-blue-700"
          copyText={`${landing.hero.trustBadge}\n\n${landing.hero.headline}\n\n${landing.hero.subheadline}\n\n${landing.hero.bullets.map((b) => `• ${b}`).join("\n")}\n\nCTA: ${landing.hero.cta}`}
        >
          <div className="space-y-4">
            <Field label="Trust Badge" value={landing.hero.trustBadge} />
            <Field label="Headline" value={landing.hero.headline} />
            <Field label="Subheadline" value={landing.hero.subheadline} />
            <ListField label="Benefit Bullets" items={landing.hero.bullets} />
            <Field label="CTA" value={landing.hero.cta} />
          </div>
        </Section>

        {/* 3. Transformation */}
        <Section
          id="lp-transformation"
          label="Results / Transformation"
          badge="2"
          color="bg-emerald-50 text-emerald-700"
          copyText={`${landing.transformation.paragraphs.join("\n\n")}\n\nCTA: ${landing.transformation.cta}`}
        >
          <div className="space-y-4">
            {landing.transformation.paragraphs.map((p, i) => (
              <Field key={i} label={i === 0 ? "Before State" : i === 1 ? "The Shift" : "After State"} value={p} />
            ))}
            <Field label="CTA" value={landing.transformation.cta} />
          </div>
        </Section>

        {/* 4. Value Props */}
        <Section
          id="lp-valueprops"
          label="Value Propositions"
          badge="3"
          color="bg-orange-50 text-orange-700"
          copyText={landing.valueProps.map((vp) => `${vp.headline}\n${vp.explanation}\n${vp.betterThan}`).join("\n\n---\n\n")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {landing.valueProps.map((vp, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 group relative">
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CopyButton text={`${vp.headline}\n${vp.explanation}\n${vp.betterThan}`} label="Copy" />
                </div>
                <p className="font-semibold text-gray-900 text-sm mb-2">{vp.headline}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{vp.explanation}</p>
                <p className="text-xs text-gray-500 italic border-t border-gray-200 pt-2.5">{vp.betterThan}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. How It Works */}
        <Section
          id="lp-howitworks"
          label="How It Works"
          badge="4"
          color="bg-indigo-50 text-indigo-700"
          copyText={landing.howItWorks.map((s) => `Step ${s.step}: ${s.name}\n${s.explanation}\nVisual: ${s.visualDirection}`).join("\n\n")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {landing.howItWorks.map((step) => (
              <div key={step.step} className="bg-gray-50 rounded-xl p-4 group relative">
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CopyButton text={`Step ${step.step}: ${step.name}\n${step.explanation}\nVisual: ${step.visualDirection}`} label="Copy" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </span>
                  <span className="font-semibold text-gray-900 text-sm">{step.name}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{step.explanation}</p>
                <p className="text-xs text-gray-400 flex items-start gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                  </svg>
                  {step.visualDirection}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* 6. Social Proof */}
        <Section
          id="lp-proof"
          label="Social Proof"
          badge="5"
          color="bg-yellow-50 text-yellow-700"
          copyText={landing.testimonials.map((t) => `"${t.story}"\n\nResult: ${t.result}\nTimeframe: ${t.timeframe}\n— ${t.name}`).join("\n\n---\n\n")}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {landing.testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 group relative">
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CopyButton text={`"${t.story}"\n\nResult: ${t.result}\nTimeframe: ${t.timeframe}\n— ${t.name}`} label="Copy" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-3">"{t.story}"</p>
                <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-lg px-2.5 py-1 inline-block mb-2">
                  {t.result}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs font-medium text-gray-600">— {t.name}</span>
                  <span className="text-xs text-gray-400">{t.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. Objections */}
        <Section
          id="lp-objections"
          label="Objection Handling"
          badge="6"
          color="bg-red-50 text-red-700"
          copyText={`Does it work?\n${landing.objections.doesItWork}\n\nIs it safe?\n${landing.objections.isSafe}\n\nWorth the price?\n${landing.objections.worthThePrice}\n\nBetter than alternatives?\n${landing.objections.betterThanAlternatives}`}
        >
          <div className="space-y-4">
            <Field label="Does it really work?" value={landing.objections.doesItWork} />
            <Field label="Is it safe?" value={landing.objections.isSafe} />
            <Field label="Is it worth the price?" value={landing.objections.worthThePrice} />
            <Field label="Why better than alternatives?" value={landing.objections.betterThanAlternatives} />
          </div>
        </Section>

        {/* 8. Final Close */}
        <Section
          id="lp-close"
          label="Final Close"
          badge="7"
          color="bg-gray-900 text-white"
          copyText={`${landing.finalClose.headline}\n\n${landing.finalClose.paragraphs.join("\n\n")}\n\nCTA: ${landing.finalClose.cta}`}
        >
          <div className="space-y-4">
            <Field label="Closing Headline" value={landing.finalClose.headline} />
            {landing.finalClose.paragraphs.map((p, i) => (
              <Field key={i} label={`Paragraph ${i + 1}`} value={p} />
            ))}
            <Field label="Final CTA" value={landing.finalClose.cta} />
          </div>
        </Section>
      </div>
    </div>
  );
}
