"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function InstagramSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#08090a]">
      {/* Deep dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0c] via-[#08090a] to-black" />
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-12 mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" /%3E%3C/filter%3E%3Crect width="200" height="200" filter="url(%23noise)" opacity="0.6"/%3E%3C/svg%3E")',
          backgroundSize: '180px 180px',
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.6) 100%)'
        }} 
      />

      {/* Content */}
      <motion.div
        ref={ref}
        className="relative z-10 max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Logo circle */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8 sm:mb-10 mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44"
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kraut-orange/20 to-transparent blur-lg" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-kraut-orange/40 bg-kraut-dark/80 backdrop-blur-sm p-6 sm:p-8">
            <Image
              src="/logo.png"
              alt="Krautermeister Logo"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </motion.div>

        {/* Brand name */}
        <motion.h3
          variants={itemVariants}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-kraut-white mb-3 sm:mb-4 tracking-widest uppercase"
        >
          Krautermeister
        </motion.h3>

        {/* Instagram handle */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-lg sm:text-xl md:text-2xl text-kraut-orange/80 mb-10 sm:mb-12 tracking-wide"
        >
          @krautermeister_
        </motion.p>

        {/* Primary CTA - Instagram */}
        <motion.div variants={itemVariants}>
          <motion.a
            href="https://www.instagram.com/krautermeister_/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="relative overflow-hidden px-10 sm:px-12 md:px-14 py-4 sm:py-4.5 border border-kraut-orange/70 text-kraut-orange font-serif font-semibold tracking-[0.15em] uppercase text-xs sm:text-sm transition-colors duration-300">
              {/* Animated fill from left */}
              <motion.div
                className="absolute inset-0 bg-kraut-orange"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ zIndex: -1 }}
              />
              
              {/* Button content */}
              <span className="flex items-center justify-center gap-3 group-hover:text-kraut-white transition-colors duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37Z" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
                <span>Encontranos en Instagram</span>
              </span>
            </button>
          </motion.a>
        </motion.div>

        {/* Elegant divider */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center my-8 sm:my-10"
        >
          <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent via-kraut-white/20 to-transparent" />
        </motion.div>

        {/* Secondary CTA - WhatsApp */}
        <motion.div variants={itemVariants}>
          <motion.a
            href="https://wa.me/5493425453564"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="relative overflow-hidden px-8 sm:px-10 py-3 sm:py-3.5 border border-kraut-white/30 text-kraut-white/80 font-serif font-medium tracking-[0.12em] uppercase text-xs transition-all duration-300 hover:border-kraut-white/50 hover:text-kraut-white">
              <span className="flex items-center justify-center gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>Contactar por WhatsApp</span>
              </span>
            </button>
          </motion.a>
        </motion.div>

        {/* Location */}
        <motion.p
          variants={itemVariants}
          className="mt-8 sm:mt-10 font-sans text-base sm:text-lg text-kraut-white/70 tracking-wide"
        >
          Santa Fe, Argentina
        </motion.p>

        {/* Footer copyright */}
        <motion.p
          variants={itemVariants}
          className="mt-16 sm:mt-20 md:mt-24 font-sans text-xs sm:text-sm text-kraut-white/40 tracking-widest"
        >
          © 2024 KRAUTERMEISTER. Todos los derechos reservados.
        </motion.p>
      </motion.div>
    </section>
  );
}
