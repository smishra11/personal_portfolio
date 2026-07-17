import type { PlaygroundTopic } from "@/types/playground";

export const javascriptTopics: PlaygroundTopic[] = [
  {
    slug: "closures",
    title: "Closures",
    description:
      "Learn how closures work in JavaScript, why they are powerful, and where they are used in real-world applications.",
    level: "Intermediate",
    estimatedReadTime: "12 min",
    tags: ["Closures", "Scope", "Functions", "Interview"],
    sections: [
      {
        type: "overview",
        content: [
          "A closure is created whenever a function remembers variables from its outer (lexical) scope even after the outer function has finished executing.",
          "Closures are one of the most important JavaScript concepts because they power data privacy, callbacks, event handlers, currying, memoization, and many modern JavaScript libraries.",
        ],
      },
      {
        type: "code",
        title: "Basic Closure Example",
        language: "javascript",
        filename: "closure.js",
        code: `function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Key Takeaway",
        content:
          "A closure captures variables, not their values. The inner function keeps a live reference to the variables defined in its lexical scope.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "A closure is a function that remembers variables from its outer lexical scope even after the outer function has finished execution.",
            difficulty: "Easy",
          },
          {
            question: "Give a real-world use case of closures.",
            answer:
              "Closures are commonly used for data encapsulation, memoization, event handlers, callbacks, currying, and module patterns.",
            difficulty: "Medium",
          },
          {
            question:
              "What is the difference between lexical scope and a closure?",
            answer:
              "Lexical scope determines where variables are accessible. A closure happens when a function preserves access to that lexical scope after the outer function has returned.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    slug: "this-keyword",
    title: "this Keyword",
    description:
      "Understand how the 'this' keyword works in different execution contexts and how JavaScript determines its value.",
    level: "Intermediate",
    estimatedReadTime: "15 min",
    tags: ["this", "Execution Context", "Arrow Functions", "Interview"],
    sections: [
      {
        type: "overview",
        content: [
          "The value of 'this' is determined by how a function is invoked, not where it is defined.",
          "Understanding 'this' is essential because it behaves differently in regular functions, arrow functions, object methods, constructors, and event handlers.",
        ],
      },
      {
        type: "code",
        title: "Object Method vs Regular Function",
        language: "javascript",
        filename: "this.js",
        code: `const person = {
  name: "John",

  greet() {
    console.log(this.name);
  },
};

person.greet(); // John

const greet = person.greet;

greet(); // undefined (strict mode)
`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Remember",
        content:
          "Never assume what 'this' is. Always determine it based on how the function is called.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "How is the value of 'this' determined?",
            answer:
              "It depends on how a function is invoked, not where it is declared.",
            difficulty: "Easy",
          },
          {
            question: "Why don't arrow functions have their own 'this'?",
            answer:
              "Arrow functions lexically inherit 'this' from their surrounding scope instead of creating a new binding.",
            difficulty: "Medium",
          },
          {
            question:
              "What are the default binding, implicit binding, explicit binding, and new binding?",
            answer:
              "These are the four primary rules JavaScript uses to determine the value of 'this'.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    slug: "event-loop",
    title: "Event Loop",
    description:
      "Understand how JavaScript handles asynchronous operations using the Call Stack, Web APIs, Callback Queue, Microtask Queue, and Event Loop.",
    level: "Intermediate",
    estimatedReadTime: "20 min",
    tags: ["Event Loop", "Call Stack", "Microtask", "Async"],
    sections: [
      {
        type: "overview",
        content: [
          "JavaScript is single-threaded, meaning it executes one piece of code at a time. The Event Loop enables asynchronous behavior without creating additional JavaScript threads.",
          "Understanding the Event Loop is essential for mastering Promises, async/await, timers, and browser performance.",
        ],
      },
      {
        type: "code",
        title: "Execution Order Example",
        language: "javascript",
        filename: "event-loop.js",
        code: `console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Remember",
        content:
          "Microtasks (Promises, queueMicrotask) always execute before macrotasks (setTimeout, setInterval) after the current call stack becomes empty.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "Is JavaScript single-threaded?",
            answer:
              "Yes. JavaScript executes code on a single call stack, while the browser provides Web APIs for asynchronous operations.",
            difficulty: "Easy",
          },
          {
            question: "Why does Promise execute before setTimeout?",
            answer:
              "Promise callbacks are placed in the Microtask Queue, which is processed before the Callback (Macrotask) Queue.",
            difficulty: "Medium",
          },
          {
            question:
              "Explain the complete lifecycle of a setTimeout callback.",
            answer:
              "The callback is registered with the browser, moved to the Callback Queue after the timer expires, and executed only when the Call Stack is empty and all Microtasks have finished.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    slug: "promises",
    title: "Promises",
    description:
      "Learn how Promises simplify asynchronous programming and help avoid callback hell.",
    level: "Intermediate",
    estimatedReadTime: "18 min",
    tags: ["Promises", "Async", "JavaScript"],
    sections: [
      {
        type: "overview",
        content: [
          "A Promise represents the eventual completion or failure of an asynchronous operation.",
          "Promises provide a cleaner and more maintainable way to handle asynchronous code compared to nested callbacks.",
        ],
      },
      {
        type: "code",
        title: "Creating a Promise",
        language: "javascript",
        filename: "promise.js",
        code: `const fetchData = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Something went wrong");
  }
});

fetchData
  .then((data) => console.log(data))
  .catch((error) => console.log(error));`,
      },

      {
        type: "note",
        variant: "best-practice",
        title: "Best Practice",
        content:
          "Always return Promises from asynchronous functions and handle failures using .catch() or try/catch with async/await.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What are the three states of a Promise?",
            answer: "Pending, Fulfilled, and Rejected.",
            difficulty: "Easy",
          },
          {
            question: "What problem do Promises solve?",
            answer:
              "They solve callback hell by providing a cleaner way to chain asynchronous operations.",
            difficulty: "Medium",
          },
          {
            question: "What is Promise.all()?",
            answer:
              "Promise.all() waits for all Promises to resolve and rejects immediately if any Promise fails.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    slug: "async-await",
    title: "Async / Await",
    description:
      "Write asynchronous JavaScript that looks and behaves like synchronous code using async and await.",
    level: "Intermediate",
    estimatedReadTime: "16 min",
    tags: ["Async", "Await", "Promises"],
    sections: [
      {
        type: "overview",
        content: [
          "async and await are built on top of Promises, making asynchronous code easier to read and maintain.",
          "They simplify error handling and improve code readability without changing how asynchronous operations work under the hood.",
        ],
      },

      {
        type: "code",
        title: "Using async / await",
        language: "javascript",
        filename: "async-await.js",
        code: `async function fetchUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

fetchUsers();`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Remember",
        content:
          "await only pauses execution inside the current async function. It does not block the JavaScript event loop or the browser.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "Can await be used without async?",
            answer:
              "No. await can only be used inside an async function (except for top-level await in ES modules).",
            difficulty: "Easy",
          },
          {
            question: "Does async/await replace Promises?",
            answer:
              "No. async/await is syntactic sugar built on top of Promises.",
            difficulty: "Medium",
          },
          {
            question: "How should errors be handled with async/await?",
            answer:
              "Use try/catch blocks or handle the returned Promise with .catch().",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    slug: "call-apply-bind",
    title: "call / apply / bind",
    description:
      "Learn how to explicitly control the value of 'this' using call(), apply(), and bind().",
    level: "Intermediate",
    estimatedReadTime: "18 min",
    tags: ["call", "apply", "bind", "this"],
    sections: [
      {
        type: "overview",
        content: [
          "call(), apply(), and bind() allow you to explicitly specify what 'this' should refer to when invoking a function.",
          "These methods are widely used for function borrowing, event handlers, partial application, and interview questions.",
        ],
      },
      {
        type: "code",
        title: "Difference Between call, apply and bind",
        language: "javascript",
        filename: "call-apply-bind.js",
        code: `const person = {
  name: "Subhasish",
};

function greet(city, country) {
  console.log(
    \`Hello, I'm \${this.name} from \${city}, \${country}\`
  );
}

greet.call(person, "Bengaluru", "India");

greet.apply(person, ["Bengaluru", "India"]);

const greetPerson = greet.bind(person);

greetPerson("Bengaluru", "India");
`,
      },

      {
        type: "note",
        variant: "best-practice",
        title: "Quick Rule",
        content:
          "call() invokes immediately with comma-separated arguments, apply() invokes immediately with an array of arguments, and bind() returns a new function without executing it.",
      },
      {
        type: "interview",
        questions: [
          {
            question:
              "What is the difference between call(), apply(), and bind()?",
            answer:
              "call() and apply() execute immediately, while bind() returns a new function. call() accepts individual arguments whereas apply() accepts an array.",
            difficulty: "Easy",
          },
          {
            question: "When would you use bind() in React?",
            answer:
              "Historically, bind() was used in class components to preserve 'this'. Modern React primarily uses arrow functions and hooks instead.",
            difficulty: "Medium",
          },
          {
            question: "Can bind() be called multiple times?",
            answer:
              "Calling bind() on an already bound function does not change its original 'this' value.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    slug: "prototype",
    title: "Prototype",
    description:
      "Understand JavaScript's prototype-based inheritance, the prototype chain, and how objects inherit properties and methods.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["Prototype", "Inheritance", "Objects"],
    sections: [
      {
        type: "overview",
        content: [
          "Every JavaScript object has an internal link to another object called its prototype. This forms the prototype chain, allowing objects to inherit properties and methods.",
          "Understanding prototypes is essential for mastering inheritance, classes, object creation, and many advanced interview questions.",
        ],
      },
      {
        type: "code",
        title: "Prototype Example",
        language: "javascript",
        filename: "prototype.js",
        code: `function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(\`Hello, I'm \${this.name}\`);
};

const john = new Person("John");

john.greet();`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Remember",
        content:
          "Methods shared across all instances should be added to the prototype instead of being recreated inside the constructor.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What is the prototype chain?",
            answer:
              "The prototype chain is the sequence of objects JavaScript follows when looking up a property or method.",
            difficulty: "Easy",
          },
          {
            question: "Why use prototypes?",
            answer:
              "Prototypes allow multiple objects to share the same methods, reducing memory usage.",
            difficulty: "Medium",
          },
          {
            question: "How are ES6 classes related to prototypes?",
            answer:
              "ES6 classes are syntactic sugar over JavaScript's prototype-based inheritance.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    slug: "currying",
    title: "Currying",
    description:
      "Learn how currying transforms a function with multiple parameters into a sequence of functions that each take a single parameter.",
    level: "Advanced",
    estimatedReadTime: "15 min",
    tags: ["Currying", "Functions", "Functional Programming"],
    sections: [
      {
        type: "overview",
        content: [
          "Currying converts a function that accepts multiple arguments into a series of functions that each accept one argument.",
          "It improves code reusability, partial application, and is commonly used in functional programming libraries.",
        ],
      },
      {
        type: "code",
        title: "Basic Currying Example",
        language: "javascript",
        filename: "currying.js",
        code: `function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);

console.log(double(5)); // 10
console.log(double(8)); // 16`,
      },
      {
        type: "note",
        variant: "best-practice",
        title: "Remember",
        content:
          "Currying is useful when some arguments remain constant while others vary. It allows creating specialized functions from generic ones.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What is currying?",
            answer:
              "Currying transforms a function with multiple arguments into a sequence of functions that each accept one argument.",
            difficulty: "Easy",
          },
          {
            question: "What is partial application?",
            answer:
              "Partial application fixes one or more arguments of a function, producing another function with fewer parameters.",
            difficulty: "Medium",
          },
          {
            question: "Where is currying commonly used?",
            answer:
              "Currying is commonly used in functional programming, reusable utility functions, event handlers, and libraries like Lodash and Ramda.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
  {
    slug: "memoization",
    title: "Memoization",
    description:
      "Learn how memoization improves performance by caching expensive function results and reusing them for identical inputs.",
    level: "Advanced",
    estimatedReadTime: "18 min",
    tags: ["Memoization", "Performance", "Caching"],
    sections: [
      {
        type: "overview",
        content: [
          "Memoization is an optimization technique where function results are cached so repeated calls with the same input return the cached value instead of recalculating.",
          "Memoization is widely used in JavaScript, React, dynamic programming, and performance optimization.",
        ],
      },
      {
        type: "code",
        title: "Memoization Example",
        language: "javascript",
        filename: "memoization.js",
        code: `function memoize(fn) {
  const cache = {};

  return function (num) {
    if (cache[num]) {
      console.log("Returning from cache");
      return cache[num];
    }

    console.log("Calculating...");

    cache[num] = fn(num);

    return cache[num];
  };
}

const add200 = memoize((num) => num + 200);

console.log(add200(20));
console.log(add200(20));
console.log(add200(30));`,
      },

      {
        type: "note",
        variant: "best-practice",
        title: "Remember",
        content:
          "Memoization is beneficial only for expensive and deterministic computations. Avoid caching values that change frequently or depend on external state.",
      },
      {
        type: "interview",
        questions: [
          {
            question: "What is memoization?",
            answer:
              "Memoization is the process of caching function results so repeated calls with the same input can reuse the cached value.",
            difficulty: "Easy",
          },
          {
            question: "How is memoization different from caching?",
            answer:
              "Caching is a general technique for storing data, whereas memoization specifically caches function results based on their inputs.",
            difficulty: "Medium",
          },
          {
            question: "Where is memoization used in React?",
            answer:
              "React uses memoization through hooks like useMemo and useCallback to avoid unnecessary recalculations and function recreations.",
            difficulty: "Hard",
          },
        ],
      },
    ],
  },
];
