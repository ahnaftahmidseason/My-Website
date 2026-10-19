# SEASON® — Media Asset Manifest & Seamless-Loop Production Guide

This directory (`/public/media/`) contains the visual studies, poster frames, and vector placeholders for **SEASON®**, and serves as the drop-in destination for pre-rendered video loops and photography.

---

## 1. Expected Hero Video Assets

Configured in [`src/data/media-manifest.ts`](../../src/data/media-manifest.ts):

| Asset Role | Path in `/public` | Recommended Format & Specs | Currently Included |
| :--- | :--- | :--- | :--- |
| **Primary Desktop Loop** | `/media/season-hero.webm` | WebM (VP9), 1920×1200 or 1920×1080, 24/30fps, 10–20s, audio stripped (`-an`), ~2.5–4.5 Mbps | Optional external drop-in |
| **Fallback Desktop Loop** | `/media/season-hero.mp4` | MP4 (H.264 High Profile, `yuv420p`, `-movflags +faststart`), audio stripped (`-an`) | Optional external drop-in |
| **Mobile Loop Variant** | `/media/season-hero-mobile.mp4` | MP4 (H.264 `yuv420p`), 1080×1350 (4:5) or 960×600, ~1.2–2.0 Mbps | Optional external drop-in |
| **Hero Poster Frame** | `/media/season-hero-poster.svg` | High-craft vector poster (or `.webp` / `.jpg` first frame) | **Yes** (`season-hero-poster.svg`) |
| **Real-Time Fallback** | `MotionEnhancement.tsx` | Interactive procedural brushed-chrome & warm studio light canvas | **Yes** (Active by default) |

> **Enabling Pre-Rendered Video Playback:**
> Once you place `season-hero.webm` and `season-hero.mp4` inside `/public/media/`, open `src/data/media-manifest.ts` and set `hasExternalVideoFiles: true`. Even if a browser blocks autoplay or a file is missing, `HeroVideo.tsx` automatically catches errors and falls back to the real-time sculptural study without displaying broken media icons.

---

## 2. Creating a Genuinely Seamless 10–20 Second Source Loop

Do not label a loop as seamless unless the source timeline is authored and verified for zero-frame discontinuity:

1. **Cyclic Animation & Camera Splines (3D / Motion Source):**
   - In Blender, Cinema 4D, or Houdini, set all object rotation/translation curves to **Linear** or matched bezier tangents across Frame `0` and Frame `N`.
   - If the loop is `16 seconds` at `30 fps` (`480 frames`), Frame `0` and Frame `480` must be identical, and your render range should be Frame `0` to Frame `479` (`480` total frames) so Frame `480` does not double-hold on wraparound.
2. **Generative / AI Video Loop Continuity (Cross-Dissolve Method):**
   - If using AI-generated or live-action plates where start and end frames differ, render an extra `1.5–2.0 seconds` (`45–60 frames`) tail.
   - Split the clip, move the tail to the beginning, and apply a smooth optical-flow blend or luma-matched cross-dissolve in the middle of the timeline so the cut point across the loop boundary (`last frame -> first frame`) is 100% continuous.
3. **Encoding Commands (FFmpeg):**

```bash
# 1. Export WebM (VP9) — Primary modern browser source (no audio track)
ffmpeg -i source_master.mov -c:v libvpx-vp9 -b:v 3.5M -crf 28 -pix_fmt yuv420p -an public/media/season-hero.webm

# 2. Export MP4 (H.264) — Universal Safari / iOS / fallback source
ffmpeg -i source_master.mov -c:v libx264 -profile:v high -crf 21 -pix_fmt yuv420p -movflags +faststart -an public/media/season-hero.mp4

# 3. Export Lighter Mobile MP4 Variant
ffmpeg -i source_master.mov -vf "scale=960:-2" -c:v libx264 -profile:v main -crf 23 -pix_fmt yuv420p -movflags +faststart -an public/media/season-hero-mobile.mp4

# 4. Extract Exact Frame-0 Poster Image
ffmpeg -i source_master.mov -frames:v 1 -q:v 2 public/media/season-hero-poster.jpg
```

---

## 3. Portfolio, Portrait & Social Preview Assets

- `/media/season-portrait-placeholder.svg` — Used on `/about`. Replace with `/media/season-portrait.jpg` or `.webp` and update `about.portraitAsset` in `src/data/site-config.ts`.
- `/media/project-01-mercury.svg` … `/media/project-06-instrument.svg` — Art-directed vector studies for the 6 configurable projects in `src/data/projects.ts`.
- `/media/aispoiler-01.svg` … `/media/aispoiler-03.svg` — Editorial thumbnails for the configurable **AI Spoiler** features in `src/data/ai-spoiler.ts`.
- `/media/season-og-preview.svg` — Default Open Graph preview image (`1200×630`).
