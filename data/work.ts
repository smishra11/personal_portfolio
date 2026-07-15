export type Work = {
  slug: string;
  featured: boolean;
  company: string;
  employer: string;
  role: string;
  title: string;
  category: string;
  duration: string;
  overview: string;
  contributions: string[];
  technologies: {
    frontend: string[];
    architecture: string[];
    tools: string[];
  };
};

export const work: Work[] = [
  {
    slug: "jumio",
    featured: true,
    company: "Jumio",
    employer: "Recro",
    role: "Frontend Engineer",
    title: "Identity Verification Platform",
    category: "Enterprise SaaS",
    duration: "",
    overview:
      "Contributed to an enterprise identity verification platform by building scalable frontend experiences that simplified complex verification workflows. My work focused on creating reusable UI architecture, improving workflow configurability, and delivering a smooth user experience for business users.",
    contributions: [
      "Developed a visual workflow builder for configuring identity verification flows.",
      "Built reusable and maintainable UI components used across multiple modules.",
      "Implemented undo and redo functionality for complex workflow interactions.",
      "Enhanced application performance through component optimization and efficient rendering strategies.",
      "Collaborated closely with designers, backend engineers, and product teams to deliver production-ready features.",
    ],
    technologies: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      architecture: [
        "Reusable Components",
        "Performance Optimization",
        "State Management",
        "Accessibility",
      ],
      tools: ["GraphQL", "Redux", "Git"],
    },
  },

  {
    slug: "ton-capital",
    featured: true,
    company: "TON Capital",
    employer: "Recro",
    role: "Frontend Engineer",
    title: "Web3 Investment Platform",
    category: "FinTech",
    duration: "",
    overview:
      "Worked on a Web3 investment platform focused on creating a seamless blockchain experience. Built intuitive interfaces for wallet connectivity, staking, and rewards while ensuring the application remained responsive and user-friendly.",
    contributions: [
      "Integrated MetaMask wallet authentication and blockchain interactions.",
      "Developed staking and rewards management interfaces.",
      "Implemented reusable UI components for financial workflows.",
      "Improved responsiveness and overall user experience across devices.",
      "Worked closely with cross-functional teams to deliver secure and reliable frontend features.",
    ],
    technologies: {
      frontend: ["React", "Next.js", "TypeScript"],
      architecture: ["Web3 Integration", "Responsive Design"],
      tools: ["Web3.js", "MetaMask", "Git"],
    },
  },
  {
    slug: "trustcheckr",
    featured: true,
    company: "TrustCheckr",
    employer: "TrustCheckr",
    role: "Frontend Engineer",
    title: "Identity Intelligence Platform",
    category: "SaaS",
    duration: "",
    overview:
      "Contributed to an identity intelligence platform by building scalable dashboards and data-driven interfaces that enabled users to analyze verification data efficiently while maintaining performance and usability.",
    contributions: [
      "Developed interactive dashboards for visualizing verification insights.",
      "Built reusable frontend modules for large-scale data management.",
      "Implemented bulk upload workflows with validation and error handling.",
      "Improved application performance and user experience for data-intensive screens.",
      "Collaborated with backend teams to integrate APIs and deliver production-ready features.",
    ],
    technologies: {
      frontend: ["React", "Next.js", "TypeScript"],
      architecture: [
        "Dashboard Development",
        "Performance Optimization",
        "Data Visualization",
      ],
      tools: ["REST API", "Redux", "Git"],
    },
  },
];
