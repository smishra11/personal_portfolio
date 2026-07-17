import type { PlaygroundTopic } from "@/types/playground";

export function getTopicBySlug(
  topics: readonly PlaygroundTopic[],
  slug: string
): PlaygroundTopic | undefined {
  return topics.find((topic) => topic.slug === slug);
}
