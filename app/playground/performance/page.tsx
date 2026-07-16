import { PlaygroundPage } from "@/components/playground";
import { performanceTopics } from "@/data/performance";

export default function PerformancePlaygroundPage() {
  return (
    <PlaygroundPage
      title="Performance Playground"
      subtitle="Practical experiments focused on rendering performance, bundle optimization, Core Web Vitals, and building fast, responsive frontend applications."
      basePath="/playground/performance"
      topics={performanceTopics}
    />
  );
}
