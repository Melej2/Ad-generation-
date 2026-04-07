// ── Style overrides ────────────────────────────────────────────────────────
export interface StyleProps {
  backgroundColor?: string;
  color?: string;
  accentColor?: string;
  paddingTop?: string;
  paddingBottom?: string;
  [key: string]: string | undefined;
}

// ── Section definitions ────────────────────────────────────────────────────
export interface HeroSection {
  headline: string;
  subheadline: string;
  cta: string;
  trustBadge: string;
  trustLine: string;
  style: StyleProps;
  visible: boolean;
}

export interface TrustBadge {
  icon: string;
  text: string;
}

export interface TrustBarSection {
  badges: TrustBadge[];
  style: StyleProps;
  visible: boolean;
}

export interface PainPoint {
  text: string;
  icon: string;
}

export interface ProblemSection {
  heading: string;
  body: string;
  painPoints: PainPoint[];
  style: StyleProps;
  visible: boolean;
}

export interface SolutionSection {
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  style: StyleProps;
  visible: boolean;
}

export interface BenefitItem {
  icon: string;
  headline: string;
  body: string;
  betterThan: string;
}

export interface BenefitsSection {
  heading: string;
  items: BenefitItem[];
  style: StyleProps;
  visible: boolean;
}

export interface ReviewItem {
  stars: number;
  quote: string;
  result: string;
  name: string;
  timeframe: string;
}

export interface ReviewsSection {
  heading: string;
  ratingScore: string;
  ratingCount: string;
  items: ReviewItem[];
  style: StyleProps;
  visible: boolean;
}

export interface CtaSection {
  headline: string;
  paragraphs: string[];
  cta: string;
  trustLine: string;
  style: StyleProps;
  visible: boolean;
}

// ── Section key union ──────────────────────────────────────────────────────
export type SectionKey = "hero" | "trust_bar" | "problem" | "solution" | "benefits" | "reviews" | "cta";

// ── PageModel ──────────────────────────────────────────────────────────────
export interface PageModel {
  sections: {
    hero: HeroSection;
    trust_bar: TrustBarSection;
    problem: ProblemSection;
    solution: SolutionSection;
    benefits: BenefitsSection;
    reviews: ReviewsSection;
    cta: CtaSection;
  };
  sectionOrder: SectionKey[];
  meta: {
    productName: string;
    createdAt: string;
  };
}

// ── Edit actions ───────────────────────────────────────────────────────────
export interface UpdateTextAction {
  type: "update_text";
  target: string; // dot-notation, e.g. "hero.headline" or "benefits.items.0.headline"
  value: string;
}

export interface UpdateStyleAction {
  type: "update_style";
  target: string; // e.g. "hero"
  style: StyleProps;
}

export interface AddSectionAction {
  type: "add_section";
  key: SectionKey;
  position?: number;
}

export interface RemoveSectionAction {
  type: "remove_section";
  key: SectionKey;
}

export interface ReorderSectionAction {
  type: "reorder_section";
  key: SectionKey;
  direction: "up" | "down";
}

export interface ReplaceSectionAction {
  type: "replace_section";
  key: SectionKey;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
}

export type EditAction =
  | UpdateTextAction
  | UpdateStyleAction
  | AddSectionAction
  | RemoveSectionAction
  | ReorderSectionAction
  | ReplaceSectionAction;

// ── History ────────────────────────────────────────────────────────────────
export interface HistoryEntry {
  model: PageModel;
  timestamp: string;
  label: string;
}
