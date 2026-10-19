import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  BookOpen
} from "lucide-react";

import { socialLinks } from "@/data/social-links";

export default function SocialLinks() {
  const links = [
    {
      label: "GitHub",
      href: socialLinks.github,
      icon: Github
    },
    {
      label: "LinkedIn",
      href: socialLinks.linkedin,
      icon: Linkedin
    },
    {
      label: "ResearchGate",
      href: socialLinks.researchGate,
      icon: BookOpen
    },
    {
      label: "Email",
      href: socialLinks.email,
      icon: Mail
    }
  ].filter((item) => Boolean(item.href));

  return (
    <div className="social-links">
      {links.map((item) => {
        const Icon = item.icon;

        const external = item.href.startsWith("http");

        if (external) {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
            >
              <Icon size={19} />
            </a>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
          >
            <Icon size={19} />
          </Link>
        );
      })}
    </div>
  );
}