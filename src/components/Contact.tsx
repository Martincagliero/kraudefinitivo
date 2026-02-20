"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section w-full py-24 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-kraut-dark border-t border-kraut-orange/30"
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-kraut-white mb-5 sm:mb-6"
        >
          Contacto
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-lg sm:text-xl md:text-2xl text-kraut-white/70 mb-14 sm:mb-16 md:mb-20 tracking-wide"
        >
          Santa Fe, Argentina
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center items-center sm:items-stretch"
        >
          {/* Instagram Button */}
          <motion.a
            href="https://www.instagram.com/krautermeister_/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto flex items-center justify-center gap-3 group min-h-[56px] px-8 py-4 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ease-out"
            whileHover={{
              scale: 1.06,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Instagram Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
            </svg>
            <span className="font-semibold tracking-widest">INSTAGRAM</span>
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/5493425453564"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto flex items-center justify-center gap-3 group min-h-[56px] px-8 py-4 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ease-out"
            whileHover={{
              scale: 1.06,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* WhatsApp Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.236l-.356.201-3.69-.973.992 3.63-.235.374a9.86 9.86 0 .001 15.964 9.868 9.868 0 0013.6-9.7 9.87 9.87 0 00-9.814-9.732zm0-2.65c5.487 0 9.944 4.445 9.944 9.931 0 5.487-4.457 9.944-9.944 9.944a9.87 9.87 0 01-4.739-1.219l-5.412 1.42 1.46-5.351a9.865 9.865 0 01-1.203-4.85c0-5.487 4.458-9.931 9.944-9.931z" />
            </svg>
            <span className="font-semibold tracking-widest">WHATSAPP</span>
          </motion.a>
        </motion.div>

        {/* Footer note */}
        <motion.p
          variants={itemVariants}
          className="mt-16 md:mt-20 font-sans text-xs sm:text-sm text-kraut-white/50 tracking-widest"
        >
          © 2024 Krautermeister. Todos los derechos reservados.
        </motion.p>
      </motion.div>
    </section>
  );
}
