"use client";

import { useEffect, useState } from "react";

interface TerminalAnimationProps {
  lines?: string[];
  title?: string;
  className?: string;
}

const defaultLines = [
  "$ initializing security environment...",
  "[OK] Environment initialized",
  "$ loading security modules...",
  "[OK] Modules loaded",
  "$ system status",
  "Status: Ready",
];

export default function TerminalAnimation({
  lines = defaultLines,
  title = "security-terminal",
  className = "",
}: TerminalAnimationProps) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    setVisibleLines(0);

    const timer = window.setInterval(() => {
      setVisibleLines((current) => {
        if (current >= lines.length) {
          window.clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, 550);

    return () => {
      window.clearInterval(timer);
    };
  }, [lines]);

  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-titlebar">
        <div className="terminal-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <span>{title}</span>
      </div>

      <div
        className="terminal-content"
        aria-label="Terminal animation"
      >
        {lines.slice(0, visibleLines).map((line, index) => (
          <p className="terminal-line" key={`${line}-${index}`}>
            {line.startsWith("[OK]") ? (
              <span className="terminal-success">{line}</span>
            ) : line.startsWith("$") ? (
              <span className="terminal-command">{line}</span>
            ) : (
              <span>{line}</span>
            )}
          </p>
        ))}

        {visibleLines < lines.length && (
          <span className="terminal-cursor" aria-hidden="true">
            _
          </span>
        )}
      </div>
    </div>
  );
}