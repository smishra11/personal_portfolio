"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { ArrowRight, Download, Menu } from "lucide-react";

import { ThemeToggle, SocialIcon } from "@/components/common";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { contact } from "@/data/contact";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  navLinks: readonly NavLink[];
  resumePath: string;
};

export function MobileMenu({ navLinks, resumePath }: MobileMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const links = useMemo(
    () =>
      navLinks.map((link) => ({
        ...link,
        mobileHref: pathname === "/" ? link.href : `/${link.href}`,
      })),
    [pathname, navLinks]
  );

  const socialIcons = useMemo(
    () =>
      contact.socials.map((social) => (
        <SocialIcon
          key={social.name}
          href={social.href}
          alt={social.name}
          src={social.icon}
          darkSrc={social.darkIcon}
        />
      )),
    []
  );

  return (
    <div className="flex items-center gap-2 md:hidden">
      <ThemeToggle />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          aria-label="Open navigation menu"
          className="hover:bg-muted inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex h-full w-full flex-col border-l p-0 sm:max-w-sm"
        >
          {/* Header */}

          <div className="border-border border-b px-6 py-6">
            <SheetHeader className="space-y-1 text-left">
              <SheetTitle className="text-xl font-bold tracking-tight">
                Navigation
              </SheetTitle>

              <SheetDescription>Explore my portfolio.</SheetDescription>
            </SheetHeader>
          </div>

          {/* Navigation */}

          <nav className="flex-1 px-4 py-6">
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.mobileHref}
                  onClick={closeMenu}
                  className={cn(
                    "group hover:bg-muted flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium transition-all duration-200"
                  )}
                >
                  <span>{link.label}</span>

                  <ArrowRight className="text-muted-foreground size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer */}

          <div className="border-border space-y-6 border-t px-6 py-6">
            <Link
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Button className="w-full">
                <Download className="mr-2 size-4" />
                Download Resume
              </Button>
            </Link>

            <div className="mt-4 flex items-center justify-center gap-4">
              {socialIcons}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
