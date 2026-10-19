import type { Metadata } from "next";
import InnerPage from "@/components/layout/InnerPage";
import VolunteeringSection from "@/components/sections/VolunteeringSection";

export const metadata: Metadata = {
  title: "Volunteering",
  description: "Community involvement and volunteering experience.",
};

export default function VolunteeringPage() {
  return (
    <InnerPage
      title="Volunteering"
      eyebrow="09 / COMMUNITY"
      description="Community participation and volunteer contributions."
    >
      <VolunteeringSection />
    </InnerPage>
  );
}