import React from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { aiSpoilerData } from "@/data/ai-spoiler";
import { VideoCard } from "@/components/VideoCard";
import { Reveal } from "@/components/Reveal";

export function AISpoilerSection() {
  const aiVideos = aiSpoilerData.featuredVideos.filter(
    (v) => v.channelId === "ai-spoiler"
  );
  const flagshipVideo = aiVideos[0]!;
  const gridVideos = aiVideos.slice(1);

  return (
    <section
      id="ai-spoiler-section"
      aria-labelledby="ai-spoiler-section-heading"
      className="relative overflow-hidden border-b border-white/[0.08] bg-midnight py-section-lg"
    >
      {/* Subtle Electric-Blue Ambient Light */}
      <div
        className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-electric/12 blur-[130px]"
        aria-hidden="true"
      />

      <div className="editorial-container relative z-10">
        {/* Channel Header */}
        <Reveal className="flex flex-col justify-between gap-6 border-b border-white/[0.08] pb-10 lg:flex-row lg:items-end">
          <div className="flex items-center gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/channels/ai-spoiler-logo.png"
              alt="AI Spoiler Official Logo"
              className="h-16 w-16 rounded-full object-cover ring-2 ring-electric/60"
            />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ice">
                03 / CHANNEL 01 — WE TEST AI. YOU DECIDE.
              </p>
              <h2
                id="ai-spoiler-section-heading"
                className="mt-1 font-sans text-display-lg font-semibold tracking-[-0.04em] text-glacial"
              >
                AI Spoiler.
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/ai-spoiler"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-white/15 px-5 py-2 font-sans text-xs font-medium text-glacial transition-colors hover:border-white/40"
            >
              <span>Channel Page</span>
            </Link>

            <a
              href="https://www.youtube.com/@Ai_Spoiler"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-electric px-5 py-2 font-sans text-xs font-semibold text-glacial transition-opacity hover:opacity-90"
            >
              <span>@Ai_Spoiler</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        {/* Flagship AI Spoiler Feature Row */}
        <Reveal className="mt-12 grid grid-cols-1 items-center gap-8 rounded-card border border-white/10 bg-abyss/80 p-5 sm:p-8 lg:grid-cols-12">
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
            <h3 className="mt-3 font-sans text-2xl font-semibold leading-snug tracking-[-0.025em] text-glacial sm:text-3xl">
              <a
                href={flagshipVideo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ice"
              >
                {flagshipVideo.title}
              </a>
            </h3>
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

        {/* Remaining 4 AI Spoiler Releases */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gridVideos.map((video, idx) => (
            <Reveal key={video.id} delay={idx * 0.04}>
              <VideoCard video={video} accent="blue" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
