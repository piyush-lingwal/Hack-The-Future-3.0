"use client";

import { motion } from "framer-motion";
import { aboutFeatures, siteConfig } from "@/lib/data";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        background: "#FAFCFF",
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", borderRadius: "50%", opacity: 0.08, filter: "blur(60px)", background: "#2A75BB" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "400px", height: "400px", borderRadius: "50%", opacity: 0.08, filter: "blur(60px)", background: "#FFCB05" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span style={{
            display: "inline-block", padding: "6px 20px", borderRadius: "50px",
            fontSize: "13px", fontWeight: 700, marginBottom: "16px",
            background: "rgba(42,117,187,0.08)", color: "#2A75BB",
          }}>
            ⚔️ THE GAME
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#1a1a2e", marginBottom: "16px" }}>
            What Awaits You
          </h2>
          <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            {siteConfig.description}
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          maxWidth: "900px",
          margin: "0 auto",
        }}>
          {aboutFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-hover"
              style={{
                borderRadius: "24px",
                padding: "32px",
                background: "linear-gradient(135deg, #fff 0%, #f0f7ff 100%)",
                border: "1px solid rgba(42,117,187,0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                cursor: "default",
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <Image
                  src={feature.pokemon}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="pokemon-hover"
                  style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.1))" }}
                />
              </div>
              <div>
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>{feature.icon}</div>
                <h3 style={{
                  fontFamily: "var(--font-heading)", fontSize: "20px",
                  fontWeight: 700, color: "#1a1a2e", marginBottom: "8px",
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: "#666", lineHeight: 1.7, fontSize: "14px" }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venue & Date */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: "64px",
            maxWidth: "700px",
            margin: "64px auto 0",
            borderRadius: "24px",
            padding: "40px",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(42,117,187,0.04), rgba(255,203,5,0.04))",
            border: "1px solid rgba(42,117,187,0.08)",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "48px" }}>
            <div>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>📅</div>
              <div style={{ fontSize: "18px", fontWeight: 700, fontFamily: "var(--font-heading)", color: "#1a1a2e" }}>
                {siteConfig.date}
              </div>
              <div style={{ fontSize: "14px", color: "#999", marginTop: "4px" }}>36 Hours of Hacking</div>
            </div>
            <div style={{ width: "1px", height: "60px", background: "#e0e0e0" }} className="venue-divider" />
            <div>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>📍</div>
              <div style={{ fontSize: "18px", fontWeight: 700, fontFamily: "var(--font-heading)", color: "#1a1a2e" }}>
                {siteConfig.venue.split(",")[0]}
              </div>
              <div style={{ fontSize: "14px", color: "#999", marginTop: "4px" }}>
                {siteConfig.venue.split(",")[1]?.trim()}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .venue-divider { display: none !important; }
        }
      `}</style>
    </section>
  );
}
