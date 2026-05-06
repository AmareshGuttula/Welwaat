"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./not-found.module.css";

/* Floating particle type */
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  delay: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    speed: Math.random() * 20 + 15,
    opacity: Math.random() * 0.5 + 0.1,
    delay: Math.random() * 10,
  }));
}

/* Mini interactive gravity game */
function GravityGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballsRef = useRef<
    { x: number; y: number; vx: number; vy: number; r: number; color: string }[]
  >([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const colors = ["#F4522A", "#FF7A55", "#FF9A7A", "#FFB89E", "#E64500"];
    ballsRef.current = Array.from({ length: 25 }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      r: Math.random() * 8 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", handleMove);

    const loop = () => {
      ctx.clearRect(0, 0, W(), H());

      for (const b of ballsRef.current) {
        const dx = mouseRef.current.x - b.x;
        const dy = mouseRef.current.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 1) {
          b.vx += (dx / dist) * 0.3;
          b.vy += (dy / dist) * 0.3;
        }

        b.vx *= 0.98;
        b.vy *= 0.98;
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < b.r) { b.x = b.r; b.vx *= -0.8; }
        if (b.x > W() - b.r) { b.x = W() - b.r; b.vx *= -0.8; }
        if (b.y < b.r) { b.y = b.r; b.vy *= -0.8; }
        if (b.y > H() - b.r) { b.y = H() - b.r; b.vy *= -0.8; }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * 2.5, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(b.x, b.y, b.r * 0.5, b.x, b.y, b.r * 2.5);
        grad.addColorStop(0, b.color + "40");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.globalAlpha = 0.5;
        ctx.fill();
        ctx.closePath();
      }

      ctx.globalAlpha = 1;
      for (let i = 0; i < ballsRef.current.length; i++) {
        for (let j = i + 1; j < ballsRef.current.length; j++) {
          const a = ballsRef.current[i];
          const b = ballsRef.current[j];
          const d = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(244, 82, 42, ${0.15 * (1 - d / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.gravityCanvas} />;
}

/* Main 404 Page */
export default function NotFound() {
  const [particles] = useState(() => generateParticles(30));
  const [glitchActive, setGlitchActive] = useState(false);
  const [scrambledText, setScrambledText] = useState("PAGE NOT FOUND");
  const [showGame, setShowGame] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);
    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    const original = "PAGE NOT FOUND";
    let iteration = 0;

    const interval = setInterval(() => {
      setScrambledText(
        original
          .split("")
          .map((char, idx) => {
            if (idx < iteration) return original[idx];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= original.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTimeSpent((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className={styles.page}>
      {/* Floating particles */}
      <div className={styles.particleField}>
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.speed}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Animated background grid */}
      <div className={styles.gridOverlay} />

      {/* Scanline effect */}
      <div className={styles.scanlines} />

      {/* Main content */}
      <div className={styles.content}>
        {/* Glitch 404 */}
        <div className={`${styles.errorCode} ${glitchActive ? styles.glitch : ""}`}>
          <span className={styles.digit}>4</span>
          <span className={styles.digitCenter}>
            <span className={styles.orb} />
          </span>
          <span className={styles.digit}>4</span>
        </div>

        {/* Scrambled subtitle */}
        <p className={styles.scrambleText}>{scrambledText}</p>

        {/* Descriptive text */}
        <p className={styles.description}>
          Looks like this page got lost in the creative dimension.
          <br />
          But hey, since you&apos;re here...
        </p>

        {/* Interactive actions */}
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>
            <span className={styles.btnGlow} />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <Link href="/portfolio" className={styles.secondaryBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span>View Portfolio</span>
          </Link>

          <button
            className={styles.gameBtn}
            onClick={() => setShowGame(!showGame)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
            <span>{showGame ? "Hide Playground" : "Play While You Wait"}</span>
          </button>
        </div>

        {/* Interactive gravity playground */}
        {showGame && (
          <div className={styles.gameContainer}>
            <div className={styles.gameHeader}>
              <span className={styles.gameLabel}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" />
                </svg>
                Gravity Playground
              </span>
              <span className={styles.gameHint}>Move your mouse to attract the particles</span>
            </div>
            <GravityGame />
          </div>
        )}

        {/* Time spent badge */}
        <div className={styles.timeTracker}>
          <div className={styles.timePulse} />
          <span>Time exploring: {formatTime(timeSpent)}</span>
        </div>

        {/* Quick links */}
        <div className={styles.quickLinks}>
          <span className={styles.quickLinksLabel}>Quick links:</span>
          <Link href="/services" className={styles.quickLink}>Services</Link>
          <Link href="/about" className={styles.quickLink}>About</Link>
          <Link href="/contact" className={styles.quickLink}>Contact</Link>
          <Link href="/blog" className={styles.quickLink}>Blog</Link>
        </div>
      </div>

      {/* Bottom attribution */}
      <div className={styles.bottomBar}>
        <span>WELWAAT</span>
        <span className={styles.separator}>&bull;</span>
        <span>Error 404</span>
        <span className={styles.separator}>&bull;</span>
        <span>Lost in Creativity</span>
      </div>
    </div>
  );
}
