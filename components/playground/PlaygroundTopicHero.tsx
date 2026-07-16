import { Clock3 } from "lucide-react";

import type { PlaygroundTopic } from "@/types/playground";

const LEVEL_STYLES = {
  Beginner: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Intermediate: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Advanced: "bg-red-500/10 text-red-600 dark:text-red-400",
} as const;

type PlaygroundTopicHeroProps = {
  topic: PlaygroundTopic;
};

export function PlaygroundTopicHero({ topic }: PlaygroundTopicHeroProps) {
  return (
    <header className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${LEVEL_STYLES[topic.level]}`}
        >
          {topic.level}
        </span>

        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Clock3 className="size-4" />
          <span>{topic.estimatedReadTime} read</span>
        </div>
      </div>

      <div className="space-y-5">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {topic.title}
        </h1>

        <p className="text-muted-foreground max-w-3xl text-lg leading-8">
          {topic.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {topic.tags.map((tag) => (
          <span
            key={tag}
            className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}
