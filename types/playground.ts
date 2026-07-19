export type CodeLanguage = "javascript" | "typescript" | "tsx";

export type InterviewDifficulty = "Easy" | "Medium" | "Hard";
export type NoteVariant =
  "tip" | "warning" | "best-practice" | "interview" | "performance";

export type TopicSection =
  | {
      type: "overview";
      content: string[];
    }
  | {
      type: "code";
      title: string;
      language: CodeLanguage;
      filename?: string;
      code: string;
    }
  | {
      type: "note";
      title: string;
      variant: NoteVariant;
      content: string;
    }
  | {
      type: "interview";
      questions: {
        question: string;
        answer: string;
        difficulty: InterviewDifficulty;
      }[];
    };

export type PlaygroundCategory = "javascript" | "react" | "performance";

export type PlaygroundTopic = {
  category: PlaygroundCategory;
  slug: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  estimatedReadTime: string;
  tags: string[];
  sections: TopicSection[];
};
