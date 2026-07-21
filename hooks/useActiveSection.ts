"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!elements.length) return;

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight * 0.35;

      let current = elements[0];

      for (const element of elements) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= viewportCenter) {
          current = element;
        } else {
          break;
        }
      }

      setActiveSection((previous) =>
        previous === current.id ? previous : current.id
      );
    };

    // Set the correct active section on initial load
    requestAnimationFrame(updateActiveSection);

    const observer = new IntersectionObserver(
      () => {
        updateActiveSection();
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((element) => observer.observe(element));

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
