"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0a0a1a",
        paddingTop: "80px",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.7,
        }}
      >
        <source src="/HeroVideo.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "linear-gradient(180deg, rgba(10,10,26,0.25) 0%, rgba(10,10,26,0.1) 40%, rgba(10,10,26,0.3) 80%, rgba(10,10,26,0.7) 100%)",
        }}
      />

      {/* Subtle colored overlay to blend with brand */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "linear-gradient(135deg, rgba(42,117,187,0.1) 0%, transparent 50%, rgba(255,203,5,0.05) 100%)",
        }}
      />

      {/* Floating dots */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3 }}>
        {[
          { color: "#FFCB05", top: "20%", left: "10%", dur: 5 },
          { color: "#2A75BB", top: "45%", left: "25%", dur: 6 },
          { color: "#EC1C24", top: "65%", left: "50%", dur: 4.5 },
          { color: "#78C850", top: "30%", left: "75%", dur: 7 },
          { color: "#F27C00", top: "55%", left: "85%", dur: 5.5 },
          { color: "#30A7D7", top: "75%", left: "40%", dur: 6.5 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: dot.color,
              top: dot.top,
              left: dot.left,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: dot.dur,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

          {/* Center Content */}
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "680px",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo — overlapping into navbar zone */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
              style={{
                marginBottom: "16px",
                marginTop: "-20px",
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Hack The Future 3.0"
                width={900}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "780px",
                  height: "auto",
                  filter: "drop-shadow(0 10px 40px rgba(255,203,5,0.35))",
                }}
                priority
              />
            </motion.div>

            {/* Date badge — below logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                marginTop: "8px",
                marginBottom: "24px",
                padding: "8px 24px",
                borderRadius: "50px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.12)",
                fontFamily: "var(--font-body)",
                backdropFilter: "blur(10px)",
              }}
            >
              📅 {siteConfig.date} • {siteConfig.venue.split(",")[1]?.trim()}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                fontSize: "clamp(14px, 2vw, 22px)",
                fontWeight: 700,
                letterSpacing: "0.3em",
                marginBottom: "12px",
                fontFamily: "var(--font-heading)",
                color: "#FFCB05",
                textShadow: "0 2px 20px rgba(255,203,5,0.3)",
              }}
            >
              {siteConfig.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "36px",
                lineHeight: 1.8,
                maxWidth: "440px",
              }}
            >
              The ultimate Pokémon-themed hackathon. 36 hours of coding, mentorship, and evolution.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}
            >
              <a
                href={siteConfig.registrationUrl}
                className="pulse-glow"
                style={{
                  padding: "16px 36px",
                  borderRadius: "50px",
                  fontWeight: 700,
                  fontSize: "18px",
                  background: "linear-gradient(135deg, #FFCB05, #FFD700)",
                  color: "#1a1a2e",
                  fontFamily: "var(--font-heading)",
                  boxShadow: "0 8px 40px rgba(255,203,5,0.4)",
                  textDecoration: "none",
                  transition: "transform 0.3s",
                }}
              >
                Enter the Arena ⚡
              </a>
              <a
                href="#about"
                style={{
                  padding: "16px 36px",
                  borderRadius: "50px",
                  fontWeight: 700,
                  fontSize: "18px",
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.9)",
                  fontFamily: "var(--font-heading)",
                  border: "2px solid rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  backdropFilter: "blur(10px)",
                }}
              >
                Explore the Journey 🗺️
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>




    </section>
  );
}
