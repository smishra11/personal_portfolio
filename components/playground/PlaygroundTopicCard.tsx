import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

import type { PlaygroundTopic } from "@/types/playground";
import { Badge } from "../ui/badge";

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
      className="group border-border bg-card hover:border-primary/30 block rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${LEVEL_STYLES[topic.level]}`}
        >
          {topic.level}
        </span>

        <div className="bg-muted group-hover:bg-primary/10 rounded-full p-1.5 transition-colors">
          <ArrowUpRight />
        </div>
      </div>

      <h3 className="mt-4 text-2xl font-bold tracking-tight">{topic.title}</h3>

      <p className="text-muted-foreground mt-4 line-clamp-2 leading-7">
        {topic.description}
      </p>

      <div className="text-muted-foreground mt-6 flex items-center gap-2 text-sm">
        <Clock3 className="size-4" />
        <span>{topic.estimatedReadTime} read</span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {topic.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
