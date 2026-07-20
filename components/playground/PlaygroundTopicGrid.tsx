import { PlaygroundTopicCard } from "./PlaygroundTopicCard";
import type { PlaygroundTopic } from "@/types/playground";

type PlaygroundTopicGridProps = {
  topics: readonly PlaygroundTopic[];
  basePath: string;
};

export function PlaygroundTopicGrid({
  topics,
  basePath,
}: PlaygroundTopicGridProps) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {topics.map((topic) => (
        <PlaygroundTopicCard
          key={topic.slug}
          topic={topic}
          href={`${basePath}/${topic.slug}`}
        />
      ))}
    </div>
  );
}
