"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function BottleShowcase() {
  const sectionRef = useRef(null);

  return (
    <section
      id="bottle"
      ref={sectionRef}
      className="section relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Background image overlay - lighter for visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-kraut-dark/15 via-kraut-dark/20 to-kraut-dark/25" />

      {/* Subtle orange radial glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 blur-3xl" style={{
        background: 'radial-gradient(circle, #d4855a 0%, transparent 70%)'
      }} />

      <motion.div
        className="relative z-10 w-full max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {/* Bottle video with transparent background */}
        <div
          className="relative w-full max-w-lg h-56 sm:h-72 md:h-96 mb-8 sm:mb-12 md:mb-16 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center mx-auto"
          style={{
            background: 'transparent',
          }}
        >
          <video
            className="w-full h-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            poster="/bottle-video.jpg"
          >
            <source src="/output_clean.webm" type="video/webm" />
            <source src="/bottle-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Main phrase */}
        <motion.div
          className="text-center px-4 sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <h2 className="font-medieval text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-kraut-white leading-tight tracking-wide">
            La botella como amuleto.
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
