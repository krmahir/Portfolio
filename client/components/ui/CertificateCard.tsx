import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";

import type { Certification } from "@/types/certification";

interface CertificateCardProps {
  certificate: Certification;
}

export default function CertificateCard({
  certificate
}: CertificateCardProps) {
  return (
    <article className="card certificate-card">
      <Award size={28} className="accent" />

      <h3>{certificate.name}</h3>

      <p className="muted">
        Issued by {certificate.issuer}
      </p>

      <p className="mono muted">
        {certificate.issueDate}
      </p>

      {certificate.credentialId && (
        <p className="mono">
          ID: {certificate.credentialId}
        </p>
      )}

      {certificate.credentialUrl && (
        <Link
          href={certificate.credentialUrl}
          target="_blank"
          className="text-link"
        >
          Verify certificate
          <ExternalLink size={15} />
        </Link>
      )}
    </article>
  );
}