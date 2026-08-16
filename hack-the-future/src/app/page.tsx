import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import PokemonMarquee from "@/components/PokemonMarquee";
import Tracks from "@/components/Tracks";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import GymLeaders from "@/components/GymLeaders";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <PokemonMarquee />
        <Tracks />
        <Timeline />
        <Prizes />
        <GymLeaders />
        <PokemonMarquee />
        <Sponsors />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
