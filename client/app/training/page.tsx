import type { Metadata } from "next";
import { training } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Professional Training" };

export default function TrainingPage() {
  return <main className="page-shell shell"><SectionHeading eyebrow="DEVELOPMENT" title="Professional training" description="Workshops, courses and structured training." /><div className="card-grid">{training.map((item) => <article className="simple-card" key={item.title}><p className="card-kicker">{item.provider} · {item.year}</p><h3>{item.title}</h3><p className="muted">{item.detail}</p></article>)}</div></main>;
}
import type { Metadata } from "next";
import InnerPage from "@/components/layout/InnerPage";
import ProfessionalTrainingSection from "@/components/sections/ProfessionalTrainingSection";

export const metadata: Metadata = {
  title: "Professional Training",
  description: "Professional training and technical development.",
};

export default function TrainingPage() {
  return (
    <InnerPage
      title="Professional Training"
      eyebrow="07 / TRAINING"
      description="Training programs and professional development."
    >
      <ProfessionalTrainingSection />
    </InnerPage>
  );
}