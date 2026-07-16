"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { ThemeToggle, SocialIcon } from "@/components/common";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { contact } from "@/data/contact";

type NavLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  navLinks: readonly NavLink[];
  resumePath: string;
};

export function MobileMenu({ navLinks, resumePath }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 md:hidden">
      <ThemeToggle />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          className="hover:bg-muted inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex h-full w-full flex-col p-6 sm:max-w-sm"
        >
          <SheetHeader className="p-0">
            <SheetTitle>Navigation</SheetTitle>

            <SheetDescription>Explore my portfolio.</SheetDescription>
          </SheetHeader>

          {/* Navigation */}
          <nav className="mt-10 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:bg-muted rounded-lg px-4 py-3 text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom */}
          <div className="mt-auto border-t pt-6">
            <Link
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <Button className="w-full">Download Resume</Button>
            </Link>

            <div className="mt-6">
              <p className="text-muted-foreground mb-3 text-sm font-medium">
                Connect with me
              </p>

              <div className="flex items-center gap-3">
                {contact.socials.map((social) => (
                  <SocialIcon
                    key={social.name}
                    {...(social.type === "svg"
                      ? {
                          type: "svg",
                          href: social.href,
                          alt: social.name,
                          src: social.icon,
                          darkSrc: social.darkIcon,
                        }
                      : {
                          type: "lucide",
                          href: social.href,
                          alt: social.name,
                          icon: social.icon,
                        })}
                  />
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
