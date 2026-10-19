import type { Metadata } from "next";
import InnerPage from "@/components/layout/InnerPage";
import ResearchSection from "@/components/sections/ResearchSection";

export const metadata: Metadata = {
  title: "Research",
  description: "Cybersecurity research interests and topics.",
};

export default function ResearchPage() {
  return (
    <InnerPage
      title="Research"
      eyebrow="01 / RESEARCH"
      description="Research interests, ongoing work, and academic topics."
    >
      <ResearchSection />
    </InnerPage>
  );
}