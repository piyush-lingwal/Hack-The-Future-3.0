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
        borderRadius: "16px", overflow: "hidden", marginBottom: "12px",
        background: isOpen ? "linear-gradient(135deg, #fff, #f0f7ff)" : "white",
        border: isOpen ? "1px solid rgba(42,117,187,0.15)" : "1px solid rgba(0,0,0,0.05)",
        boxShadow: isOpen ? "0 4px 20px rgba(42,117,187,0.06)" : "0 2px 8px rgba(0,0,0,0.02)",
      }}
    >
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`faq-body-${index}`}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 24px", textAlign: "left", background: "none", border: "none",
          cursor: "pointer", transition: "background 0.2s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{
            flexShrink: 0, width: "32px", height: "32px", borderRadius: "10px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "11px", fontWeight: 700,
            background: isOpen ? "#2A75BB" : "rgba(42,117,187,0.08)",
            color: isOpen ? "white" : "#2A75BB",
          }}>
            Q{index + 1}
          </span>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "15px", color: "#1a1a2e" }}>
            {question}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0, marginLeft: "16px", fontSize: "16px", color: "#2A75BB" }}
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
            <div style={{ padding: "0 24px 20px 68px", fontSize: "14px", color: "#666", lineHeight: 1.8 }}>
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
    <section id="faq" style={{ padding: "100px 0", position: "relative", overflow: "hidden", background: "white" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span style={{
            display: "inline-block", padding: "6px 20px", borderRadius: "50px",
            fontSize: "13px", fontWeight: 700, marginBottom: "16px",
            background: "rgba(112,88,152,0.08)", color: "#705898",
          }}>
            🔬 PROFESSOR&apos;S LAB
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#1a1a2e", marginBottom: "16px" }}>
            Got Questions?
          </h2>
          <p style={{ fontSize: "18px", color: "#666", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
            The Professor has answers. Step into the lab!
          </p>
        </motion.div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "48px", maxWidth: "900px", margin: "0 auto" }}>
          {/* Pokemon decoration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="faq-pokemon"
            style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", position: "sticky", top: "120px" }}
          >
            <Image src="/pokemon/exeggutor.png" alt="Exeggutor" width={130} height={130}
              className="float-animation" style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))" }} />
            <Image src="/pokemon/slowpoke.png" alt="Slowpoke" width={100} height={100}
              className="float-animation-reverse" style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))" }} />
          </motion.div>

          {/* FAQ items */}
          <div style={{ flex: 1, width: "100%" }}>
            {faq.map((item, i) => (
              <AccordionItem key={i} question={item.question} answer={item.answer} index={i}
                isOpen={openIndex === i} toggle={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-pokemon { display: none !important; }
        }
      `}</style>
    </section>
  );
}
