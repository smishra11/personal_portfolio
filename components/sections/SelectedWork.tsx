import { Check } from "lucide-react";

import { SectionHeading } from "@/components/common";
import { Container, Section } from "@/components/layout";
import { work } from "@/data/work";
import Image from "next/image";

export function SelectedWork() {
  const featuredWork = work.filter((item) => item.featured);

  return (
    <Section id="work" aria-labelledby="work-title">
      <Container>
        <SectionHeading
          id="work-title"
          title="Selected Work"
          subtitle="A selection of products and platforms I've contributed to as a Frontend Engineer."
        />

        <div className="mt-12 space-y-8">
          {featuredWork.map((item) => (
            <article key={item.slug}>
              <div className="bg-card border-border hover:border-primary/20 rounded-2xl border p-6 transition-all duration-300 hover:shadow-md">
                {/* Header */}

                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  {/* Left */}

                  <div className="flex items-start gap-4">
                    {/* Logo Placeholder */}

                    <div className="border-border bg-card flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border p-2">
                      <Image
                        src={item.logo}
                        alt={item.company}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div>
                      <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                        {item.category}
                      </span>

                      <h3 className="mt-1 text-2xl font-bold tracking-tight">
                        {item.company}
                      </h3>

                      <p className="text-muted-foreground mt-1 font-medium">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* Right */}

                  <div className="flex flex-wrap gap-2 md:justify-end">
                    <Meta label="Employer" value={item.employer} />

                    <Meta label="Role" value={item.role} />

                    {item.duration && (
                      <Meta label="Duration" value={item.duration} />
                    )}
                  </div>
                </div>

                {/* Overview */}

                <div className="mt-7">
                  <h4 className="text-base font-semibold">Overview</h4>

                  <p className="text-muted-foreground mt-3 leading-7">
                    {item.overview}
                  </p>
                </div>

                {/* Contributions */}

                <div className="mt-7">
                  <h4 className="text-base font-semibold">Key Contributions</h4>

                  <ul className="mt-4 space-y-3">
                    {item.contributions.map((contribution) => (
                      <li key={contribution} className="flex items-start gap-3">
                        <div className="bg-primary/10 text-primary mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                          <Check className="size-3.5" strokeWidth={2.5} />
                        </div>

                        <span className="text-muted-foreground leading-7">
                          {contribution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}

                <div className="mt-7 grid gap-6 md:grid-cols-3">
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

type MetaProps = {
  label: string;
  value: string;
};

function Meta({ label, value }: MetaProps) {
  return (
    <div className="border-border bg-muted/40 rounded-lg border px-2.5 py-2">
      <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
        {label}
      </p>

      <p className="text-foreground mt-0.5 text-xs font-semibold whitespace-nowrap">
        {value}
      </p>
    </div>
  );
}

type TechGroupProps = {
  title: string;
  items: string[];
};

function TechGroup({ title, items }: TechGroupProps) {
  return (
    <div>
      <h5 className="text-foreground mb-3 text-xs font-semibold tracking-[0.15em] uppercase">
        {title}
      </h5>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="bg-muted text-muted-foreground rounded-full px-2.5 py-1 text-xs font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
