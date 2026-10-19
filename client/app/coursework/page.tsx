import type { Metadata } from "next";
import InnerPage from "@/components/layout/InnerPage";
import CourseworkSection from "@/components/sections/CourseworkSection";

export const metadata: Metadata = {
  title: "Coursework",
  description: "Cybersecurity coursework and learning resources.",
};

export default function CourseworkPage() {
  return (
    <InnerPage
      title="Coursework"
      eyebrow="06 / COURSEWORK"
      description="Relevant coursework, technical subjects, and learning resources."
    >
      <CourseworkSection />
    </InnerPage>
  );
}