import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.seo.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(baseUrl ? { sitemap: `${baseUrl.replace(/\/$/, "")}/sitemap.xml` } : {}),
  };
}
