"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
}

/**
 * Theme-matched interactive mouse motion canvas:
 * Renders a smooth cosmic-cobalt optical spotlight, delicate orbital light-wake particles
 * on mouse movement, and a precision trailing lens ring that reacts to interactive elements.
 * Automatically disabled on touch-only devices.
 */
export function InteractiveCursorAura() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only enable on devices with a fine pointer (desktop mouse/trackpad)
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const mouse = {
      x: width * 0.5,
      y: height * 0.5,
      smoothX: width * 0.5,
      smoothY: height * 0.5,
      ringX: width * 0.5,
      ringY: height * 0.5,
      lastX: width * 0.5,
      lastY: height * 0.5,
      isHoveringInteractive: false,
      ringRadius: 18,
      active: false,
    };

    const particles: Particle[] = [];
    const PALETTE = ["#3B82F6", "#60A5FA", "#93C5FD", "#E0F2FE"];

    const spawnParticles = (x: number, y: number, dx: number, dy: number) => {
      const speed = Math.hypot(dx, dy);
      if (speed < 2.5) return;

      const count = Math.min(Math.floor(speed / 9) + 1, 3);
      for (let i = 0; i < count; i++) {
        if (particles.length > 55) particles.shift();
        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.4;
        const velocity = Math.random() * 0.9 + 0.25;
        particles.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: -Math.cos(angle) * velocity,
          vy: -Math.sin(angle) * velocity - 0.15,
          size: Math.random() * 2.1 + 0.8,
          alpha: Math.min(speed / 36, 0.78),
          decay: Math.random() * 0.016 + 0.012,
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)]!,
        });
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouse.active = true;
      const dx = e.clientX - mouse.lastX;
      const dy = e.clientY - mouse.lastY;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.lastX = e.clientX;
      mouse.lastY = e.clientY;

      spawnParticles(e.clientX, e.clientY, dx, dy);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, select, [role='button']");
        mouse.isHoveringInteractive = Boolean(interactive);
      }
    };

    let rafId = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mouse.active) {
        // Smooth interpolation for spotlight and orbital ring
        mouse.smoothX += (mouse.x - mouse.smoothX) * 0.12;
        mouse.smoothY += (mouse.y - mouse.smoothY) * 0.12;
        mouse.ringX += (mouse.x - mouse.ringX) * 0.22;
        mouse.ringY += (mouse.y - mouse.ringY) * 0.22;

        const targetRadius = mouse.isHoveringInteractive ? 30 : 15;
        mouse.ringRadius += (targetRadius - mouse.ringRadius) * 0.18;

        // 1. Soft Ambient Cobalt-Blue Spotlight following cursor
        const auraGrad = ctx.createRadialGradient(
          mouse.smoothX,
          mouse.smoothY,
          8,
          mouse.smoothX,
          mouse.smoothY,
          320
        );
        auraGrad.addColorStop(0, "rgba(37, 99, 235, 0.13)");
        auraGrad.addColorStop(0.45, "rgba(59, 130, 246, 0.05)");
        auraGrad.addColorStop(1, "rgba(3, 6, 17, 0)");

        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(mouse.smoothX, mouse.smoothY, 320, 0, Math.PI * 2);
        ctx.fill();

        // 2. Trailing Precision Orbital Ring
        ctx.save();
        ctx.strokeStyle = mouse.isHoveringInteractive
          ? "rgba(147, 197, 253, 0.65)"
          : "rgba(147, 197, 253, 0.28)";
        ctx.lineWidth = mouse.isHoveringInteractive ? 1.5 : 1;
        ctx.beginPath();
        ctx.arc(mouse.ringX, mouse.ringY, mouse.ringRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Tiny center light point
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 3. Update & Draw Stardust Light-Wake Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]!;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0.01) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;

        // Draw 4-point star sparkle matching the cosmic video motif
        ctx.translate(p.x, p.y);
        ctx.beginPath();
        const r = p.size;
        ctx.moveTo(0, -r * 1.6);
        ctx.quadraticCurveTo(0, 0, r * 1.6, 0);
        ctx.quadraticCurveTo(0, 0, 0, r * 1.6);
        ctx.quadraticCurveTo(0, 0, -r * 1.6, 0);
        ctx.quadraticCurveTo(0, 0, 0, -r * 1.6);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      rafId = window.requestAnimationFrame(render);
    };

    rafId = window.requestAnimationFrame(render);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
    />
  );
}
