"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import Image from "next/image";

export default function Timeline() {
  return (
    <section
      id="timeline"
      style={{ padding: "100px 0", position: "relative", overflow: "hidden", background: "#FAFCFF" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <span style={{
            display: "inline-block", padding: "6px 20px", borderRadius: "50px",
            fontSize: "13px", fontWeight: 700, marginBottom: "16px",
            background: "rgba(242,124,0,0.1)", color: "#F27C00",
          }}>
            🗺️ THE JOURNEY
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#1a1a2e", marginBottom: "16px" }}>
            Your Evolution Path
          </h2>
          <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Every great trainer starts as a rookie. Follow the path from registration to champion!
          </p>
        </motion.div>

        {/* Timeline items */}
        <div style={{ position: "relative" }}>
          {/* Vertical gradient line */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "4px",
            borderRadius: "4px",
            background: "linear-gradient(180deg, #2A75BB, #FFCB05, #EC1C24)",
            transform: "translateX(-50%)",
          }}
            className="timeline-line"
          />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;

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
                  marginBottom: "48px",
                  position: "relative",
                }}
                className={isLeft ? "timeline-row-left" : "timeline-row-right"}
              >
                {/* Left content / spacer */}
                <div style={{ flex: 1, paddingRight: isLeft ? "48px" : 0, paddingLeft: isLeft ? 0 : "48px" }}
                  className="timeline-content"
                >
                  {isLeft && (
                    <div
                      className="card-hover"
                      style={{
                        borderRadius: "20px",
                        padding: "24px",
                        background: "linear-gradient(135deg, #fff, #f0f7ff)",
                        border: "1px solid rgba(42,117,187,0.08)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                      }}
                    >
                      <Image
                        src={item.pokemon}
                        alt={item.title}
                        width={70}
                        height={70}
                        className="pokemon-hover"
                        style={{ flexShrink: 0, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
                      />
                      <div>
                        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#2A75BB" }}>
                          {item.evolutionLabel}
                        </span>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "4px 0" }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: "13px", fontWeight: 600, color: "#FFCB05", marginBottom: "6px" }}>
                          {item.date}
                        </p>
                        <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.6 }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div
                  className="timeline-dot"
                  style={{
                    position: "absolute",
                    left: "50%",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "#2A75BB",
                    border: "4px solid white",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                    boxShadow: "0 0 20px rgba(42,117,187,0.3)",
                  }}
                />

                {/* Right content / spacer */}
                <div style={{ flex: 1, paddingLeft: isLeft ? 0 : "48px", paddingRight: isLeft ? 0 : "48px" }}
                  className="timeline-content"
                >
                  {!isLeft && (
                    <div
                      className="card-hover"
                      style={{
                        borderRadius: "20px",
                        padding: "24px",
                        background: "linear-gradient(135deg, #fff, #f0f7ff)",
                        border: "1px solid rgba(42,117,187,0.08)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                      }}
                    >
                      <Image
                        src={item.pokemon}
                        alt={item.title}
                        width={70}
                        height={70}
                        className="pokemon-hover"
                        style={{ flexShrink: 0, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
                      />
                      <div>
                        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#2A75BB" }}>
                          {item.evolutionLabel}
                        </span>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "4px 0" }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: "13px", fontWeight: 600, color: "#FFCB05", marginBottom: "6px" }}>
                          {item.date}
                        </p>
                        <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.6 }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 24px !important;
            transform: none !important;
          }
          .timeline-dot {
            left: 24px !important;
            transform: translateX(-50%) !important;
          }
          .timeline-row-left,
          .timeline-row-right {
            flex-direction: row !important;
          }
          .timeline-row-left .timeline-content:first-child,
          .timeline-row-right .timeline-content:last-child {
            display: none !important;
          }
          .timeline-row-left .timeline-content:last-child,
          .timeline-row-right .timeline-content:first-child {
            flex: 1 !important;
            padding-left: 48px !important;
            padding-right: 0 !important;
          }
          .timeline-row-right .timeline-content:first-child {
            display: block !important;
          }
          .timeline-row-right .timeline-content:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
