"use client";

import { useRef, useState } from "react";
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
  const [reviews, setReviews] = useState("");
  const [productImage, setProductImage] = useState<string | null>(null);
  const [imageFileName, setImageFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName.trim() || !productDescription.trim() || !targetAudience.trim()) return;
    onGenerate({ productName, productDescription, targetAudience, productLink, productImage: productImage ?? undefined, reviews: reviews || undefined });
  };

  function processFile(file: File) {
    if (!file.type.startsWith("image/")) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be under 5 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setProductImage(e.target?.result as string);
      setImageFileName(file.name);
    };
    reader.readAsDataURL(file);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) processFile(file);
    e.target.value = "";
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function removeImage() {
    setProductImage(null);
    setImageFileName("");
  }

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

          {/* Customer Reviews */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-gray-900">
              Customer Reviews{" "}
              <span className="text-gray-400 font-normal text-xs">— optional, improves hook quality</span>
            </label>
            <textarea
              value={reviews}
              onChange={(e) => setReviews(e.target.value)}
              placeholder="Paste 2-3 real customer reviews here... (e.g. &quot;This changed my life, I use it every morning&quot;)"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-gray-900">
              Product Image{" "}
              <span className="text-gray-400 font-normal text-xs">— optional, helps Claude generate more accurate prompts</span>
            </label>

            {productImage ? (
              /* Preview */
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={productImage}
                  alt="Product preview"
                  className="w-20 h-20 object-cover rounded-lg border border-gray-200 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{imageFileName}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Claude will analyse this image to write more accurate ad prompts</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Image ready
                    </span>
                    <button
                      type="button"
                      onClick={removeImage}
                      className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Drop zone */
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`w-full flex flex-col items-center justify-center gap-2.5 px-6 py-8 border-2 border-dashed rounded-xl transition-all cursor-pointer text-center ${
                  isDragging
                    ? "border-indigo-400 bg-indigo-50"
                    : "border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50/50"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isDragging ? "bg-indigo-100" : "bg-white border border-gray-200"}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDragging ? "#4F46E5" : "#9CA3AF"} strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm font-medium transition-colors ${isDragging ? "text-indigo-600" : "text-gray-700"}`}>
                    {isDragging ? "Drop it here" : "Drag & drop your product image"}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">or click to browse · JPG, PNG, WEBP · max 5 MB</p>
                </div>
              </button>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
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
                  Generate Ads{productImage ? " with Image" : ""}
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Hint bar */}
      <div className="px-8 py-3 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center text-xs font-bold">6</span>
          Angles × 2 variations
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
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          Vision-powered accuracy
        </span>
      </div>
    </div>
  );
}
