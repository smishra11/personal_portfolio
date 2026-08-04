import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/common";
import { Container, Section } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { contact } from "@/data/contact";
import {
  personalProjects,
  type PersonalProjectStatus,
} from "@/data/personalProjects";

function getStatusStyles(status: PersonalProjectStatus) {
  switch (status) {
    case "Live":
      return {
        wrapper: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        dot: "bg-emerald-500",
      };

    case "In Progress":
      return {
        wrapper: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
        dot: "bg-amber-500",
      };

    case "Archived":
      return {
        wrapper: "bg-muted text-muted-foreground",
        dot: "bg-muted-foreground",
      };
  }
}

export default function PersonalProjects() {
  const featuredProjects = personalProjects.filter(
    (project) => project.featured
  );

  const githubSocial = contact.socials.find(
    (social) => social.name === "GitHub"
  );

  return (
    <Section id="projects" aria-labelledby="personal-projects-title">
      <Container>
        <SectionHeading
          id="personal-projects-title"
          title="Personal Projects"
          subtitle="Independent products I designed, developed, and deployed beyond client work."
        />

        <div className="border-border mt-10 border-t">
          {featuredProjects.map((project, index) => {
            const shouldReverse = index % 2 !== 0;
            const statusStyles = getStatusStyles(project.status);

            return (
              <article
                key={project.slug}
                className={`border-border grid gap-7 border-b py-8 md:items-center md:gap-10 lg:gap-14 lg:py-10 ${
                  shouldReverse
                    ? "md:grid-cols-[55fr_45fr]"
                    : "md:grid-cols-[45fr_55fr]"
                }`}
              >
                {/* Project image */}

                <div className={shouldReverse ? "md:order-2" : "md:order-1"}>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live project`}
                    className="group/preview border-border bg-muted/30 relative block aspect-16/10 overflow-hidden rounded-xl border p-2"
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      sizes="(max-width: 767px) 100vw, 45vw"
                      className="object-contain object-center transition-transform duration-500 group-hover/preview:scale-[1.01]"
                    />

                    <span className="border-border bg-background/90 text-foreground absolute right-3 bottom-3 inline-flex size-8 items-center justify-center rounded-full border opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover/preview:-translate-y-0.5 group-hover/preview:opacity-100 group-focus-visible/preview:opacity-100">
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                  </Link>
                </div>

                {/* Project content */}

                <div className={shouldReverse ? "md:order-1" : "md:order-2"}>
                  <span
                    className={`mb-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles.wrapper}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-2 w-2 rounded-full ${statusStyles.dot}`}
                    />

                    {project.status}
                  </span>

                  <h3 className="text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7">
                    {project.tagline}
                  </p>

                  <ul className="mt-5 space-y-1.5">
                    {project.highlights.slice(0, 4).map((highlight) => (
                      <li
                        key={highlight}
                        className="text-muted-foreground flex items-start gap-2 text-sm leading-5"
                      >
                        <span
                          aria-hidden="true"
                          className="bg-primary mt-2 size-1 shrink-0 rounded-full"
                        />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                    {project.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="secondary"
                        className="text-muted-foreground px-2.5 py-0.5 text-xs font-medium"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      nativeButton={false}
                      size="sm"
                      render={
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <ExternalLink aria-hidden="true" className="size-3.5" />
                      Live Demo
                    </Button>

                    {project.repositoryUrl && (
                      <Button
                        nativeButton={false}
                        variant="outline"
                        size="sm"
                        render={
                          <Link
                            href={project.repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                      >
                        {githubSocial && (
                          <>
                            <Image
                              src={githubSocial.icon}
                              alt=""
                              width={14}
                              height={14}
                              aria-hidden="true"
                              className="size-3.5 dark:hidden"
                            />

                            {githubSocial.darkIcon && (
                              <Image
                                src={githubSocial.darkIcon}
                                alt=""
                                width={14}
                                height={14}
                                aria-hidden="true"
                                className="hidden size-3.5 dark:block"
                              />
                            )}
                          </>
                        )}
                        Source Code
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
