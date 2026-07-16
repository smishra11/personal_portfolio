import Link from "next/link";

import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navLinks";
import { ThemeToggle } from "@/components/common";
import { MobileMenu } from "@/components/layout";

const RESUME_PATH = "/resume.pdf";

export function Navbar() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 h-16 border-b backdrop-blur">
      <Container className="h-full">
        <nav
          aria-label="Primary navigation"
          className="flex h-full items-center justify-between"
        >
          {/* Logo */}
          <Link
            href="/"
            className="hover:text-primary text-xl font-bold tracking-tight transition-colors"
          >
            S<span className="text-primary">M</span>
          </Link>

          {/* Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume */}
          <div className="hidden items-center gap-2 md:flex">
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
