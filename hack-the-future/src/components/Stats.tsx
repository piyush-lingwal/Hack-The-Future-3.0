"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

/* Per-stat type colors and glow class */
const statAccents = [
  { color: "#FFCB05", glow: "glow-electric", bg: "rgba(247,208,44,0.08)", border: "rgba(247,208,44,0.2)" },
  { color: "#30A7D7", glow: "glow-water",    bg: "rgba(48,167,215,0.08)",  border: "rgba(48,167,215,0.2)"  },
  { color: "#FFCB05", glow: "glow-electric", bg: "rgba(255,203,5,0.08)",   border: "rgba(255,203,5,0.22)"  },
  { color: "#F27C00", glow: "glow-fire",     bg: "rgba(242,124,0,0.08)",   border: "rgba(242,124,0,0.2)"   },
  { color: "#F85888", glow: "glow-ghost",    bg: "rgba(248,88,136,0.08)",  border: "rgba(248,88,136,0.2)"  },
];

function Counter({ end, prefix = "", suffix = "", duration = 2000, color }: {
  end: number; prefix?: string; suffix?: string; duration?: number; color: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref} style={{ color }}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      className="cyber-grid scanline-container"
      style={{
        position: "relative",
        padding: "56px 0",
        overflow: "hidden",
        background: "linear-gradient(135deg, #080814 0%, #0f0f22 50%, #080814 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div style={{ position: "absolute", top: "50%", left: "20%", transform: "translate(-50%,-50%)", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,203,5,0.04)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "80%", transform: "translate(-50%,-50%)", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(42,117,187,0.06)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div
          className="stats-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}
        >
          {stats.map((stat, i) => {
            const accent = statAccents[i] ?? statAccents[0];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 120 }}
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <div
                  className={accent.glow}
                  style={{
                    borderRadius: "20px",
                    padding: "28px 16px",
                    background: accent.bg,
                    border: `1px solid ${accent.border}`,
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                    cursor: "default",
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                    background: accent.color,
                    boxShadow: `0 0 10px ${accent.color}`,
                  }} />

                  {/* Icon */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    style={{ fontSize: "32px", marginBottom: "12px", lineHeight: 1 }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Number */}
                  <div style={{
                    fontSize: "clamp(26px, 3vw, 40px)",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1.1,
                    marginBottom: "6px",
                  }}>
                    <Counter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      color={accent.color}
                    />
                  </div>

                  {/* Label */}
                  <div style={{
                    fontSize: "11px", fontWeight: 700,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "2px", textTransform: "uppercase",
                  }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
