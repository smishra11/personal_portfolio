import type { PlaygroundTopic } from "@/types/playground";

export const performanceTopics: PlaygroundTopic[] = [
  {
    slug: "memoization",
    title: "Memoization",
    description:
      "Reduce unnecessary computations using memoization techniques in JavaScript and React.",
    level: "Intermediate",
    estimatedReadTime: "15 min",
    tags: ["Memoization", "Caching", "Optimization"],
  },
  {
    slug: "virtualization",
    title: "Virtualization",
    description:
      "Render large datasets efficiently using windowing and virtualization strategies.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["Virtualization", "Lists", "Performance"],
  },
  {
    slug: "lazy-loading",
    title: "Lazy Loading",
    description:
      "Improve perceived performance by loading components, images, and resources only when required.",
    level: "Intermediate",
    estimatedReadTime: "12 min",
    tags: ["Lazy Loading", "Dynamic Import", "Code Splitting"],
  },
  {
    slug: "bundle-optimization",
    title: "Bundle Optimization",
    description:
      "Reduce bundle size using tree shaking, code splitting, and modern build techniques.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["Bundle", "Tree Shaking", "Webpack", "Vite"],
  },
  {
    slug: "image-optimization",
    title: "Image Optimization",
    description:
      "Optimize images for faster loading and improved Core Web Vitals.",
    level: "Beginner",
    estimatedReadTime: "10 min",
    tags: ["Images", "Next/Image", "LCP"],
  },
  {
    slug: "web-vitals",
    title: "Core Web Vitals",
    description:
      "Measure and improve LCP, CLS, and INP to build high-performing web applications.",
    level: "Advanced",
    estimatedReadTime: "20 min",
    tags: ["LCP", "CLS", "INP", "Performance"],
  },
];
