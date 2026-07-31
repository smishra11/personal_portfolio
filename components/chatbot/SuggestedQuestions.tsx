"use client";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type SuggestedQuestionsProps = {
  isLoading: boolean;
  onSelect: (question: string) => void;
};

const SUGGESTED_QUESTIONS = [
  "Tell me about Subhasish",
  "What are his frontend skills?",
  "Which projects has he worked on?",
  "Tell me about his experience at Recro",
] as const;

export function SuggestedQuestions({
  isLoading,
  onSelect,
}: Readonly<SuggestedQuestionsProps>) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-foreground text-sm font-medium">
          Suggested questions
        </p>

        <p className="text-muted-foreground mt-1 text-xs leading-5">
          Start with one of these questions or ask anything about the portfolio.
        </p>
      </div>

      <div className="grid gap-2">
        {SUGGESTED_QUESTIONS.map((question) => (
          <Button
            key={question}
            type="button"
            variant="outline"
            disabled={isLoading}
            onClick={() => onSelect(question)}
            className="border-border bg-background hover:bg-muted/60 h-auto justify-between gap-3 rounded-xl px-3 py-3 text-left text-sm font-normal whitespace-normal"
          >
            <span className="leading-5">{question}</span>

            <ArrowUpRight className="text-muted-foreground size-4 shrink-0" />
          </Button>
        ))}
      </div>
    </div>
  );
}
