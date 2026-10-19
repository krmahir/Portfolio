import type { Skill } from "@/types/skill";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({
  skill
}: SkillCardProps) {
  return (
    <article className="card skill-card">
      <div className="skill-card-top">
        <h3>{skill.name}</h3>

        {skill.level && (
          <span className="tag">
            {skill.level}
          </span>
        )}
      </div>

      <p className="muted">{skill.category}</p>
    </article>
  );
}