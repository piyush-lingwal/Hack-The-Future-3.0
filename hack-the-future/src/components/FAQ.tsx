"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faq } from "@/lib/data";
import Image from "next/image";

function AccordionItem({ question, answer, index, isOpen, toggle }: {
  question: string; answer: string; index: number; isOpen: boolean; toggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        marginBottom: "10px",
        background: isOpen ? "rgba(112,88,152,0.12)" : "rgba(255,255,255,0.03)",
        border: isOpen ? "1px solid rgba(112,88,152,0.35)" : "1px solid rgba(255,255,255,0.06)",
        boxShadow: isOpen ? "0 4px 30px rgba(112,88,152,0.15), 0 0 0 1px rgba(112,88,152,0.2)" : "none",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`faq-body-${index}`}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 22px",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {/* Q badge */}
          <span style={{
            flexShrink: 0,
            width: "32px",
            height: "32px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "11px",
            fontWeight: 700,
            background: isOpen ? "#705898" : "rgba(112,88,152,0.15)",
            color: isOpen ? "white" : "#705898",
            boxShadow: isOpen ? "0 4px 14px rgba(112,88,152,0.5)" : "none",
            transition: "all 0.3s",
          }}>
            Q{index + 1}
          </span>
          <span style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "15px",
            color: isOpen ? "white" : "rgba(255,255,255,0.7)",
            transition: "color 0.3s",
          }}>
            {question}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            flexShrink: 0,
            marginLeft: "16px",
            fontSize: "16px",
            color: isOpen ? "#705898" : "rgba(255,255,255,0.3)",
          }}
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-body-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 22px 18px 68px", fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="cyber-grid"
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #0a0a18 0%, #0f0f24 50%, #080814 100%)",
      }}
    >
      {/* Purple ambient glow */}
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: "500px", height: "300px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(112,88,152,0.08), transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="section-pill" style={{ background: "rgba(112,88,152,0.12)", color: "#a07acc", border: "1px solid rgba(112,88,152,0.25)" }}>
            🔬 PROFESSOR&apos;S LAB
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: "white", marginBottom: "16px" }}>
            Got Questions?
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
            The Professor has answers. Step into the lab!
          </p>
        </motion.div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "56px", maxWidth: "900px", margin: "0 auto" }}>
          {/* Pokémon decoration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="faq-pokemon"
            style={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              position: "sticky",
              top: "120px",
            }}
          >
            <Image src="/pokemon/exeggutor.png" alt="Exeggutor" width={120} height={120}
              className="float-animation"
              style={{ filter: "drop-shadow(0 8px 24px rgba(112,88,152,0.4))" }}
            />
            <Image src="/pokemon/slowpoke.png" alt="Slowpoke" width={90} height={90}
              className="float-animation-reverse"
              style={{ filter: "drop-shadow(0 8px 20px rgba(248,88,136,0.3))" }}
            />
          </motion.div>

          {/* FAQ items */}
          <div style={{ flex: 1, width: "100%" }}>
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                question={item.question}
                answer={item.answer}
                index={i}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .faq-pokemon { display: none !important; } }
      `}</style>
    </section>
  );
}
