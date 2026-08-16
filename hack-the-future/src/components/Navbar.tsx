"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";
import Image from "next/image";

const leftLinks = navLinks.slice(0, 5);
const rightLinks = navLinks.slice(5);

const linkColors: Record<string, string> = {
  "#home": "#FFCB05",
  "#about": "#2A75BB",
  "#tracks": "#78C850",
  "#timeline": "#F27C00",
  "#prizes": "#FFCB05",
  "#mentors": "#F85888",
  "#sponsors": "#30A7D7",
  "#faq": "#705898",
};

function Pokeball({ size = 52 }: { size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      position: "relative", overflow: "hidden",
      border: "3px solid rgba(255,255,255,0.2)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4), 0 0 15px rgba(236,28,36,0.12), inset 0 -2px 4px rgba(0,0,0,0.25), inset 0 2px 4px rgba(255,255,255,0.15)",
      flexShrink: 0,
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(180deg, #f03040, #CC1820)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(180deg, #e8e8e8, #fff)" }} />
      <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "4px", background: "#2a2a2a", transform: "translateY(-50%)", zIndex: 2 }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: size * 0.28, height: size * 0.28, borderRadius: "50%",
        background: "radial-gradient(circle at 40% 40%, #fff, #ddd)",
        border: "3px solid #2a2a2a", zIndex: 3,
        boxShadow: "0 0 8px rgba(255,255,255,0.4)",
      }} />
      <div style={{
        position: "absolute", top: "12%", left: "20%",
        width: size * 0.16, height: size * 0.1, borderRadius: "50%",
        background: "rgba(255,255,255,0.4)", filter: "blur(1px)", zIndex: 4,
      }} />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLink = (link: { href: string; label: string }, align: "left" | "right") => {
    const typeColor = linkColors[link.href] || "#FFCB05";
    const isHovered = hoveredLink === link.href;
    return (
      <a
        key={link.href}
        href={link.href}
        onMouseEnter={() => setHoveredLink(link.href)}
        onMouseLeave={() => setHoveredLink(null)}
        style={{
          position: "relative", padding: "8px 0", fontSize: "13px",
          fontWeight: isHovered ? 600 : 500,
          color: isHovered ? "white" : "rgba(255,255,255,0.5)",
          textDecoration: "none", transition: "all 0.3s ease",
          fontFamily: "var(--font-body)", whiteSpace: "nowrap", letterSpacing: "0.3px",
        }}
      >
        {link.label}
        <motion.div
          style={{
            position: "absolute", bottom: "2px", left: 0, right: 0,
            height: "2px", borderRadius: "2px", background: typeColor,
            boxShadow: `0 0 8px ${typeColor}50`,
            transformOrigin: align === "left" ? "right" : "left",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      </a>
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(10,10,22,0.97)" : "rgba(10,10,22,0.4)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Rainbow accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, #EC1C24, #F27C00, #FFCB05, #78C850, #2A75BB, #705898)",
          opacity: scrolled ? 0.7 : 0.3, transition: "opacity 0.4s ease",
        }} />

        {/* Desktop */}
        <div className="desktop-nav" style={{
          maxWidth: "1300px", margin: "0 auto", padding: "0 32px",
          display: "flex", alignItems: "center", height: "68px",
        }}>

          {/* Left links */}
          <div style={{
            display: "flex", alignItems: "center", gap: "24px",
            flex: 1, justifyContent: "flex-end", paddingRight: "36px",
          }}>
            {/* Logo slides in on scroll — far left */}
            <AnimatePresence>
              {scrolled && (
                <motion.a
                  href="#home"
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  style={{ textDecoration: "none", marginRight: "auto", flexShrink: 0 }}
                >
                  <Image src="/images/logo.png" alt="HTF" width={130} height={38}
                    style={{ height: "32px", width: "auto", filter: "drop-shadow(0 2px 6px rgba(255,203,5,0.2))" }} priority />
                </motion.a>
              )}
            </AnimatePresence>
            {leftLinks.map((l) => renderNavLink(l, "left"))}
          </div>

          {/* Center Pokéball */}
          <a href="#home" style={{ textDecoration: "none", flexShrink: 0, position: "relative" }}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Pokeball size={48} />
            </motion.div>
          </a>

          {/* Right links + CTA */}
          <div style={{
            display: "flex", alignItems: "center", gap: "24px",
            flex: 1, justifyContent: "flex-start", paddingLeft: "36px",
          }}>
            {rightLinks.map((l) => renderNavLink(l, "right"))}
            <a
              href={siteConfig.registrationUrl}
              style={{
                marginLeft: "auto", padding: "10px 24px", borderRadius: "50px",
                fontWeight: 700, fontSize: "13px", color: "#1a1a2e",
                fontFamily: "var(--font-heading)", textDecoration: "none",
                background: "linear-gradient(135deg, #FFCB05, #FFD700)",
                boxShadow: "0 2px 16px rgba(255,203,5,0.25)",
                transition: "all 0.3s ease", whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(255,203,5,0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(255,203,5,0.25)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Register ⚡
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className="mobile-nav-bar" style={{
          display: "none", alignItems: "center", justifyContent: "space-between",
          padding: "0 20px", height: "60px",
        }}>
          <AnimatePresence>
            {scrolled ? (
              <motion.a href="#home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ textDecoration: "none" }}>
                <Image src="/images/logo.png" alt="HTF" width={120} height={35}
                  style={{ height: "28px", width: "auto" }} priority />
              </motion.a>
            ) : (
              <motion.a href="#home" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                style={{ textDecoration: "none" }}>
                <Pokeball size={34} />
              </motion.a>
            )}
          </AnimatePresence>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu"
            style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "8px", background: "none", border: "none", cursor: "pointer" }}>
            {[0, 1, 2].map((i) => (
              <motion.span key={i}
                animate={mobileOpen ? (i === 0 ? { rotate: 45, y: 7 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -7 }) : { rotate: 0, y: 0, opacity: 1 }}
                style={{ display: "block", width: i === 1 ? "16px" : "22px", height: "2px", background: "white", borderRadius: "2px", marginLeft: i === 1 ? "6px" : "0" }} />
            ))}
          </button>
        </div>

        {/* Scanner */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", overflow: "hidden" }}>
          <motion.div
            style={{ width: "100px", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,203,5,0.4), transparent)" }}
            animate={{ x: ["-100px", "100vw"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          />
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 45 }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
              onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: "absolute", left: 0, right: 0, top: 0,
                background: "linear-gradient(180deg, #0a0a16, #12122a)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                padding: "72px 24px 28px", boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #EC1C24, #FFCB05, #78C850, #2A75BB, #705898)" }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 12px", marginBottom: "16px" }}>
                {navLinks.map((link, i) => {
                  const typeColor = linkColors[link.href] || "#FFCB05";
                  return (
                    <motion.a key={link.href} href={link.href}
                      initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        padding: "12px 14px", borderRadius: "10px", fontSize: "14px", fontWeight: 500,
                        color: "rgba(255,255,255,0.6)", textDecoration: "none", fontFamily: "var(--font-body)",
                        transition: "all 0.2s", borderLeft: "3px solid transparent",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.borderLeft = `3px solid ${typeColor}`; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.borderLeft = "3px solid transparent"; }}>
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
              <motion.a href={siteConfig.registrationUrl} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", padding: "14px", borderRadius: "12px", fontWeight: 700,
                  textAlign: "center", textDecoration: "none", background: "linear-gradient(135deg, #FFCB05, #FFD700)",
                  color: "#1a1a2e", fontFamily: "var(--font-heading)", fontSize: "14px", boxShadow: "0 4px 20px rgba(255,203,5,0.2)",
                }}>
                Register Now ⚡
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-bar { display: flex !important; }
        }
      `}</style>
    </>
  );
}
