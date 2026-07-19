"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeInUp = (delay: number) => ({
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
    delay,
    ease: EASE,
  },
});

export function Hero() {
  return (
    <Section
      id="hero"
      aria-labelledby="hero-title"
      className="flex min-h-[85vh] items-center pt-12 pb-10"
    >
      <Container>
        <div className="max-w-4xl">
          <motion.p
            {...fadeInUp(0)}
            className="text-primary text-base font-medium"
          >
            {profile.greeting}
          </motion.p>

          <motion.h1
            {...fadeInUp(0.1)}
            id="hero-title"
            className="mt-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            {...fadeInUp(0.2)}
            className="mt-6 max-w-3xl text-2xl leading-tight font-semibold md:text-3xl lg:text-4xl"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            {...fadeInUp(0.3)}
            className="text-muted-foreground mt-6 max-w-2xl text-base leading-8 md:text-lg"
          >
            {profile.description}
          </motion.p>

          <motion.div {...fadeInUp(0.4)} className="mt-10 flex flex-wrap gap-4">
            <Link href="#work">
              <Button size="lg">
                Explore My Work
                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
              </Button>
            </Link>

            <Link
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <Download className="mr-2 size-4 transition-transform duration-300 group-hover/button:-translate-y-0.5" />
                Download Resume
              </Button>
            </Link>
          </motion.div>

          <motion.div {...fadeInUp(0.5)} className="mt-12 flex flex-wrap gap-3">
            {profile.techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="border-border bg-muted/40 text-muted-foreground hover:border-primary/40 hover:bg-primary/5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
