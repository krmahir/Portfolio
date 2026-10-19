import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export function createMetadata(
  title: string,
  description?: string
): Metadata {
  const pageDescription =
    description ?? SITE_CONFIG.description;

  return {
    title: {
      default: title,
      template: `%s | ${SITE_CONFIG.name}`
    },
    description: pageDescription,
    openGraph: {
      title,
      description: pageDescription,
      type: "website",
      siteName: SITE_CONFIG.name,
      url: SITE_CONFIG.url
    },
    robots: {
      index: true,
      follow: true
    }
  };
}