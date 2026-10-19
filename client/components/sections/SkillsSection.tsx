import { skills } from "@/data/skills";
import SkillCard from "@/components/ui/SkillCard";

export default function SkillsSection() {
  return (
    <section className="content-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">09 / SKILLS</p>
        <h2>Technical Skills</h2>
      </div>

      {skills.length > 0 ? (
        <div className="content-grid">
          {skills.map((skill) => (
            <SkillCard key={`${skill.name}-${skill.category}`} skill={skill} />
          ))}
        </div>
      ) : (
        <p className="muted-text">Skills will be added soon.</p>
      )}
    </section>
  );
}