import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ContactComposer } from "@/components/ContactComposer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Collaborate with Season (SEASON®) across AI Spoiler (@Ai_Spoiler) and Dark Reels (@DarkReels9).",
};

const channelLinks = [
  {
    id: "ai-spoiler",
    name: "AI Spoiler",
    handle: "@Ai_Spoiler",
    role: "AI Video Models & Deep-Dive Reviews",
    logo: "/media/channels/ai-spoiler-logo.png",
    href: "https://www.youtube.com/@Ai_Spoiler",
  },
  {
    id: "dark-reels",
    name: "Dark Reels",
    handle: "@DarkReels9",
    role: "Cinematic Concept Trailers & Narratives",
    logo: "/media/channels/dark-reels-logo.png",
    href: "https://www.youtube.com/@DarkReels9",
  },
];

export default function ContactPage() {
  return (
    <section
      aria-labelledby="contact-page-heading"
      className="relative overflow-hidden border-b border-white/[0.08] pt-28 pb-section-lg sm:pt-32"
    >
      {/* Subtle ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/4 h-[420px] w-[620px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 70%)",
        }}
      />

      <div className="editorial-container relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Studio Contact Header & Official Channels */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-abyss px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_8px_#3B82F6]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-glacial">
                  OPEN FOR COLLABORATIONS
                </span>
              </div>

              <h1
                id="contact-page-heading"
                className="mt-5 font-sans text-display-xl font-semibold tracking-[-0.04em] text-glacial"
              >
                Let’s talk.
              </h1>

              <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-silver">
                Direct inquiries for AI tool sponsorships, cinematic trailer production, and creative collaborations.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 space-y-3.5">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
                OFFICIAL YOUTUBE CHANNELS
              </p>

              {channelLinks.map((channel) => (
                <a
                  key={channel.id}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-card border border-white/12 bg-abyss p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/50"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/15 bg-midnight">
                      <Image
                        src={channel.logo}
                        alt={channel.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-base font-bold text-glacial group-hover:text-ice">
                          {channel.name}
                        </span>
                        <span className="font-mono text-xs text-silver">
                          {channel.handle}
                        </span>
                      </div>
                      <span className="mt-0.5 block font-sans text-xs text-silver">
                        {channel.role}
                      </span>
                    </div>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-midnight text-silver transition-colors group-hover:border-electric/50 group-hover:text-glacial">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </Reveal>
          </div>

          {/* Right Column: Direct Email + Dark Interactive Composer */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <ContactComposer />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
