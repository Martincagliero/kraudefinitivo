"use client";

import { motion } from "framer-motion";

export default function BotanicosHero() {
  return (
    <section className="relative w-full h-screen min-h-screen flex items-center justify-center bg-kraut-dark overflow-hidden">
      {/* Dark background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-kraut-dark via-kraut-dark to-black opacity-80" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-kraut-white leading-tight tracking-wider mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            LOS BOTÁNICOS
          </motion.h1>

          <motion.p
            className="font-serif text-xl sm:text-2xl md:text-3xl text-kraut-white/70 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            La esencia de la naturaleza en cada destilación
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-kraut-orange"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
