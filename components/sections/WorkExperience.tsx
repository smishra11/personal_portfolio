import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/common";
import { Container, Section } from "@/components/layout";
import { workExperience } from "@/data/workExperience";

export function WorkExperience() {
  return (
    <Section id="experience" aria-labelledby="experience-title">
      <Container>
        <SectionHeading
          id="experience-title"
          title="Career Journey"
          subtitle="My professional journey building modern, scalable frontend applications."
        />

        <div className="mt-12 space-y-6">
          {workExperience.map((item, index) => {
            const isCurrent = index === 0;

            return (
              <article
                key={`${item.company}-${item.role}`}
                className={`rounded-2xl border p-6 transition-colors ${
                  isCurrent
                    ? `border-primary/20 bg-card shadow-[0_1px_3px_rgba(0,0,0,0.06),0_18px_45px_rgba(59,130,246,0.12)] dark:shadow-[0_1px_3px_rgba(255,255,255,0.02),0_18px_45px_rgba(59,130,246,0.18)]`
                    : `border-border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(15,23,42,0.06)] dark:shadow-[0_1px_2px_rgba(255,255,255,0.02),0_8px_24px_rgba(0,0,0,0.35)]`
                }`}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  {/* Left */}

                  <div>
                    {index === 0 && (
                      <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Most recent
                      </span>
                    )}
                    <h3 className="text-xl font-bold tracking-tight">
                      {item.role}
                    </h3>

                    <p className="text-primary mt-1 font-semibold">
                      {item.company}
                    </p>
                  </div>

                  {/* Right */}

                  <div className="text-muted-foreground flex flex-col gap-2 text-sm lg:items-end">
                    <div className="flex items-center gap-2">
                      <BriefcaseBusiness className="size-4" />
                      <span>{item.employmentType}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays className="size-4" />
                      <span>{item.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-muted-foreground rounded-full px-2.5 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
