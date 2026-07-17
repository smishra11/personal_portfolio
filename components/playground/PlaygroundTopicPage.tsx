import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container, Section } from "@/components/layout";
import type { PlaygroundTopic } from "@/types/playground";

import { PlaygroundTopicHero } from "./PlaygroundTopicHero";
import { PlaygroundCode } from "./PlaygroundCode";
import { PlaygroundInterview } from "./PlaygroundInterview";
import { PlaygroundNote } from "./PlaygroundNote";
import { PlaygroundOverview } from "./PlaygroundOverview";

type PlaygroundTopicPageProps = {
  topic: PlaygroundTopic;
  category: string;
  backHref: string;
};

export function PlaygroundTopicPage({
  topic,
  category,
  backHref,
}: PlaygroundTopicPageProps) {
  return (
    <Section className="py-24">
      <Container className="max-w-5xl">
        <Link
          href={backHref}
          className="text-muted-foreground hover:text-primary mb-10 inline-flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to {category}
        </Link>

        <PlaygroundTopicHero topic={topic} />

        <div className="mt-20 space-y-20">
          {topic.sections.map((section, index) => {
            switch (section.type) {
              case "overview":
                return <PlaygroundOverview key={index} section={section} />;

              case "code":
                return <PlaygroundCode key={index} section={section} />;

              case "note":
                return <PlaygroundNote key={index} section={section} />;

              case "interview":
                return <PlaygroundInterview key={index} section={section} />;
            }
          })}
        </div>
      </Container>
    </Section>
  );
}
