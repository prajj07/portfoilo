/**
 * Engineering decisions grounded in existing project/experience content.
 * Do not invent tradeoffs beyond what the repo already implies.
 */
export const thinkingEntries = [
  {
    id: "llm-apps",
    question: "HOW DO YOU ADD AI TO A PRODUCT WITHOUT OVERCLAIMING ML?",
    decision:
      "Integrate Gemini / LLM APIs into application features such as verification and chatbots.",
    why: "The work is framed as LLM application integration inside real product flows — not training custom models.",
    tradeoff:
      "You depend on provider APIs and prompt/application design instead of owning a trained model stack.",
  },
  {
    id: "async-messaging",
    question: "HOW DO YOU KEEP MULTI-CHANNEL MESSAGING RELIABLE?",
    decision:
      "Use RabbitMQ for async processing with Redis for caching and workflows alongside PostgreSQL-backed services.",
    why: "The omnichannel platform needed resilient processing across messaging channels, not only synchronous request/response paths.",
    tradeoff:
      "More moving parts to operate, but clearer separation between intake, processing, and delivery.",
  },
  {
    id: "full-lifecycle",
    question: "WHERE DOES ENGINEERING RESPONSIBILITY STOP?",
    decision:
      "Own delivery across clients, APIs, integrations, and live environments — especially in the Forward Deployed Engineer role.",
    why: "Existing work spans Flutter/React surfaces, FastAPI services, payments, messaging, cloud integrations, and production debugging.",
    tradeoff:
      "Broader context switching; stronger feedback from real operational constraints back into the product.",
  },
] as const;

export const thinkingHeadline = {
  number: "04",
  title: "THINKING",
  display: "I CARE ABOUT\nTHE DECISIONS\nBETWEEN THE CODE.",
  body: "Tools matter. The choices between them matter more — especially when software has to survive production.",
} as const;
