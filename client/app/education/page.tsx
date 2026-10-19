import type { Metadata } from "next";
import { education, coursework } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return <main className="page-shell shell"><SectionHeading eyebrow="ACADEMIC BACKGROUND" title="Education & coursework" description="Academic foundations and relevant subjects." /><div className="education-grid">{education.map((item) => <article className="education-card" key={item.degree}><span className="card-kicker">{item.period}</span><h3>{item.degree}</h3><p>{item.institution}</p><p className="muted">{item.detail}</p></article>)}</div><div className="coursework"><h3>Relevant coursework</h3><div className="tag-list">{coursework.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div></main>;
}
