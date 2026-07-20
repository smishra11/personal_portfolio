import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/common";
import { Container, Section } from "@/components/layout";

import { playground } from "@/data/playground";
import { javascriptTopics } from "@/data/javascript";
import { performanceTopics } from "@/data/performance";
import { reactTopics } from "@/data/react";

const STATUS_STYLES = {
  Live: "bg-green-500/10 text-green-500",
  "In Progress": "bg-amber-500/10 text-amber-500",
  "Coming Soon": "bg-muted text-muted-foreground",
} as const;

const TOPIC_COUNTS = {
  javascript: javascriptTopics.length,
  react: reactTopics.length,
  performance: performanceTopics.length,
} as const;

const PLAYGROUND_ICONS = {
  javascript: "/icons/js.svg",
  react: "/icons/react.svg",
  performance: "/icons/performance.svg",
} as const;

export function Playground() {
  return (
    <Section id="playground" aria-labelledby="playground-title">
      <Container>
        <SectionHeading
          id="playground-title"
          title="Playground"
          subtitle="Interactive experiments exploring JavaScript internals, React architecture, and frontend performance techniques."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {playground.map((item) => {
            const topicCount =
              TOPIC_COUNTS[item.slug as keyof typeof TOPIC_COUNTS];

            const icon =
              PLAYGROUND_ICONS[item.slug as keyof typeof PLAYGROUND_ICONS];

            return (
              <Link
                key={item.slug}
                href={`/playground/${item.slug}`}
                prefetch={false}
                className="group block"
              >
                <article className="bg-card border-border hover:border-primary/20 h-full rounded-2xl border p-5 transition-all duration-300 hover:shadow-md">
                  {/* Header */}

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[item.status]}`}
                      >
                        {item.status}
                      </span>

                      <span className="text-muted-foreground text-xs font-medium">
                        {topicCount} Topics
                      </span>
                    </div>

                    <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-5 transition-colors duration-300" />
                  </div>

                  {/* Title */}

                  <div className="mt-5 flex items-center gap-3">
                    <div className="bg-muted border-border flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border p-2">
                      <Image
                        src={icon}
                        alt={`${item.title} icon`}
                        width={24}
                        height={24}
                        sizes="24px"
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <h3 className="text-xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}

                  <p className="text-muted-foreground mt-4 leading-7">
                    {item.description}
                  </p>

                  {/* Tags */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-muted-foreground rounded-full px-2.5 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
