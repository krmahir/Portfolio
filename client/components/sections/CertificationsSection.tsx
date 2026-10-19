import { certifications } from "@/data/certifications";
import CertificateCard from "@/components/ui/CertificateCard";

export default function CertificationsSection() {
  return (
    <section className="content-section" id="certifications">
      <div className="section-heading">
        <p className="eyebrow">11 / CERTIFICATIONS</p>
        <h2>Certifications</h2>
      </div>

      {certifications.length > 0 ? (
        <div className="content-grid">
          {certifications.map((item) => (
            <CertificateCard key={item.id} certificate={item} />
          ))}
        </div>
      ) : (
        <p className="muted-text">
          Verified certifications will be listed here.
        </p>
      )}
    </section>
  );
}