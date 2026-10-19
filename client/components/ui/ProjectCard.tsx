import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project
}: ProjectCardProps) {
  return (
    <article className="card project-card">
      <div className="project-visual">
        <span className="project-index">
          {project.category}
        </span>

        <span className="accent">
          PROJECT
        </span>
      </div>

      <h3>{project.title}</h3>

      <p className="muted">
        {project.description}
      </p>

      <div className="tag-list">
        {project.technologies.map((technology) => (
          <span className="tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-card-actions">
        <Link
          href={`/projects/${project.slug}`}
          className="text-link"
        >
          View details
          <ArrowUpRight size={15} />
        </Link>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github size={18} />
          </a>
        )}
      </div>
    </article>
  );
}