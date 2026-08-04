"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";

import { profile } from "@/data/profile";
import { RESUME_PATH } from "@/data/navLinks";

const EASE = [0.22, 1, 0.36, 1] as const;

const createAnimation = (delay: number) => ({
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

const greetingAnimation = createAnimation(0);
const titleAnimation = createAnimation(0.1);
const subtitleAnimation = createAnimation(0.2);
const descriptionAnimation = createAnimation(0.3);
const buttonAnimation = createAnimation(0.4);
const stackAnimation = createAnimation(0.5);

export function Hero() {
  const reduceMotion = useReducedMotion();

  const animation = (config: ReturnType<typeof createAnimation>) =>
    reduceMotion ? {} : config;

  return (
    <Section
      id="hero"
      aria-labelledby="hero-title"
      className="flex items-center pt-14 md:pt-20 lg:pt-24 [@media(min-width:1024px)_and_(min-height:760px)]:min-h-[calc(100svh-4rem)]"
    >
      <Container>
        <div className="max-w-4xl">
          <motion.p
            {...animation(greetingAnimation)}
            className="text-primary flex items-center gap-2 text-base font-medium"
          >
            <motion.span
              aria-hidden="true"
              className="inline-block origin-[70%_70%]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [0, 14, -8, 14, -4, 10, 0],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 1.8,
                      delay: 0.6,
                      repeat: Infinity,
                      repeatDelay: 2.5,
                      ease: "easeInOut",
                    }
              }
            >
              {profile.greetingEmoji}
            </motion.span>

            <span>{profile.greeting}</span>
          </motion.p>

          <motion.h1
            {...animation(titleAnimation)}
            id="hero-title"
            className="mt-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            {...animation(subtitleAnimation)}
            className="mt-6 max-w-3xl text-2xl leading-tight font-semibold md:text-3xl lg:text-4xl"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            {...animation(descriptionAnimation)}
            className="text-muted-foreground mt-6 max-w-2xl text-base leading-8 md:text-lg"
          >
            {profile.description}
          </motion.p>

          <motion.div
            {...animation(buttonAnimation)}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              nativeButton={false}
              size="lg"
              render={<Link href="#work" />}
            >
              Explore My Work
              <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
            </Button>

            <Button
              nativeButton={false}
              variant="outline"
              size="lg"
              render={
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <Download className="mr-2 size-4 transition-transform duration-300 group-hover/button:-translate-y-0.5" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            {...animation(stackAnimation)}
            className="mt-12 flex flex-wrap gap-3"
          >
            {profile.techStack.map((tech) => (
              <span
                key={tech}
                className="border-border bg-muted/40 text-muted-foreground hover:border-primary/40 hover:bg-primary/5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
