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
    <Section className="py-24">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <PlaygroundTopicGrid basePath={basePath} topics={topics} />
      </Container>
    </Section>
  );
}
