import { Check } from "lucide-react";

import { SectionHeading } from "@/components/common";
import { Container, Section } from "@/components/layout";
import { about } from "@/data/about";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <Container>
        <div>
          <SectionHeading
            id="about-title"
            className="w-full"
            title={about.title}
            subtitle="A quick introduction about my experience, mindset, and the way I approach building products."
          />

          <p className="text-muted-foreground mt-8 max-w-3xl text-base leading-8 md:text-lg">
            {about.intro}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {about.highlights.map((item) => (
              <div
                key={item}
                className="group border-border/70 bg-card hover:border-primary/30 hover:bg-muted/30 flex items-start gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                  <Check className="size-4" strokeWidth={2.5} />
                </div>

                <p className="text-foreground leading-7 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
