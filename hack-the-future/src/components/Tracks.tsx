"use client";

import { motion } from "framer-motion";
import { tracks } from "@/lib/data";
import Image from "next/image";

const glowClass: Record<string, string> = {
  Grass:    "glow-grass",
  Fire:     "glow-fire",
  Water:    "glow-water",
  Electric: "glow-electric",
  Ghost:    "glow-ghost",
};

export default function Tracks() {
  return (
    <section
      id="tracks"
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        background: "#f8faff",
      }}
    >
      {/* Subtle light bg blobs */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(120,200,80,0.06), transparent)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(48,167,215,0.06), transparent)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="section-pill" style={{ background: "rgba(120,200,80,0.1)", color: "#5aad38", border: "1px solid rgba(120,200,80,0.2)" }}>
            🎯 CHOOSE YOUR TYPE
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: "#1a1a2e", marginBottom: "16px" }}>
            Battle Arenas
          </h2>
          <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Each track is a unique type with its own challenges. Pick the arena that matches your skills and passion.
          </p>
        </motion.div>

        {/* Track Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
        }}>
          {tracks.map((track, i) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={glowClass[track.type]}
              style={{
                background: "white",
                borderRadius: "24px",
                overflow: "hidden",
                border: `1.5px solid ${track.color}30`,
                boxShadow: `0 4px 24px rgba(0,0,0,0.06)`,
                cursor: "default",
                position: "relative",
                transition: "box-shadow 0.4s, border-color 0.4s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.12), 0 0 0 2px ${track.color}50`;
                (e.currentTarget as HTMLElement).style.borderColor = `${track.color}60`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = `${track.color}30`;
              }}
            >
              {/* Gradient header strip */}
              <div style={{
                height: "8px",
                background: `linear-gradient(90deg, ${track.color}, ${track.color}99)`,
                boxShadow: `0 2px 12px ${track.color}60`,
              }} />

              {/* Diagonal watermark */}
              <div style={{
                position: "absolute",
                top: "8px", right: "-20px",
                width: "160px", height: "160px",
                background: `radial-gradient(circle, ${track.color}12, transparent 70%)`,
                borderRadius: "50%",
                pointerEvents: "none",
              }} />

              <div style={{ padding: "28px" }}>
                {/* Badge + Pokémon row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "18px" }}>
                  <div>
                    <span style={{
                      display: "inline-block", padding: "5px 16px", borderRadius: "20px",
                      fontSize: "12px", fontWeight: 700, textTransform: "uppercase",
                      letterSpacing: "1px", color: "white", background: track.color,
                      boxShadow: `0 4px 14px ${track.color}50`,
                    }}>
                      {track.icon} {track.type}
                    </span>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={track.pokemon}
                      alt={track.name}
                      width={88}
                      height={88}
                      style={{
                        filter: `drop-shadow(0 8px 20px ${track.color}50)`,
                        marginTop: "-8px",
                      }}
                    />
                  </motion.div>
                </div>

                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: 700, color: "#1a1a2e", marginBottom: "10px" }}>
                  {track.name}
                </h3>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.75, marginBottom: "20px" }}>
                  {track.description}
                </p>

                {/* Challenge tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {track.challenges.map((challenge) => (
                    <span
                      key={challenge}
                      style={{
                        padding: "4px 14px", borderRadius: "20px", fontSize: "12px",
                        fontWeight: 600, background: `${track.color}12`, color: track.color,
                        border: `1px solid ${track.color}25`,
                      }}
                    >
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
