"use client";

import { motion } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    { name: "Twitter / X", icon: "𝕏", href: "#", hoverColor: "#1DA1F2" },
    { name: "Instagram",   icon: "📸", href: "#", hoverColor: "#E1306C" },
    { name: "Discord",     icon: "💬", href: "#", hoverColor: "#5865F2" },
    { name: "LinkedIn",    icon: "💼", href: "#", hoverColor: "#0A66C2" },
  ];

  return (
    <footer style={{
      position: "relative",
      paddingTop: "80px",
      paddingBottom: "32px",
      overflow: "hidden",
      background: "#06060f",
    }}>
      {/* Rainbow top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: "linear-gradient(90deg, #2A75BB, #FFCB05, #EC1C24, #78C850, #30A7D7, #705898)",
        boxShadow: "0 0 20px rgba(255,203,5,0.25)",
      }} />

      {/* Pokéball watermark */}
      <div style={{
        position: "absolute", top: "50%", right: "-80px",
        transform: "translateY(-50%)",
        width: "300px", height: "300px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.02)",
        background: "radial-gradient(circle, rgba(255,203,5,0.015), transparent)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px", marginBottom: "64px" }}>

          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Hack The Future 3.0"
              width={180}
              height={50}
              style={{ marginBottom: "16px", opacity: 0.9, height: "44px", width: "auto", filter: "drop-shadow(0 2px 10px rgba(255,203,5,0.2))" }}
            />
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px", lineHeight: 1.85, marginBottom: "24px" }}>
              The ultimate Pokémon-themed hackathon. Build, battle, and evolve your skills.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    textDecoration: "none",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: "background 0.3s, box-shadow 0.3s, border-color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${social.hoverColor}18`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${social.hoverColor}40`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 16px ${social.hoverColor}30`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", color: "white", fontWeight: 700, marginBottom: "22px", fontSize: "16px" }}>
              Quick Links
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px", textDecoration: "none", padding: "4px 0", transition: "color 0.25s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#FFCB05"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", color: "white", fontWeight: 700, marginBottom: "22px", fontSize: "16px" }}>
              Contact HQ
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "rgba(255,255,255,0.35)" }}>
              <p>📧 hello@hackthefuture.dev</p>
              <p>📍 {siteConfig.venue}</p>
              <p>📅 {siteConfig.date}</p>
            </div>

            {/* PokéCenter status */}
            <motion.div
              style={{
                marginTop: "20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "50px",
                background: "rgba(120,200,80,0.07)",
                border: "1px solid rgba(120,200,80,0.18)",
              }}
            >
              <motion.div
                style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#78C850", boxShadow: "0 0 6px #78C850" }}
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#78C850" }}>
                PokéCenter Status: ONLINE
              </span>
            </motion.div>
          </div>
        </div>

        {/* Chansey Easter Egg */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
          <motion.div
            className="float-animation-delayed"
            whileHover={{ scale: 1.3, rotate: 10 }}
          >
            <Image
              src="/pokemon/chansey.png"
              alt="Chansey — have a good hack!"
              width={48}
              height={48}
              style={{ opacity: 0.35, filter: "drop-shadow(0 4px 12px rgba(248,88,136,0.3))" }}
            />
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
            © 2026 Hack The Future 3.0. Made with ❤️ and Rare Candies.
          </p>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.12)" }}>
            Not affiliated with Nintendo, Game Freak, or The Pokémon Company.
          </p>
        </div>
      </div>
    </footer>
  );
}
