"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import HerbTooltip from "./HerbTooltip";

interface BotanicoCardProps {
  name: string;
  image: string;
  index: number;
}

function BotanicoCard({ name, image, index }: BotanicoCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ scale: 1.04 }}
    >
      <HerbTooltip name={name} description="">
        <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg">
          {/* Subtle glow behind on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-radial" style={{
            background: 'radial-gradient(circle at center, rgba(212, 133, 90, 0.15) 0%, transparent 70%)'
          }} />
          
          {/* Image placeholder */}
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex items-end justify-center p-4 sm:p-5 md:p-6">
            <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-kraut-white text-center">
              {name}
            </h3>
          </div>
        </div>
      </HerbTooltip>
    </motion.div>
  );
}

export default function BotanicosSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const botanicos = [
    { name: "Anís estrellado", image: "/hierbas/anis-estrellado.webp" },
    { name: "Hierba de menta", image: "/hierbas/hierba-menta.webp" },
    { name: "Regaliz", image: "/hierbas/regaliz.webp" },
    { name: "Clavo de olor", image: "/hierbas/clavo-olor.webp" },
    { name: "Manzanilla", image: "/hierbas/manzanilla.webp" },
    { name: "Piel de naranja y de limón", image: "/hierbas/piel-naranja-limon.webp" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="botanicos"
      className="section w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-kraut-dark sm:overflow-hidden"
    >
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Header */}
        <div className="mb-16 sm:mb-18 md:mb-20 text-center">
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-kraut-white mb-4 sm:mb-6"
          >
            Botánicos destacados
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg md:text-xl text-kraut-white/70 tracking-wide"
          >
            Seis hierbas construyen su carácter.
          </motion.p>
        </div>

        {/* Grid - Responsive: 2 cols mobile, 3 cols tablet, 6 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {botanicos.map((botanico, index) => (
            <BotanicoCard
              key={index}
              name={botanico.name}
              image={botanico.image}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
