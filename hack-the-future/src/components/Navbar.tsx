"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";
import Image from "next/image";

const leftLinks = navLinks.slice(0, 4);
const rightLinks = navLinks.slice(4);

const linkColors: Record<string, string> = {
  "#home":     "#FFCB05",
  "#about":    "#30A7D7",
  "#tracks":   "#78C850",
  "#timeline": "#F27C00",
  "#prizes":   "#FFCB05",
  "#mentors":  "#F85888",
  "#sponsors": "#30A7D7",
  "#faq":      "#705898",
};

/* ── Pokéball SVG ── */
function Pokeball({ size = 44, spin = false }: { size?: number; spin?: boolean }) {
  const r = size / 2;
  return (
    <motion.div
      style={{ width: size, height: size, position: "relative", flexShrink: 0 }}
      animate={spin ? { rotate: 360 } : { rotate: 0 }}
      transition={spin ? { duration: 1.2, ease: "easeInOut" } : { duration: 0.4 }}
    >
      <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" fill="white" stroke="#1a1a2e" strokeWidth="1.5"/>
        {/* top half - red */}
        <path d="M1 22 A21 21 0 0 1 43 22 Z" fill="#E63946"/>
        {/* divider */}
        <rect x="1" y="20.5" width="42" height="3" fill="#1a1a2e"/>
        {/* center circle */}
        <circle cx="22" cy="22" r="7" fill="#1a1a2e"/>
        <circle cx="22" cy="22" r="4.5" fill="white"/>
        {/* shine */}
        <ellipse cx="18" cy="13" rx="4" ry="2.5" fill="rgba(255,255,255,0.35)" transform="rotate(-20 18 13)"/>
      </svg>
    </motion.div>
  );
}

