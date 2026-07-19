import { javascriptTopics } from "./javascript";
import { reactTopics } from "./react";
import { performanceTopics } from "./performance";

export type PlaygroundItem = {
  slug: "javascript" | "react" | "performance";
  title: string;
  description: string;
  status: "Coming Soon" | "In Progress" | "Live";
  tags: string[];
  topicCount: number;
};

export const playground: PlaygroundItem[] = [
  {
    slug: "javascript",
    title: "JavaScript",
    description:
      "Interactive experiments exploring JavaScript internals, runtime behavior, and interview-focused concepts through practical examples.",
    status: "Live",
    topicCount: javascriptTopics.length,
    tags: ["Closures", "this", "Event Loop"],
  },
  {
    slug: "react",
    title: "React",
    description:
      "A collection of React experiments covering hooks, rendering, React 19 features, and modern architecture patterns.",
    status: "In Progress",
    topicCount: reactTopics.length,
    tags: ["React 19", "Hooks", "Rendering"],
  },
  {
    slug: "performance",
    title: "Performance",
    description:
      "Hands-on explorations of frontend performance, rendering optimization, memoization, virtualization, and bundle analysis.",
    status: "Coming Soon",
    topicCount: performanceTopics.length,
    tags: ["Memoization", "Virtualization", "Lazy Loading"],
  },
];
