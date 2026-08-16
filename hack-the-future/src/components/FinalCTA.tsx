"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section style={{
      position: "relative", padding: "120px 0", overflow: "hidden",
      background: "linear-gradient(135deg, #2A75BB 0%, #1a4f8a 50%, #1a1a2e 100%)",
    }}>
      {/* Glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: "600px", height: "300px", borderRadius: "50%", opacity: 0.15,
        filter: "blur(80px)", background: "#FFCB05", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10, textAlign: "center" }}>
        {/* Pokemon flanking */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", marginBottom: "32px" }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cta-pokemon"
          >
            <Image
              src="/pokk/imgi_58_transparent-pokemon-cheerful-pikachu-in-baseball-cap-energetic-1710857888908.webp"
              alt="Pikachu" width={110} height={110}
              className="float-animation"
              style={{ filter: "drop-shadow(0 10px 30px rgba(255,203,5,0.4))" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, color: "white", lineHeight: 1.2 }}>
              Your Journey
              <br />
              <span className="shimmer-text">Begins Now</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cta-pokemon"
          >
            <Image
              src="/pokk/imgi_52_transparent-ash-ketchum-cute-pikachu-sitting-with-happy-1710857924209.webp"
              alt="Pikachu sitting" width={110} height={110}
              className="float-animation-reverse"
              style={{ filter: "drop-shadow(0 10px 30px rgba(255,203,5,0.4))" }}
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)", marginBottom: "40px", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.8 }}
        >
          Catch your moment. Assemble your team. Choose your type. The arena awaits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href={siteConfig.registrationUrl} className="pulse-glow"
            style={{
              display: "inline-block", padding: "20px 48px", borderRadius: "50px",
              fontWeight: 700, fontSize: "20px", textDecoration: "none",
              background: "linear-gradient(135deg, #FFCB05, #FFD700)",
              color: "#1a1a2e", fontFamily: "var(--font-heading)",
              boxShadow: "0 8px 40px rgba(255,203,5,0.5)", transition: "transform 0.3s",
            }}>
            Register Now ⚡
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          style={{ marginTop: "24px", fontSize: "13px", color: "rgba(255,255,255,0.35)" }}
        >
          Free entry • {siteConfig.date} • {siteConfig.venue.split(",")[1]?.trim()}
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cta-pokemon { display: none !important; }
        }
      `}</style>
    </section>
  );
}
