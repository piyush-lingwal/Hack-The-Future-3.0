"use client";

import { motion } from "framer-motion";
import { sponsors } from "@/lib/data";

const tierConfig = {
  Platinum: { color: "#C0C0C0", glow: "rgba(192,192,192,0.3)", label: "Platinum Partners", size: "xl" },
  Gold:     { color: "#D4A017", glow: "rgba(212,160,23,0.3)",  label: "Gold Partners",     size: "lg" },
  Silver:   { color: "#909090", glow: "rgba(144,144,144,0.2)", label: "Silver Partners",   size: "md" },
  Bronze:   { color: "#B87333", glow: "rgba(184,115,51,0.2)",  label: "Bronze Partners",   size: "sm" },
} as const;

const tierOrder = ["Platinum", "Gold", "Silver", "Bronze"] as const;

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="cyber-grid"
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #080814 0%, #0d0d1e 50%, #080814 100%)",
      }}
    >
      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "40%", left: "20%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.05), transparent)", filter: "blur(50px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", right: "20%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(42,117,187,0.05), transparent)", filter: "blur(50px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="section-pill" style={{ background: "rgba(42,117,187,0.1)", color: "#30A7D7", border: "1px solid rgba(42,117,187,0.2)" }}>
            🤝 ALLIES OF THE ARENA
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: "white", marginBottom: "16px" }}>
            Our Allies
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
            Powerful allies who make this journey possible.
          </p>
        </motion.div>

        {tierOrder.map((tierName) => {
          const config = tierConfig[tierName];
          const tierSponsors = sponsors.filter((s) => s.tier === tierName);
          if (!tierSponsors.length) return null;

          return (
            <motion.div
              key={tierName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: "52px" }}
            >
              {/* Tier label with line */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, transparent, ${config.color}50)` }} />
                <span style={{
                  fontSize: "11px", fontWeight: 700, letterSpacing: "3px",
                  textTransform: "uppercase", color: config.color,
                  padding: "4px 16px", borderRadius: "20px",
                  border: `1px solid ${config.color}30`,
                  background: `${config.color}08`,
                }}>
                  {config.label}
                </span>
                <div style={{ flex: 1, height: "1px", background: `linear-gradient(270deg, transparent, ${config.color}50)` }} />
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                {tierSponsors.map((sponsor, i) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    style={{
                      borderRadius: "16px",
                      padding: tierName === "Platinum" ? "28px 36px" : tierName === "Gold" ? "24px 30px" : "18px 24px",
                      textAlign: "center",
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid ${config.color}25`,
                      boxShadow: `0 4px 24px rgba(0,0,0,0.3)`,
                      minWidth: "150px",
                      cursor: "default",
                      transition: "box-shadow 0.3s, border-color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px ${config.color}50, 0 0 20px ${config.glow}`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${config.color}50`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
                      (e.currentTarget as HTMLElement).style.borderColor = `${config.color}25`;
                    }}
                  >
                    <div style={{ fontSize: tierName === "Platinum" ? "44px" : tierName === "Gold" ? "38px" : "30px", marginBottom: "10px" }}>
                      {sponsor.logo}
                    </div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "14px", fontWeight: 700, color: config.color }}>
                      {sponsor.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Partner CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px", marginBottom: "16px" }}>
            Want to become an ally of the arena?
          </p>
          <motion.a
            href="mailto:sponsors@hackthefuture.dev"
            whileHover={{ scale: 1.05, y: -2 }}
            style={{
              display: "inline-block",
              padding: "12px 32px",
              borderRadius: "50px",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              background: "rgba(42,117,187,0.1)",
              color: "#30A7D7",
              border: "1px solid rgba(42,117,187,0.25)",
              fontFamily: "var(--font-heading)",
              boxShadow: "0 4px 20px rgba(42,117,187,0.1)",
              transition: "all 0.3s",
            }}
          >
            Partner With Us 📧
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
