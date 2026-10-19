import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

import type { Research } from "@/types/research";

interface ResearchCardProps {
  research: Research;
}

export default function ResearchCard({
  research
}: ResearchCardProps) {
  return (
    <article className="card research-card">
      <div className="research-card-top">
        <FileText size={22} className="accent" />

        <span className="tag">
          {research.status}
        </span>
      </div>

      <p className="eyebrow">
        {research.area}
      </p>

      <h3>{research.title}</h3>

      <p className="muted">
        {research.description}
      </p>

      <div className="research-card-footer">
        <span className="mono muted">
          {research.year}
        </span>

        {research.link && (
          <Link
            href={research.link}
            target="_blank"
            className="text-link"
          >
            Read publication
            <ArrowUpRight size={15} />
          </Link>
        )}
      </div>
    </article>
  );
}