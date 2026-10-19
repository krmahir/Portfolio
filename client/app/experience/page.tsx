import type { Metadata } from "next";
import InnerPage from "@/components/layout/InnerPage";
import ExperienceSection from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and responsibilities.",
};

export default function ExperiencePage() {
  return (
    <InnerPage
      title="Experience"
      eyebrow="03 / EXPERIENCE"
      description="Professional roles, responsibilities, and achievements."
    >
      <ExperienceSection />
    </InnerPage>
  );
}