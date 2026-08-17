"use client";

import { motion, useAnimation } from "framer-motion";
import { siteConfig } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

/* ─────────────────────────────────────────────
   SVG Lightning bolt path generator
   Returns a jagged polyline string
───────────────────────────────────────────── */
function randomLightningPath(
  x1: number, y1: number,
  x2: number, y2: number,
  segments: number = 8
): string {
  const points: [number, number][] = [[x1, y1]];
  for (let i = 1; i < segments; i++) {
    const t = i / segments;
    const midX = x1 + (x2 - x1) * t + (Math.random() - 0.5) * 40;
    const midY = y1 + (y2 - y1) * t + (Math.random() - 0.5) * 20;
    points.push([midX, midY]);
  }
  points.push([x2, y2]);
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

/* ─────────────────────────────────────────────
   Lightning bolt SVG — fires on hover / auto
───────────────────────────────────────────── */
function LightningBolt({
  x1, y1, x2, y2, delay = 0, color = "#FFCB05",
}: {
  x1: number; y1: number; x2: number; y2: number;
  delay?: number; color?: string;
}) {
  const [path, setPath] = useState(() => randomLightningPath(x1, y1, x2, y2));

  useEffect(() => {
    const id = setInterval(() => {
      setPath(randomLightningPath(x1, y1, x2, y2));
    }, 120);
    return () => clearInterval(id);
  }, [x1, y1, x2, y2]);

  return (
    <motion.polyline
      points={path}
      stroke={color}
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter={`drop-shadow(0 0 4px ${color}) drop-shadow(0 0 8px ${color}80)`}
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        pathLength: [0, 1, 1, 1],
      }}
      transition={{
        duration: 0.35,
        delay,
        ease: "easeOut",
        times: [0, 0.2, 0.7, 1],
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   Electric spark particle
───────────────────────────────────────────── */
function Spark({ x, y, angle, delay }: { x: number; y: number; angle: number; delay: number }) {
  const rad = (angle * Math.PI) / 180;
  const dist = 28 + Math.random() * 20;
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={1.5}
      fill="#FFCB05"
      filter="drop-shadow(0 0 3px #FFCB05)"
      initial={{ opacity: 1, cx: x, cy: y, r: 2 }}
      animate={{
        opacity: [1, 0.8, 0],
        cx: x + Math.cos(rad) * dist,
        cy: y + Math.sin(rad) * dist,
        r: [2, 1, 0],
      }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    />
  );
}

/* ─────────────────────────────────────────────
   Full electric strike effect (button-level)
───────────────────────────────────────────── */
function ElectricStrike({ active }: { active: boolean }) {
  const [bolts, setBolts] = useState<{ id: number; x1: number; y1: number; x2: number; y2: number; delay: number; color: string }[]>([]);
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number; angle: number; delay: number }[]>([]);
  const [key, setKey] = useState(0);

  const fire = useCallback(() => {
    const newBolts = [
      // Top left → button
      { id: 1, x1: -60, y1: -40, x2: 20, y2: 0, delay: 0, color: "#FFCB05" },
      { id: 2, x1: -40, y1: -50, x2: 30, y2: 5, delay: 0.05, color: "#fff9c4" },
      // Top right → button
      { id: 3, x1: 260, y1: -40, x2: 200, y2: 0, delay: 0.02, color: "#FFCB05" },
      { id: 4, x1: 240, y1: -55, x2: 190, y2: 8, delay: 0.07, color: "#fff9c4" },
      // Bottom arcs
      { id: 5, x1: 60, y1: 70, x2: 100, y2: 50, delay: 0.04, color: "#F7D02C" },
      { id: 6, x1: 140, y1: 70, x2: 110, y2: 50, delay: 0.06, color: "#F7D02C" },
    ];
    const newSparks = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: 50 + Math.random() * 120,
      y: 25 + Math.random() * 10,
      angle: (360 / 14) * i + Math.random() * 20,
      delay: i * 0.015,
    }));
    setBolts(newBolts);
    setSparks(newSparks);
    setKey((k) => k + 1);
    // Clear after animation
    setTimeout(() => { setBolts([]); setSparks([]); }, 600);
  }, []);

  useEffect(() => {
    if (active) fire();
  }, [active, fire]);

  if (!bolts.length && !sparks.length) return null;

  return (
    <svg
      key={key}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "visible",
        pointerEvents: "none",
        zIndex: 5,
      }}
      viewBox="0 0 220 56"
      preserveAspectRatio="none"
    >
      {bolts.map((b) => (
        <LightningBolt key={b.id} {...b} />
      ))}
      {sparks.map((s) => (
        <Spark key={s.id} {...s} />
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Ambient background lightning (hero-wide)
───────────────────────────────────────────── */
function BackgroundLightning() {
  const [strikes, setStrikes] = useState<{ id: number; x: number }[]>([]);

  useEffect(() => {
    const scheduleStrike = () => {
      const delay = 2500 + Math.random() * 4000;
      setTimeout(() => {
        const id = Date.now() + Math.floor(Math.random() * 10000);
        setStrikes((prev) => [...prev, { id, x: 10 + Math.random() * 80 }]);
        setTimeout(() => setStrikes((prev) => prev.filter((s) => s.id !== id)), 500);
        scheduleStrike();
      }, delay);
    };
    scheduleStrike();
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 4, pointerEvents: "none" }}>
      {strikes.map((strike) => (
        <svg
          key={strike.id}
          style={{
            position: "absolute",
            left: `${strike.x}%`,
            top: 0,
            width: "3px",
            height: "100%",
            overflow: "visible",
          }}
          viewBox="0 0 3 600"
          preserveAspectRatio="none"
        >
          <motion.polyline
            points={randomLightningPath(1, 0, 1, 600, 14)}
            stroke="#FFCB05"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            filter="drop-shadow(0 0 6px #FFCB05) drop-shadow(0 0 14px #F7D02C)"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0, 0.7, 0.9, 0], pathLength: [0, 0.6, 1, 1] }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          {/* Flash */}
          <motion.rect
            x="-80"
            y="0"
            width="200"
            height="600"
            fill="#FFCB05"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.04, 0] }}
            transition={{ duration: 0.25, delay: 0.05 }}
          />
        </svg>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   The enhanced CTA button
───────────────────────────────────────────── */
function ThunderButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const controls = useAnimation();

  // Auto-fire every ~4s to draw attention
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        scale: [1, 1.04, 0.97, 1.02, 1],
        transition: { duration: 0.4 },
      });
      setClicked(true);
      setTimeout(() => setClicked(false), 700);
    }, 4000);
    return () => clearInterval(interval);
  }, [controls]);

  const handleMouseEnter = () => {
    setHovered(true);
    setClicked(true);
    setTimeout(() => setClicked(false), 700);
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 700);
  };

  return (
    <motion.a
      href={href}
      animate={controls}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "18px 42px",
        borderRadius: "50px",
        fontWeight: 700,
        fontSize: "18px",
        fontFamily: "var(--font-heading)",
        textDecoration: "none",
        color: "#0a0a1a",
        background: hovered
          ? "linear-gradient(135deg, #FFE566 0%, #FFCB05 40%, #F7A800 100%)"
          : "linear-gradient(135deg, #FFCB05 0%, #FFD700 60%, #F7A800 100%)",
        boxShadow: hovered
          ? "0 0 40px rgba(255,203,5,0.7), 0 0 80px rgba(255,203,5,0.3), 0 8px 32px rgba(0,0,0,0.4)"
          : "0 0 20px rgba(255,203,5,0.4), 0 8px 32px rgba(0,0,0,0.3)",
        transition: "background 0.25s, box-shadow 0.25s, color 0.25s",
        cursor: "pointer",
        overflow: "visible",
        letterSpacing: "0.3px",
      }}
    >
      {/* Crackling border ring */}
      <motion.span
        style={{
          position: "absolute",
          inset: "-3px",
          borderRadius: "54px",
          border: "2px solid #FFCB05",
          opacity: 0,
          boxShadow: "0 0 12px #FFCB05, 0 0 24px #FFCB05, inset 0 0 12px rgba(255,203,5,0.3)",
        }}
        animate={hovered ? {
          opacity: [0, 0.8, 0.4, 0.9, 0.3, 1, 0],
          scale: [1, 1.01, 0.99, 1.02, 1, 1.01, 1],
        } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Slow ambient pulse ring */}
      <motion.span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50px",
          border: "1.5px solid rgba(255,203,5,0.5)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Shimmer sweep */}
      <motion.span
        style={{
          position: "absolute",
          top: 0,
          left: "-70%",
          width: "50%",
          height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          borderRadius: "50px",
          transform: "skewX(-15deg)",
          pointerEvents: "none",
        }}
        animate={{ left: ["−70%", "130%"] }}
        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
      />

      {/* Electric strike overlay */}
      <ElectricStrike active={clicked} />

      {/* ⚡ Icon */}
      <motion.span
        animate={{
          rotate: hovered ? [-5, 5, -5, 5, 0] : 0,
          scale: hovered ? [1, 1.3, 1] : 1,
          filter: hovered
            ? ["drop-shadow(0 0 0px transparent)", "drop-shadow(0 0 8px #FFCB05)", "drop-shadow(0 0 4px #FFCB05)"]
            : "none",
        }}
        transition={{ duration: 0.35 }}
        style={{ fontSize: "22px", display: "inline-block", lineHeight: 1 }}
      >
        ⚡
      </motion.span>

      <span style={{ position: "relative", zIndex: 2 }}>Enter the Arena</span>
    </motion.a>
  );
}

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0a0a1a",
        paddingTop: "80px",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.7,
        }}
      >
        <source src="/HeroVideo.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(180deg, rgba(10,10,26,0.25) 0%, rgba(10,10,26,0.1) 40%, rgba(10,10,26,0.3) 80%, rgba(10,10,26,0.75) 100%)",
      }} />

      {/* Brand color overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(135deg, rgba(42,117,187,0.1) 0%, transparent 50%, rgba(255,203,5,0.05) 100%)",
      }} />

      {/* ⚡ Background lightning strikes */}
      <BackgroundLightning />

      {/* Floating colored dots */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3 }}>
        {[
          { color: "#FFCB05", top: "20%", left: "10%", dur: 5 },
          { color: "#2A75BB", top: "45%", left: "25%", dur: 6 },
          { color: "#EC1C24", top: "65%", left: "50%", dur: 4.5 },
          { color: "#78C850", top: "30%", left: "75%", dur: 7 },
          { color: "#F27C00", top: "55%", left: "85%", dur: 5.5 },
          { color: "#30A7D7", top: "75%", left: "40%", dur: 6.5 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "8px", height: "8px",
              borderRadius: "50%",
              background: dot.color,
              top: dot.top, left: dot.left,
            }}
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.5, 1],
              opacity: [0.25, 0.55, 0.25],
              boxShadow: [`0 0 6px ${dot.color}80`, `0 0 16px ${dot.color}`, `0 0 6px ${dot.color}80`],
            }}
            transition={{ duration: dot.dur, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* ── Main Content ── */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <motion.div
            style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", textAlign: "center",
              maxWidth: "700px",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
              style={{ marginBottom: "16px", marginTop: "-20px" }}
            >
              <Image
                src="/images/logo.png"
                alt="Hack The Future 3.0"
                width={900}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "780px",
                  height: "auto",
                  filter: "drop-shadow(0 10px 40px rgba(255,203,5,0.35))",
                }}
                priority
              />
            </motion.div>

            {/* Date badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                marginTop: "8px", marginBottom: "24px",
                padding: "8px 24px",
                borderRadius: "50px",
                fontSize: "13px", fontWeight: 600, letterSpacing: "0.5px",
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.12)",
                fontFamily: "var(--font-body)",
                backdropFilter: "blur(10px)",
              }}
            >
              📅 {siteConfig.date} &nbsp;•&nbsp; 📍 {siteConfig.venue}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                fontSize: "clamp(14px, 2vw, 22px)",
                fontWeight: 700,
                letterSpacing: "0.3em",
                marginBottom: "12px",
                fontFamily: "var(--font-heading)",
                color: "#FFCB05",
                textShadow: "0 2px 20px rgba(255,203,5,0.4)",
              }}
            >
              {siteConfig.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "40px",
                lineHeight: 1.8,
                maxWidth: "440px",
              }}
            >
              The ultimate Pokémon-themed hackathon. 36 hours of coding, mentorship, and evolution.
            </motion.p>

            {/* ⚡ CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", alignItems: "center" }}
            >
              {/* Thunder CTA */}
              <ThunderButton href={siteConfig.registrationUrl}>
                Enter the Arena
              </ThunderButton>

              {/* Secondary CTA */}
              <motion.a
                href="#about"
                whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.5)", color: "white" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "18px 36px",
                  borderRadius: "50px",
                  fontWeight: 700,
                  fontSize: "18px",
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "var(--font-heading)",
                  border: "2px solid rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  transition: "background 0.3s",
                  backdropFilter: "blur(10px)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>🗺️</span>
                <span>Explore the Journey</span>
              </motion.a>
            </motion.div>

            {/* Small electric divider below CTAs */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              style={{ marginTop: "48px", display: "flex", alignItems: "center", gap: "12px" }}
            >
              <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,203,5,0.4))" }} />
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: "18px" }}
              >
                ⚡
              </motion.span>
              <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, rgba(255,203,5,0.4), transparent)" }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
