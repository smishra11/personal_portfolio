import { notFound } from "next/navigation";

import { PlaygroundTopicPage } from "@/components/playground/PlaygroundTopicPage";
import { performanceTopics } from "@/data/performance";
import { getAdjacentTopics, getTopicBySlug } from "@/lib/playground";

type PageProps = {
  params: Promise<{
    topic: string;
  }>;
};

export default async function PerformanceTopicPage({ params }: PageProps) {
  const { topic } = await params;

  const currentTopic = getTopicBySlug(performanceTopics, topic);

  if (!currentTopic) {
    notFound();
  }

  const { previous, next } = getAdjacentTopics(performanceTopics, topic);

  return (
    <PlaygroundTopicPage topic={currentTopic} previous={previous} next={next} />
  );
}
