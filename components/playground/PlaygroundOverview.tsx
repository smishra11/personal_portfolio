import type { TopicSection } from "@/types/playground";

type Props = {
  section: Extract<TopicSection, { type: "overview" }>;
};

export function PlaygroundOverview({ section }: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Overview</h2>

      {section.content.map((paragraph) => (
        <p key={paragraph} className="text-muted-foreground leading-8">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
