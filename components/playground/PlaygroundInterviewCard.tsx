"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type PlaygroundInterviewCardProps = {
  question: string;
  answer: string;
  difficulty: "Easy" | "Medium" | "Hard";
};

const DIFFICULTY_STYLES = {
  Easy: "bg-green-500/10 text-green-600 dark:text-green-400",
  Medium: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Hard: "bg-red-500/10 text-red-600 dark:text-red-400",
} as const;

export function PlaygroundInterviewCard({
  question,
  answer,
  difficulty,
}: PlaygroundInterviewCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="bg-card rounded-2xl border">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <h3 className="font-semibold">{question}</h3>

        <ChevronDown
          className={cn("size-5 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="border-t px-5 py-5">
          <p className="text-muted-foreground leading-8">{answer}</p>

          <span
            className={cn(
              "mt-5 inline-flex rounded-full px-3 py-1 text-xs font-semibold",
              DIFFICULTY_STYLES[difficulty]
            )}
          >
            {difficulty}
          </span>
        </div>
      )}
    </article>
  );
}
