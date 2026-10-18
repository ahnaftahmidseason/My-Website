export interface HeroMediaConfig {
  webmSrc: string;
  mp4Src: string;
  showreelMp4Src: string;
  mobileMp4Src?: string;
  posterSrc: string;
  hasExternalVideoFiles: boolean;
  enableRealtimeSculpture: boolean;
  frameCaption: string;
  frameCode: string;
  artDirectionNote: string;
}

export const heroMediaManifest: HeroMediaConfig = {
  webmSrc: "/media/season-hero.webm",
  mp4Src: "/media/season-hero.mp4",
  showreelMp4Src: "/media/season-showreel.mp4",
  mobileMp4Src: "/media/season-hero.mp4",
  posterSrc: "/media/season-hero-poster.jpg",
  hasExternalVideoFiles: true,
  enableRealtimeSculpture: true,
  frameCaption: "SEASON® // MONUMENTAL LIQUID GLASS & COBALT OPTICS",
  frameCode: "SEQ // 13.7S SEAMLESS ORBITAL LOOP",
  artDirectionNote:
    "Combines the user-supplied Main video loop.mp4 (/media/season-hero.mp4) with the real-time translucent liquid-glass & electric-blue sculpture engine.",
};
