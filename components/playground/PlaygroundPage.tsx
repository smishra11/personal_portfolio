import { SectionHeading } from "@/components/common";
import { Container, Section } from "@/components/layout";
import { PlaygroundTopicGrid } from "@/components/playground";
import type { PlaygroundTopic } from "@/types/playground";

type PlaygroundPageProps = {
  title: string;
  subtitle: string;
  basePath: string;
  topics: readonly PlaygroundTopic[];
};

export function PlaygroundPage({
  title,
  subtitle,
  basePath,
  topics,
}: PlaygroundPageProps) {
  return (
    <Section>
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="mt-6 flex items-center gap-3 text-sm">
          <span className="bg-primary/10 text-primary rounded-full px-3 py-1 font-medium">
            {topics.length} Topics
          </span>

          <span className="text-muted-foreground">Beginner → Advanced</span>
        </div>

        <PlaygroundTopicGrid basePath={basePath} topics={topics} />
      </Container>
    </Section>
  );
}
