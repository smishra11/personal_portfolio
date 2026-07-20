"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const hydrated = useHydrated();
  const { resolvedTheme, setTheme } = useTheme();

  if (!hydrated) {
    return (
      <Button variant="ghost" size="icon" disabled aria-label="Toggle theme">
        <div className="size-5" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";

    if (!("startViewTransition" in document)) {
      setTheme(nextTheme);
      return;
    }

    const rect = (
      document.activeElement as HTMLElement
    )?.getBoundingClientRect();

    const x = rect ? rect.left + rect.width / 2 : window.innerWidth;

    const y = rect ? rect.top + rect.height / 2 : 0;

    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    document.startViewTransition(() => {
      setTheme(nextTheme);
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="group relative overflow-hidden rounded-xl"
    >
      <div className="relative flex items-center justify-center">
        <Sun
          className={cn(
            "absolute size-5 transition-all duration-500 ease-out",
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 rotate-90 opacity-0"
          )}
        />

        <Moon
          className={cn(
            "absolute size-5 transition-all duration-500 ease-out",
            isDark
              ? "scale-0 -rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          )}
        />
      </div>

      <span className="bg-primary/10 absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Button>
  );
}
