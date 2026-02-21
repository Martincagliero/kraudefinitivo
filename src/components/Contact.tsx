"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
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

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
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
    <section
      id="contact"
      ref={ref}
      className="relative w-full py-28 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Premium background with gradient and vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-kraut-dark via-[#0d1a0f] to-[#0a0f0c]" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient" style={{
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)'
      }} />
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.5"/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Content */}
      <motion.div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Decorative top line */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-8 sm:mb-10"
        >
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-kraut-orange" />
          <span className="text-xs sm:text-sm tracking-widest text-kraut-orange/80 font-serif">
            CONTACTO
          </span>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-kraut-orange" />
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={titleVariants}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-kraut-white mb-6 sm:mb-8 leading-tight"
        >
          Hablemos de <span className="text-kraut-orange">licor</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-lg sm:text-xl text-kraut-white/75 mb-10 sm:mb-12 tracking-wide leading-relaxed max-w-2xl mx-auto"
        >
          Estamos en Santa Fe, Argentina. Si querés conocer más sobre Krautermeister o tenés alguna pregunta, nos encantaría escucharte.
        </motion.p>

        {/* Elegant divider */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-14 sm:mb-16"
        >
          <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent via-kraut-orange to-transparent opacity-60" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center"
        >
          {/* Instagram Button */}
          <motion.a
            href="https://www.instagram.com/krautermeister_/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full sm:w-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <button 
              className="relative w-full sm:w-auto overflow-hidden px-8 sm:px-10 py-3.5 sm:py-4 border border-kraut-orange/60 text-kraut-orange font-serif font-semibold tracking-widest uppercase text-xs sm:text-sm transition-colors duration-300"
            >
              {/* Animated fill from left */}
              <motion.div
                className="absolute inset-0 bg-kraut-orange"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ zIndex: -1 }}
              />
              
              {/* Icon */}
              <span className="flex items-center justify-center gap-3">
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
                <span className="group-hover:text-kraut-white transition-colors duration-300">
                  INSTAGRAM
                </span>
              </span>
            </button>
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/5493425453564"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full sm:w-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <button 
              className="relative w-full sm:w-auto overflow-hidden px-8 sm:px-10 py-3.5 sm:py-4 border border-kraut-orange/60 text-kraut-orange font-serif font-semibold tracking-widest uppercase text-xs sm:text-sm transition-colors duration-300"
            >
              {/* Animated fill from left */}
              <motion.div
                className="absolute inset-0 bg-kraut-orange"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ zIndex: -1 }}
              />
              
              {/* Icon */}
              <span className="flex items-center justify-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="group-hover:text-kraut-white transition-colors duration-300">
                  WHATSAPP
                </span>
              </span>
            </button>
          </motion.a>
        </motion.div>

        {/* Footer note */}
        <motion.p
          variants={itemVariants}
          className="mt-20 sm:mt-24 font-sans text-xs sm:text-sm text-kraut-white/40 tracking-widest"
        >
          © 2024 KRAUTERMEISTER. Todos los derechos reservados.
        </motion.p>
      </motion.div>
    </section>
  );
}
