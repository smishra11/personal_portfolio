import { notFound } from "next/navigation";

import { PlaygroundTopicPage } from "@/components/playground";
import { performanceTopics } from "@/data/performance";
import { getTopicBySlug } from "@/lib/playground";

type Props = {
  params: Promise<{
    topic: string;
  }>;
};

export default async function PerformanceTopicPage({ params }: Props) {
  const { topic } = await params;

  const currentTopic = getTopicBySlug(performanceTopics, topic);

  if (!currentTopic) {
    notFound();
  }

  return (
    <PlaygroundTopicPage
      topic={currentTopic}
      category="Performance"
      backHref="/playground/performance"
    />
  );
}

export async function generateStaticParams() {
  return performanceTopics.map((topic) => ({
    topic: topic.slug,
  }));
}
