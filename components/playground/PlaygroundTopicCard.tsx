import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { PlaygroundTopic } from "@/types/playground";

type PlaygroundTopicCardProps = {
  topic: PlaygroundTopic;
  href: string;
};

const LEVEL_STYLES = {
  Beginner: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Intermediate: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Advanced: "bg-red-500/10 text-red-600 dark:text-red-400",
} as const;

export function PlaygroundTopicCard({ topic, href }: PlaygroundTopicCardProps) {
  return (
    <Link
      href={href}
      className="group bg-card border-border hover:border-primary/30 block rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${LEVEL_STYLES[topic.level]}`}
        >
          {topic.level}
        </span>

        <div className="bg-primary/10 text-primary rounded-full p-2 transition-colors">
          <ArrowUpRight className="size-4" />
        </div>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight">
        {topic.title}
      </h3>

      <p className="text-muted-foreground mt-3 line-clamp-2 text-sm leading-6">
        {topic.description}
      </p>

      <div className="text-muted-foreground mt-5 flex items-center gap-2 text-xs">
        <Clock3 className="size-3.5" />
        <span>{topic.estimatedReadTime} read</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {topic.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
