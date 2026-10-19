import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageContainer from "@/components/layout/PageContainer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

interface InnerPageProps {
  title: string;
  eyebrow: string;
  description?: string;
  children: ReactNode;
}

export default function InnerPage({
  title,
  eyebrow,
  description,
  children,
}: InnerPageProps) {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="inner-page">
        <PageContainer>
          <header className="inner-page-header">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>

            {description && (
              <p className="inner-page-description">
                {description}
              </p>
            )}
          </header>

          {children}
        </PageContainer>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}