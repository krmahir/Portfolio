import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience
}: ExperienceCardProps) {
  return (
    <article className="card experience-card">
      <div className="experience-card-header">
        <div>
          <h3>{experience.role}</h3>

          <p className="accent">
            {experience.organization}
          </p>
        </div>

        <span className="tag">
          {experience.startDate} — {experience.endDate}
        </span>
      </div>

      <p className="muted">
        {experience.location}
      </p>

      <ul className="content-list">
        {experience.description.map((item, index) => (
          <li key={`${index}-${item}`}>{item}</li>
        ))}
      </ul>

      {experience.technologies &&
        experience.technologies.length > 0 && (
          <div className="tag-list">
            {experience.technologies.map((technology) => (
              <span className="tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        )}
    </article>
  );
}