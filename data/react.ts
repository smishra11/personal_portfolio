import type { PlaygroundTopic } from "@/types/playground";
import { placeholderSections } from "./playgroundPlaceholders";

export const reactTopics: PlaygroundTopic[] = [
  {
    slug: "react-19",
    title: "React 19",
    description:
      "Explore the latest React features including Actions, the use hook, and modern rendering improvements.",
    level: "Intermediate",
    estimatedReadTime: "20 min",
    tags: ["React 19", "Actions", "use", "Rendering"],
    sections: placeholderSections,
  },
  {
    slug: "hooks",
    title: "Hooks",
    description:
      "Master React Hooks, lifecycle behavior, dependency arrays, and custom hook patterns.",
    level: "Intermediate",
    estimatedReadTime: "20 min",
    tags: ["Hooks", "useEffect", "useMemo", "useCallback"],
    sections: placeholderSections,
  },
  {
    slug: "rendering",
    title: "Rendering",
    description:
      "Understand React rendering, reconciliation, batching, and component updates.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["Rendering", "Reconciliation", "Fiber"],
    sections: placeholderSections,
  },
  {
    slug: "server-components",
    title: "Server Components",
    description:
      "Learn how React Server Components simplify data fetching and improve application performance.",
    level: "Advanced",
    estimatedReadTime: "20 min",
    tags: ["RSC", "Next.js", "Server", "Streaming"],
    sections: placeholderSections,
  },
  {
    slug: "suspense",
    title: "Suspense",
    description:
      "Explore asynchronous rendering, loading states, and streaming UI with Suspense.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["Suspense", "Streaming", "Async"],
    sections: placeholderSections,
  },
  {
    slug: "react-compiler",
    title: "React Compiler",
    description:
      "Understand how the React Compiler automatically optimizes rendering performance.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["Compiler", "Optimization", "Memoization"],
    sections: placeholderSections,
  },
  {
    slug: "context-api",
    title: "Context API",
    description:
      "Share state efficiently while avoiding unnecessary re-renders.",
    level: "Intermediate",
    estimatedReadTime: "15 min",
    tags: ["Context", "State Management", "Provider"],
    sections: placeholderSections,
  },
  {
    slug: "server-actions",
    title: "Server Actions",
    description:
      "Build full-stack React applications using Next.js Server Actions.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["Server Actions", "Next.js", "Forms"],
    sections: placeholderSections,
  },
];
