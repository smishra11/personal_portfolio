export type PlaygroundItem = {
  slug: string;
  title: string;
  description: string;
  status: "Coming Soon" | "In Progress" | "Live";
  tags: string[];
};

export const playground: PlaygroundItem[] = [
  {
    slug: "javascript",
    title: "JavaScript Playground",
    description:
      "Interactive experiments exploring JavaScript internals, runtime behavior, and interview-focused concepts through practical examples.",
    status: "Live",
    tags: ["Closures", "this", "Event Loop"],
  },
  {
    slug: "react",
    title: "React Playground",
    description:
      "A collection of React experiments covering hooks, rendering, React 19 features, and modern architecture patterns.",
    status: "In Progress",
    tags: ["React 19", "Hooks", "Rendering"],
  },
  {
    slug: "performance",
    title: "Performance Playground",
    description:
      "Hands-on explorations of frontend performance, rendering optimization, memoization, virtualization, and bundle analysis.",
    status: "Coming Soon",
    tags: ["Memoization", "Virtualization", "Lazy Loading"],
  },
];
