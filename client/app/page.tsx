import Link from "next/link";

import { profile } from "@/data/profile";
import { expertise } from "@/data/expertise";
import { socialLinks } from "@/data/social-links";

const icons: Record<string, string> = {
  search: "⌕",
  network: "◎",
  shield: "⬡",
  scan: "⌗",
  code: "</>",
  lock: "▣",
};

const featuredProjects = [
  {
    title: "Security Research Lab",
    category: "RESEARCH",
    description:
      "A research-focused environment for documenting security findings and defensive techniques.",
    technologies: ["Security Research", "Documentation"],
  },
  {
    title: "Web Security Assessment",
    category: "WEB SECURITY",
    description:
      "A project exploring web application security concepts and vulnerability prevention.",
    technologies: ["Web Security", "OWASP"],
  },
  {
    title: "Threat Analysis Toolkit",
    category: "THREAT ANALYSIS",
    description:
      "A learning project for organizing threat intelligence and security analysis workflows.",
    technologies: ["Threat Analysis", "Python"],
  },
];

const quickLinks = [
  {
    title: "Research",
    description: "Research interests and publications.",
    href: "/research",
  },
  {
    title: "Experience",
    description: "Professional and practical experience.",
    href: "/experience",
  },
  {
    title: "Education",
    description: "Academic background and coursework.",
    href: "/education",
  },
  {
    title: "Certifications",
    description: "Professional training and credentials.",
    href: "/certifications",
  },
  {
    title: "Skills",
    description: "Technical knowledge and tools.",
    href: "/skills",
  },
  {
    title: "Volunteering",
    description: "Community involvement and activities.",
    href: "/volunteering",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Navigation */}

      <header className="site-header">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="Home">
            <span className="brand-icon" aria-hidden="true">
              ⬡
            </span>

            <span>
              {profile.name}
              <small>SECURITY PORTFOLIO</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="#about">About</Link>
            <Link href="#expertise">Expertise</Link>
            <Link href="/research">Research</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/experience">Experience</Link>
          </nav>

          <Link
            href="/contact"
            className="button button-primary nav-contact"
          >
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      {/* Hero */}

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="status-line">
              <span className="status-dot" />
              <span>CYBERSECURITY &amp; RESEARCH</span>
            </div>

            <p className="hero-greeting">Hello, I&apos;m</p>

            <h1>
              {profile.name}
              <span className="hero-period">.</span>
            </h1>

            <h2>{profile.title}</h2>

            <p className="hero-description">{profile.tagline}</p>

            <div className="hero-actions">
              <Link
                href="/projects"
                className="button button-primary"
              >
                Explore Projects
                <span aria-hidden="true"> →</span>
              </Link>

              <Link
                href="/research"
                className="button button-secondary"
              >
                View Research
              </Link>
            </div>

            <div className="hero-socials">
              <span>CONNECT</span>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <span aria-hidden="true">GH</span>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <span aria-hidden="true">in</span>
              </a>

              <a
                href={socialLinks.email}
                aria-label="Email"
              >
                <span aria-hidden="true">@</span>
              </a>
            </div>
          </div>

          {/* Terminal Card */}

          <div className="terminal-card">
            <div className="terminal-top">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>

              <span>profile.sh</span>

              <span aria-hidden="true">&gt;_</span>
            </div>

            <div className="terminal-body">
              <p className="terminal-muted">$ whoami</p>

              <p className="terminal-green">{profile.name}</p>

              <p className="terminal-muted">
                $ cat specialization.txt
              </p>

              <ul>
                <li>Cybersecurity Research</li>
                <li>Security Analysis</li>
                <li>Digital Safety</li>
                <li>Secure Systems</li>
              </ul>

              <p className="terminal-muted">$ cat location.txt</p>

              <p>{profile.location}</p>

              <p className="terminal-prompt">
                $ <span className="cursor">▋</span>
              </p>
            </div>

            <div className="terminal-footer">
              <span>
                <span className="status-dot" />
                SYSTEM READY
              </span>

              <span>UTF-8</span>
            </div>
          </div>
        </div>

        <div className="container hero-bottom">
          <span>01 / INTRODUCTION</span>

          <a href="#about">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* About */}

      <section id="about" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">ABOUT ME</span>

            <h2 className="heading">
              Understanding security.
              <br />
              <span className="accent">Building knowledge.</span>
            </h2>

            <p className="muted about-intro">
              A brief introduction to my interests, approach, and
              professional direction.
            </p>
          </div>

          <div className="about-grid">
            <article className="card about-card">
              <div className="about-icon" aria-hidden="true">
                ◈
              </div>

              <h3>Profile</h3>

              <p className="muted">{profile.bio}</p>

              <Link href="/education" className="text-link">
                My background <span aria-hidden="true">→</span>
              </Link>
            </article>

            <article className="card about-card">
              <div className="about-icon" aria-hidden="true">
                ⌕
              </div>

              <h3>Research Mindset</h3>

              <p className="muted">
                I value careful analysis, evidence-based
                investigation, responsible security practices, and
                continuous learning.
              </p>

              <Link href="/research" className="text-link">
                Explore research <span aria-hidden="true">→</span>
              </Link>
            </article>

            <article className="card about-card">
              <div className="about-icon" aria-hidden="true">
                {"</>"}
              </div>

              <h3>Practical Learning</h3>

              <p className="muted">
                I use projects and hands-on learning to develop my
                understanding of digital security and secure
                technologies.
              </p>

              <Link href="/projects" className="text-link">
                Browse projects <span aria-hidden="true">→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Expertise */}

      <section
        id="expertise"
        className="section expertise-section"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">AREAS OF INTEREST</span>

            <h2 className="heading">Cybersecurity Expertise</h2>

            <p className="muted">
              Areas of interest and professional development.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item, index) => {
              const icon = icons[item.icon] ?? "◇";

              return (
                <article
                  className="card expertise-card"
                  key={item.title}
                >
                  <div className="expertise-top">
                    <span className="expertise-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="accent text-icon"
                      aria-hidden="true"
                    >
                      {icon}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <p className="muted">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}

      <section id="projects" className="section">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <span className="eyebrow">SELECTED WORK</span>

              <h2 className="heading">Featured Projects</h2>
            </div>

            <Link
              href="/projects"
              className="button button-secondary"
            >
              All Projects <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <article
                className="card project-card"
                key={project.title}
              >
                <div className="project-visual">
                  <div
                    className="project-visual-icon"
                    aria-hidden="true"
                  >
                    {index === 0
                      ? "⌕"
                      : index === 1
                        ? "⬡"
                        : "◎"}
                  </div>

                  <span className="project-index">
                    PROJECT_0{index + 1}
                  </span>
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p className="muted">{project.description}</p>

                <div className="tag-list">
                  {project.technologies.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="demo-notice">
            The projects shown here are examples. Replace them with
            your actual work before publishing the website.
          </p>
        </div>
      </section>

      {/* Quick Links */}

      <section className="section quick-links-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">PROFESSIONAL JOURNEY</span>

            <h2 className="heading">More About My Work</h2>
          </div>

          <div className="quick-links-grid">
            {quickLinks.map((item) => (
              <Link
                href={item.href}
                className="card quick-link-card"
                key={item.title}
              >
                <div>
                  <h3>{item.title}</h3>

                  <p className="muted">{item.description}</p>
                </div>

                <span className="accent" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}

      <section className="section contact-section">
        <div className="container">
          <div className="contact-card">
            <span className="eyebrow">GET IN TOUCH</span>

            <h2 className="heading">Let&apos;s connect.</h2>

            <p className="muted">
              Interested in cybersecurity research, professional
              collaboration, or exchanging ideas? Feel free to reach
              out.
            </p>

            <div className="contact-actions">
              <a
                href={`mailto:${profile.email}`}
                className="button button-primary"
              >
                <span aria-hidden="true">@</span>
                Contact Me
              </a>

              <Link
                href="/contact"
                className="button button-secondary"
              >
                More Information <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="site-footer">
        <div className="container footer-inner">
          <Link href="/" className="footer-brand">
            <span aria-hidden="true">⬡</span>
            <span>{profile.name}</span>
          </Link>

          <p>
            © {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </p>

          <a href={socialLinks.email}>
            Contact <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </main>
  );
}