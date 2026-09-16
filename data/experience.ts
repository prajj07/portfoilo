export const experiences = [
  {
    role: "FDE — Forward Deployed Engineer 1",
    company: "Dataequinox",
    period: "2026 — Present",
    summary:
      "Customer-facing engineer working inside client environments to turn real operational needs into production software — across mobile, web, backends, integrations, and LLM-powered features.",
    responsibilities: [
      "Embed with clients to translate business and operational problems into shipped software on Dataequinox platforms.",
      "Own delivery end to end: requirements, implementation, integration, and deployment in live environments.",
      "Build and customize Flutter apps, React/Next.js interfaces, and Python FastAPI services for client workflows.",
      "Ship authentication, scheduling, payments, messaging, and Gemini/LLM features into production.",
      "Feed field edge cases and client requirements back into product and engineering, and debug live reliability issues.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Flutter",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "AWS",
      "Docker",
      "Gemini",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Dataequinox",
    period: "2025 — 2026",
    summary:
      "Production delivery across Flutter, React/Next.js, and Python FastAPI — authentication, scheduling, payments, and LLM-backed product features.",
    responsibilities: [
      "Contributed to client-facing mobile and web features with FastAPI backends.",
      "Worked with PostgreSQL, Redis, RabbitMQ, Docker, and AWS in shipping cycles.",
      "Supported Gemini/LLM integrations and production debugging.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Flutter",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "AWS",
      "Docker",
      "Gemini",
    ],
  },
] as const;

export const selectedClientWork = [
  {
    title: "AI-Powered Mobile & Real-Time Communication Platform",
    summary:
      "Mobile + backend platform for workflows, sessions, payments, and LLM-powered features.",
  },
  {
    title: "Omnichannel Communication & Messaging Platform",
    summary:
      "Messaging platform with channel integrations, async processing, and full-stack services.",
  },
] as const;

export const education = {
  degree: "B.Tech — Computer Science",
  school: "School of Engineering, CUSAT",
} as const;

export const leadership = {
  org: "ACES, CUSAT",
  roles: ["Secretary", "Vice President"],
} as const;
