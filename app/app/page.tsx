"use client";

import { useState } from "react";
import InputForm from "@/components/InputForm";
import VideoAdCard from "@/components/VideoAdCard";
import ImageAdCard from "@/components/ImageAdCard";
import LandingPageForm, { LandingFormData } from "@/components/LandingPageForm";
import LandingPageResult from "@/components/LandingPageResult";
import { LandingPage } from "@/app/api/generate-landing/route";
import { generateShopifySection } from "@/utils/generateShopifySection";
import { generateHtmlPreview } from "@/utils/generateHtmlPreview";
import ChatEditor from "@/components/ChatEditor";

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
  productImage?: string; // base64 data URL
}
