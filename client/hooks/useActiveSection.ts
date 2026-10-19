"use client";

import { useEffect, useState } from "react";

export default function useActiveSection(
  sectionIds: string[],
  offset = 120
) {
  const [activeSection, setActiveSection] = useState(
    sectionIds[0] ?? ""
  );

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const updateActiveSection = () => {
      let currentSection = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (!element) continue;

        if (element.getBoundingClientRect().top <= offset) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [sectionIds, offset]);

  return activeSection;
}