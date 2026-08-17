"use client";

import Image from "next/image";

const pokemonList = [
  "bulbasaur", "charmander", "psyduck", "pidgey", "rattata", "caterpie",
  "weedle", "geodude", "zubat", "meowth", "mankey", "growlithe",
  "ponyta", "cubone", "staryu", "diglett", "oddish", "paras",
];

export default function PokemonMarquee() {
  const allPokemon = [...pokemonList, ...pokemonList];

  return (
    <div style={{ position: "relative", overflow: "hidden", padding: "24px 0", background: "#0a0a18", borderTop: "1px solid rgba(255,203,5,0.08)", borderBottom: "1px solid rgba(255,203,5,0.08)" }}>
      {/* Left/right fade edges */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(90deg, #0a0a18, transparent)", zIndex: 5, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(270deg, #0a0a18, transparent)", zIndex: 5, pointerEvents: "none" }} />

      {/* Row 1 — scrolls left */}
      <div className="marquee-track" style={{ display: "flex", whiteSpace: "nowrap", gap: "40px", width: "fit-content", marginBottom: "16px" }}>
        {allPokemon.map((name, i) => (
          <div key={`${name}-${i}`} className="marquee-item" style={{ flexShrink: 0 }}>
            <Image
              src={`/pokemon/${name}.png`}
              alt={name}
              width={60}
              height={60}
              style={{ opacity: 0.65, transition: "all 0.35s ease", filter: "drop-shadow(0 2px 8px rgba(255,203,5,0.15))" }}
            />
          </div>
        ))}
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-track-reverse" style={{ display: "flex", whiteSpace: "nowrap", gap: "40px", width: "fit-content" }}>
        {[...allPokemon].reverse().map((name, i) => (
          <div key={`r-${name}-${i}`} className="marquee-item" style={{ flexShrink: 0 }}>
            <Image
              src={`/pokemon/${name}.png`}
              alt={name}
              width={54}
              height={54}
              style={{ opacity: 0.4, transition: "all 0.35s ease", filter: "drop-shadow(0 2px 6px rgba(42,117,187,0.2))" }}
            />
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track          { animation: marqueeLeft  30s linear infinite; }
        .marquee-track-reverse  { animation: marqueeRight 24s linear infinite; }
        .marquee-track:hover,
        .marquee-track-reverse:hover { animation-play-state: paused; }
        .marquee-item:hover img {
          opacity: 1 !important;
          transform: scale(1.25) translateY(-4px);
          filter: drop-shadow(0 6px 20px rgba(255,203,5,0.5)) !important;
        }
        @keyframes marqueeLeft  { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>
    </div>
  );
}
