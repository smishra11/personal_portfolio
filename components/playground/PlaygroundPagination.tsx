import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import type { PlaygroundTopic } from "@/types/playground";

type PlaygroundPaginationProps = {
  previous: PlaygroundTopic | null;
  next: PlaygroundTopic | null;
};

type NavigationCardProps = {
  topic: PlaygroundTopic;
  direction: "previous" | "next";
};

function NavigationCard({ topic, direction }: NavigationCardProps) {
  const isPrevious = direction === "previous";

  return (
    <Link
      href={`/playground/${topic.category}/${topic.slug}`}
      className="group block h-full"
    >
      <article
        className={cn(
          "bg-card border-border hover:border-primary/30 flex h-full flex-col rounded-2xl border p-5",
          "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(15,23,42,0.06)]",
          "dark:shadow-[0_1px_2px_rgba(255,255,255,0.02),0_8px_24px_rgba(0,0,0,0.35)]",
          "transition-all duration-300 hover:shadow-lg"
        )}
      >
        <div
          className={cn(
            "text-muted-foreground mb-4 flex items-center gap-2 text-xs font-semibold tracking-wide uppercase",
            !isPrevious && "justify-end"
          )}
        >
          {isPrevious ? (
            <>
              <span className="bg-primary/10 text-primary flex size-7 items-center justify-center rounded-full">
                <ArrowLeft className="size-3.5" />
              </span>
              Previous
            </>
          ) : (
            <>
              Next
              <span className="bg-primary/10 text-primary flex size-7 items-center justify-center rounded-full">
                <ArrowRight className="size-3.5" />
              </span>
            </>
          )}
        </div>

        <h3
          className={cn(
            "text-base font-semibold tracking-tight",
            !isPrevious && "text-right"
          )}
        >
          {topic.title}
        </h3>

        <p
          className={cn(
            "text-muted-foreground mt-2 line-clamp-2 flex-1 text-sm leading-6",
            !isPrevious && "text-right"
          )}
        >
          {topic.description}
        </p>
      </article>
    </Link>
  );
}

export function PlaygroundPagination({
  previous,
  next,
}: PlaygroundPaginationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      aria-label="Topic navigation"
      className="mt-12 grid gap-5 md:grid-cols-2"
    >
      <div>
        {previous && <NavigationCard topic={previous} direction="previous" />}
      </div>

      <div>{next && <NavigationCard topic={next} direction="next" />}</div>
    </nav>
  );
}
