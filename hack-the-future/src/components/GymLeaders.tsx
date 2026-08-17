"use client";

import { motion } from "framer-motion";
import { mentors } from "@/lib/data";
import Image from "next/image";

export default function GymLeaders() {
  return (
    <section
      id="mentors"
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        background: "#f4f7ff",
      }}
    >
      {/* Subtle bg accents */}
      <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(248,88,136,0.06), transparent)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(42,117,187,0.06), transparent)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="section-pill" style={{ background: "rgba(248,88,136,0.08)", color: "#F85888", border: "1px solid rgba(248,88,136,0.2)" }}>
            🎓 GYM LEADERS
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: "#1a1a2e", marginBottom: "16px" }}>
            Meet Your Mentors
          </h2>
          <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Industry experts and tech veterans ready to guide you. Challenge them for wisdom!
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}>
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                background: "white",
                border: `1px solid ${mentor.color}20`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.35s, border-color 0.35s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.12), 0 0 0 2px ${mentor.color}40`;
                (e.currentTarget as HTMLElement).style.borderColor = `${mentor.color}50`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = `${mentor.color}20`;
              }}
            >
              {/* Card header with vivid gradient */}
              <div style={{
                height: "110px",
                position: "relative",
                overflow: "hidden",
                background: `linear-gradient(135deg, ${mentor.color}35, ${mentor.color}12)`,
              }}>
                {/* Pokémon watermark — more prominent */}
                <div style={{ position: "absolute", right: "-10px", bottom: "-16px" }}>
                  <Image
                    src={mentor.pokemon}
                    alt={mentor.type}
                    width={100}
                    height={100}
                    style={{ opacity: 0.55, filter: `drop-shadow(0 4px 16px ${mentor.color}60)` }}
                  />
                </div>

                {/* Type label top-left */}
                <div style={{
                  position: "absolute", top: "14px", left: "16px",
                  padding: "4px 14px", borderRadius: "20px",
                  fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "1px", color: "white",
                  background: mentor.color,
                  boxShadow: `0 4px 12px ${mentor.color}60`,
                }}>
                  {mentor.type}
                </div>

                {/* Step number */}
                <div style={{
                  position: "absolute", bottom: "12px", left: "16px",
                  fontSize: "11px", fontWeight: 700, color: mentor.color,
                  letterSpacing: "1px", opacity: 0.8,
                }}>
                  GYM #{i + 1}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "20px 24px 24px", marginTop: "-20px", position: "relative" }}>
                {/* Avatar with gradient */}
                <div style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "14px",
                  background: `linear-gradient(135deg, ${mentor.color}, ${mentor.color}CC)`,
                  boxShadow: `0 8px 24px ${mentor.color}50`,
                  border: "3px solid white",
                }}>
                  {mentor.name.charAt(0)}
                </div>

                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: 700, color: "#1a1a2e", marginBottom: "2px" }}>
                  {mentor.name}
                </h3>
                <p style={{ fontSize: "14px", fontWeight: 600, color: mentor.color, marginBottom: "2px" }}>
                  {mentor.role}
                </p>
                <p style={{ fontSize: "12px", color: "#aaa", marginBottom: "10px" }}>
                  {mentor.org}
                </p>

                {/* Specialty pill */}
                <div style={{
                  display: "inline-block",
                  padding: "5px 14px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: 600,
                  background: `${mentor.color}12`,
                  color: mentor.color,
                  border: `1px solid ${mentor.color}25`,
                }}>
                  {mentor.specialty}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
