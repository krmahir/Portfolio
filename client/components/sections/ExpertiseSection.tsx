import { expertise } from "@/data/expertise";
import Badge from "@/components/ui/Badge";

export default function ExpertiseSection() {
  return (
    <section className="content-section" id="expertise">
      <div className="section-heading">
        <p className="eyebrow">04 / EXPERTISE</p>
        <h2>Areas of Expertise</h2>
      </div>

      <div className="content-grid">
        {expertise.map((item, index) => (
          <article className="content-card" key={`${item.title}-${index}`}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Badge>{item.title}</Badge>
          </article>
        ))}
      </div>
    </section>
  );
}