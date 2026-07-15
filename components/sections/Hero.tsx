import Link from "next/link";

import { BackgroundPattern } from "@/components/common";
import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <Section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-16"
    >
      <BackgroundPattern />

      <Container>
        <div className="max-w-5xl">
          <p className="text-muted-foreground text-lg font-medium">
            {profile.greeting}
          </p>

          <h1
            id="hero-title"
            className="mt-4 text-5xl leading-none font-bold tracking-tight md:text-7xl"
          >
            {profile.name}
          </h1>

          <h2 className="text-foreground mt-6 max-w-3xl text-2xl leading-tight font-semibold md:text-4xl">
            {profile.title}
          </h2>

          <p className="text-muted-foreground mt-8 max-w-2xl text-lg leading-8">
            {profile.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#projects">
              <Button size="lg">View Projects</Button>
            </Link>

            <Link
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {profile.techStack.map((tech) => (
              <span
                key={tech}
                className="border-border bg-muted text-muted-foreground rounded-full border px-4 py-2 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
