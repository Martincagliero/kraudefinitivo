"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Historia", id: "about" },
    { label: "Botánicos", id: "botanicos" },
    { label: "Botella", id: "bottle" },
    { label: "Contacto", id: "contact" },
  ];

  const hamburgerVariants = {
    top: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: 45, y: 10 },
    },
    middle: {
      closed: { opacity: 1 },
      open: { opacity: 0 },
    },
    bottom: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: -45, y: -10 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
    exit: { opacity: 0, x: -20 },
  };

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

          {/* Navigation - HIDDEN on all screens */}
          <nav className="hidden items-center gap-3 lg:gap-4">
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

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* CTA Button - Hidden on mobile, visible on sm and up */}
            <motion.button
              onClick={() => handleScroll("contact")}
              className="hidden sm:inline-block text-xs md:text-sm font-bold tracking-wider py-2 px-6 rounded-full border-2 bg-kraut-orange text-white border-kraut-orange hover:bg-orange-600 hover:border-orange-600 transition-colors duration-300"
            >
              DEGUSTAR
            </motion.button>

            {/* Hamburger Menu Button - ALWAYS visible */}
            <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hamburger-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <div className="hamburger-icon">
                  <motion.div
                    className="hamburger-line"
                    variants={hamburgerVariants.top}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="hamburger-line"
                    variants={hamburgerVariants.middle}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="hamburger-line"
                    variants={hamburgerVariants.bottom}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
          </div>
        </div>

        {/* Navigation Menu - visible when menu open */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="mt-4 pt-4 border-t border-kraut-orange/20"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="btn-mobile-nav w-full text-left font-serif font-bold tracking-wider"
                  custom={i}
                  variants={mobileMenuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label.toUpperCase()}
                </motion.button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
