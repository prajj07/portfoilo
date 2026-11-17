import type { ClientProject } from "./projects";

/** Surfaces derived only from listed technologies / highlights. */
export function projectSurfaces(project: ClientProject): string[] {
  const tech = new Set(project.technologies.map((t) => t.toLowerCase()));
  const highlights = project.highlights.join(" ").toLowerCase();
  const surfaces: string[] = [];

  if (tech.has("flutter") || highlights.includes("mobile")) surfaces.push("MOBILE");
  if (
    tech.has("next.js") ||
    tech.has("react") ||
    tech.has("typescript")
  ) {
    surfaces.push("WEB");
  }
  if (
    tech.has("fastapi") ||
    tech.has("node.js") ||
    tech.has("python") ||
    tech.has("rest apis")
  ) {
    surfaces.push("BACKEND");
  }
  if (tech.has("gemini") || tech.has("llm") || highlights.includes("llm")) {
    surfaces.push("AI");
  }
  if (
    highlights.includes("real-time") ||
    highlights.includes("realtime") ||
    project.title.toLowerCase().includes("real-time")
  ) {
    surfaces.push("REALTIME");
  }
  if (
    tech.has("postgresql") ||
    tech.has("redis") ||
    tech.has("rabbitmq")
  ) {
    surfaces.push("DATA");
  }
  if (tech.has("aws") || tech.has("docker") || tech.has("firebase")) {
    surfaces.push("CLOUD");
  }

  return surfaces;
}

export type ArchNode = {
  id: string;
  label: string;
  detail: string;
  x: number;
  y: number;
};

export type ArchEdge = { from: string; to: string };

/** Compact architecture graphs from known project facts — no secret internals. */
export function projectArchitecture(project: ClientProject): {
  nodes: ArchNode[];
  edges: ArchEdge[];
} {
  if (project.title.includes("AI-Powered Mobile")) {
    return {
      nodes: [
        { id: "mobile", label: "MOBILE", detail: "Flutter iOS / Android clients", x: 50, y: 8 },
        { id: "api", label: "API", detail: "FastAPI / REST", x: 50, y: 28 },
        { id: "auth", label: "AUTH", detail: "Auth + Google Sign-In", x: 18, y: 52 },
        { id: "ai", label: "AI", detail: "Gemini / LLM features", x: 50, y: 52 },
        { id: "realtime", label: "REALTIME", detail: "Sessions & communication", x: 82, y: 52 },
        { id: "data", label: "DATA", detail: "PostgreSQL", x: 35, y: 76 },
        { id: "cloud", label: "CLOUD", detail: "AWS · Docker · Firebase", x: 65, y: 76 },
      ],
      edges: [
        { from: "mobile", to: "api" },
        { from: "api", to: "auth" },
        { from: "api", to: "ai" },
        { from: "api", to: "realtime" },
        { from: "auth", to: "data" },
        { from: "ai", to: "data" },
        { from: "realtime", to: "cloud" },
        { from: "data", to: "cloud" },
      ],
    };
  }

  return {
    nodes: [
      { id: "web", label: "WEB", detail: "Next.js / React / TypeScript", x: 50, y: 10 },
      { id: "api", label: "API", detail: "FastAPI · Node · REST", x: 50, y: 32 },
      { id: "channels", label: "CHANNELS", detail: "WhatsApp · RCS", x: 18, y: 55 },
      { id: "async", label: "ASYNC", detail: "RabbitMQ", x: 50, y: 55 },
      { id: "cache", label: "CACHE", detail: "Redis workflows", x: 82, y: 55 },
      { id: "data", label: "DATA", detail: "PostgreSQL", x: 35, y: 78 },
      { id: "ops", label: "OPS", detail: "Dockerized services", x: 65, y: 78 },
    ],
    edges: [
      { from: "web", to: "api" },
      { from: "api", to: "channels" },
      { from: "api", to: "async" },
      { from: "api", to: "cache" },
      { from: "async", to: "data" },
      { from: "cache", to: "data" },
      { from: "data", to: "ops" },
    ],
  };
}
