export type PlaygroundTopic = {
  slug: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  estimatedReadTime: string;
  tags: string[];
};
