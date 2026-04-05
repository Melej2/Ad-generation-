"use client";

import { useState } from "react";
import { FormData } from "@/app/page";

interface InputFormProps {
  onGenerate: (data: FormData) => void;
  loading: boolean;
}

export default function InputForm({ onGenerate, loading }: InputFormProps) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [productLink, setProductLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName.trim() || !productDescription.trim() || !targetAudience.trim()) return;
    onGenerate({ productName, productDescription, targetAudience, productLink });
  };

  const isValid = productName.trim() && productDescription.trim() && targetAudience.trim();

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Product Name */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-900">
                Product Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="e.g. Posture Corrector Pro"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Target Audience */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-900">
                Target Audience <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                placeholder="e.g. Office workers 25-45 with back pain"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          {/* Product Description */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-gray-900">
              Product Description <span className="text-red-400">*</span>
            </label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Describe your product, its key benefits, what problem it solves, price point, unique features..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
              required
            />
          </div>

          {/* Product Link (Optional) */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-gray-900">
              Product Link{" "}
              <span className="text-gray-400 font-normal text-xs">— optional</span>
            </label>
            <input
              type="url"
              value={productLink}
              onChange={(e) => setProductLink(e.target.value)}
              placeholder="https://yourstore.com/product"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Submit */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={!isValid || loading}
              className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2.5 ${
                isValid && !loading
                  ? "bg-black text-white hover:bg-gray-800 active:scale-[0.99]"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 border-t-white animate-spin"></div>
                  Generating...
                </>
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Generate Ads
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Hint bar */}
      <div className="px-8 py-3 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center text-xs font-bold">5</span>
          Video prompts
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 bg-violet-100 text-violet-600 rounded flex items-center justify-center text-xs font-bold">5</span>
          Image prompts
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          One-click copy
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Nano Banana ready
        </span>
      </div>
    </div>
  );
}
