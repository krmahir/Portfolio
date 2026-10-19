import { SITE_CONFIG } from "@/lib/constants";

export function getCanonicalUrl(path = "/"): string {
  const baseUrl = SITE_CONFIG.url.replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/")
    ? path
    : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}