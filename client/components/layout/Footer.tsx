import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";

import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link href="/" className="footer-brand">
          <Shield size={18} />
          <span>{profile.name}</span>
        </Link>

        <p>
          © {new Date().getFullYear()} {profile.name}.
          All rights reserved.
        </p>

        <a href={socialLinks.email}>
          Get in touch
          <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}