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
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "20px 0",
        background: "rgba(42,117,187,0.03)",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          gap: "48px",
          width: "fit-content",
        }}
      >
        {allPokemon.map((name, i) => (
          <div
            key={`${name}-${i}`}
            style={{ flexShrink: 0 }}
            className="marquee-item"
          >
            <Image
              src={`/pokemon/${name}.png`}
              alt={name}
              width={50}
              height={50}
              style={{
                opacity: 0.15,
                transition: "all 0.3s ease",
                filter: "grayscale(100%)",
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-item:hover img {
          opacity: 0.8 !important;
          filter: grayscale(0%) !important;
          transform: scale(1.3);
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
