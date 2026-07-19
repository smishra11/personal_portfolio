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
          "bg-card border-border hover:border-primary/40 flex h-full flex-col rounded-2xl border p-6 transition-all duration-300",
          "hover:bg-muted/30 hover:-translate-y-1"
        )}
      >
        <div
          className={cn(
            "text-muted-foreground mb-4 flex items-center gap-2 text-sm font-medium",
            !isPrevious && "justify-end"
          )}
        >
          {isPrevious ? (
            <>
              <ArrowLeft className="size-4" />
              Previous
            </>
          ) : (
            <>
              Next
              <ArrowRight className="size-4" />
            </>
          )}
        </div>

        <h3
          className={cn(
            "text-lg font-semibold tracking-tight",
            !isPrevious && "text-right"
          )}
        >
          {topic.title}
        </h3>

        <p
          className={cn(
            "text-muted-foreground mt-2 line-clamp-1 flex-1 text-sm leading-7",
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
      className="mt-16 grid gap-4 md:grid-cols-2"
    >
      <div>
        {previous && <NavigationCard topic={previous} direction="previous" />}
      </div>

      <div>{next && <NavigationCard topic={next} direction="next" />}</div>
    </nav>
  );
}
