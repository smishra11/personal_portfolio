import type { TopicSection } from "@/types/playground";

import { PlaygroundCodeBlock } from "./PlaygroundCodeBlock";

type Props = {
  section: Extract<TopicSection, { type: "code" }>;
};

export function PlaygroundCode({ section }: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">{section.title}</h2>

      <PlaygroundCodeBlock
        code={section.code}
        language={section.language}
        filename={section.filename}
      />
    </section>
  );
}
