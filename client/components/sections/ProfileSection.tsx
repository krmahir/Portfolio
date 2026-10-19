import { profile } from "@/data/profile";

export default function ProfileSection() {
  return (
    <section className="content-section" id="profile">
      <div className="section-heading">
        <p className="eyebrow">01 / PROFILE</p>
        <h2>Professional Profile</h2>
      </div>

      <div className="content-card">
        <h3>{profile.name}</h3>
        <p className="muted-text">{profile.title}</p>
        <p>{profile.bio}</p>
        <p className="muted-text">{profile.location}</p>
      </div>
    </section>
  );
}