"use client";

import { motion } from "framer-motion";
import { mentors } from "@/lib/data";
import Image from "next/image";

export default function GymLeaders() {
  return (
    <section id="mentors" style={{ padding: "100px 0", position: "relative", overflow: "hidden", background: "white" }}>
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
            background: "rgba(248,88,136,0.08)", color: "#F85888",
          }}>
            🎓 GYM LEADERS
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#1a1a2e", marginBottom: "16px" }}>
            Meet Your Mentors
          </h2>
          <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Industry experts and tech veterans ready to guide you. Challenge them for wisdom!
          </p>
        </motion.div>

        {/* Mentor Cards Grid */}
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
              className="card-hover"
              style={{
                borderRadius: "24px", overflow: "hidden", background: "white",
                border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              {/* Type-colored header */}
              <div style={{
                height: "100px", position: "relative", overflow: "hidden",
                background: `linear-gradient(135deg, ${mentor.color}25, ${mentor.color}08)`,
              }}>
                <div style={{
                  position: "absolute", right: "-8px", bottom: "-12px",
                }}>
                  <Image src={mentor.pokemon} alt={mentor.type} width={85} height={85}
                    style={{ opacity: 0.35 }} />
                </div>
              </div>

              <div style={{ padding: "24px", marginTop: "-32px", position: "relative" }}>
                {/* Avatar */}
                <div style={{
                  width: "56px", height: "56px", borderRadius: "16px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px", fontWeight: 700, color: "white", marginBottom: "12px",
                  background: `linear-gradient(135deg, ${mentor.color}, ${mentor.color}CC)`,
                  boxShadow: `0 8px 24px ${mentor.color}40`,
                }}>
                  {mentor.name.charAt(0)}
                </div>

                <span style={{
                  display: "inline-block", padding: "3px 12px", borderRadius: "12px",
                  fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "1px", color: "white", background: mentor.color, marginBottom: "12px",
                }}>
                  {mentor.type}
                </span>

                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: 700, color: "#1a1a2e", marginBottom: "2px" }}>
                  {mentor.name}
                </h3>
                <p style={{ fontSize: "14px", fontWeight: 600, color: mentor.color, marginBottom: "2px" }}>
                  {mentor.role}
                </p>
                <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>{mentor.org}</p>
                <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.6 }}>{mentor.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
