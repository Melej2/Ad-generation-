export type RatingLabel = "Winner" | "Test" | "Trash";

export interface VariationRating {
  variationId: string;
  rating: RatingLabel;
  stars: number;
  timestamp: number;
  hook?: string;
  angle?: string;
}

export type RatingsStore = Record<string, VariationRating>;

function safeStorage(): RatingsStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem("adgen_ratings");
    return raw ? (JSON.parse(raw) as RatingsStore) : {};
  } catch {
    return {};
  }
}

export function getRatings(): RatingsStore {
  return safeStorage();
}

export function getRating(variationId: string): VariationRating | undefined {
  return safeStorage()[variationId];
}

export function saveRating(
  variationId: string,
  rating: RatingLabel,
  stars: number,
  hook?: string,
  angle?: string
): void {
  if (typeof window === "undefined") return;
  try {
    const store = safeStorage();
    store[variationId] = { variationId, rating, stars, timestamp: Date.now(), hook, angle };
    localStorage.setItem("adgen_ratings", JSON.stringify(store));
  } catch {
    // localStorage unavailable — silently ignore
  }
}

export function getMemoryContext(): string {
  if (typeof window === "undefined") return "";
  const store = safeStorage();
  const winners = Object.values(store)
    .filter((r) => r.rating === "Winner")
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5);
  if (winners.length === 0) return "";
  const lines = winners.map(
    (r) =>
      `- ${r.angle ?? "unknown"} angle (${r.stars}★): "${r.hook ?? "no hook recorded"}"`
  );
  return `Past winning ad patterns (use these as inspiration):\n${lines.join("\n")}`;
}
