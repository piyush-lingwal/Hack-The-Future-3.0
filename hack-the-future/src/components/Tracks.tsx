"use client";

import { motion } from "framer-motion";
import { tracks } from "@/lib/data";
import Image from "next/image";

export default function Tracks() {
  return (
    <section
      id="tracks"
      style={{ padding: "100px 0", position: "relative", overflow: "hidden", background: "white" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span style={{
            display: "inline-block", padding: "6px 20px", borderRadius: "50px",
            fontSize: "13px", fontWeight: 700, marginBottom: "16px",
            background: "rgba(120,200,80,0.1)", color: "#78C850",
          }}>
            🎯 CHOOSE YOUR TYPE
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#1a1a2e", marginBottom: "16px" }}>
            Battle Arenas
          </h2>
          <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Each track is a unique type with its own challenges. Pick the arena that matches your skills and passion.
          </p>
        </motion.div>

        {/* Track Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "24px",
        }}>
          {tracks.map((track, i) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: "24px",
                overflow: "hidden",
                border: `2px solid ${track.color}20`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                cursor: "default",
                position: "relative",
              }}
            >
              {/* Color top bar */}
              <div style={{ height: "6px", width: "100%", background: track.color }} />

              <div style={{ padding: "28px" }}>
                {/* Pokemon + Badge row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span style={{
                    display: "inline-block", padding: "4px 16px", borderRadius: "20px",
                    fontSize: "12px", fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "1px", color: "white", background: track.color,
                  }}>
                    {track.icon} {track.type}
                  </span>
                  <Image
                    src={track.pokemon}
                    alt={track.name}
                    width={90}
                    height={90}
                    className="pokemon-hover"
                    style={{ filter: `drop-shadow(0 8px 16px ${track.color}40)`, marginTop: "-8px" }}
                  />
                </div>

                {/* Content */}
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: 700, color: "#1a1a2e", marginBottom: "12px" }}>
                  {track.name}
                </h3>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
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
