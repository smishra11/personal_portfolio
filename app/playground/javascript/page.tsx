import { PlaygroundPage } from "@/components/playground";
import { javascriptTopics } from "@/data/javascript";

export default function JavaScriptPlaygroundPage() {
  return (
    <PlaygroundPage
      title="JavaScript Playground"
      subtitle="Interactive explorations of JavaScript fundamentals, runtime behavior, and interview-focused concepts through practical examples."
      basePath="/playground/javascript"
      topics={javascriptTopics}
    />
  );
}
