"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/common";
import { Container, MobileMenu } from "@/components/layout";
import { Button } from "@/components/ui/button";

import { useActiveSection } from "@/hooks/useActiveSection";

import { navLinks, RESUME_PATH } from "@/data/navLinks";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  const links = useMemo(
    () =>
      navLinks.map((link) => ({
        ...link,
        sectionId: link.href.split("#")[1] ?? "",
      })),
    []
  );

  const activeSection = useActiveSection(
    pathname === "/" ? links.map((link) => link.sectionId) : []
  );

  return (
    <header className="supports-backdrop-filter:bg-background/60 border-border bg-background/70 sticky top-0 z-50 h-16 border-b backdrop-blur-xl">
      <Container className="h-full">
        <nav
          aria-label="Primary navigation"
          className="flex h-full items-center justify-between"
        >
          <Link
            href="/"
            className="hover:text-primary text-xl font-bold tracking-tight transition-colors"
          >
            S<span className="text-primary">M</span>
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((link) => {
              let isActive = false;

              if (pathname === "/") {
                isActive = activeSection === link.sectionId;
              } else if (
                pathname.startsWith("/playground") &&
                link.sectionId === "playground"
              ) {
                isActive = true;
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium transition-all duration-300",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}

                    <span
                      className={cn(
                        "bg-primary absolute -bottom-2 left-0 h-0.5 rounded-full transition-all duration-300",
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />

            <Link href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
              <Button>Resume</Button>
            </Link>
          </div>

          <MobileMenu navLinks={navLinks} resumePath={RESUME_PATH} />
        </nav>
      </Container>
    </header>
  );
}
