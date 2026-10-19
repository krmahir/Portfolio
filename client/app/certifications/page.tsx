import type { Metadata } from "next";
import InnerPage from "@/components/layout/InnerPage";
import CertificationsSection from "@/components/sections/CertificationsSection";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications and credentials.",
};

export default function CertificationsPage() {
  return (
    <InnerPage
      title="Certifications"
      eyebrow="08 / CERTIFICATIONS"
      description="Verified certifications and professional credentials."
    >
      <CertificationsSection />
    </InnerPage>
  );
}