"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PremiumCarousel from "@/components/PremiumCarousel";
import BottleShowcase from "@/components/BottleShowcase";
import InstagramSection from "@/components/InstagramSection";
import Contact from "@/components/Contact";
import LogoWatermark from "@/components/LogoWatermark";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-kraut-dark">
      {/* Logo watermark */}
      <LogoWatermark />

      {/* Sticky header */}
      <Header />

      {/* Main sections */}
      <main className="relative z-20">
        <Hero />
        <BottleShowcase />
        <PremiumCarousel />
        <About />
        <InstagramSection />
        <Contact />
      </main>
    </div>
  );
}
