import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Compass, Globe2, Languages, MapPin, Sparkles, Trophy } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Reveal } from "@/components/Reveal";
import { CollaborationCTA } from "@/components/CollaborationCTA";

export const metadata: Metadata = {
  title: "About — Ahnaf Tahmid Season",
  description:
    "Hey, I’m Ahnaf Tahmid Season, a 17-year-old content creator from Fulbari, Dinajpur, Bangladesh running AI Spoiler (@Ai_Spoiler) and Dark Reels (@DarkReels9).",
};

const profileSpecs = [
  {
    icon: MapPin,
    label: "HOMETOWN",
    value: "Fulbari, Dinajpur, Bangladesh",
  },
  {
    icon: Sparkles,
    label: "CREATOR PROFILE",
    value: "17 Years Old · AI & Cinema",
  },
  {
    icon: Languages,
    label: "LANGUAGES",
    value: "Bangla · Hindi · English",
  },
  {
    icon: Compass,
    label: "DREAM & INTERESTS",
    value: "Football Fan · World Travel",
  },
];

export default function AboutPage() {
  const { about } = siteConfig;

  return (
    <>
      <section
        aria-labelledby="about-page-heading"
        className="relative overflow-hidden border-b border-white/[0.08] pt-28 pb-section-md sm:pt-32"
      >
        {/* Ambient studio lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-16 right-1/4 h-[460px] w-[560px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 70%)",
          }}
        />

        <div className="editorial-container relative z-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Column: Full "A Little About Me" Story */}
            <Reveal className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-abyss px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_8px_#3B82F6]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ice">
                  A LITTLE ABOUT ME // SEASON®
                </span>
              </div>

              <h1
                id="about-page-heading"
                className="mt-5 font-sans text-display-xl font-semibold tracking-[-0.04em] text-glacial"
              >
                Hey, I’m Ahnaf Tahmid Season.
              </h1>

              <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-ice">
                17-YEAR-OLD CONTENT CREATOR · FULBARI, DINAJPUR, BANGLADESH
              </p>

              {/* Full Authentic Story */}
              <div className="mt-8 space-y-5 border-l-2 border-electric/40 pl-5 sm:pl-7">
                <p className="font-sans text-lg font-medium leading-relaxed text-glacial">
                  Hey, I’m Ahnaf Tahmid Season, a 17-year-old content creator from Fulbari, Dinajpur, Bangladesh.
                </p>

                <p className="font-sans text-base leading-relaxed text-silver">
                  I’ve always been curious about technology, especially AI. I love exploring new AI tools, experimenting with different ideas, and figuring out how technology can turn something that once seemed impossible into reality. That curiosity is a big part of who I am and what I create.
                </p>

                <p className="font-sans text-base leading-relaxed text-silver">
                  Right now, I’m running two YouTube channels focused on different sides of my creativity:{" "}
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
                  , where I create movie explanation content. For me, content creation is more than just making videos. It’s a way to express ideas, learn new things, and turn my imagination into something people can enjoy.
                </p>

                <p className="font-sans text-base leading-relaxed text-silver">
                  Outside of creating content, I’m a big football fan. I also enjoy learning, experimenting with new technology, and discovering things I haven’t tried before. I speak{" "}
                  <span className="font-medium text-glacial">
                    Bangla, Hindi, and English
                  </span>
                  , which helps me connect with different people and explore ideas from different parts of the world.
                </p>

                <p className="font-sans text-base leading-relaxed text-silver">
                  And one of my biggest dreams? To travel around the world someday. I want to experience different cultures, explore new places, meet interesting people, and see more of what life has to offer.
                </p>

                <p className="font-sans text-base leading-relaxed text-silver">
                  I’m still at the beginning of my journey, with a lot to learn and a lot I want to build. But that’s what makes it exciting. I’m here to keep creating, keep exploring, and see how far curiosity can take me.
                </p>

                <div className="pt-2">
                  <p className="inline-block rounded-card border border-electric/40 bg-electric/10 px-5 py-3 font-sans text-lg font-bold tracking-[-0.02em] text-glacial">
                    This is just the beginning.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Portrait & Creator Profile Specs */}
            <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:col-span-5">
              <div className="overflow-hidden rounded-card border border-white/15 bg-abyss shadow-[0_24px_70px_rgba(0,0,0,0.65)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={about.portraitAsset.src}
                    alt={about.portraitAsset.alt}
                    className="h-full w-full object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between rounded-editorial border border-white/15 bg-midnight/85 px-3.5 py-2 backdrop-blur-md">
                    <span className="font-sans text-xs font-bold text-glacial">
                      Ahnaf Tahmid Season
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ice">
                      FULBARI, DINAJPUR
                    </span>
                  </div>
                </div>

                {/* 4 Profile Spec Cards inside the frame */}
                <div className="grid grid-cols-1 gap-2.5 p-4 sm:grid-cols-2">
                  {profileSpecs.map((spec) => {
                    const Icon = spec.icon;
                    return (
                      <div
                        key={spec.label}
                        className="rounded-editorial border border-white/10 bg-midnight/90 p-3.5"
                      >
                        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ice">
                          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{spec.label}</span>
                        </div>
                        <p className="mt-1 font-sans text-xs font-semibold text-glacial">
                          {spec.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dual Channel Links */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href="https://www.youtube.com/@Ai_Spoiler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-card border border-white/12 bg-abyss p-3.5 transition-colors hover:border-electric/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/15">
                      <Image
                        src="/media/channels/ai-spoiler-logo.png"
                        alt="AI Spoiler"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="block font-sans text-xs font-bold text-glacial group-hover:text-ice">
                        AI Spoiler
                      </span>
                      <span className="block font-mono text-[10px] text-silver">
                        @Ai_Spoiler
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-silver group-hover:text-glacial" aria-hidden="true" />
                </a>

                <a
                  href="https://www.youtube.com/@DarkReels9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-card border border-white/12 bg-abyss p-3.5 transition-colors hover:border-white/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/15">
                      <Image
                        src="/media/channels/dark-reels-logo.png"
                        alt="Dark Reels"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="block font-sans text-xs font-bold text-glacial">
                        Dark Reels
                      </span>
                      <span className="block font-mono text-[10px] text-silver">
                        @DarkReels9
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-silver group-hover:text-glacial" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* 4 Personal & Creative Pillars */}
          <div className="mt-20 border-t border-white/[0.08] pt-14">
            <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
                  WHAT DRIVES ME
                </p>
                <h2 className="mt-1 font-sans text-display-md font-semibold tracking-[-0.03em] text-glacial">
                  Curiosity, Creativity & Horizons
                </h2>
              </div>
              <div className="flex items-center gap-4 font-mono text-xs text-silver">
                <span className="inline-flex items-center gap-1.5">
                  <Trophy className="h-3.5 w-3.5 text-ice" aria-hidden="true" />
                  Football Fan
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe2 className="h-3.5 w-3.5 text-ice" aria-hidden="true" />
                  Future World Traveler
                </span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {about.pillars.map((pillar, idx) => (
                <Reveal
                  key={pillar.index}
                  delay={idx * 0.05}
                  className="rounded-card border border-white/10 bg-abyss/80 p-6 transition-colors hover:border-white/25"
                >
                  <span className="font-mono text-xs text-ice">{pillar.index}</span>
                  <h3 className="mt-3 font-sans text-lg font-semibold text-glacial">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-silver">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-silver">
                    {pillar.description}
                  </p>
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
