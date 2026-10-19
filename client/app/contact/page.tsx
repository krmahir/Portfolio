import type { Metadata } from "next";
import InnerPage from "@/components/layout/InnerPage";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for professional inquiries.",
};

export default function ContactPage() {
  return (
    <InnerPage
      title="Contact"
      eyebrow="10 / CONTACT"
      description="Get in touch for professional inquiries and collaboration."
    >
      <ContactSection />
    </InnerPage>
  );
}