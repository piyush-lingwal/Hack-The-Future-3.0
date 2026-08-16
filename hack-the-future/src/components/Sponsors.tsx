"use client";

import { motion } from "framer-motion";
import { sponsors } from "@/lib/data";

export default function Sponsors() {
  const tiers = [
    { name: "Platinum", color: "#888" },
    { name: "Gold", color: "#D4A017" },
    { name: "Silver", color: "#999" },
    { name: "Bronze", color: "#B87333" },
  ];

  return (
    <section id="sponsors" style={{ padding: "100px 0", position: "relative", overflow: "hidden", background: "#FAFCFF" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span style={{
            display: "inline-block", padding: "6px 20px", borderRadius: "50px",
            fontSize: "13px", fontWeight: 700, marginBottom: "16px",
            background: "rgba(42,117,187,0.08)", color: "#2A75BB",
          }}>
            🤝 ALLIES OF THE ARENA
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#1a1a2e", marginBottom: "16px" }}>
            Our Allies
          </h2>
          <p style={{ fontSize: "18px", color: "#666", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
            Powerful allies who make this journey possible.
          </p>
        </motion.div>

        {tiers.map((tier) => {
          const tierSponsors = sponsors.filter((s) => s.tier === tier.name);
          if (tierSponsors.length === 0) return null;
          return (
            <motion.div key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: "48px" }}
            >
              <h3 style={{ textAlign: "center", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: tier.color, marginBottom: "24px" }}>
                {tier.name} Partners
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                {tierSponsors.map((sponsor, i) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="card-hover"
                    style={{
                      borderRadius: "16px", padding: "24px 32px", textAlign: "center",
                      background: "white", border: `1px solid ${tier.color}25`,
                      boxShadow: "0 2px 12px rgba(0,0,0,0.04)", minWidth: "160px",
                    }}
                  >
                    <div style={{ fontSize: "36px", marginBottom: "8px" }}>{sponsor.logo}</div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "14px", fontWeight: 700, color: "#1a1a2e" }}>
                      {sponsor.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <p style={{ color: "#999", fontSize: "14px", marginBottom: "16px" }}>Want to become an ally?</p>
          <a href="mailto:sponsors@hackthefuture.dev"
            style={{
              display: "inline-block", padding: "12px 28px", borderRadius: "50px",
              fontSize: "14px", fontWeight: 700, textDecoration: "none",
              background: "rgba(42,117,187,0.08)", color: "#2A75BB",
              border: "1px solid rgba(42,117,187,0.15)", fontFamily: "var(--font-heading)",
              transition: "transform 0.3s",
            }}>
            Partner With Us 📧
          </a>
        </motion.div>
      </div>
    </section>
  );
}
