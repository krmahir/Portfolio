import type { Metadata, Viewport } from "next";
import "./globals.css";

import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`
  },

  description: SITE_CONFIG.description,

  applicationName: SITE_CONFIG.name,

  keywords: [
    "Cybersecurity",
    "Cybersecurity Research",
    "Information Security",
    "Security Researcher",
    "Digital Security"
  ],

  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    type: "website",
    siteName: SITE_CONFIG.name,
    url: SITE_CONFIG.url
  },

  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b10"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}