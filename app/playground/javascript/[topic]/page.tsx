import { notFound } from "next/navigation";

import { PlaygroundTopicPage } from "@/components/playground";
import { javascriptTopics } from "@/data/javascript";
import { getTopicBySlug } from "@/lib/playground";

type Props = {
  params: Promise<{
    topic: string;
  }>;
};

export default async function JavaScriptTopicPage({ params }: Props) {
  const { topic } = await params;

  const currentTopic = getTopicBySlug(javascriptTopics, topic);

  if (!currentTopic) {
    notFound();
  }

  return (
    <PlaygroundTopicPage
      topic={currentTopic}
      category="JavaScript"
      backHref="/playground/javascript"
    />
  );
}

export async function generateStaticParams() {
  return javascriptTopics.map((topic) => ({
    topic: topic.slug,
  }));
}
