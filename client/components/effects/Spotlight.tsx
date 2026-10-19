"use client";

import { useEffect, useRef } from "react";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export default function Spotlight({
  children,
  className = "",
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const updatePosition = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();

      container.style.setProperty(
        "--spotlight-x",
        `${event.clientX - rect.left}px`
      );

      container.style.setProperty(
        "--spotlight-y",
        `${event.clientY - rect.top}px`
      );
    };

    container.addEventListener("pointermove", updatePosition);

    return () => {
      container.removeEventListener("pointermove", updatePosition);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`spotlight-container ${className}`}
    >
      {children}
    </div>
  );
}