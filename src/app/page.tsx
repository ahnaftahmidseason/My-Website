import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { ChannelShowreel } from "@/components/ChannelShowreel";
import { FeaturedWork } from "@/components/FeaturedWork";
import { AISpoilerSection } from "@/components/AISpoilerSection";
import { DarkReelsSection } from "@/components/DarkReelsSection";
import { AboutPreview } from "@/components/AboutPreview";
import { CollaborationCTA } from "@/components/CollaborationCTA";
import { siteConfig } from "@/data/site-config";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.brand.name,
    alternateName: siteConfig.brand.wordmark,
    jobTitle: siteConfig.brand.positioning,
    description: siteConfig.seo.description,
    sameAs: [
      "https://www.youtube.com/@Ai_Spoiler",
      "https://www.youtube.com/@DarkReels9",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <ChannelShowreel />
      <FeaturedWork />
      <AISpoilerSection />
      <DarkReelsSection />
      <AboutPreview />
      <CollaborationCTA />
    </>
  );
}
