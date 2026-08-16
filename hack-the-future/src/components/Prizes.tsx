"use client";

import { motion } from "framer-motion";
import { prizes, trackPrizes } from "@/lib/data";
import Image from "next/image";

export default function Prizes() {
  const podiumOrder = [prizes[1], prizes[0], prizes[2]];
  const podiumHeights = ["200px", "260px", "160px"];
  const podiumSizes = [110, 140, 100];
  const podiumDelays = [0.3, 0.1, 0.5];

  return (
    <section
      id="prizes"
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: "800px", height: "400px", borderRadius: "50%", opacity: 0.1,
        filter: "blur(80px)", background: "#FFCB05", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
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
            background: "rgba(255,203,5,0.12)", color: "#FFCB05",
          }}>
            🏆 CHAMPION&apos;S LEAGUE
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "white", marginBottom: "16px" }}>
            Glory Awaits
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
            Over ₹1 Lakh in prizes. Will you rise to become the Champion?
          </p>
        </motion.div>

        {/* Podium */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "24px", marginBottom: "80px" }}>
          {podiumOrder.map((prize, i) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: podiumDelays[i], duration: 0.6, type: "spring" }}
              style={{ flex: 1, maxWidth: "240px", textAlign: "center" }}
            >
              <Image
                src={prize.pokemon}
                alt={prize.title}
                width={podiumSizes[i]}
                height={podiumSizes[i]}
                className="pokemon-hover"
                style={{
                  margin: "0 auto 16px",
                  display: "block",
                  filter: `drop-shadow(0 10px 30px rgba(255,203,5,0.3))`,
                }}
              />
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>{prize.badge}</div>
              <div
                className={i === 1 ? "shimmer-text" : ""}
                style={{
                  fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 700,
                  fontFamily: "var(--font-heading)",
                  color: i === 1 ? undefined : "#FFCB05",
                  marginBottom: "4px",
                }}
              >
                {prize.amount}
              </div>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "white", fontSize: "16px", marginBottom: "8px" }}>
                {prize.title}
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "16px", display: i === 1 ? "block" : "none" }}>
                {prize.description}
              </p>
              <div style={{
                height: podiumHeights[i],
                borderRadius: "16px 16px 0 0",
                background: i === 1
                  ? "linear-gradient(180deg, rgba(255,203,5,0.25), rgba(255,203,5,0.03))"
                  : "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "none",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: "16px", left: "50%", transform: "translateX(-50%)",
                  fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, opacity: 0.15,
                  fontFamily: "var(--font-heading)", color: "white",
                }}>
                  {prize.place}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Track Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "32px" }}
        >
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 700, color: "white" }}>
            Special Track Awards
          </h3>
        </motion.div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "16px",
          maxWidth: "700px",
          margin: "0 auto",
        }}>
          {trackPrizes.map((prize, i) => (
            <motion.div
              key={prize.track}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover"
              style={{
                borderRadius: "16px", padding: "24px", textAlign: "center",
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Image src={prize.pokemon} alt={prize.track} width={56} height={56}
                className="pokemon-hover" style={{ margin: "0 auto 12px", display: "block" }} />
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: 700, color: "#FFCB05" }}>
                {prize.amount}
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>{prize.track}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
