import type { Education } from "@/types/education";

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({
  education
}: EducationCardProps) {
  return (
    <article className="card education-card">
      <span className="eyebrow">
        {education.startYear} — {education.endYear}
      </span>

      <h3>{education.degree}</h3>

      <p className="accent">
        {education.institution}
      </p>

      <p className="muted">
        {education.field}
      </p>

      {education.description && (
        <p>{education.description}</p>
      )}
    </article>
  );
}