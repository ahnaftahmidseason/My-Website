import React from "react";
import Link from "next/link";
import { ArrowUpRight, Globe2, Languages, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Reveal } from "@/components/Reveal";

export function AboutPreview() {
  const { about } = siteConfig;

  return (
    <section
      aria-labelledby="about-preview-heading"
      className="relative overflow-hidden border-b border-white/[0.08] bg-midnight py-section-lg"
    >
      {/* Subtle cobalt ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, transparent 70%)",
        }}
      />

      <div className="editorial-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Portrait Frame */}
          <Reveal className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-card border border-white/15 bg-abyss shadow-[0_24px_70px_rgba(0,0,0,0.65)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={about.portraitAsset.src}
                  alt={about.portraitAsset.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/85 via-transparent to-midnight/20"
                />
              </div>

              {/* Top floating badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-midnight/80 px-3.5 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_8px_#3B82F6]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-glacial">
                  17 Y/O CREATOR // SEASON®
                </span>
              </div>

              {/* Bottom caption bar */}
              <div className="absolute right-4 bottom-4 left-4 flex flex-wrap items-center justify-between gap-2 rounded-editorial border border-white/12 bg-midnight/85 px-4 py-2.5 backdrop-blur-md">
                <span className="font-sans text-xs font-semibold text-glacial">
                  Ahnaf Tahmid Season
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ice">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  Fulbari, Dinajpur, Bangladesh
                </span>
              </div>
            </div>
          </Reveal>

          {/* Editorial Bio Preview */}
          <Reveal delay={0.08} className="lg:col-span-6 lg:pl-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-abyss px-3.5 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-ice" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ice">
                05 / A LITTLE ABOUT ME
              </span>
            </div>

            <h2
              id="about-preview-heading"
              className="mt-4 font-sans text-display-lg font-semibold tracking-[-0.035em] text-glacial"
            >
              Hey, I’m Ahnaf
              <br />
              Tahmid Season.
            </h2>

            <p className="mt-5 font-sans text-base leading-relaxed text-silver">
              I’m a 17-year-old content creator from{" "}
              <span className="font-medium text-glacial">
                Fulbari, Dinajpur, Bangladesh
              </span>
              . I’ve always been curious about technology, especially AI—exploring new AI tools, experimenting with different ideas, and figuring out how technology can turn something that once seemed impossible into reality.
            </p>

            <p className="mt-4 font-sans text-base leading-relaxed text-silver">
              Right now, I’m running two YouTube channels:{" "}
              <a
                href="https://www.youtube.com/@Ai_Spoiler"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ice underline decoration-electric/50 underline-offset-4 hover:text-glacial"
              >
                AI Spoiler
              </a>
              , where I explore AI tools and share what’s possible with artificial intelligence, and{" "}
              <a
                href="https://www.youtube.com/@DarkReels9"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-glacial underline decoration-white/30 underline-offset-4 hover:text-ice"
              >
                Dark Reels
              </a>
              , where I create movie explanation content.
            </p>

            {/* Quick Personal Facts Grid */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-card border border-white/10 bg-abyss/80 p-3.5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ice">
                  <Languages className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>LANGUAGES</span>
                </div>
                <p className="mt-1 font-sans text-xs font-semibold text-glacial">
                  Bangla · Hindi · English
                </p>
              </div>

              <div className="rounded-card border border-white/10 bg-abyss/80 p-3.5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ice">
                  <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>BEYOND YOUTUBE</span>
                </div>
                <p className="mt-1 font-sans text-xs font-semibold text-glacial">
                  Football Fan & World Travel Dreamer
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
              <p className="font-sans text-sm font-bold tracking-[-0.01em] text-glacial">
                “This is just the beginning.”
              </p>

              <Link
                href="/about"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-glacial px-6 py-2.5 font-sans text-xs font-semibold text-midnight transition-transform hover:scale-[1.02]"
              >
                <span>Read Full Story</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
