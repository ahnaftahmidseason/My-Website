"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface MotionEnhancementProps {
  isPaused?: boolean;
  className?: string;
}

/**
 * Monumental Liquid-Glass & Electric-Cobalt Sculpture Engine:
 * Renders a full-viewport midnight-navy scene with:
 * 1. Large organic blue-lit forms emerging from the viewport edges
 * 2. A monumental translucent liquid-glass toroidal/organic sculpture at the center
 * 3. Electric-blue specular highlights, deep cobalt internal reflections, and pointer-responsive studio lighting
 */
export function MotionEnhancement({
  isPaused = false,
  className = "",
}: MotionEnhancementProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let isIntersecting = true;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const updateDimensions = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 480);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateDimensions();

    const drawMonumentalScene = (t: number) => {
      pointer.x += (pointer.targetX - pointer.x) * 0.045;
      pointer.y += (pointer.targetY - pointer.y) * 0.045;

      const cx = width * 0.5 + pointer.x * 28;
      const cy = height * 0.48 + pointer.y * 18;
      const minDim = Math.min(width, height);
      const scale = minDim * 0.36;

      ctx.clearRect(0, 0, width, height);

      // 1. Deep Atmospheric Core Glow behind the Monument
      const coreGlow = ctx.createRadialGradient(
        cx,
        cy,
        scale * 0.08,
        cx,
        cy,
        scale * 2.1
      );
      coreGlow.addColorStop(0, "rgba(30, 107, 255, 0.34)");
      coreGlow.addColorStop(0.38, "rgba(11, 30, 71, 0.28)");
      coreGlow.addColorStop(0.75, "rgba(5, 10, 26, 0.12)");
      coreGlow.addColorStop(1, "rgba(3, 6, 17, 0)");
      ctx.fillStyle = coreGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Large Organic Blue-Lit Forms Emerging from Viewport Edges
      const drawEdgeOrganicForm = (
        ex: number,
        ey: number,
        rx: number,
        ry: number,
        rot: number,
        primaryAlpha: number
      ) => {
        ctx.save();
        ctx.translate(ex, ey);
        ctx.rotate(rot);

        const edgeGrad = ctx.createRadialGradient(
          -rx * 0.2,
          -ry * 0.2,
          rx * 0.05,
          0,
          0,
          Math.max(rx, ry)
        );
        edgeGrad.addColorStop(0, `rgba(96, 165, 250, ${primaryAlpha})`);
        edgeGrad.addColorStop(0.32, `rgba(30, 107, 255, ${primaryAlpha * 0.75})`);
        edgeGrad.addColorStop(0.68, "rgba(8, 22, 58, 0.65)");
        edgeGrad.addColorStop(1, "rgba(3, 6, 17, 0)");

        ctx.fillStyle = edgeGrad;
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();

        // Crisp electric-blue rim arc on the organic edge form
        ctx.strokeStyle = `rgba(96, 165, 250, ${primaryAlpha * 0.85})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, rx * 0.72, ry * 0.72, 0, -0.6, 1.3);
        ctx.stroke();

        ctx.restore();
      };

      // Left-edge organic cobalt form
      drawEdgeOrganicForm(
        -width * 0.06 + Math.sin(t * 0.4) * 18,
        height * 0.36 + Math.cos(t * 0.35) * 20,
        width * 0.34,
        height * 0.46,
        0.32 + Math.sin(t * 0.25) * 0.06,
        0.42
      );

      // Right-edge organic electric-blue form
      drawEdgeOrganicForm(
        width * 1.05 - Math.cos(t * 0.38) * 20,
        height * 0.62 + Math.sin(t * 0.32) * 22,
        width * 0.36,
        height * 0.5,
        -0.42 + Math.cos(t * 0.28) * 0.06,
        0.46
      );

      // Top-right subtle cobalt wing
      drawEdgeOrganicForm(
        width * 0.86,
        -height * 0.08,
        width * 0.28,
        height * 0.28,
        0.75,
        0.28
      );

      // 3. Monumental Central Liquid-Glass Sculpture (Multi-Layered Translucent Ribbon + Refractive Core)
      const phase = t * 0.48;

      // Outer Sculptural Liquid-Glass Loops (3 interwoven harmonic 3D-projected ribbons)
      for (let layer = 0; layer < 3; layer++) {
        const layerOffset = (layer * Math.PI * 2) / 3;
        const rotAngle =
          -0.38 +
          layer * 0.52 +
          Math.sin(phase * 0.7 + layerOffset) * 0.14 +
          pointer.x * 0.09;

        const rx = scale * (1.18 - layer * 0.11);
        const ry =
          scale *
          (0.52 + Math.cos(phase * 0.85 + layerOffset) * 0.08 + pointer.y * 0.04);

        ctx.save();
        ctx.translate(
          cx + Math.sin(phase + layerOffset) * (scale * 0.05),
          cy + Math.cos(phase * 0.9 + layerOffset) * (scale * 0.04)
        );
        ctx.rotate(rotAngle);

        // Translucent Cobalt-Glass Body Stroke
        const ribbonGrad = ctx.createLinearGradient(-rx, -ry, rx, ry);
        ribbonGrad.addColorStop(0, "rgba(4, 10, 28, 0.88)");
        ribbonGrad.addColorStop(0.22, "rgba(14, 48, 122, 0.78)");
        ribbonGrad.addColorStop(0.48, "rgba(30, 107, 255, 0.92)");
        ribbonGrad.addColorStop(0.64, "rgba(244, 247, 255, 0.95)");
        ribbonGrad.addColorStop(0.82, "rgba(18, 62, 158, 0.82)");
        ribbonGrad.addColorStop(1, "rgba(4, 10, 28, 0.9)");

        ctx.strokeStyle = ribbonGrad;
        ctx.lineWidth = scale * (0.24 - layer * 0.035);
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Inner Obsidian Depth Channel (creates hollow liquid-glass refraction look)
        ctx.strokeStyle = "rgba(3, 8, 22, 0.76)";
        ctx.lineWidth = scale * (0.12 - layer * 0.018);
        ctx.beginPath();
        ctx.ellipse(0, scale * 0.015, rx * 0.98, ry * 0.96, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Razor-Sharp Electric-Cyan Specular Caustic Highlight
        const rimGrad = ctx.createLinearGradient(-rx, 0, rx, 0);
        rimGrad.addColorStop(0, "rgba(96, 165, 250, 0)");
        rimGrad.addColorStop(0.35, "rgba(147, 197, 253, 0.85)");
        rimGrad.addColorStop(0.55, "rgba(255, 255, 255, 0.98)");
        rimGrad.addColorStop(0.8, "rgba(30, 107, 255, 0.75)");
        rimGrad.addColorStop(1, "rgba(96, 165, 250, 0)");

        ctx.strokeStyle = rimGrad;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.ellipse(
          0,
          -scale * 0.045,
          rx * 1.02,
          ry * 1.01,
          0,
          -0.3,
          Math.PI * 1.15
        );
        ctx.stroke();

        ctx.restore();
      }

      // 4. Central Polished Liquid-Glass Core Sphere with Cobalt & Glacial Refraction
      ctx.save();
      const coreRadius = scale * 0.56;
      const coreX = cx + Math.sin(phase * 1.1) * (scale * 0.03);
      const coreY = cy + Math.cos(phase * 0.95) * (scale * 0.03);
      const lightX = coreX - coreRadius * 0.35 + pointer.x * 24;
      const lightY = coreY - coreRadius * 0.38 + pointer.y * 18;

      const sphereGrad = ctx.createRadialGradient(
        lightX,
        lightY,
        coreRadius * 0.03,
        coreX,
        coreY,
        coreRadius * 1.04
      );
      sphereGrad.addColorStop(0, "#FFFFFF");
      sphereGrad.addColorStop(0.14, "#93C5FD");
      sphereGrad.addColorStop(0.34, "#1E6BFF");
      sphereGrad.addColorStop(0.62, "#08183A");
      sphereGrad.addColorStop(0.86, "#030714");
      sphereGrad.addColorStop(1, "#38BDF8");

      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(coreX, coreY, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      // Internal Caustic Light Wave inside Central Sphere
      ctx.save();
      ctx.beginPath();
      ctx.arc(coreX, coreY, coreRadius * 0.97, 0, Math.PI * 2);
      ctx.clip();

      const internalWave = ctx.createLinearGradient(
        coreX - coreRadius,
        coreY - coreRadius * 0.3,
        coreX + coreRadius,
        coreY + coreRadius * 0.5
      );
      internalWave.addColorStop(0, "rgba(30, 107, 255, 0)");
      internalWave.addColorStop(0.45, "rgba(96, 165, 250, 0.42)");
      internalWave.addColorStop(0.55, "rgba(244, 247, 255, 0.65)");
      internalWave.addColorStop(1, "rgba(3, 6, 17, 0.7)");

      ctx.fillStyle = internalWave;
      ctx.beginPath();
      ctx.ellipse(
        coreX,
        coreY + coreRadius * 0.16,
        coreRadius * 1.2,
        coreRadius * 0.38,
        Math.sin(phase) * 0.25 + pointer.x * 0.12,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.restore();

      // Studio Specular Glint on Liquid Glass Core
      ctx.save();
      ctx.translate(lightX, lightY);
      ctx.rotate(-0.52);
      ctx.fillStyle = "rgba(255, 255, 255, 0.88)";
      ctx.beginPath();
      ctx.ellipse(0, 0, coreRadius * 0.22, coreRadius * 0.075, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.restore();

      // 5. Fine Orbital Telemetry Hairline Ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.24 + pointer.x * 0.04);
      ctx.strokeStyle = "rgba(148, 163, 184, 0.16)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, scale * 1.58, scale * 0.68, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };

    const shouldAnimate = !prefersReducedMotion && !isPaused;
    drawMonumentalScene(3.2);

    const startTime = performance.now();
    const renderLoop = (now: number) => {
      if (!shouldAnimate || !isIntersecting) return;
      const elapsed = (now - startTime) / 1000 + 3.2;
      drawMonumentalScene(elapsed);
      animationFrameId = window.requestAnimationFrame(renderLoop);
    };

    if (shouldAnimate) {
      animationFrameId = window.requestAnimationFrame(renderLoop);
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (!shouldAnimate) return;
      const nx = (e.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
      const ny = (e.clientY / Math.max(window.innerHeight, 1)) * 2 - 1;
      pointer.targetX = Math.max(-1, Math.min(1, nx));
      pointer.targetY = Math.max(-1, Math.min(1, ny));
    };

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
      drawMonumentalScene(3.2);
    });
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && shouldAnimate && animationFrameId === null) {
          animationFrameId = window.requestAnimationFrame(renderLoop);
        } else if (!isIntersecting && animationFrameId !== null) {
          window.cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isPaused, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
