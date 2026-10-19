import { experience } from "@/data/experience";
import ExperienceCard from "@/components/ui/ExperienceCard";

export default function ExperienceSection() {
  return (
    <section className="content-section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">06 / EXPERIENCE</p>
        <h2>Professional Experience</h2>
      </div>

      {experience.length > 0 ? (
        <div className="content-grid">
          {experience.map((item) => (
            <ExperienceCard key={item.id} experience={item} />
          ))}
        </div>
      ) : (
        <p className="muted-text">
          Professional experience details will be added soon.
        </p>
      )}
    </section>
  );
}