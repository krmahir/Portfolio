import Link from "next/link";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";
import TerminalAnimation from "@/components/effects/TerminalAnimation";
import GlitchText from "@/components/effects/GlitchText";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <ShieldCheck size={15} aria-hidden="true" />
          CYBERSECURITY PORTFOLIO
        </p>

        <h1>
          Hi, I&apos;m <GlitchText>{profile.name}</GlitchText>
        </h1>

        <h2>{profile.title}</h2>

        <p className="hero-description">
          {profile.tagline}
        </p>

        <div className="hero-actions">
          <Button href="/projects">
            Explore Projects <ArrowRight size={16} />
          </Button>

          <Button href="/contact" variant="secondary">
            Contact Me
          </Button>
        </div>

        <Link href="#about" className="hero-scroll-link">
          Explore Portfolio <ArrowDown size={15} />
        </Link>
      </div>

      <div className="hero-visual">
        <TerminalAnimation />
      </div>
    </section>
  );
}