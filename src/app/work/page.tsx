import React from "react";
import type { Metadata } from "next";
import { WorkArchiveClient } from "@/components/WorkArchiveClient";
import { CollaborationCTA } from "@/components/CollaborationCTA";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected works, AI video systems, and narrative productions by Season across AI Spoiler and Dark Reels.",
};

export default function WorkPage() {
  return (
    <>
      <section
        aria-labelledby="work-page-heading"
        className="border-b border-white/[0.08] pt-28 pb-section-md sm:pt-32"
      >
        <div className="editorial-container">
          <Reveal className="mb-12 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
              ARCHIVE
            </p>
            <h1
              id="work-page-heading"
              className="mt-2 font-sans text-display-xl font-semibold tracking-[-0.04em] text-glacial"
            >
              Selected Work.
            </h1>
          </Reveal>

          <WorkArchiveClient />
        </div>
      </section>

      <CollaborationCTA />
    </>
  );
}
