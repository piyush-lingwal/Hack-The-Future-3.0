"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import Image from "next/image";

/* Inline pokéball dot for the timeline */
function TimelineDot({ color }: { color: string }) {
  return (
    <div style={{
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 10,
      width: "36px",
      height: "36px",
    }}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="17" fill="white" stroke="#1a1a2e" strokeWidth="1.5"/>
        <path d="M1 18 A17 17 0 0 1 35 18 Z" fill={color}/>
        <rect x="1" y="16.5" width="34" height="3" fill="#1a1a2e"/>
        <circle cx="18" cy="18" r="5" fill="#1a1a2e"/>
        <circle cx="18" cy="18" r="3" fill="white"/>
      </svg>
      {/* Glow ring */}
      <div style={{
        position: "absolute", inset: "-4px", borderRadius: "50%",
        border: `2px solid ${color}`,
        boxShadow: `0 0 12px ${color}, 0 0 24px ${color}60`,
        animation: "pulse-glow-ring 2s ease-in-out infinite",
      }} />
    </div>
  );
}

const stepColors = ["#78C850", "#30A7D7", "#F27C00", "#705898", "#F85888", "#FFCB05"];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="cyber-grid"
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #080814 0%, #0f0f20 50%, #080814 100%)",
      }}
    >
      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(42,117,187,0.06), transparent)", filter: "blur(40px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <span className="section-pill" style={{ background: "rgba(242,124,0,0.12)", color: "#F27C00", border: "1px solid rgba(242,124,0,0.25)" }}>
            🗺️ THE JOURNEY
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: "white", marginBottom: "16px" }}>
            Your Evolution Path
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Every great trainer starts as a rookie. Follow the path from registration to champion!
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical neon line */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "4px",
              borderRadius: "4px",
              background: "linear-gradient(180deg, #78C850, #30A7D7, #F27C00, #705898, #F85888, #FFCB05)",
              transform: "translateX(-50%)",
              boxShadow: "0 0 20px rgba(255,203,5,0.2), 0 0 40px rgba(42,117,187,0.1)",
            }}
          />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            const color = stepColors[i] ?? "#FFCB05";

            const Card = () => (
              <motion.div
                className="card-hover-dark"
                whileHover={{ scale: 1.03 }}
                style={{
                  borderRadius: "20px",
                  padding: "22px",
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${color}25`,
                  boxShadow: `0 4px 30px rgba(0,0,0,0.4)`,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  transition: "box-shadow 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 50px rgba(0,0,0,0.5), 0 0 0 1px ${color}40`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${color}50`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(0,0,0,0.4)";
                  (e.currentTarget as HTMLElement).style.borderColor = `${color}25`;
                }}
              >
                <Image
                  src={item.pokemon}
                  alt={item.title}
                  width={65}
                  height={65}
                  className="pokemon-hover"
                  style={{ flexShrink: 0, filter: `drop-shadow(0 4px 12px ${color}60)` }}
                />
                <div>
                  <span style={{
                    display: "inline-block", padding: "2px 10px", borderRadius: "12px",
                    fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px",
                    textTransform: "uppercase", color: color,
                    background: `${color}15`, marginBottom: "6px",
                  }}>
                    {item.evolutionLabel}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "17px", fontWeight: 700, color: "white", margin: "2px 0 4px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "#FFCB05", marginBottom: "6px", letterSpacing: "0.3px" }}>
                    {item.date}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.65 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "52px",
                  position: "relative",
                }}
                className={isLeft ? "timeline-row-left" : "timeline-row-right"}
              >
                {/* Left slot */}
                <div style={{ flex: 1, paddingRight: isLeft ? "52px" : 0, paddingLeft: isLeft ? 0 : "52px" }} className="timeline-content">
                  {isLeft && <Card />}
                </div>

                {/* Pokéball dot */}
                <TimelineDot color={color} />

                {/* Right slot */}
                <div style={{ flex: 1, paddingLeft: isLeft ? 0 : "52px", paddingRight: isLeft ? 0 : "0" }} className="timeline-content">
                  {!isLeft && <Card />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow-ring {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @media (max-width: 768px) {
          .timeline-line { left: 18px !important; transform: none !important; }
          .timeline-row-left .timeline-content:first-child,
          .timeline-row-right .timeline-content:last-child { display: none !important; }
          .timeline-row-left .timeline-content:last-child,
          .timeline-row-right .timeline-content:first-child {
            flex: 1 !important;
            padding-left: 52px !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
