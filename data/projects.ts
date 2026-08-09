export type ClientProject = {
  kind: "client";
  title: string;
  label: string;
  description: string;
  problem: string;
  role: string;
  contributions: string[];
  highlights: string[];
  technologies: string[];
};

export type PersonalProject = {
  kind: "personal";
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const clientProjects: ClientProject[] = [
  {
    kind: "client",
    title: "AI-Powered Mobile & Real-Time Communication Platform",
    label: "Selected Client Work",
    description:
      "Production mobile and backend platform covering customer/provider workflows, real-time sessions, scheduling, payments, notifications, and LLM-powered features.",
    problem:
      "Deliver reliable mobile and backend experiences for auth, sessions, payments, and verification without exposing client identity.",
    role: "Contributed across Flutter clients, FastAPI services, cloud integrations, and Gemini-powered application features.",
    contributions: [
      "Shipped cross-platform Flutter apps for iOS and Android.",
      "Built FastAPI endpoints and business logic with PostgreSQL/SQLAlchemy.",
      "Implemented authentication and Google Sign-In.",
      "Integrated Gemini/LLM APIs for identity verification and chatbot flows.",
      "Implemented Apple/Google in-app purchase and subscription workflows.",
      "Integrated real-time communication, scheduling, AWS S3/SES, Firebase notifications, and Docker-based infrastructure.",
    ],
    highlights: [
      "Mobile + API delivery",
      "LLM application features",
      "Payments & subscriptions",
      "Real-time sessions",
    ],
    technologies: [
      "Flutter",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "AWS",
      "Docker",
      "Firebase",
      "Gemini",
      "REST APIs",
      "In-App Purchases",
    ],
  },
  {
    kind: "client",
    title: "Omnichannel Communication & Messaging Platform",
    label: "Selected Client Work",
    description:
      "Communication platform connecting messaging channels with backend services for reliable processing and delivery.",
    problem:
      "Support multi-channel messaging with resilient async processing and maintainable full-stack services.",
    role: "Worked across Next.js frontend, FastAPI/Node backends, integrations, and infrastructure.",
    contributions: [
      "Built Next.js/React/TypeScript frontend features.",
      "Developed FastAPI and Node.js backend services.",
      "Integrated WhatsApp and RCS messaging channels.",
      "Implemented REST APIs and service integrations.",
      "Used RabbitMQ for async processing and Redis for caching/workflows.",
      "Worked with PostgreSQL and Dockerized services; improved backend reliability through debugging.",
    ],
    highlights: [
      "Channel integrations",
      "Async messaging",
      "Redis workflows",
      "Full-stack delivery",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "REST APIs",
    ],
  },
];

export const personalProjects: PersonalProject[] = [
  {
    kind: "personal",
    title: "Travel Bookings",
    description:
      "Travel booking UI for searching flights, hotels, and car rentals.",
    technologies: ["React", "Tailwind CSS"],
    image: "/travel.jpg",
    liveUrl: "https://travel-booking-theta.vercel.app/",
    githubUrl: "https://github.com/prajj07/travel-booking",
  },
  {
    kind: "personal",
    title: "Dynamic Button Workflow",
    description:
      "Workflow builder for creating and managing customizable button-based flows.",
    technologies: ["React", "Tailwind CSS"],
    image: "/workflow.jpg",
    liveUrl: "https://task-ecru-gamma.vercel.app/",
    githubUrl: "https://github.com/prajj07/task",
  },
];
