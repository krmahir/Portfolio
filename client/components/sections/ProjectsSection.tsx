import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="content-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">05 / PROJECTS</p>
        <h2>Selected Projects</h2>
        <p>Practical projects and security learning work.</p>
      </div>

      {projects.length > 0 ? (
        <div className="content-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="muted-text">Projects will be added soon.</p>
      )}
    </section>
  );
}