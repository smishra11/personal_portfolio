import { SectionHeading } from "@/components/common";
import { Container, Section } from "@/components/layout";
import { about } from "@/data/about";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title" className="py-24">
      <Container>
        <div className="max-w-5xl">
          <SectionHeading id="about-title" title={about.title} />
          <p className="text-muted-foreground mt-8 max-w-3xl text-lg leading-8">
            {about.intro}
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {about.highlights.map((item) => (
              <div
                key={item}
                className="border-border bg-card flex items-center gap-3 rounded-xl border p-5"
              >
                <span className="text-primary text-lg">✓</span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
