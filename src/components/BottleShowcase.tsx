"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

export default function BottleShowcase() {
  const sectionRef = useRef(null);
  const { ref: videoRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="bottle"
      ref={sectionRef}
      className="section relative w-full py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Background image overlay - lighter for visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-kraut-dark/30 via-kraut-dark/40 to-kraut-dark/50" />

      {/* Subtle orange radial glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 blur-3xl" style={{
        background: 'radial-gradient(circle, #d4855a 0%, transparent 70%)'
      }} />

      <motion.div
        className="relative z-10 w-full max-w-3xl"
        ref={videoRef}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Bottle video with transparent background */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-sm h-48 sm:h-60 md:h-72 mb-6 sm:mb-8 md:mb-10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center mx-auto"
          style={{
            background: 'transparent',
            y: y,
          }}
        >
          <video
            className="w-full h-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            poster="/bottle-video.jpg"
          >
            <source src="/output_clean.webm" type="video/webm" />
            <source src="/bottle-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Main phrase */}
        <motion.div
          variants={itemVariants}
          className="text-center px-4 sm:px-6"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-kraut-white leading-tight tracking-wide">
            La botella como amuleto.
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
