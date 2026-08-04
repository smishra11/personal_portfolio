"use client";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type SuggestedQuestionsProps = {
  questions?: readonly string[];
  isLoading: boolean;
  onSelect: (question: string) => void;
  title?: string;
  description?: string;
  compact?: boolean;
};

const INITIAL_QUESTIONS = [
  "Tell me about Subhasish",
  "What are his strongest frontend skills?",
  "What personal projects has he built?",
] as const;

const DEFAULT_FOLLOW_UP_QUESTIONS = [
  "Tell me about his professional experience",
  "What personal projects has he built?",
  "How can I contact Subhasish?",
] as const;

export function getFollowUpQuestions(
  latestUserMessage: string
): readonly string[] {
  const question = latestUserMessage.toLowerCase();

  /*
   * Personal-project checks must remain above the generic
   * project, work, skill, React, Next.js, and technology checks.
   */

  if (
    question.includes("resume analyzer") ||
    question.includes("resume analysis") ||
    question.includes("puter")
  ) {
    return [
      "How does the AI Resume Analyzer work?",
      "Which technologies power the Resume Analyzer?",
      "Can I view the Resume Analyzer live?",
    ];
  }

  if (
    question.includes("mock interview") ||
    question.includes("vapi") ||
    question.includes("voice interview")
  ) {
    return [
      "How does the AI Mock Interview work?",
      "What role does Vapi AI play in the project?",
      "Can I view the AI Mock Interview live?",
    ];
  }

  if (
    question.includes("personal project") ||
    question.includes("personal projects") ||
    question.includes("independent project") ||
    question.includes("independent projects") ||
    question.includes("built independently")
  ) {
    return [
      "Tell me about the AI Resume Analyzer",
      "Tell me about the AI Mock Interview",
      "Which technologies were used in his personal projects?",
    ];
  }

  if (
    question.includes("recro") ||
    question.includes("senior software engineer")
  ) {
    return [
      "Tell me about the Jumio project",
      "What did he build for TON Capital?",
      "Which technologies did he use at Recro?",
    ];
  }

  if (
    question.includes("jumio") ||
    question.includes("identity verification")
  ) {
    return [
      "What were his key contributions at Jumio?",
      "Which technologies were used for Jumio?",
      "Tell me about his other Recro project",
    ];
  }

  if (
    question.includes("ton capital") ||
    question.includes("blockchain") ||
    question.includes("web3") ||
    question.includes("metamask")
  ) {
    return [
      "What did he contribute to TON Capital?",
      "Which Web3 technologies did he use?",
      "Tell me about the Jumio project",
    ];
  }

  if (
    question.includes("trustcheckr") ||
    question.includes("dashboard") ||
    question.includes("data visualization")
  ) {
    return [
      "What did he build at TrustCheckr?",
      "Which technologies did he use there?",
      "How did he improve application performance?",
    ];
  }

  if (
    question.includes("client project") ||
    question.includes("professional project") ||
    question.includes("selected work")
  ) {
    return [
      "Tell me about the Jumio project",
      "Explain the TON Capital project",
      "What did he build at TrustCheckr?",
    ];
  }

  if (
    question.includes("project") ||
    question.includes("projects") ||
    question.includes("work")
  ) {
    return [
      "What professional projects has he worked on?",
      "What personal projects has he built?",
      "How are his personal projects different from client work?",
    ];
  }

  if (
    question.includes("skill") ||
    question.includes("technology") ||
    question.includes("technologies") ||
    question.includes("tech stack") ||
    question.includes("react") ||
    question.includes("next.js") ||
    question.includes("typescript")
  ) {
    return [
      "How has he used React and Next.js?",
      "What is his frontend performance experience?",
      "Which state management tools has he used?",
    ];
  }

  if (
    question.includes("experience") ||
    question.includes("company") ||
    question.includes("career")
  ) {
    return [
      "Tell me about his experience at Recro",
      "Tell me about his work at TrustCheckr",
      "Which professional projects has he contributed to?",
    ];
  }

  if (
    question.includes("contact") ||
    question.includes("email") ||
    question.includes("linkedin") ||
    question.includes("github") ||
    question.includes("hire")
  ) {
    return [
      "What are his strongest frontend skills?",
      "What personal projects has he built?",
      "Why should someone hire Subhasish?",
    ];
  }

  if (
    question.includes("about") ||
    question.includes("who is") ||
    question.includes("tell me about")
  ) {
    return [
      "What are his strongest frontend skills?",
      "What personal projects has he built?",
      "Tell me about his professional experience",
    ];
  }

  return DEFAULT_FOLLOW_UP_QUESTIONS;
}

export function SuggestedQuestions({
  questions = INITIAL_QUESTIONS,
  isLoading,
  onSelect,
  title = "Suggested questions",
  description = "Start with one of these questions or ask anything about the portfolio.",
  compact = false,
}: Readonly<SuggestedQuestionsProps>) {
  return (
    <div className={compact ? "space-y-2.5" : "space-y-3"}>
      <div>
        <p className="text-foreground text-sm font-medium">{title}</p>

        {description && (
          <p className="text-muted-foreground mt-1 text-xs leading-5">
            {description}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        {questions.map((question) => (
          <Button
            key={question}
            type="button"
            variant="outline"
            disabled={isLoading}
            onClick={() => onSelect(question)}
            className={
              compact
                ? "border-border bg-background hover:bg-muted/60 h-auto justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-normal whitespace-normal"
                : "border-border bg-background hover:bg-muted/60 h-auto justify-between gap-3 rounded-xl px-3 py-3 text-left text-sm font-normal whitespace-normal"
            }
          >
            <span className="leading-5">{question}</span>

            <ArrowUpRight className="text-muted-foreground size-4 shrink-0" />
          </Button>
        ))}
      </div>
    </div>
  );
}
