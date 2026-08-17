"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import Image from "next/image";

/* Electric particle spark */
function ElectricParticle({ x, y, angle, size, delay }: { x: string; y: string; angle: number; size: number; delay: number }) {
  const rad = (angle * Math.PI) / 180;
  return (
    <motion.div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: "#FFCB05",
        boxShadow: "0 0 6px #FFCB05, 0 0 12px rgba(255,203,5,0.4)",
        pointerEvents: "none",
      }}
      animate={{
        x: [0, Math.cos(rad) * 60, Math.cos(rad) * 100],
        y: [0, Math.sin(rad) * 60, Math.sin(rad) * 100],
        opacity: [0, 1, 0],
        scale: [0, 1.2, 0],
      }}
      transition={{
        duration: 1.8,
        delay,
        repeat: Infinity,
        repeatDelay: 2 + Math.random() * 3,
        ease: "easeOut",
      }}
    />
  );
}

const particles = Array.from({ length: 16 }, (_, i) => ({
  x: `${20 + Math.random() * 60}%`,
  y: `${10 + Math.random() * 80}%`,
  angle: (360 / 16) * i,
  size: 2 + Math.random() * 3,
  delay: i * 0.3,
}));

export default function FinalCTA() {
  return (
    <section style={{
      position: "relative",
      padding: "120px 0",
      overflow: "hidden",
      background: "linear-gradient(160deg, #0a0a1a 0%, #1a1060 40%, #0d0d24 70%, #0a0a1a 100%)",
    }}>
      {/* Radial burst glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "800px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(42,117,187,0.18) 0%, rgba(255,203,5,0.06) 50%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />

      {/* Electric particles */}
      {particles.map((p, i) => <ElectricParticle key={i} {...p} />)}

      {/* Top lightning divider */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "4px",
        background: "linear-gradient(90deg, transparent, #FFCB05, #30A7D7, #FFCB05, transparent)",
        boxShadow: "0 0 20px rgba(255,203,5,0.4)",
        animation: "neon-flicker 4s linear infinite",
      }} />

      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 24px",
        position: "relative",
        zIndex: 10,
        textAlign: "center",
      }}>
        {/* Pokémon flanking */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginBottom: "36px" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="cta-pokemon"
          >
            <Image
              src="/pokk/imgi_58_transparent-pokemon-cheerful-pikachu-in-baseball-cap-energetic-1710857888908.webp"
              alt="Pikachu"
              width={140}
              height={140}
              className="float-animation"
              style={{ filter: "drop-shadow(0 12px 40px rgba(255,203,5,0.55))" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
            }}>
              Your Journey
              <br />
              <span className="shimmer-text">Begins Now</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="cta-pokemon"
          >
            <Image
              src="/pokk/imgi_52_transparent-ash-ketchum-cute-pikachu-sitting-with-happy-1710857924209.webp"
              alt="Ash and Pikachu"
              width={140}
              height={140}
              className="float-animation-reverse"
              style={{ filter: "drop-shadow(0 12px 40px rgba(255,203,5,0.4))" }}
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", marginBottom: "44px", lineHeight: 1.8 }}
        >
          Catch your moment. Assemble your team. Choose your type. The arena awaits.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href={siteConfig.registrationUrl}
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="pulse-glow"
            style={{
              display: "inline-block",
              padding: "22px 60px",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "22px",
              textDecoration: "none",
              background: "linear-gradient(135deg, #FFCB05 0%, #FFE566 50%, #F7A800 100%)",
              backgroundSize: "200% 200%",
              color: "#0a0a1a",
              fontFamily: "var(--font-heading)",
              boxShadow: "0 8px 50px rgba(255,203,5,0.5), 0 0 100px rgba(255,203,5,0.15)",
              transition: "background-position 0.4s",
              letterSpacing: "0.3px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Button shimmer sweep */}
            <motion.span
              style={{
                position: "absolute",
                top: 0, left: "-80%",
                width: "60%", height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                transform: "skewX(-15deg)",
                pointerEvents: "none",
              }}
              animate={{ left: ["−80%", "150%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
            />
            ⚡ Register Now — It&apos;s Free!
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          style={{ marginTop: "20px", fontSize: "13px", color: "rgba(255,255,255,0.3)" }}
        >
          📅 {siteConfig.date} &nbsp;•&nbsp; 📍 {siteConfig.venue}
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 640px) { .cta-pokemon { display: none !important; } }
      `}</style>
    </section>
  );
}
