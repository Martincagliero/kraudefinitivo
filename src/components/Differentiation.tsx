"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Differentiation() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      ref={ref}
      className="section w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-kraut-dark"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          variants={itemVariants}
          className="space-y-8 sm:space-y-10 md:space-y-12 text-lg sm:text-xl md:text-2xl text-kraut-white/85 leading-relaxed md:leading-loose text-center"
        >
          <p>
            Lo que distingue a Krautermeister es su enfoque en el proceso
            artesanal y en el sabor.
          </p>

          <p>
            No busca copiar de forma literal ni ser genérico, sino reinterpretar
            un clásico con criterio propio.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
