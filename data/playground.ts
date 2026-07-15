export type PlaygroundItem = {
  slug: string;
  title: string;
  description: string;
  status: "Coming Soon" | "In Progress" | "Live";
  tags: string[];
};

export const playground: PlaygroundItem[] = [
  {
    slug: "react-performance-lab",
    title: "React Performance Lab",
    description:
      "A collection of experiments exploring memoization, rendering behavior, virtualization, and performance optimization techniques in modern React applications.",
    status: "Coming Soon",
    tags: ["React", "Performance", "Memoization"],
  },
  {
    slug: "interactive-data-visualization",
    title: "Interactive Data Visualization",
    description:
      "Interactive dashboards and charts built with modern frontend technologies, focusing on usability, accessibility, and performance.",
    status: "Coming Soon",
    tags: ["Charts", "Dashboard", "UX"],
  },
  {
    slug: "component-lab",
    title: "Component Lab",
    description:
      "A growing library of reusable UI components, animations, and interaction patterns built from scratch.",
    status: "Coming Soon",
    tags: ["Design System", "Animation", "UI"],
  },
];
