import { Container, Section } from "@/components/layout";

import type { PlaygroundTopic } from "@/types/playground";

import { PlaygroundTopicHero } from "./PlaygroundTopicHero";

type PlaygroundTopicPageProps = {
  topic: PlaygroundTopic;
};

export function PlaygroundTopicPage({ topic }: PlaygroundTopicPageProps) {
  return (
    <Section className="py-24">
      <Container className="max-w-5xl">
        <PlaygroundTopicHero topic={topic} />

        <div className="mt-20 space-y-20">
          {/* Overview */}

          <section>
            <h2 className="text-3xl font-bold">Overview</h2>

            <p className="text-muted-foreground mt-6 leading-8">
              This section will explain the concept in detail with diagrams,
              animations, and practical explanations.
            </p>
          </section>

          {/* Interactive Example */}

          <section>
            <h2 className="text-3xl font-bold">Interactive Example</h2>

            <div className="bg-card mt-6 rounded-2xl border p-8">
              Coming soon...
            </div>
          </section>

          {/* Interview Questions */}

          <section>
            <h2 className="text-3xl font-bold">Interview Questions</h2>

            <div className="bg-card mt-6 rounded-2xl border p-8">
              Coming soon...
            </div>
          </section>
        </div>
      </Container>
    </Section>
  );
}