/* ── Single nav link ── */
function NavLink({
  link,
  align,
}: {
  link: { href: string; label: string };
  align: "left" | "right";
}) {
  const color = linkColors[link.href] ?? "#FFCB05";
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "6px 2px",
        fontSize: "13px",
        fontWeight: hovered ? 600 : 500,
        color: hovered ? "#ffffff" : "rgba(255,255,255,0.55)",
        textDecoration: "none",
        transition: "color 0.25s, font-weight 0.15s",
        fontFamily: "var(--font-body)",
        whiteSpace: "nowrap",
        letterSpacing: "0.2px",
      }}
    >
      {link.label}
      {/* underline indicator */}
      <motion.span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          borderRadius: "2px",
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          boxShadow: `0 0 8px ${color}80`,
          transformOrigin: align === "left" ? "right" : "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pokeballSpin, setPokeballSpin] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePokeballClick = () => {
    setPokeballSpin(true);
    setTimeout(() => setPokeballSpin(false), 1300);
  };

  return (
    <>
      {/* ─── Main Nav ─── */}
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
          background: scrolled
            ? "rgba(8, 8, 20, 0.96)"
            : "rgba(8, 8, 20, 0.45)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,203,5,0.12)"
            : "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled
            ? "0 4px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,203,5,0.08)"
            : "none",
        }}
      >
        {/* ── Rainbow type-bar (top) ── */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "2.5px",
          background: "linear-gradient(90deg, #EC1C24 0%, #F27C00 20%, #FFCB05 40%, #78C850 60%, #30A7D7 80%, #705898 100%)",
          opacity: scrolled ? 0.9 : 0.4,
          transition: "opacity 0.4s",
        }} />

        {/* ─── DESKTOP LAYOUT ─── */}
        <div
          className="htf-desktop-nav"
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "0 36px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}
        >
          {/* Left links */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px", flex: 1, justifyContent: "flex-end", paddingRight: "40px" }}>
            {/* Scrolled logo — far left */}
            <AnimatePresence>
              {scrolled && (
                <motion.a
                  href="#home"
                  initial={{ opacity: 0, x: -16, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -16, scale: 0.85 }}
                  transition={{ duration: 0.35 }}
                  style={{ textDecoration: "none", marginRight: "auto", flexShrink: 0 }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Hack The Future 3.0"
                    width={140}
                    height={42}
                    style={{ height: "34px", width: "auto", filter: "drop-shadow(0 2px 8px rgba(255,203,5,0.25))" }}
                    priority
                  />
                </motion.a>
              )}
            </AnimatePresence>

            {leftLinks.map((l) => (
              <NavLink key={l.href} link={l} align="left" />
            ))}
          </div>

          {/* Center — Pokéball logo */}
          <a href="#home" style={{ textDecoration: "none", flexShrink: 0 }} onClick={handlePokeballClick}>
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              style={{
                filter: "drop-shadow(0 0 12px rgba(230,57,70,0.4)) drop-shadow(0 4px 16px rgba(0,0,0,0.5))",
              }}
            >
              <Pokeball size={50} spin={pokeballSpin} />
            </motion.div>
          </a>

          {/* Right links + Register */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px", flex: 1, justifyContent: "flex-start", paddingLeft: "40px" }}>
            {rightLinks.map((l) => (
              <NavLink key={l.href} link={l} align="right" />
            ))}

            {/* Register CTA */}
            <a
              href={siteConfig.registrationUrl}
              className="htf-register-btn"
              style={{
                marginLeft: "auto",
                padding: "10px 26px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "13px",
                color: "#0a0a1a",
                fontFamily: "var(--font-heading)",
                textDecoration: "none",
                background: "linear-gradient(135deg, #FFCB05 0%, #FFE566 50%, #F7A800 100%)",
                backgroundSize: "200% 200%",
                boxShadow: "0 0 0 0 rgba(255,203,5,0)",
                transition: "box-shadow 0.3s, transform 0.2s, background-position 0.4s",
                whiteSpace: "nowrap",
                position: "relative",
                overflow: "hidden",
                letterSpacing: "0.3px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 28px rgba(255,203,5,0.55), 0 4px 20px rgba(0,0,0,0.3)";
                e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                e.currentTarget.style.backgroundPosition = "right center";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 0 rgba(255,203,5,0)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.backgroundPosition = "left center";
              }}
            >
              ⚡ Register Now
            </a>
          </div>
        </div>

        {/* ─── MOBILE TOP BAR ─── */}
        <div
          className="htf-mobile-bar"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 18px",
            height: "60px",
          }}
        >
          {/* Mobile logo / pokéball */}
          <AnimatePresence mode="wait">
            {scrolled ? (
              <motion.a
                key="logo"
                href="#home"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                style={{ textDecoration: "none" }}
              >
                <Image
                  src="/images/logo.png"
                  alt="HTF"
                  width={120}
                  height={36}
                  style={{ height: "28px", width: "auto" }}
                  priority
                />
              </motion.a>
            ) : (
              <motion.a
                key="ball"
                href="#home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ textDecoration: "none" }}
                onClick={handlePokeballClick}
              >
                <Pokeball size={36} spin={pokeballSpin} />
              </motion.a>
            )}
          </AnimatePresence>

          {/* Hamburger */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            whileTap={{ scale: 0.9 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "10px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  mobileOpen
                    ? i === 0 ? { rotate: 45, y: 7 }
                    : i === 1 ? { opacity: 0, scaleX: 0 }
                    : { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.22 }}
                style={{
                  display: "block",
                  width: i === 1 ? "16px" : "22px",
                  height: "2px",
                  background: mobileOpen ? "#FFCB05" : "rgba(255,255,255,0.8)",
                  borderRadius: "2px",
                  transformOrigin: "center",
                }}
              />
            ))}
          </motion.button>
        </div>

        {/* ── Scan-line shimmer ── */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", overflow: "hidden", pointerEvents: "none" }}>
          <motion.div
            style={{
              width: "120px",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(255,203,5,0.5), transparent)",
            }}
            animate={{ x: ["-120px", "100vw"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
          />
        </div>
      </motion.nav>

      {/* ─── MOBILE MENU DRAWER ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ position: "fixed", inset: 0, zIndex: 90 }}
          >
            {/* Backdrop */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(4px)",
              }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(180deg, #080814 0%, #0f0f22 100%)",
                borderBottom: "1px solid rgba(255,203,5,0.15)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
                paddingTop: "72px",
                paddingBottom: "24px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              {/* Rainbow top bar */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: "2.5px",
                background: "linear-gradient(90deg, #EC1C24, #F27C00, #FFCB05, #78C850, #30A7D7, #705898)",
              }} />

              {/* Nav links grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 12px", marginBottom: "20px" }}>
                {navLinks.map((link, i) => {
                  const color = linkColors[link.href] ?? "#FFCB05";
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "12px 16px",
                        borderRadius: "12px",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        fontFamily: "var(--font-body)",
                        border: "1px solid rgba(255,255,255,0.04)",
                        background: "rgba(255,255,255,0.02)",
                        transition: "all 0.2s",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.background = `${color}14`;
                        e.currentTarget.style.borderColor = `${color}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                      }}
                    >
                      {/* Left color dot */}
                      <span style={{
                        width: "6px", height: "6px",
                        borderRadius: "50%",
                        background: color,
                        flexShrink: 0,
                        boxShadow: `0 0 6px ${color}`,
                      }} />
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>

              {/* Register button */}
              <motion.a
                href={siteConfig.registrationUrl}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "16px",
                  borderRadius: "14px",
                  fontWeight: 700,
                  textAlign: "center",
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #FFCB05, #FFE14D, #F7A800)",
                  color: "#0a0a1a",
                  fontFamily: "var(--font-heading)",
                  fontSize: "15px",
                  boxShadow: "0 4px 24px rgba(255,203,5,0.3)",
                  letterSpacing: "0.3px",
                }}
              >
                ⚡ Register Now — It&apos;s Free!
              </motion.a>

              {/* Date/venue pill */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                style={{
                  textAlign: "center",
                  marginTop: "14px",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: "var(--font-body)",
                }}
              >
                📅 {siteConfig.date} &nbsp;•&nbsp; 📍 {siteConfig.venue.split(",")[0]}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Responsive styles ─── */}
      <style>{`
        @media (max-width: 1080px) {
          .htf-desktop-nav { display: none !important; }
          .htf-mobile-bar  { display: flex !important; }
        }
        .htf-register-btn::after {
          content: "";
          position: absolute;
          top: -50%; left: -60%;
          width: 40%; height: 200%;
          background: rgba(255,255,255,0.25);
          transform: skewX(-20deg);
          transition: left 0.5s ease;
          pointer-events: none;
        }
        .htf-register-btn:hover::after {
          left: 130%;
        }
      `}</style>
    </>
  );
}
