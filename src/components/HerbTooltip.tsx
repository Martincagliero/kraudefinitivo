"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface HerbTooltipProps {
  name: string;
  description: string;
  children: React.ReactNode;
}

const tooltipDescriptions: Record<string, string> = {
  "Anís estrellado": "Sabor dulce y anisado. Aporta calidez y complejidad aromática.",
  "Hierba de menta": "Refrescante y vigorizante. Balance de frialdad con notas verdes.",
  "Regaliz": "Dulzura natural con toques especiados. Suaviza y redondea el perfil.",
  "Clavo de olor": "Picante y cálido. Añade profundidad aromática intensa.",
  "Manzanilla": "Floral y suave. Aporta elegancia y equilibrio delicado.",
  "Piel de naranja y de limón": "Cítrico brillante. Trae frescura y levedad etérea.",
};

export default function HerbTooltip({ name, description, children }: HerbTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect mobile
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Close tooltip when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (
        tooltipRef.current &&
        triggerRef.current &&
        !tooltipRef.current.contains(e.target as Node) &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen]);

  // Handle keyboard focus
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const tooltipContent = description || tooltipDescriptions[name] || "Ingrediente fino en nuestra formulación.";

  return (
    <>
      <div
        ref={triggerRef}
        className="relative w-full h-full"
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
        onClick={() => isMobile && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Información sobre ${name}`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {children}

        {/* Desktop tooltip - appears above/below card */}
        {!isMobile && (
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={tooltipRef}
                className="herb-tooltip"
                initial={{ opacity: 0, scale: 0.98, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.25, delay: 0.04 }}
                role="dialog"
                aria-label={`Información de ${name}`}
              >
                <div className="herb-tooltip-content">
                  <h4 className="herb-tooltip-title">{name}</h4>
                  <p className="herb-tooltip-description">{tooltipContent}</p>
                </div>

                {/* Tiny arrow/pointer */}
                <div className="herb-tooltip-arrow" />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Mobile tooltip - appears as modal overlay */}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay backdrop */}
              <motion.div
                className="herb-tooltip-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Centered tooltip */}
              <motion.div
                ref={tooltipRef}
                className="herb-tooltip-modal"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                role="dialog"
                aria-label={`Información de ${name}`}
              >
                <div className="herb-tooltip-content">
                  <h4 className="herb-tooltip-title">{name}</h4>
                  <p className="herb-tooltip-description">{tooltipContent}</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
