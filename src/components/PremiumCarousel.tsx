'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: '/editorial-1.jpg',
    title: 'Herencias',
    subtitle: 'La tradición destilada en cada gota',
  },
  {
    image: '/editorial-2.jpg',
    title: 'Excelencia',
    subtitle: 'Craftmanship europeo de siglos de experiencia',
  },
  {
    image: '/editorial-3.jpg',
    title: 'Perfección',
    subtitle: 'Cada detalle cuenta en el arte de crear',
  },
  {
    image: '/editorial-4.jpg',
    title: 'Destilación',
    subtitle: 'Proceso meticuloso de generaciones',
  },
  {
    image: '/editorial-5.jpg',
    title: 'Sabor',
    subtitle: 'La complejidad en su máxima expresión',
  },
  {
    image: '/editorial-6.jpg',
    title: 'Legado',
    subtitle: 'Una historia viva en cada botella',
  },
];

const PremiumCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Autoplay logic
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
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
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }
  };

  const slideVariants = {
    enter: { opacity: 0, scale: 0.98 },
    center: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 1.02, transition: { duration: 0.8 } },
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

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 6, ease: 'easeOut' } },
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handleDragStart}
      onPointerUp={handleDragEnd}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Image Background */}
          <motion.div
            className="relative w-full h-full"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60" />
            <div className="absolute inset-0 bg-black opacity-20 md:opacity-5" />
          </motion.div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
            <motion.div
              className="text-center"
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                custom={0}
                variants={contentVariants}
                className="text-3xl md:text-6xl font-light tracking-widest text-white mb-4 md:mb-6"
              >
                {slides[currentSlide].title}
              </motion.h2>

              <motion.p
                custom={1}
                variants={contentVariants}
                className="text-sm md:text-lg font-light tracking-wide text-white opacity-80"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 md:gap-4 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8 md:w-10'
                : 'bg-white bg-opacity-40 w-2 md:w-3 hover:bg-opacity-70'
            }`}
            whileHover={{ opacity: 0.8 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation - Left */}
      <motion.button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-6 md:left-12 top-1/2 transform -translate-y-1/2 z-10 text-kraut-orange hover:text-orange-400 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous slide"
      >
        <svg
          className="w-8 h-8 md:w-12 md:h-12"
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

      {/* Arrow Navigation - Right */}
      <motion.button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 z-10 text-kraut-orange hover:text-orange-400 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <svg
          className="w-8 h-8 md:w-12 md:h-12"
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
  );
};

export default PremiumCarousel;
