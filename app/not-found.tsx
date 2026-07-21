"use client";

import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout";

export default function NotFound() {
  return (
    <Section className="flex min-h-[calc(100vh-8rem)] items-center py-20">
      <Container className="max-w-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
            <SearchX className="size-10" />
          </div>

          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            404 Error
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Page not found
          </h1>

          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-8">
            The page you&apos;re looking for doesn&apos;t exist, may have been
            moved, or the URL might be incorrect.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/">
              <Button size="lg">
                <Home className="mr-2 size-4" />
                Back to Home
              </Button>
            </Link>

            <Button variant="outline" size="lg" onClick={() => history.back()}>
              <ArrowLeft className="mr-2 size-4" />
              Go Back
            </Button>
          </div>

          <div className="border-border bg-card mt-14 w-full rounded-2xl border p-6">
            <h2 className="text-lg font-semibold">Looking for something?</h2>

            <p className="text-muted-foreground mt-3 leading-7">
              You can explore my projects, frontend playground, work experience,
              or get in touch through the contact section.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
