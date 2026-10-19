import { education } from "@/data/education";
import EducationCard from "@/components/ui/EducationCard";

export default function EducationSection() {
  return (
    <section className="content-section" id="education">
      <div className="section-heading">
        <p className="eyebrow">07 / EDUCATION</p>
        <h2>Education</h2>
      </div>

      {education.length > 0 ? (
        <div className="content-grid">
          {education.map((item) => (
            <EducationCard key={item.id} education={item} />
          ))}
        </div>
      ) : (
        <p className="muted-text">Education details will be added soon.</p>
      )}
    </section>
  );
}