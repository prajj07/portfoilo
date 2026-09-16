/** Layers shown in the System section + hero 3D — only domains backed by existing work. */
export const systemLayers = [
  {
    id: "product",
    label: "PRODUCT",
    detail: "Requirements, workflows, and features that have to work for real users.",
  },
  {
    id: "mobile",
    label: "MOBILE",
    detail: "Flutter clients for iOS and Android in production product flows.",
  },
  {
    id: "web",
    label: "WEB",
    detail: "React and Next.js interfaces for dashboards and product surfaces.",
  },
  {
    id: "backend",
    label: "BACKEND",
    detail: "FastAPI and Node services, REST APIs, auth, and business logic.",
  },
  {
    id: "data",
    label: "DATA",
    detail: "PostgreSQL, Redis, and queues for durable state and async work.",
  },
  {
    id: "ai",
    label: "AI",
    detail: "Gemini / LLM APIs wired into product features — not training models.",
  },
  {
    id: "cloud",
    label: "CLOUD",
    detail: "AWS, Docker, Firebase notifications, and operational delivery.",
  },
] as const;

export const systemHeadline = {
  number: "01",
  title: "SYSTEM",
  display: "SOFTWARE IS A\nCONNECTED THING.",
  body: "I work across the stack where products actually live — interfaces, APIs, data, cloud, and LLM-powered features — and how those pieces connect under real constraints.",
  arc: "IDEA → PRODUCT → SYSTEM → PRODUCTION",
} as const;

/** Compact tech context — replaces a traditional skills grid. */
export const buildingWith = [
  {
    area: "WEB",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    area: "MOBILE",
    items: ["Flutter"],
  },
  {
    area: "BACKEND",
    items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs"],
  },
  {
    area: "DATA",
    items: ["PostgreSQL", "MySQL", "Redis", "RabbitMQ"],
  },
  {
    area: "CLOUD",
    items: ["AWS", "Docker", "Firebase", "Grafana"],
  },
  {
    area: "AI",
    items: ["LLM APIs", "Gemini", "Prompt Engineering"],
  },
] as const;
