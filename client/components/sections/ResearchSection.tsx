import { research } from "@/data/research";
import ResearchCard from "@/components/ui/ResearchCard";

export default function ResearchSection() {
  return (
    <section className="content-section" id="research">
      <div className="section-heading">
        <p className="eyebrow">03 / RESEARCH</p>
        <h2>Research Interests</h2>
        <p>Research topics and academic interests.</p>
      </div>

      {research.length > 0 ? (
        <div className="content-grid">
          {research.map((item) => (
            <ResearchCard key={item.id} research={item} />
          ))}
        </div>
      ) : (
        <p className="muted-text">Research information will be added soon.</p>
      )}
    </section>
  );
}