import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section className="content-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">02 / ABOUT</p>
        <h2>About Me</h2>
      </div>

      <div className="content-card">
        <p>{profile.bio}</p>
      </div>
    </section>
  );
}