import { Check } from "lucide-react";

import { SectionHeading } from "@/components/common";
import { Container, Section } from "@/components/layout";
import { work } from "@/data/work";

export function SelectedWork() {
  const featuredWork = work.filter((item) => item.featured);

  return (
    <Section
      id="selected-work"
      aria-labelledby="selected-work-title"
      className="py-24"
    >
      <Container>
        <SectionHeading
          id="selected-work-title"
          title="Selected Work"
          subtitle="A selection of products and platforms I've contributed to as a Frontend Engineer."
        />

        <div className="mt-16 space-y-10">
          {featuredWork.map((item, index) => (
            <article
              key={item.slug}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="bg-card border-border hover:border-primary/30 w-full max-w-5xl rounded-3xl border p-8 transition-all duration-300 hover:shadow-xl">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div>
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                      {item.category}
                    </span>

                    <h3 className="mt-2 text-3xl font-bold tracking-tight">
                      {item.company}
                    </h3>

                    <p className="text-muted-foreground mt-2">{item.title}</p>
                  </div>

                  <div className="text-muted-foreground space-y-2 text-sm">
                    <div>
                      <span className="text-foreground font-semibold">
                        Employer:
                      </span>{" "}
                      {item.employer}
                    </div>

                    <div>
                      <span className="text-foreground font-semibold">
                        Role:
                      </span>{" "}
                      {item.role}
                    </div>

                    {item.duration && (
                      <div>
                        <span className="text-foreground font-semibold">
                          Duration:
                        </span>{" "}
                        {item.duration}
                      </div>
                    )}
                  </div>
                </div>

                {/* Overview */}
                <div className="mt-10">
                  <h4 className="text-lg font-semibold">Overview</h4>

                  <p className="text-muted-foreground mt-4 leading-8">
                    {item.overview}
                  </p>
                </div>

                {/* Contributions */}
                <div className="mt-10">
                  <h4 className="text-lg font-semibold">Key Contributions</h4>

                  <ul className="mt-5 space-y-4">
                    {item.contributions.map((contribution) => (
                      <li key={contribution} className="flex items-start gap-3">
                        <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />

                        <span className="text-muted-foreground leading-7">
                          {contribution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-10 grid gap-8 md:grid-cols-3">
                  <TechGroup
                    title="Frontend"
                    items={item.technologies.frontend}
                  />

                  <TechGroup
                    title="Architecture"
                    items={item.technologies.architecture}
                  />

                  <TechGroup title="Tools" items={item.technologies.tools} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

type TechGroupProps = {
  title: string;
  items: string[];
};

function TechGroup({ title, items }: TechGroupProps) {
  return (
    <div>
      <h5 className="text-foreground mb-4 text-sm font-semibold tracking-wide uppercase">
        {title}
      </h5>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
