import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "network-security-lab",
    title: "Network Security Lab",
    description:
      "A learning project for exploring network security concepts and defensive monitoring.",
    details:
      "This demonstration project documents a controlled lab environment for studying network traffic, identifying suspicious activity, and understanding defensive security practices.",
    category: "Network Security",
    technologies: [
      "Linux",
      "Wireshark",
      "Networking",
      "Security Analysis",
    ],
    image: "/images/projects/network-security.jpg",
    github: "",
    demo: "",
    featured: true,
  },
  {
    slug: "security-awareness",
    title: "Security Awareness Resource",
    description:
      "A sample educational resource covering phishing awareness and safer online practices.",
    details:
      "This project demonstrates how security awareness material can explain suspicious links, social engineering indicators, password hygiene, and practical account protection.",
    category: "Security Education",
    technologies: [
      "Cybersecurity",
      "Documentation",
      "Security Awareness",
    ],
    image: "/images/projects/security-awareness.jpg",
    github: "",
    demo: "",
    featured: true,
  },
  {
    slug: "web-security-notes",
    title: "Web Security Learning Notes",
    description:
      "A structured collection of notes about common web application security concepts.",
    details:
      "This sample project organizes web security learning material around authentication, access control, input validation, secure configuration, and responsible testing in authorized environments.",
    category: "Web Security",
    technologies: [
      "Web Security",
      "OWASP",
      "Documentation",
      "Research",
    ],
    image: "/images/projects/web-security.jpg",
    github: "",
    demo: "",
    featured: true,
  },
];