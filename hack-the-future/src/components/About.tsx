"use client";

import { motion } from "framer-motion";
import { aboutFeatures, siteConfig } from "@/lib/data";
import Image from "next/image";

const featureColors = ["#FFCB05", "#F85888", "#F27C00", "#78C850"];

export default function About() {
  return (
    <section
      id="about"
      className="cyber-grid-blue"
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #0d0d20 0%, #101028 50%, #0a0a1a 100%)",
      }}
    >
      {/* Decorative glows */}
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", opacity: 0.06, filter: "blur(80px)", background: "#2A75BB", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "350px", height: "350px", borderRadius: "50%", opacity: 0.06, filter: "blur(70px)", background: "#FFCB05", pointerEvents: "none" }} />

      {/* Rotating pokéball watermark */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px", height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.02)",
          pointerEvents: "none", zIndex: 0,
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "8px", height: "8px", borderRadius: "50%",
          background: "rgba(255,203,5,0.15)",
        }} />
      </motion.div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="section-pill" style={{ background: "rgba(42,117,187,0.15)", color: "#30A7D7", border: "1px solid rgba(42,117,187,0.25)" }}>
            ⚔️ THE GAME
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: "white", marginBottom: "16px", lineHeight: 1.15 }}>
            What Awaits You
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.45)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            {siteConfig.description}
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          maxWidth: "960px",
          margin: "0 auto",
        }}>
          {aboutFeatures.map((feature, i) => {
            const color = featureColors[i] ?? "#FFCB05";
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  borderRadius: "24px",
                  padding: "28px",
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${color}25`,
                  boxShadow: `0 4px 30px rgba(0,0,0,0.3), inset 0 0 30px ${color}05`,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "18px",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  transition: "box-shadow 0.4s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 60px rgba(0,0,0,0.5), 0 0 0 1px ${color}40, inset 0 0 40px ${color}08`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 30px rgba(0,0,0,0.3), inset 0 0 30px ${color}05`;
                }}
              >
                {/* Left accent bar */}
                <div style={{ position: "absolute", left: 0, top: "20%", bottom: "20%", width: "3px", borderRadius: "0 3px 3px 0", background: color, boxShadow: `0 0 10px ${color}` }} />

                <div style={{ flexShrink: 0 }}>
                  <Image
                    src={feature.pokemon}
                    alt={feature.title}
                    width={72}
                    height={72}
                    className="pokemon-hover"
                    style={{ filter: `drop-shadow(0 4px 16px ${color}60)` }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: "22px", marginBottom: "6px" }}>{feature.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 700, color: "white", marginBottom: "8px" }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontSize: "14px" }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Venue & Date card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: "64px",
            maxWidth: "640px",
            margin: "64px auto 0",
            borderRadius: "24px",
            padding: "36px 40px",
            textAlign: "center",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,203,5,0.15)",
            boxShadow: "0 0 40px rgba(255,203,5,0.05)",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "48px" }}>
            <div>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>📅</div>
              <div style={{ fontSize: "18px", fontWeight: 700, fontFamily: "var(--font-heading)", color: "#FFCB05" }}>
                {siteConfig.date}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginTop: "4px" }}>36 Hours of Hacking</div>
            </div>
            <div style={{ width: "1px", height: "60px", background: "rgba(255,255,255,0.08)" }} className="venue-divider" />
            <div>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>📍</div>
              <div style={{ fontSize: "18px", fontWeight: 700, fontFamily: "var(--font-heading)", color: "#FFCB05" }}>
                {siteConfig.venue.split(",")[0]}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginTop: "4px" }}>
                {siteConfig.venue.split(",")[1]?.trim()}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) { .venue-divider { display: none !important; } }
      `}</style>
    </section>
  );
}
