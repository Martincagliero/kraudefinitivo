"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Botanico {
  name: string;
  description: string;
  benefit: string;
}

const botanicos: Botanico[] = [
  {
    name: "Cáscara Sagrada",
    description: "Corteza reconocida por sus propiedades digestivas",
    benefit: "Balance natural",
  },
  {
    name: "Jengibre",
    description: "Raíz aromática con carácter cálido y especiado",
    benefit: "Energía vital",
  },
  {
    name: "Manzanilla",
    description: "Flor delicada de propiedades calmantes",
    benefit: "Serenidad",
  },
  {
    name: "Anís Estrella",
    description: "Semilla con notas dulces y ligeramente anisadas",
    benefit: "Armonía",
  },
  {
    name: "Tomillo",
    description: "Hierba aromática con presencia definida",
    benefit: "Fortaleza",
  },
  {
    name: "Melissa",
    description: "Planta con esencia fresca y revitalizante",
    benefit: "Claridad",
  },
];

const BotanicosCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  // Autoplay logic
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % botanicos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Handle swipe
  const handleDragStart = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragStart(e.clientX);
  };

  const handleDragEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    const dragEnd = e.clientX;
    const dragDistance = dragStart - dragEnd;

    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        setCurrentSlide((prev) => (prev + 1) % botanicos.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + botanicos.length) % botanicos.length);
      }
    }
  };

  const slideVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.8 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-kraut-dark overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
      <div
        className="w-full max-w-4xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerDown={handleDragStart}
        onPointerUp={handleDragEnd}
      >
        {/* Carousel */}
        <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12"
            >
              {/* Decorative accent - top */}
              <motion.div
                className="mb-6 sm:mb-8 h-1 w-12 sm:w-16 bg-kraut-orange rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Name */}
              <motion.h2
                custom={0}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-kraut-white mb-4 sm:mb-6 tracking-wide"
              >
                {botanicos[currentSlide].name}
              </motion.h2>

              {/* Description */}
              <motion.p
                custom={1}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="text-base sm:text-lg md:text-xl text-kraut-white/70 max-w-2xl mb-6 sm:mb-8 leading-relaxed"
              >
                {botanicos[currentSlide].description}
              </motion.p>

              {/* Benefit tag */}
              <motion.div
                custom={2}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="inline-block px-6 sm:px-8 py-2 sm:py-3 border border-kraut-orange/50 rounded-full text-sm sm:text-base text-kraut-orange font-serif tracking-widest uppercase"
              >
                {botanicos[currentSlide].benefit}
              </motion.div>

              {/* Decorative accent - bottom */}
              <motion.div
                className="mt-8 sm:mt-12 h-1 w-12 sm:w-16 bg-kraut-orange rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-8 mt-12 sm:mt-16">
          <motion.button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + botanicos.length) % botanicos.length)
            }
            className="text-kraut-orange hover:text-kraut-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous botanico"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </motion.button>

          {/* Indicators */}
          <div className="flex gap-2 sm:gap-3">
            {botanicos.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-kraut-orange w-8 sm:w-10"
                    : "bg-kraut-orange/40 w-2 sm:w-3 hover:bg-kraut-orange/70"
                }`}
                whileHover={{ opacity: 0.8 }}
                aria-label={`Go to botanico ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % botanicos.length)}
            className="text-kraut-orange hover:text-kraut-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next botanico"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5L15.75 12l-7.5 7.5"
              />
            </svg>
          </motion.button>
        </div>

        {/* Counter */}
        <div className="text-center mt-8 sm:mt-12 text-kraut-orange/60 text-xs sm:text-sm font-light tracking-widest">
          <span>{String(currentSlide + 1).padStart(2, "0")}</span>
          <span> / </span>
          <span>{String(botanicos.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
};

export default BotanicosCarousel;
