import { notFound } from "next/navigation";

import { PlaygroundTopicPage } from "@/components/playground/PlaygroundTopicPage";
import { reactTopics } from "@/data/react";
import { getAdjacentTopics, getTopicBySlug } from "@/lib/playground";

type PageProps = {
  params: Promise<{
    topic: string;
  }>;
};

export default async function ReactTopicPage({ params }: PageProps) {
  const { topic } = await params;

  const currentTopic = getTopicBySlug(reactTopics, topic);

  if (!currentTopic) {
    notFound();
  }

  const { previous, next } = getAdjacentTopics(reactTopics, topic);

  return (
    <PlaygroundTopicPage topic={currentTopic} previous={previous} next={next} />
  );
}
