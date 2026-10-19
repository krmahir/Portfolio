import type { Metadata } from "next";
import InnerPage from "@/components/layout/InnerPage";
import SkillsSection from "@/components/sections/SkillsSection";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and areas of knowledge.",
};

export default function SkillsPage() {
  return (
    <InnerPage
      title="Skills"
      eyebrow="05 / SKILLS"
      description="Technical skills, tools, and professional capabilities."
    >
      <SkillsSection />
    </InnerPage>
  );
}