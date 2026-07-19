import { notFound } from "next/navigation";

import { PlaygroundTopicPage } from "@/components/playground/PlaygroundTopicPage";
import { javascriptTopics } from "@/data/javascript";
import { getAdjacentTopics, getTopicBySlug } from "@/lib/playground";

type PageProps = {
  params: Promise<{
    topic: string;
  }>;
};

export default async function JavaScriptTopicPage({ params }: PageProps) {
  const { topic } = await params;

  const currentTopic = getTopicBySlug(javascriptTopics, topic);

  if (!currentTopic) {
    notFound();
  }

  const { previous, next } = getAdjacentTopics(javascriptTopics, topic);

  return (
    <PlaygroundTopicPage topic={currentTopic} previous={previous} next={next} />
  );
}
