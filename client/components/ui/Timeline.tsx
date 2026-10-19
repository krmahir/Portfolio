import type { ReactNode } from "react";

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description?: ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({
  items
}: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article
          className="timeline-item"
          key={item.id}
        >
          <span
            className="timeline-dot"
            aria-hidden="true"
          />

          <div className="timeline-content">
            <span className="mono muted">
              {item.date}
            </span>

            <h3>{item.title}</h3>

            <p className="accent">
              {item.subtitle}
            </p>

            {item.description && (
              <div className="muted">
                {item.description}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}