import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/common";
import { Container, Section } from "@/components/layout";
import { workExperience } from "@/data/workExperience";

export function WorkExperience() {
  return (
    <Section
      id="experience"
      aria-labelledby="experience-title"
      className="py-24"
    >
      <Container>
        <SectionHeading
          id="experience-title"
          title="Career Journey"
          subtitle="My professional journey building modern, scalable frontend applications."
        />

        <div className="mt-16 space-y-6">
          {workExperience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="bg-card border-border hover:border-primary/30 rounded-3xl border p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{item.role}</h3>

                  <p className="text-primary mt-2 font-semibold">
                    {item.company}
                  </p>
                </div>

                <div className="text-muted-foreground flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4" />
                    <span>{item.employmentType}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{item.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm"
                  >
                    {tech}
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
