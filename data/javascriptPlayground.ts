export type JavaScriptTopic = {
  slug: string;
  title: string;
  description: string;
};

export const javascriptTopics: JavaScriptTopic[] = [
  {
    slug: "closures",
    title: "Closures",
    description:
      "Understand lexical scope, closures, and practical use cases through interactive examples.",
  },
  {
    slug: "this-keyword",
    title: "this Keyword",
    description:
      "Explore how 'this' behaves in different execution contexts and invocation patterns.",
  },
  {
    slug: "event-loop",
    title: "Event Loop",
    description:
      "Visualize the call stack, Web APIs, callback queue, and microtask queue.",
  },
  {
    slug: "promises",
    title: "Promises",
    description:
      "Learn asynchronous programming with Promises and chaining patterns.",
  },
  {
    slug: "async-await",
    title: "Async / Await",
    description:
      "Write clean asynchronous code and understand how async functions work.",
  },
  {
    slug: "call-apply-bind",
    title: "call / apply / bind",
    description: "Master function borrowing and explicit context binding.",
  },
  {
    slug: "prototype",
    title: "Prototype",
    description:
      "Explore JavaScript's prototype chain and object inheritance model.",
  },
  {
    slug: "currying",
    title: "Currying",
    description:
      "Transform functions into reusable and composable building blocks.",
  },
  {
    slug: "memoization",
    title: "Memoization",
    description: "Optimize expensive computations with caching techniques.",
  },
];
