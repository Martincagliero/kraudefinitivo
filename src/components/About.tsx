"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="section relative w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-kraut-dark"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Main title */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-kraut-white mb-10 sm:mb-12 md:mb-14 text-center"
        >
          Una búsqueda personal
        </motion.h2>

        {/* Body text with proper spacing */}
        <motion.div
          variants={itemVariants}
          className="space-y-7 sm:space-y-8 md:space-y-9 text-base sm:text-lg md:text-xl text-kraut-white/85 leading-relaxed md:leading-loose"
        >
          <p>
            Krautermeister nació desde una inquietud personal. La admiración por
            el licor de hierbas alemán encendió la pregunta: ¿por qué no existía
            en Argentina una alternativa nacional, artesanal y accesible que
            respetara ese carácter?
          </p>

          <p>
            Las primeras pruebas no fueron todas buenas. La primera tanda incluso
            fue descartada por completo. Pero lejos de frenar el proceso, reforzó
            la búsqueda.
          </p>

          <p>
            A través de prueba y error, y con una idea muy clara del perfil
            deseado, el proceso se fue afinando hasta alcanzar el carácter que
            hoy define a Krautermeister.
          </p>

          <p className="pt-2 sm:pt-4 md:pt-6 italic text-kraut-white/90">
            Ahí, lo que era una prueba se convirtió en marca.
          </p>
        </motion.div>

        {/* Premium Button CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12"
        >
          {/* Decorative divider line */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-kraut-white/30 to-transparent mb-10 sm:mb-12 md:mb-14"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />

          {/* Premium Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/botanicos">
              <motion.button
                className="px-8 sm:px-10 md:px-14 py-3 sm:py-4 md:py-5 border-2 border-kraut-white/60 text-kraut-white uppercase font-serif font-bold text-xs sm:text-sm md:text-base tracking-widest hover:border-kraut-white hover:bg-kraut-white/5 transition-all duration-300 rounded-none"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                DESCUBRÍ LOS BOTÁNICOS
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
