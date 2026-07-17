export type TopicSection =
  | {
      type: "overview";
      content: string[];
    }
  | {
      type: "concept";
      title: string;
      content: string[];
    }
  | {
      type: "code";
      title: string;
      language: "javascript" | "typescript" | "tsx";
      filename?: string;
      code: string;
    }
  | {
      type: "note";
      variant:
        "tip" | "warning" | "best-practice" | "interview" | "performance";
      title: string;
      content: string;
    }
  | {
      type: "interview";
      questions: {
        question: string;
        answer: string;
        difficulty: "Easy" | "Medium" | "Hard";
      }[];
    }
  | {
      type: "summary";
      points: string[];
    };

export type PlaygroundTopic = {
  slug: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  estimatedReadTime: string;
  tags: string[];
  sections: TopicSection[];
};
