"use client";

import { useState } from "react";

export interface LandingFormData {
  productName: string;
  productDescription: string;
  customerReviews: string;
  targetAudience: string;
  price: string;
}

interface LandingPageFormProps {
  onGenerate: (data: LandingFormData) => void;
  loading: boolean;
}

export default function LandingPageForm({ onGenerate, loading }: LandingPageFormProps) {
  const [form, setForm] = useState<LandingFormData>({
    productName: "",
    productDescription: "",
    customerReviews: "",
    targetAudience: "",
    price: "",
  });

  const canSubmit = form.productName.trim() && form.productDescription.trim() && !loading;

  const set = (key: keyof LandingFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <div className="space-y-6">
        {/* Row 1 — Product Name + Price */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Product Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Posture Corrector Pro"
              value={form.productName}
              onChange={set("productName")}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Price <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. $39"
              value={form.price}
              onChange={set("price")}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Product Description */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Product Description <span className="text-red-400">*</span>
          </label>
          <textarea
            rows={3}
            placeholder="What does it do, how does it work, what makes it different?"
            value={form.productDescription}
            onChange={set("productDescription")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Customer Reviews */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Customer Reviews{" "}
            <span className="text-gray-400 font-normal">(optional — paste real reviews for best results)</span>
          </label>
          <textarea
            rows={4}
            placeholder={`Paste 3–10 customer reviews here. The more specific, the better.\n\nExample:\n"I tried everything for my back pain. This actually worked within 3 days." — Sarah K.\n"So easy to use and I already notice a difference." — Mike T.`}
            value={form.customerReviews}
            onChange={set("customerReviews")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Target Audience */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Target Audience <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Women 30–55 with chronic back pain, office workers"
            value={form.targetAudience}
            onChange={set("targetAudience")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          />
        </div>

        {/* Submit */}
        <button
          onClick={() => onGenerate(form)}
          disabled={!canSubmit}
          className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-black hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
              Writing landing page…
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Generate Landing Page
            </>
          )}
        </button>
      </div>

      {/* Hint bar */}
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-gray-400">
        {["Hero section", "Transformation story", "4 value props", "How it works", "Social proof", "Objection handling", "Final close"].map((label) => (
          <span key={label} className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
