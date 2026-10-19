import type { Metadata } from "next";
import InnerPage from "@/components/layout/InnerPage";
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Cybersecurity projects and practical work.",
};

export default function ProjectsPage() {
  return (
    <InnerPage
      title="Projects"
      eyebrow="02 / PROJECTS"
      description="A collection of security projects, experiments, and learning work."
    >
      <ProjectsSection />
    </InnerPage>
  );
}