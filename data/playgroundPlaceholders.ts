import type { PlaygroundTopic } from "@/types/playground";

export const placeholderSections: PlaygroundTopic["sections"] = [
  {
    type: "overview",
    content: [
      "This topic is currently under development.",
      "I'm preparing detailed explanations, practical examples, interview questions, and real-world use cases to make this a complete learning resource.",
    ],
  },
  {
    type: "code",
    title: "Example",
    language: "tsx",
    code: `// Practical examples will be added here

      function example() {
        console.log("Coming soon...");
      }`,
  },
  {
    type: "note",
    variant: "tip",
    title: "Remember",
    content:
      "This topic will include important tips, common mistakes, and best practices.",
  },
  {
    type: "interview",
    questions: [
      {
        question: "Interview questions are being prepared.",
        answer:
          "Detailed interview questions with answers will be available soon.",
        difficulty: "Easy",
      },
    ],
  },
];
