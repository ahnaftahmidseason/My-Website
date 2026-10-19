import React from "react";
import type { Metadata } from "next";
import { ArrowUpRight, Play } from "lucide-react";
import { aiSpoilerData } from "@/data/ai-spoiler";
import { VideoCard } from "@/components/VideoCard";
import { Reveal } from "@/components/Reveal";
import { CollaborationCTA } from "@/components/CollaborationCTA";

export const metadata: Metadata = {
  title: "AI Spoiler (@Ai_Spoiler)",
  description:
    "AI Spoiler (@Ai_Spoiler) — Season's generative AI video exploration and review channel on YouTube.",
};

export default function AISpoilerPage() {
  const aiSpoilerChannel = aiSpoilerData.channels.find(
    (c) => c.id === "ai-spoiler"
  )!;
  const aiSpoilerVideos = aiSpoilerData.featuredVideos.filter(
    (v) => v.channelId === "ai-spoiler"
  );
  const flagshipVideo = aiSpoilerVideos[0]!;

  return (
    <>
      <section
        aria-labelledby="ai-spoiler-heading"
        className="relative overflow-hidden border-b border-white/[0.08] bg-midnight pt-28 pb-section-md text-glacial sm:pt-32"
      >
        <div
          className="pointer-events-none absolute left-0 top-0 h-[500px] w-[580px] rounded-full bg-electric/12 blur-[150px]"
          aria-hidden="true"
        />

        <div className="editorial-container relative z-10">
          <Reveal className="flex flex-col justify-between gap-8 border-b border-white/[0.08] pb-10 lg:flex-row lg:items-end">
            <div className="flex items-center gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={aiSpoilerChannel.logoSrc}
                alt="AI Spoiler Official Logo"
                className="h-20 w-20 rounded-full object-cover ring-2 ring-electric/60"
              />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ice">
                  {aiSpoilerChannel.tagline}
                </p>
                <h1
                  id="ai-spoiler-heading"
                  className="mt-1 font-sans text-display-xl font-semibold tracking-[-0.04em] text-glacial"
                >
                  AI Spoiler.
                </h1>
                <p className="mt-1 font-mono text-xs text-silver">
                  {aiSpoilerChannel.handle}
                </p>
              </div>
            </div>

            <a
              href={aiSpoilerChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-electric px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-glacial transition-opacity hover:opacity-90"
            >
              <span>Subscribe on YouTube</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>

          {/* Featured AI Spoiler Release */}
          <Reveal className="mt-12 grid grid-cols-1 items-center gap-8 rounded-card border border-white/10 bg-abyss/85 p-5 sm:p-8 lg:grid-cols-12">
            <a
              href={flagshipVideo.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-video w-full overflow-hidden rounded-editorial lg:col-span-7"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={flagshipVideo.thumbnailSrc}
                alt={flagshipVideo.thumbnailAlt}
                className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-midnight/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-glacial text-midnight shadow-2xl">
                  <Play className="ml-0.5 h-5 w-5 fill-current" />
                </span>
              </div>
            </a>

            <div className="lg:col-span-5 lg:pl-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ice">
                FEATURED RELEASE // {flagshipVideo.category}
              </span>
              <h2 className="mt-3 font-sans text-2xl font-semibold leading-snug tracking-[-0.025em] text-glacial sm:text-3xl">
                {flagshipVideo.title}
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-silver">
                {flagshipVideo.summary}
              </p>
              <div className="mt-6">
                <a
                  href={flagshipVideo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-glacial px-5 py-2 font-sans text-xs font-semibold text-midnight transition-opacity hover:opacity-90"
                >
                  <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* All AI Spoiler Releases */}
          <div className="mt-14">
            <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-silver">
              ALL RELEASES ({aiSpoilerVideos.length})
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {aiSpoilerVideos.map((video, idx) => (
                <Reveal key={video.id} delay={idx * 0.05}>
                  <VideoCard video={video} accent="blue" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CollaborationCTA />
    </>
  );
}
