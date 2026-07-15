import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/common";
import { Container, Section } from "@/components/layout";
import { playground } from "@/data/playground";

const STATUS_STYLES = {
  Live: "bg-green-500/10 text-green-500",
  "In Progress": "bg-amber-500/10 text-amber-500",
  "Coming Soon": "bg-muted text-muted-foreground",
} as const;

export function Playground() {
  return (
    <Section
      id="playground"
      aria-labelledby="playground-title"
      className="py-24"
    >
      <Container>
        <SectionHeading
          id="playground-title"
          title="Playground"
          subtitle="Experiments, prototypes, and frontend explorations outside of production work."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {playground.map((item) => (
            <article
              key={item.slug}
              className="bg-card border-border hover:border-primary/30 group rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[item.status]}`}
                >
                  {item.status}
                </span>

                <ArrowUpRight className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight">
                {item.title}
              </h3>

              <p className="text-muted-foreground mt-4 leading-7">
                {item.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
