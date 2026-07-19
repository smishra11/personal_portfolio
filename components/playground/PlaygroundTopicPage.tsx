import { Container, Section } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { PlaygroundPagination } from "./PlaygroundPagination";
import { PlaygroundRenderer } from "./PlaygroundRenderer";

import type { PlaygroundTopic } from "@/types/playground";

type PlaygroundTopicPageProps = {
  topic: PlaygroundTopic;
  previous: PlaygroundTopic | null;
  next: PlaygroundTopic | null;
};

export async function PlaygroundTopicPage({
  topic,
  previous,
  next,
}: PlaygroundTopicPageProps) {
  return (
    <Section className="pt-20">
      <Container className="max-w-4xl">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/#playground">Playground</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href={`/playground/${topic.category}`}>
                {topic.category.charAt(0).toUpperCase() +
                  topic.category.slice(1)}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>{topic.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article className="mt-8">
          <header className="mb-14">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge variant="secondary">{topic.level}</Badge>

              <span className="text-muted-foreground text-sm">
                {topic.estimatedReadTime}
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              {topic.title}
            </h1>

            <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-8">
              {topic.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {topic.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <PlaygroundRenderer sections={topic.sections} />

          <PlaygroundPagination previous={previous} next={next} />
        </article>
      </Container>
    </Section>
  );
}
