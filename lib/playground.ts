import type { PlaygroundTopic } from "@/types/playground";

export function getTopicBySlug(
  topics: readonly PlaygroundTopic[],
  slug: string
): PlaygroundTopic | undefined {
  return topics.find((topic) => topic.slug === slug);
}

export function getAdjacentTopics(
  topics: readonly PlaygroundTopic[],
  slug: string
) {
  const currentIndex = topics.findIndex((topic) => topic.slug === slug);

  if (currentIndex === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: currentIndex > 0 ? topics[currentIndex - 1] : null,

    next: currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null,
  };
}
