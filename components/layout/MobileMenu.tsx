"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  FlaskConical,
  FolderKanban,
  Mail,
  Menu,
  PanelsTopLeft,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { SocialIcon, ThemeToggle } from "@/components/common";
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
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  navLinks: readonly NavLink[];
  resumePath: string;
};

const NAV_ICONS: Record<string, LucideIcon> = {
  About: UserRound,
  Experience: BriefcaseBusiness,
  Work: FolderKanban,
  Projects: PanelsTopLeft,
  Playground: FlaskConical,
  Contact: Mail,
};

export function MobileMenu({
  navLinks,
  resumePath,
}: Readonly<MobileMenuProps>) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const links = useMemo(
    () =>
      navLinks.map((link) => {
        const sectionHash = link.href.startsWith("/#")
          ? link.href.slice(1)
          : link.href;

        return {
          ...link,
          mobileHref: pathname === "/" ? sectionHash : link.href,
        };
      }),
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
          aria-label="Open portfolio menu"
          className="hover:bg-muted inline-flex size-10 items-center justify-center rounded-xl transition-colors"
        >
          <Menu aria-hidden="true" className="size-5" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex h-full w-full flex-col border-l p-0 sm:max-w-sm"
        >
          {/* Header */}

          <div className="border-border border-b px-5 py-4">
            <SheetHeader className="space-y-0.5 text-left">
              <SheetTitle className="text-lg font-bold tracking-tight">
                Explore
              </SheetTitle>

              <SheetDescription className="text-xs leading-5">
                Discover my experience, work, projects, and experiments.
              </SheetDescription>
            </SheetHeader>
          </div>

          {/* Navigation */}

          <nav
            aria-label="Mobile navigation"
            className="flex-1 overflow-y-auto px-3 py-3"
          >
            <div className="space-y-1">
              {links.map((link) => {
                const Icon = NAV_ICONS[link.label];

                return (
                  <Link
                    key={link.href}
                    href={link.mobileHref}
                    onClick={closeMenu}
                    className={cn(
                      "group hover:bg-muted flex min-h-11 items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors duration-200"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      {Icon && (
                        <Icon
                          aria-hidden="true"
                          className="text-muted-foreground size-4 shrink-0"
                        />
                      )}

                      <span>{link.label}</span>
                    </span>

                    <ArrowRight
                      aria-hidden="true"
                      className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer */}

          <div className="border-border border-t px-5 py-4">
            <Button
              nativeButton={false}
              className="w-full"
              render={
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                />
              }
            >
              <Download aria-hidden="true" className="size-4" />
              Download Resume
            </Button>

            <div className="mt-4 flex items-center justify-center gap-3">
              {socialIcons}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
