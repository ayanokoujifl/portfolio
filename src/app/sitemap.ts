import type { MetadataRoute } from "next"
import { sharedProfile } from "@/data/portfolio"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = sharedProfile.portfolioDomain
  const paths = ["/en", "/pt", "/en/projects", "/pt/projects", "/en/aboutme", "/pt/aboutme"]

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/en" || path === "/pt" ? 1 : 0.8,
  }))
}
