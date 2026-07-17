import { notFound } from "next/navigation";

import { PlaygroundTopicPage } from "@/components/playground";
import { reactTopics } from "@/data/react";
import { getTopicBySlug } from "@/lib/playground";

type Props = {
  params: Promise<{
    topic: string;
  }>;
};

export default async function ReactTopicPage({ params }: Props) {
  const { topic } = await params;

  const currentTopic = getTopicBySlug(reactTopics, topic);

  if (!currentTopic) {
    notFound();
  }

  return (
    <PlaygroundTopicPage
      topic={currentTopic}
      category="React"
      backHref="/playground/react"
    />
  );
}

export async function generateStaticParams() {
  return reactTopics.map((topic) => ({
    topic: topic.slug,
  }));
}
