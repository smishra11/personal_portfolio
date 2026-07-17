import type { PlaygroundTopic } from "@/types/playground";

export const placeholderSections: PlaygroundTopic["sections"] = [
  {
    type: "overview",
    content: ["Coming soon..."],
  },
  {
    type: "code",
    title: "Example",
    language: "tsx",
    code: "// Coming soon...",
  },
  {
    type: "note",
    variant: "tip",
    title: "Remember",
    content: "Coming soon...",
  },
  {
    type: "interview",
    questions: [
      {
        question: "Coming soon...",
        answer: "Coming soon...",
        difficulty: "Easy",
      },
    ],
  },
];
