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
          <nav className="hidden md:flex items-center gap-3 lg:gap-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="btn-nav text-sm lg:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            onClick={() => handleScroll("contact")}
            className="btn-cta hidden sm:inline-block text-xs md:text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            DEGUSTAR
          </motion.button>

          {/* Mobile menu button - visible only on mobile */}
          <motion.button
            onClick={() => handleScroll("contact")}
            className="btn-cta md:hidden text-xs py-2 px-4"
            whileHover={{ scale: 1.1 }}
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
