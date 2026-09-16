/** Floating hero field chips — domains/tech from existing work only. */
export type HeroChip = {
  id: string;
  label: string;
  /** Base position as % of hero width/height */
  x: number;
  y: number;
  /** Parallax strength (higher = more movement) */
  depth: number;
  variant: "teal" | "mint" | "slate" | "ivory" | "graphite";
};

export const heroChips: HeroChip[] = [
  { id: "mobile", label: "MOBILE", x: 6, y: 14, depth: 0.055, variant: "teal" },
  { id: "flutter", label: "FLUTTER", x: 82, y: 10, depth: 0.04, variant: "mint" },
  { id: "web", label: "WEB", x: 88, y: 38, depth: 0.05, variant: "slate" },
  { id: "api", label: "API", x: 72, y: 62, depth: 0.065, variant: "teal" },
  { id: "backend", label: "BACKEND", x: 12, y: 72, depth: 0.045, variant: "graphite" },
  { id: "data", label: "DATA", x: 4, y: 42, depth: 0.05, variant: "mint" },
  { id: "ai", label: "AI", x: 58, y: 8, depth: 0.035, variant: "ivory" },
  { id: "cloud", label: "CLOUD", x: 38, y: 88, depth: 0.04, variant: "slate" },
  { id: "fastapi", label: "FASTAPI", x: 92, y: 78, depth: 0.03, variant: "graphite" },
  { id: "postgres", label: "POSTGRES", x: 22, y: 28, depth: 0.038, variant: "teal" },
  { id: "realtime", label: "REALTIME", x: 48, y: 52, depth: 0.028, variant: "mint" },
  { id: "docker", label: "DOCKER", x: 66, y: 28, depth: 0.032, variant: "slate" },
];

/** Mobile subset — fewer chips for clarity */
export const heroChipsMobile = heroChips.filter((c) =>
  ["mobile", "web", "backend", "ai", "data", "cloud"].includes(c.id),
);
