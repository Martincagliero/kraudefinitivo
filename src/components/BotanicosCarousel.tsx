"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Botanico {
  name: string;
  image: string;
  description: string;
}

const botanicos: Botanico[] = [
  {
    name: "Anís estrellado",
    image: "/hierbas/anis-estrellado.webp",
    description: "Sabor dulce y anisado. Aporta calidez y complejidad aromática a cada sorbo.",
  },
  {
    name: "Hierba de menta",
    image: "/hierbas/hierba-menta.webp",
    description: "Refrescante y vigorizante. Balance perfecto de frialdad con notas verdes.",
  },
  {
    name: "Regaliz",
    image: "/hierbas/regaliz.webp",
    description: "Dulzura natural con toques especiados. Suaviza y redondea el perfil completo.",
  },
  {
    name: "Clavo de olor",
    image: "/hierbas/clavo-olor.webp",
    description: "Picante y cálido. Añade profundidad aromática intensa y memorable.",
  },
  {
    name: "Manzanilla",
    image: "/hierbas/manzanilla.webp",
    description: "Floral y suave. Aporta elegancia y equilibrio delicado al conjunto.",
  },
  {
    name: "Piel de naranja y de limón",
    image: "/hierbas/piel-naranja-limon.webp",
    description: "Cítrico brillante. Trae frescura y levedad etérea al final.",
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
        className="w-full max-w-5xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerDown={handleDragStart}
        onPointerUp={handleDragEnd}
      >
        {/* Carousel */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[500px] sm:min-h-[600px]">
          {/* Image side */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[550px] rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <Image
                  src={botanicos[currentSlide].image}
                  alt={botanicos[currentSlide].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-kraut-dark via-transparent to-transparent opacity-40" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                {/* Decorative accent - top */}
                <motion.div
                  className="h-1 w-12 sm:w-16 bg-kraut-orange rounded-full"
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
                  className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-kraut-white tracking-wide"
                >
                  {botanicos[currentSlide].name}
                </motion.h2>

                {/* Description */}
                <motion.p
                  custom={1}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-base sm:text-lg text-kraut-white/75 leading-relaxed max-w-md"
                >
                  {botanicos[currentSlide].description}
                </motion.p>

                {/* Decorative accent - bottom */}
                <motion.div
                  className="h-1 w-12 sm:w-16 bg-kraut-orange rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center md:justify-end gap-8 mt-12 sm:mt-16 md:mt-20">
          {/* Navigation Arrows */}
          <div className="flex items-center gap-6">
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
          <div className="text-kraut-orange/60 text-xs sm:text-sm font-light tracking-widest col-span-full md:col-span-auto text-center md:text-right mt-4 md:mt-0">
            <span>{String(currentSlide + 1).padStart(2, "0")}</span>
            <span> / </span>
            <span>{String(botanicos.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotanicosCarousel;
