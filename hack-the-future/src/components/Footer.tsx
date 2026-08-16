"use client";

import { motion } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", icon: "𝕏", href: "#" },
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "Discord", icon: "💬", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
  ];

  return (
    <footer style={{
      position: "relative", paddingTop: "80px", paddingBottom: "32px",
      overflow: "hidden", background: "#0f0f1e",
    }}>
      {/* Top gradient bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: "linear-gradient(90deg, #2A75BB, #FFCB05, #EC1C24, #78C850, #30A7D7)",
      }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px", marginBottom: "64px" }}>
          {/* Brand */}
          <div>
            <Image src="/images/logo.png" alt="Hack The Future 3.0" width={180} height={50}
              style={{ marginBottom: "16px", opacity: 0.85, height: "48px", width: "auto" }} />
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.8, marginBottom: "24px" }}>
              The ultimate Pokémon-themed hackathon. Build, battle, and evolve your skills.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} aria-label={social.name}
                  style={{
                    width: "40px", height: "40px", borderRadius: "12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "18px", textDecoration: "none",
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.3s",
                  }}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", color: "white", fontWeight: 700, marginBottom: "24px", fontSize: "16px" }}>
              Quick Links
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", textDecoration: "none", padding: "4px 0", transition: "color 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#FFCB05"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", color: "white", fontWeight: 700, marginBottom: "24px", fontSize: "16px" }}>
              Contact HQ
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>
              <p>📧 hello@hackthefuture.dev</p>
              <p>📍 {siteConfig.venue}</p>
              <p>📅 {siteConfig.date}</p>
            </div>
            {/* Arena Status */}
            <motion.div
              style={{
                marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "8px 16px", borderRadius: "50px",
                background: "rgba(120,200,80,0.08)", border: "1px solid rgba(120,200,80,0.15)",
              }}
            >
              <motion.div
                style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#78C850" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#78C850" }}>
                PokéCenter Status: ONLINE
              </span>
            </motion.div>
          </div>
        </div>

        {/* Chansey */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <Image src="/pokemon/chansey.png" alt="Chansey" width={44} height={44} style={{ opacity: 0.15 }} />
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px",
        }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            © 2026 Hack The Future 3.0. Made with ❤️ and Rare Candies.
          </p>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.15)" }}>
            Not affiliated with Nintendo, Game Freak, or The Pokémon Company.
          </p>
        </div>
      </div>
    </footer>
  );
}
