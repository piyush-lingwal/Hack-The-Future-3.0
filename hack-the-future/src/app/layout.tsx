import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hack The Future 3.0 — The Ultimate Pokémon-Themed Hackathon",
  description:
    "Join 500+ trainers for 36 hours of intense coding, mentorship, and evolution. Choose your type, battle in the arena, and win over ₹1 Lakh in prizes. September 2026.",
  keywords: [
    "hackathon",
    "pokemon",
    "coding",
    "technology",
    "hack the future",
    "programming",
    "competition",
  ],
  openGraph: {
    title: "Hack The Future 3.0 — The Ultimate Pokémon-Themed Hackathon",
    description:
      "Train. Build. Battle. Evolve. Join 500+ trainers for 36 hours of intense coding and win over ₹1 Lakh in prizes.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
