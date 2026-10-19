export interface CourseworkItem {
  id: string;
  title: string;
  provider: string;
  description: string;
  topics: string[];
  url?: string;
}

export const coursework: CourseworkItem[] = [
  {
    id: "coursework-1",
    title: "Networking Fundamentals",
    provider: "Learning Resource",
    description:
      "Example learning topic covering networking concepts and protocols.",
    topics: ["TCP/IP", "DNS", "HTTP", "Network Basics"],
  },
  {
    id: "coursework-2",
    title: "Linux Fundamentals",
    provider: "Learning Resource",
    description:
      "Example learning topic covering Linux commands and system administration basics.",
    topics: ["Linux CLI", "Permissions", "Processes", "Filesystems"],
  },
  {
    id: "coursework-3",
    title: "Web Application Security Fundamentals",
    provider: "Learning Resource",
    description:
      "Example learning topic covering common web security risks and defensive techniques.",
    topics: [
      "Authentication",
      "Access Control",
      "Input Validation",
      "OWASP",
    ],
  },
];