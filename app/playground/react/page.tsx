import { PlaygroundPage } from "@/components/playground";
import { reactTopics } from "@/data/react";

export default function ReactPlaygroundPage() {
  return (
    <PlaygroundPage
      title="React Playground"
      subtitle="Hands-on explorations of modern React concepts, rendering behavior, hooks, React 19 features, and architecture patterns."
      basePath="/playground/react"
      topics={reactTopics}
    />
  );
}
