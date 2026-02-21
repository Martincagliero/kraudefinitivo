"use client";

import Header from "@/components/Header";
import BotanicosHero from "@/components/BotanicosHero";
import BotanicosCarousel from "@/components/BotanicosCarousel";
import Contact from "@/components/Contact";
import LogoWatermark from "@/components/LogoWatermark";

export default function BotanicosPage() {
  return (
    <div className="relative min-h-screen bg-kraut-dark">
      {/* Logo watermark */}
      <LogoWatermark />

      {/* Sticky header */}
      <Header />

      {/* Main sections */}
      <main className="relative z-20">
        <BotanicosHero />
        <BotanicosCarousel />
        <Contact />
      </main>
    </div>
  );
}
