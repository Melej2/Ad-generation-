import type { LandingPage } from "@/app/api/generate-landing/route";
import { landingToPageModel } from "@/utils/landingToPageModel";
import { pageModelToHtml } from "@/utils/pageModelToHtml";

export function generateHtmlPreview(landing: LandingPage): string {
  return pageModelToHtml(landingToPageModel(landing));
}
