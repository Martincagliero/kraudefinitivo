"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Historia", id: "about" },
    { label: "Botánicos", id: "botanicos" },
    { label: "Botella", id: "bottle" },
    { label: "Contacto", id: "contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-kraut-dark/95 backdrop-blur-md border-b border-kraut-orange/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and brand */}
          <motion.div
            className="flex items-center gap-2 md:gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 relative flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <span className="font-serif text-sm md:text-base font-bold text-kraut-white tracking-widest">
              KRAUTERMEISTER
            </span>
          </motion.div>

          {/* Navigation - Hidden on mobile, visible on md and up */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-sm lg:text-base text-kraut-white/80 hover:text-kraut-orange transition-colors duration-300 font-sans font-medium tracking-wide pb-1 border-b-2 border-b-transparent hover:border-b-kraut-orange"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            onClick={() => handleScroll("contact")}
            className="btn-primary bg-kraut-orange text-kraut-dark hidden sm:inline-block"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs md:text-sm font-semibold tracking-widest">
              DEGUSTAR
            </span>
          </motion.button>

          {/* Mobile menu button - visible only on mobile */}
          <motion.button
            onClick={() => handleScroll("contact")}
            className="md:hidden btn-primary bg-kraut-orange text-kraut-dark text-xs py-2 px-3"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            DEGUSTAR
          </motion.button>
        </div>

        {/* Mobile navigation dropdown - could be expanded */}
        {/* For simplicity, using the direct button approach above */}
      </div>
    </motion.header>
  );
}
