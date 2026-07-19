import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type PlaygroundInterviewCardProps = {
  value: string;
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
  value,
  question,
  answer,
  difficulty,
}: PlaygroundInterviewCardProps) {
  return (
    <AccordionItem value={value} className="bg-card rounded-2xl border px-5">
      <AccordionTrigger className="py-5 hover:no-underline">
        <div className="flex w-full items-center justify-between gap-4 pr-4">
          <span className="text-left font-semibold">{question}</span>

          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold",
              DIFFICULTY_STYLES[difficulty]
            )}
          >
            {difficulty}
          </span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="border-t pt-5 pb-5">
        <p className="text-muted-foreground leading-8">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
