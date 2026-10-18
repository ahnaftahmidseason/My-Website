import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  // Uses configured NEXT_PUBLIC_SITE_URL or safe placeholder localhost base until production domain is set
  const baseUrl = (siteConfig.seo.siteUrl || "http://localhost:3000").replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/ai-spoiler`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/dark-reels`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...projectRoutes];
}
