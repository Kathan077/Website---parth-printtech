"use client";

import React, { useEffect, useRef } from "react";
import styles from "./BackgroundAnimation.module.css";

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, active: false };
    let resizeTimeout;
    
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const createParticle = (w, h) => {
      const isCyan = Math.random() > 0.4;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.35,
        vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        // Using brand colors: Cyan (#009fe3) or Slate/Taupe (#6e5b53)
        color: isCyan ? "rgba(0, 159, 227, 0.22)" : "rgba(110, 91, 83, 0.15)",
        lineColor: isCyan ? "rgba(0, 159, 227," : "rgba(110, 91, 83,",
      };
    };

    const handleResize = (isInitial = false) => {
      const resizeAction = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        
        if (canvas.width === w && canvas.height === h) return;
        
        canvas.width = w;
        canvas.height = h;

        const targetCount = w < 768 ? 20 : 55;
        
        // Initialize or scale existing particles
        if (particles.length === 0) {
          for (let i = 0; i < targetCount; i++) {
            particles.push(createParticle(w, h));
          }
        } else {
          const prevCount = particles.length;
          if (prevCount > targetCount) {
            particles = particles.slice(0, targetCount);
          } else {
            for (let i = prevCount; i < targetCount; i++) {
              particles.push(createParticle(w, h));
            }
          }
          // Clamp existing coordinates to screen boundaries
          particles.forEach((p) => {
            if (p.x > w) p.x = Math.random() * w;
            if (p.y > h) p.y = Math.random() * h;
          });
        }
      };

      if (isInitial === true) {
        resizeAction();
      } else {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeAction, 100);
      }
    };

    const handleResizeDebounced = () => handleResize(false);
    window.addEventListener("resize", handleResizeDebounced);
    handleResize(true);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      time += prefersReducedMotion ? 0 : 1;

      // 1. Draw soft floating background blobs (Gradient Mesh Style)
      // Blob 1: Brand Cyan
      const blob1X = w * 0.5 + Math.sin(time * 0.0008) * (w * 0.25);
      const blob1Y = h * 0.5 + Math.cos(time * 0.001) * (h * 0.25);
      const blob1Rad = Math.max(1, Math.min(w, h) * 0.55);

      const grad1 = ctx.createRadialGradient(blob1X, blob1Y, 0, blob1X, blob1Y, blob1Rad);
      grad1.addColorStop(0, "rgba(0, 159, 227, 0.04)");
      grad1.addColorStop(0.5, "rgba(0, 159, 227, 0.01)");
      grad1.addColorStop(1, "rgba(0, 159, 227, 0)");
      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(blob1X, blob1Y, blob1Rad, 0, Math.PI * 2);
      ctx.fill();

      // Blob 2: Brand Slate/Taupe
      const blob2X = w * 0.5 + Math.cos(time * 0.0007) * (w * 0.25);
      const blob2Y = h * 0.5 + Math.sin(time * 0.0009) * (h * 0.25);
      const blob2Rad = Math.max(1, Math.min(w, h) * 0.6);

      const grad2 = ctx.createRadialGradient(blob2X, blob2Y, 0, blob2X, blob2Y, blob2Rad);
      grad2.addColorStop(0, "rgba(110, 91, 83, 0.035)");
      grad2.addColorStop(0.5, "rgba(110, 91, 83, 0.01)");
      grad2.addColorStop(1, "rgba(110, 91, 83, 0)");
      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(blob2X, blob2Y, blob2Rad, 0, Math.PI * 2);
      ctx.fill();

      // 2. Update and Draw Particles
      particles.forEach((p) => {
        // Physics update
        p.x += p.vx;
        p.y += p.vy;

        // Bouncing walls
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Mouse attraction
        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            const force = (180 - dist) / 180;
            // Draw lines to mouse
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 159, 227, ${force * 0.11})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();

            // Pull particle gently towards cursor (only if not prefersReducedMotion)
            if (!prefersReducedMotion) {
              p.x += (dx / dist) * force * 0.35;
              p.y += (dy / dist) * force * 0.35;
            }
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // 3. Draw Constellation lines between particles
      const connectionDist = 120;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Dynamic gradient coloring between connected lines
            ctx.strokeStyle = p1.lineColor + `${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResizeDebounced);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className={styles.canvasContainer}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
