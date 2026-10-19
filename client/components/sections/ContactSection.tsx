import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import SocialLinks from "@/components/ui/SocialLinks";

export default function ContactSection() {
  return (
    <section className="content-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">14 / CONTACT</p>
        <h2>Get in Touch</h2>
        <p>
          For professional inquiries, collaboration, or research discussions,
          use the contact information below.
        </p>
      </div>

      <div className="content-card contact-card">
        <a
          className="contact-detail"
          href={`mailto:${profile.email}`}
        >
          <Mail size={18} aria-hidden="true" />
          <span>{profile.email}</span>
        </a>

        <div className="contact-detail">
          <MapPin size={18} aria-hidden="true" />
          <span>{profile.location}</span>
        </div>

        <SocialLinks />
      </div>
    </section>
  );
}