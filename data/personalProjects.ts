export type PersonalProjectStatus = "Live" | "In Progress" | "Archived";

export type PersonalProject = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  liveUrl: string;
  repositoryUrl?: string;
  technologies: readonly string[];
  highlights: readonly string[];
  status: PersonalProjectStatus;
  featured: boolean;
};

export const personalProjects: readonly PersonalProject[] = [
  {
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    tagline:
      "An AI-powered tool that evaluates résumés and provides practical feedback to improve clarity, structure, and job relevance.",
    description:
      "A resume-analysis platform that allows users to upload a résumé and receive structured feedback generated with Gemini AI. It identifies strong sections, highlights weak or unclear content, and suggests practical improvements.",
    image: "/projectImages/ai-resume-analyzer.png",
    imageAlt:
      "AI Resume Analyzer interface displaying résumé strengths, weaknesses, and improvement suggestions",
    liveUrl: "https://ai-resume-analyzer-ats.vercel.app",
    repositoryUrl: "https://github.com/smishra11/ai-resume-analyzer",
    technologies: ["React", "Zustand", "Puter.js", "Gemini AI", "Tailwind CSS"],
    highlights: [
      "AI-generated strengths and improvement areas.",
      "Structured, easy-to-scan resume feedback.",
      "Client-side state management with Zustand.",
    ],
    status: "Live",
    featured: true,
  },
  {
    slug: "ai-mock-interview",
    title: "AI Mock Interview",
    tagline:
      "An AI-powered interview practice platform that conducts realistic mock interviews and provides structured feedback to help candidates improve.",
    description:
      "A mock interview platform designed to help job seekers prepare through interactive AI-led interview sessions. Users can generate role-specific interview questions, answer them through a voice-based conversation, and review detailed feedback highlighting strengths, weaknesses, and areas that need improvement.",
    image: "/projectImages/ai-mock-interview.png",
    imageAlt:
      "AI Mock Interview application showing an interactive interview session and candidate feedback",
    liveUrl: "https://intpreps.vercel.app/sign-in",
    repositoryUrl: "https://github.com/smishra11/AI-Mock-Interview",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "AI SDK",
      "Gemini AI",
      "Vapi AI",
      "Firebase",
      "Day.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    highlights: [
      "Generate interview questions based on a selected role and experience level.",
      "Conduct realistic voice-based mock interviews using Vapi AI.",
      "Receive AI-generated feedback covering strengths and improvement areas.",
      "Store interview sessions, questions, and feedback securely with Firebase.",
    ],
    status: "Live",
    featured: true,
  },
];
