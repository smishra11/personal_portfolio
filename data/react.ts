import type { PlaygroundTopic } from "@/types/playground";

export const reactTopics: PlaygroundTopic[] = [
  {
    category: "react",
    slug: "react-19",
    title: "React 19 Features",
    description:
      "Explore the major features introduced in React 19, including Actions, the use hook, improved hydration, metadata support, and better developer experience.",
    level: "Advanced",
    estimatedReadTime: "22 min",
    tags: ["React 19", "Actions", "use", "Hydration"],
    sections: [
      {
        type: "overview",
        content: [
          "React 19 introduces several improvements focused on simplifying data fetching, form handling, asset loading, and server rendering.",
          "Features like Actions, the use hook, metadata support, and improved hydration make building modern React applications more productive and performant.",
        ],
      },
      {
        type: "code",
        title: "Using the use Hook",
        language: "tsx",
        filename: "use.tsx",
        code: `import { use } from "react";

function User({ promise }) {
  const user = use(promise);

  return <h1>{user.name}</h1>;
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Key Takeaway",
        content:
          "React 19 focuses on reducing boilerplate while improving server rendering, asynchronous workflows, and the overall developer experience.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What is the purpose of the use hook?",
            answer:
              "The use hook allows components to directly read asynchronous resources such as Promises and Context during rendering.",
            difficulty: "Easy",
          },
          {
            question: "What are Actions in React 19?",
            answer:
              "Actions simplify asynchronous state updates, especially for form submissions, by integrating async logic with React's rendering model.",
            difficulty: "Medium",
          },
          {
            question: "Why is React 19 considered an important release?",
            answer:
              "It introduces features that simplify asynchronous programming, improve hydration, enhance server rendering, and reduce application boilerplate.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    category: "react",
    slug: "react-hooks",
    title: "React Hooks",
    description:
      "Learn how React Hooks allow functional components to manage state, side effects, context, and reusable logic without using class components.",
    level: "Intermediate",
    estimatedReadTime: "18 min",
    tags: ["Hooks", "React", "State", "Effects"],
    sections: [
      {
        type: "overview",
        content: [
          "Hooks were introduced in React 16.8 to allow functional components to use state and lifecycle features without class components.",
          "Built-in Hooks like useState, useEffect, useMemo, useCallback, useRef, and useContext solve common development problems while keeping components simpler and more reusable.",
        ],
      },
      {
        type: "code",
        title: "Using useState",
        language: "tsx",
        filename: "useState.tsx",
        code: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Best Practice",
        content:
          "Always follow the Rules of Hooks. Call Hooks only at the top level of a React component or a custom Hook, never inside loops, conditions, or nested functions.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "Why were Hooks introduced?",
            answer:
              "Hooks allow functional components to use state and lifecycle features without writing class components.",
            difficulty: "Easy",
          },
          {
            question: "What are the Rules of Hooks?",
            answer:
              "Hooks must be called only at the top level of React components or custom Hooks, and never conditionally.",
            difficulty: "Medium",
          },
          {
            question: "When should you create a custom Hook?",
            answer:
              "Create a custom Hook when multiple components need to share the same stateful logic.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    category: "react",
    slug: "react-rendering",
    title: "React Rendering",
    description:
      "Understand how React renders components, when re-renders happen, and techniques to optimize rendering performance.",
    level: "Intermediate",
    estimatedReadTime: "20 min",
    tags: ["Rendering", "React", "Performance"],
    sections: [
      {
        type: "overview",
        content: [
          "React re-renders a component whenever its state or props change. Understanding the rendering process helps build efficient applications.",
          "Not every render updates the DOM. React compares the new Virtual DOM with the previous one and updates only the necessary elements.",
        ],
      },
      {
        type: "code",
        title: "Component Re-render",
        language: "tsx",
        filename: "render.tsx",
        code: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("Component Rendered");

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Remember",
        content:
          "A React re-render is not necessarily expensive. Optimize rendering only when performance measurements indicate a real bottleneck.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What causes a React component to re-render?",
            answer:
              "State updates, prop changes, parent re-renders, and context updates can all trigger a re-render.",
            difficulty: "Easy",
          },
          {
            question: "What is the Virtual DOM?",
            answer:
              "The Virtual DOM is a lightweight JavaScript representation of the real DOM that React uses to efficiently determine updates.",
            difficulty: "Medium",
          },
          {
            question: "How can unnecessary re-renders be reduced?",
            answer:
              "Techniques include React.memo, useMemo, useCallback, state colocation, and avoiding unnecessary state updates.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    category: "react",
    slug: "server-components",
    title: "Server Components",
    description:
      "Understand how React Server Components improve performance by rendering components on the server and reducing client-side JavaScript.",
    level: "Advanced",
    estimatedReadTime: "20 min",
    tags: ["Server Components", "Next.js", "React"],
    sections: [
      {
        type: "overview",
        content: [
          "Server Components render on the server, allowing applications to send less JavaScript to the browser and improve initial page performance.",
          "In Next.js App Router, components are Server Components by default unless marked with the 'use client' directive.",
        ],
      },
      {
        type: "code",
        title: "Server Component Example",
        language: "tsx",
        filename: "page.tsx",
        code: `async function getUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Remember",
        content:
          "Use Server Components whenever client-side interactivity isn't required. This reduces bundle size and improves performance.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What are Server Components?",
            answer:
              "Server Components are rendered on the server and send rendered output instead of JavaScript to the client.",
            difficulty: "Easy",
          },
          {
            question: "When should you use a Client Component?",
            answer:
              "When you need browser APIs, event handlers, local state, or React hooks like useState and useEffect.",
            difficulty: "Medium",
          },
          {
            question: "Can a Server Component import a Client Component?",
            answer:
              "Yes. A Server Component can render a Client Component, but a Client Component cannot directly import a Server Component.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    category: "react",
    slug: "suspense",
    title: "Suspense",
    description:
      "Learn how React Suspense improves the loading experience by allowing components to wait for asynchronous resources while displaying fallback UI.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["Suspense", "React", "Loading", "Async"],
    sections: [
      {
        type: "overview",
        content: [
          "Suspense lets React display a fallback UI while waiting for asynchronous operations like lazy-loaded components or server-rendered data.",
          "It helps create smoother user experiences by coordinating loading states instead of manually managing loading flags throughout the application.",
        ],
      },
      {
        type: "code",
        title: "Basic Suspense Example",
        language: "tsx",
        filename: "suspense.tsx",
        code: `import { Suspense, lazy } from "react";

const UserProfile = lazy(() => import("./UserProfile"));

export default function App() {
  return (
    <Suspense fallback={<p>Loading profile...</p>}>
      <UserProfile />
    </Suspense>
  );
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Best Practice",
        content:
          "Keep Suspense boundaries small and place them around independent parts of the UI so users can interact with the rest of the page while data or components load.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What problem does Suspense solve?",
            answer:
              "It provides a declarative way to display fallback UI while components or data are loading.",
            difficulty: "Easy",
          },
          {
            question: "Can Suspense be used with React.lazy()?",
            answer:
              "Yes. React.lazy() relies on Suspense to display fallback content while the component bundle is downloaded.",
            difficulty: "Medium",
          },
          {
            question: "Does Suspense replace data-fetching libraries?",
            answer:
              "No. Suspense coordinates rendering during asynchronous work, while data-fetching libraries manage caching, retries, and synchronization.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    category: "react",
    slug: "react-compiler",
    title: "React Compiler",
    description:
      "Learn how the React Compiler automatically optimizes components by reducing unnecessary re-renders without manual memoization.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["React Compiler", "Performance", "Optimization"],
    sections: [
      {
        type: "overview",
        content: [
          "The React Compiler is a build-time optimization that automatically memoizes components and values when it is safe to do so.",
          "Its goal is to reduce the need for manual optimizations like useMemo, useCallback, and React.memo while keeping components easier to write and maintain.",
        ],
      },
      {
        type: "code",
        title: "Component Without Manual Memoization",
        language: "tsx",
        filename: "react-compiler.tsx",
        code: `function UserCard({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default function App() {
  const user = {
    name: "John",
    email: "john@example.com",
  };

  return <UserCard user={user} />;
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Best Practice",
        content:
          "Write clean, predictable React components first. Let the compiler optimize where possible instead of prematurely adding useMemo or useCallback everywhere.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What problem does the React Compiler solve?",
            answer:
              "It automatically applies safe optimizations to reduce unnecessary re-renders, minimizing the need for manual memoization.",
            difficulty: "Easy",
          },
          {
            question: "Does React Compiler replace useMemo and useCallback?",
            answer:
              "Not completely. It reduces the need for them in many cases, but some scenarios may still benefit from explicit memoization.",
            difficulty: "Medium",
          },
          {
            question: "Is the React Compiler a runtime feature?",
            answer:
              "No. It is a build-time compiler that analyzes components and applies optimizations during compilation.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    category: "react",
    slug: "context-api",
    title: "Context API",
    description:
      "Learn how React Context helps share data across components without manually passing props through every level of the component tree.",
    level: "Intermediate",
    estimatedReadTime: "18 min",
    tags: ["Context API", "React", "State Management"],
    sections: [
      {
        type: "overview",
        content: [
          "The Context API allows values such as themes, authentication, or user preferences to be shared across multiple components.",
          "It helps avoid prop drilling but should not replace all state management. Context is best for data that many components consume.",
        ],
      },
      {
        type: "code",
        title: "Using Context",
        language: "tsx",
        filename: "theme-context.tsx",
        code: `import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Button() {
  const theme = useContext(ThemeContext);

  return <button>{theme}</button>;
}

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Button />
    </ThemeContext.Provider>
  );
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Best Practice",
        content:
          "Keep Context focused on shared application state. Avoid storing frequently changing local state in Context to prevent unnecessary re-renders.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What problem does Context API solve?",
            answer:
              "It eliminates prop drilling by allowing data to be shared across deeply nested components.",
            difficulty: "Easy",
          },
          {
            question: "Does Context replace Redux or Zustand?",
            answer:
              "Not necessarily. Context is ideal for shared application state, while dedicated state management libraries provide advanced features for larger applications.",
            difficulty: "Medium",
          },
          {
            question: "Why can Context cause unnecessary re-renders?",
            answer:
              "When the Provider's value changes, all consuming components re-render unless the value is memoized or split into smaller contexts.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    category: "react",
    slug: "server-actions",
    title: "Server Actions",
    description:
      "Learn how React Server Actions simplify server-side mutations by allowing forms and user interactions to directly invoke server functions.",
    level: "Advanced",
    estimatedReadTime: "20 min",
    tags: ["Server Actions", "Next.js", "Forms"],
    sections: [
      {
        type: "overview",
        content: [
          "Server Actions allow client interactions, such as form submissions, to call server-side functions without creating traditional API endpoints.",
          "They simplify data mutations, improve type safety, and integrate naturally with React Server Components and the Next.js App Router.",
        ],
      },
      {
        type: "code",
        title: "Basic Server Action",
        language: "tsx",
        filename: "actions.ts",
        code: `"use server";

export async function createUser(formData: FormData) {
  const name = formData.get("name");

  console.log(name);
}`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Remember",
        content:
          "Server Actions should contain business logic and secure server-side operations. Never rely on client-side validation alone for sensitive actions.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What are Server Actions?",
            answer:
              "Server Actions are server-side functions that can be invoked directly from React components, commonly for handling form submissions and data mutations.",
            difficulty: "Easy",
          },
          {
            question: "Why use Server Actions instead of API routes?",
            answer:
              "They reduce boilerplate, improve type safety, and provide a more integrated developer experience for server-side mutations.",
            difficulty: "Medium",
          },
          {
            question: "Can Server Actions access databases directly?",
            answer:
              "Yes. Because they execute on the server, they can safely interact with databases, file systems, and other backend resources.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
];
