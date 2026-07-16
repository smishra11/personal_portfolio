import type { PlaygroundTopic } from "@/types/playground";

export const javascriptTopics: PlaygroundTopic[] = [
  {
    slug: "closures",
    title: "Closures",
    description:
      "Understand lexical scope, closures, and real-world use cases through practical examples and visual explanations.",
    level: "Intermediate",
    estimatedReadTime: "12 min",
    tags: ["Scope", "Lexical Environment", "Functions", "Interview"],
  },
  {
    slug: "this-keyword",
    title: "this Keyword",
    description:
      "Explore how the 'this' keyword behaves across different execution contexts and invocation patterns.",
    level: "Intermediate",
    estimatedReadTime: "15 min",
    tags: ["this", "Execution Context", "call", "bind"],
  },
  {
    slug: "event-loop",
    title: "Event Loop",
    description:
      "Visualize the JavaScript runtime, call stack, Web APIs, task queue, and microtask queue.",
    level: "Advanced",
    estimatedReadTime: "20 min",
    tags: ["Runtime", "Call Stack", "Microtasks", "Async"],
  },
  {
    slug: "promises",
    title: "Promises",
    description:
      "Master asynchronous programming using Promises, chaining, and robust error handling.",
    level: "Intermediate",
    estimatedReadTime: "15 min",
    tags: ["Promise", "Async", "then", "catch"],
  },
  {
    slug: "async-await",
    title: "Async / Await",
    description:
      "Write cleaner asynchronous JavaScript while understanding how async functions work internally.",
    level: "Intermediate",
    estimatedReadTime: "15 min",
    tags: ["Async", "Await", "Promise", "Error Handling"],
  },
  {
    slug: "call-apply-bind",
    title: "call / apply / bind",
    description:
      "Understand explicit function invocation and context binding through practical examples.",
    level: "Intermediate",
    estimatedReadTime: "18 min",
    tags: ["call", "apply", "bind", "this"],
  },
  {
    slug: "prototype",
    title: "Prototype",
    description:
      "Learn how JavaScript's prototype chain powers inheritance and object behavior.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["Prototype", "Inheritance", "__proto__", "Objects"],
  },
  {
    slug: "currying",
    title: "Currying",
    description:
      "Transform functions into reusable, composable building blocks using currying techniques.",
    level: "Advanced",
    estimatedReadTime: "15 min",
    tags: ["Currying", "Functional Programming", "Closures"],
  },
  {
    slug: "memoization",
    title: "Memoization",
    description:
      "Optimize expensive computations using efficient caching techniques.",
    level: "Advanced",
    estimatedReadTime: "15 min",
    tags: ["Caching", "Performance", "Closures", "Optimization"],
  },
];
