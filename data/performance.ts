import type { PlaygroundTopic } from "@/types/playground";

export const performanceTopics: PlaygroundTopic[] = [
  {
    category: "performance",
    slug: "memoization",
    title: "Memoization",
    description:
      "Learn how memoization improves application performance by caching expensive computations and preventing unnecessary recalculations.",
    level: "Intermediate",
    estimatedReadTime: "15 min",
    tags: ["Memoization", "Performance", "Caching"],
    sections: [
      {
        type: "overview",
        content: [
          "Memoization is an optimization technique that stores the result of expensive function calls and reuses the cached value for identical inputs.",
          "In React, memoization helps reduce unnecessary computations and renders using tools like React.memo, useMemo, and useCallback.",
        ],
      },
      {
        type: "code",
        title: "Using useMemo",
        language: "tsx",
        filename: "memoization.tsx",
        code: `import { useMemo, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return count * 100;
  }, [count]);

  return (
    <>
      <p>{expensiveValue}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Best Practice",
        content:
          "Only memoize computations that are actually expensive. Unnecessary memoization can make code harder to understand without improving performance.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What is memoization?",
            answer:
              "Memoization caches computed values so repeated calculations with the same inputs can reuse previous results.",
            difficulty: "Easy",
          },
          {
            question: "When should useMemo be used?",
            answer:
              "Use useMemo for expensive calculations whose results can be reused across renders when dependencies haven't changed.",
            difficulty: "Medium",
          },
          {
            question: "Can overusing useMemo hurt performance?",
            answer:
              "Yes. Memoization has its own overhead, so it should only be used when measurements indicate a meaningful benefit.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    category: "performance",
    slug: "virtualization",
    title: "Virtualization",
    description:
      "Learn how virtualization improves rendering performance by displaying only the visible portion of large lists or tables.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["Virtualization", "Rendering", "Performance"],
    sections: [
      {
        type: "overview",
        content: [
          "Rendering thousands of DOM elements at once can significantly slow down an application.",
          "Virtualization renders only the items currently visible in the viewport while efficiently reusing DOM nodes during scrolling.",
        ],
      },
      {
        type: "code",
        title: "Virtualized List",
        language: "tsx",
        filename: "virtualization.tsx",
        code: `import { FixedSizeList } from "react-window";

const Row = ({ index, style }) => (
  <div style={style}>Item {index}</div>
);

export default function App() {
  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={10000}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Best Practice",
        content:
          "Use virtualization for long lists, tables, logs, and feeds with hundreds or thousands of items. For small lists, the added complexity usually isn't worthwhile.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What problem does virtualization solve?",
            answer:
              "It reduces rendering work by displaying only the visible items instead of every item in a large collection.",
            difficulty: "Easy",
          },
          {
            question: "When should virtualization be used?",
            answer:
              "When rendering large datasets where creating all DOM nodes at once would negatively impact performance.",
            difficulty: "Medium",
          },
          {
            question: "Name a popular React library for virtualization.",
            answer:
              "react-window is a popular lightweight library. Another common choice is TanStack Virtual.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    category: "performance",
    slug: "lazy-loading",
    title: "Lazy Loading",
    description:
      "Understand how lazy loading improves performance by loading components and resources only when they are needed.",
    level: "Intermediate",
    estimatedReadTime: "16 min",
    tags: ["Lazy Loading", "React", "Performance"],
    sections: [
      {
        type: "overview",
        content: [
          "Lazy loading reduces the initial JavaScript bundle by loading components only when they are required.",
          "Combined with React Suspense, lazy loading improves page load times and creates a smoother user experience.",
        ],
      },
      {
        type: "code",
        title: "React.lazy Example",
        language: "tsx",
        filename: "lazy-loading.tsx",
        code: `import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Remember",
        content:
          "Lazy load large routes, dashboards, and rarely visited pages. Avoid lazy loading small components that are needed immediately on page load.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What is lazy loading?",
            answer:
              "Lazy loading delays downloading code or resources until they are actually needed.",
            difficulty: "Easy",
          },
          {
            question: "Which React API supports lazy loading?",
            answer:
              "React.lazy works together with Suspense to load components asynchronously.",
            difficulty: "Medium",
          },
          {
            question: "Does lazy loading always improve performance?",
            answer:
              "Not always. Overusing it for small or frequently used components can increase loading delays and hurt the user experience.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    category: "performance",
    slug: "bundle-optimization",
    title: "Bundle Optimization",
    description:
      "Learn techniques to reduce JavaScript bundle size, improve loading performance, and deliver faster web applications.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["Bundle", "Performance", "Tree Shaking", "Code Splitting"],
    sections: [
      {
        type: "overview",
        content: [
          "Large JavaScript bundles increase download, parsing, and execution time, leading to slower page loads.",
          "Bundle optimization focuses on shipping only the code users need by using techniques such as code splitting, tree shaking, lazy loading, and removing unused dependencies.",
        ],
      },
      {
        type: "code",
        title: "Dynamic Import",
        language: "tsx",
        filename: "dynamic-import.tsx",
        code: `import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./Chart"), {
  loading: () => <p>Loading chart...</p>,
});

export default function Dashboard() {
  return <Chart />;
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Best Practice",
        content:
          "Regularly analyze your production bundle using tools like @next/bundle-analyzer or Lighthouse. Remove unused libraries and prefer importing only what you need.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What is bundle optimization?",
            answer:
              "Bundle optimization reduces the size of JavaScript sent to the browser to improve loading performance.",
            difficulty: "Easy",
          },
          {
            question: "What is tree shaking?",
            answer:
              "Tree shaking removes unused exports from the final production bundle during the build process.",
            difficulty: "Medium",
          },
          {
            question: "How does code splitting improve performance?",
            answer:
              "Code splitting divides an application into smaller chunks that are loaded only when required, reducing the initial bundle size.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    category: "performance",
    slug: "image-optimization",
    title: "Image Optimization",
    description:
      "Learn strategies for serving responsive, optimized images to improve page load performance and user experience.",
    level: "Intermediate",
    estimatedReadTime: "15 min",
    tags: ["Images", "Next.js", "Performance"],
    sections: [
      {
        type: "overview",
        content: [
          "Images are often the largest assets on a webpage. Optimizing them significantly reduces loading time and bandwidth usage.",
          "Modern frameworks like Next.js provide built-in image optimization, responsive sizing, lazy loading, and efficient image formats.",
        ],
      },
      {
        type: "code",
        title: "Using Next.js Image",
        language: "tsx",
        filename: "image.tsx",
        code: `import Image from "next/image";

export default function Profile() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={400}
      height={400}
      priority
    />
  );
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Best Practice",
        content:
          "Always provide accurate image dimensions, use responsive sizing, and reserve the priority prop for above-the-fold images to avoid delaying other critical resources.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "Why should developers use the Next.js Image component?",
            answer:
              "It automatically optimizes images through resizing, lazy loading, responsive delivery, and modern image formats.",
            difficulty: "Easy",
          },
          {
            question: "What is lazy loading for images?",
            answer:
              "Lazy loading delays loading off-screen images until they are about to enter the viewport.",
            difficulty: "Medium",
          },
          {
            question: "When should the priority prop be used?",
            answer:
              "Use priority only for important above-the-fold images, such as hero banners or logos, because it tells Next.js to preload them.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    category: "performance",
    slug: "core-web-vitals",
    title: "Core Web Vitals",
    description:
      "Understand the key performance metrics that measure loading speed, responsiveness, and visual stability of modern web applications.",
    level: "Intermediate",
    estimatedReadTime: "16 min",
    tags: ["Core Web Vitals", "LCP", "INP", "CLS"],
    sections: [
      {
        type: "overview",
        content: [
          "Core Web Vitals are user-centric metrics defined by Google to evaluate the real-world experience of a webpage.",
          "The primary metrics are Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). Optimizing them improves both user experience and search visibility.",
        ],
      },
      {
        type: "code",
        title: "Measuring Web Vitals in Next.js",
        language: "tsx",
        filename: "web-vitals.ts",
        code: `import { useReportWebVitals } from "next/web-vitals";

export function reportWebVitals(metric) {
  console.log(metric);
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Remember",
        content:
          "Focus on real-user metrics rather than only lab results. Use Lighthouse for debugging and real-user monitoring to understand production performance.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What are Core Web Vitals?",
            answer:
              "Core Web Vitals are performance metrics that measure loading speed, responsiveness, and visual stability.",
            difficulty: "Easy",
          },
          {
            question: "What does CLS measure?",
            answer:
              "CLS measures unexpected layout shifts that occur while a page is loading or updating.",
            difficulty: "Medium",
          },
          {
            question: "Why are Core Web Vitals important?",
            answer:
              "They help quantify user experience, guide performance improvements, and are considered as part of Google's page experience signals.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
];
