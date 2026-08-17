"use client";

import { motion } from "framer-motion";
import { prizes, trackPrizes } from "@/lib/data";
import Image from "next/image";

/* Floating gold particle */
function GoldParticle({ delay, x }: { delay: number; x: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "260px",
        left: `${x}%`,
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        background: "#FFCB05",
        boxShadow: "0 0 6px #FFCB05, 0 0 12px rgba(255,203,5,0.5)",
        pointerEvents: "none",
      }}
      animate={{
        y: [0, -120, -220],
        opacity: [0, 1, 0],
        scale: [0.5, 1.2, 0],
        x: [0, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 50],
      }}
      transition={{
        duration: 2.2,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeOut",
      }}
    />
  );
}

export default function Prizes() {
  const podiumOrder = [prizes[1], prizes[0], prizes[2]];
  const podiumHeights = ["200px", "280px", "160px"];
  const podiumSizes = [110, 155, 100];
  const podiumDelays = [0.3, 0.1, 0.5];
  const isCenter = [false, true, false];

  const goldParticles = Array.from({ length: 12 }, (_, i) => ({
    delay: i * 0.2,
    x: 38 + (Math.random() - 0.5) * 18,
  }));

  return (
    <section
      id="prizes"
      style={{
        padding: "100px 0 80px",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #080814 0%, #12101e 50%, #080814 100%)",
      }}
    >
      {/* Champion glow */}
      <div style={{
        position: "absolute", top: "40%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "700px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(255,203,5,0.08), transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />

      {/* Gold particles above 1st place */}
      {goldParticles.map((p, i) => (
        <GoldParticle key={i} delay={p.delay} x={p.x} />
      ))}

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="section-pill" style={{ background: "rgba(255,203,5,0.1)", color: "#FFCB05", border: "1px solid rgba(255,203,5,0.2)" }}>
            🏆 CHAMPION&apos;S LEAGUE
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: "white", marginBottom: "16px" }}>
            Glory Awaits
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
            Over ₹1 Lakh in prizes. Will you rise to become the Champion?
          </p>
        </motion.div>

        {/* Podium */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "20px", marginBottom: "80px" }}>
          {podiumOrder.map((prize, i) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: podiumDelays[i], duration: 0.7, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8 }}
              style={{ flex: 1, maxWidth: "260px", textAlign: "center" }}
            >
              {/* Pokémon */}
              <div style={{ position: "relative" }}>
                {isCenter[i] && (
                  <motion.div
                    style={{
                      position: "absolute", inset: "-16px", borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(255,203,5,0.2), transparent 70%)",
                    }}
                    animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                <Image
                  src={prize.pokemon}
                  alt={prize.title}
                  width={podiumSizes[i]}
                  height={podiumSizes[i]}
                  className="pokemon-hover float-animation"
                  style={{
                    margin: "0 auto 12px",
                    display: "block",
                    filter: isCenter[i]
                      ? "drop-shadow(0 10px 40px rgba(255,203,5,0.5))"
                      : "drop-shadow(0 6px 20px rgba(255,255,255,0.2))",
                  }}
                />
              </div>

              {/* Badge emoji */}
              <div style={{ fontSize: "36px", marginBottom: "6px" }}>{prize.badge}</div>

              {/* Amount */}
              <div
                className={isCenter[i] ? "gold-shimmer-text" : ""}
                style={{
                  fontSize: "clamp(20px, 3vw, 34px)",
                  fontWeight: 700,
                  fontFamily: "var(--font-heading)",
                  color: isCenter[i] ? undefined : "#FFCB05",
                  marginBottom: "4px",
                  textShadow: isCenter[i] ? "none" : "0 0 20px rgba(255,203,5,0.3)",
                }}
              >
                {prize.amount}
              </div>

              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "white", fontSize: "15px", marginBottom: "16px" }}>
                {prize.title}
              </div>

              {/* Podium bar */}
              <div style={{
                height: podiumHeights[i],
                borderRadius: "14px 14px 0 0",
                background: isCenter[i]
                  ? "linear-gradient(180deg, rgba(255,203,5,0.22) 0%, rgba(255,203,5,0.06) 100%)"
                  : "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 100%)",
                border: `1px solid ${isCenter[i] ? "rgba(255,203,5,0.25)" : "rgba(255,255,255,0.06)"}`,
                borderBottom: "none",
                boxShadow: isCenter[i] ? "0 0 40px rgba(255,203,5,0.12)" : "none",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: "16px", left: "50%", transform: "translateX(-50%)",
                  fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700,
                  opacity: 0.1, fontFamily: "var(--font-heading)", color: "white",
                }}>
                  {prize.place}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Track Prizes */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: 700, color: "white", textAlign: "center", marginBottom: "28px" }}
        >
          Special Track Awards
        </motion.h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "16px",
          maxWidth: "700px",
          margin: "0 auto",
        }}>
          {trackPrizes.map((prize, i) => (
            <motion.div
              key={prize.track}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.04 }}
              style={{
                borderRadius: "16px",
                padding: "22px 16px",
                textAlign: "center",
                background: "rgba(255,203,5,0.04)",
                border: "1px solid rgba(255,203,5,0.12)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                transition: "box-shadow 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,203,5,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
              }}
            >
              <Image src={prize.pokemon} alt={prize.track} width={52} height={52}
                className="pokemon-hover" style={{ margin: "0 auto 10px", display: "block", filter: "drop-shadow(0 4px 12px rgba(255,203,5,0.3))" }} />
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: 700, color: "#FFCB05" }}>
                {prize.amount}
              </div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "4px", letterSpacing: "0.3px" }}>
                {prize.track}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
