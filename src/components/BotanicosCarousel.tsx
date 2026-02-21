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
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-kraut-dark overflow-hidden">
      <div
        className="w-full max-w-4xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerDown={handleDragStart}
        onPointerUp={handleDragEnd}
      >
        {/* Carousel */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center min-h-[350px] sm:min-h-[400px]">
          {/* Image side */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden">
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
                className="space-y-4 sm:space-y-5"
              >
                {/* Decorative accent - top */}
                <motion.div
                  className="h-0.5 w-8 sm:w-10 bg-kraut-orange rounded-full"
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
                  className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-kraut-white tracking-wide"
                >
                  {botanicos[currentSlide].name}
                </motion.h2>

                {/* Description */}
                <motion.p
                  custom={1}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-sm sm:text-base text-kraut-white/75 leading-relaxed"
                >
                  {botanicos[currentSlide].description}
                </motion.p>

                {/* Decorative accent - bottom */}
                <motion.div
                  className="h-0.5 w-8 sm:w-10 bg-kraut-orange rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls - Arrows at sides */}
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between items-center px-2 sm:px-4 pointer-events-none">
          {/* Left Arrow */}
          <motion.button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + botanicos.length) % botanicos.length)
            }
            className="text-kraut-orange hover:text-kraut-white transition-colors pointer-events-auto"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous botanico"
          >
            <svg
              className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10"
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

          {/* Right Arrow */}
          <motion.button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % botanicos.length)}
            className="text-kraut-orange hover:text-kraut-white transition-colors pointer-events-auto"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next botanico"
          >
            <svg
              className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10"
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

        {/* Navigation Indicators - Bottom center */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {/* Indicators */}
          <div className="flex gap-2">
            {botanicos.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-kraut-orange w-6 sm:w-8"
                    : "bg-kraut-orange/40 w-1.5 sm:w-2 hover:bg-kraut-orange/70"
                }`}
                whileHover={{ opacity: 0.8 }}
                aria-label={`Go to botanico ${index + 1}`}
              />
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default BotanicosCarousel;
