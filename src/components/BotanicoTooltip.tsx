"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface BotanicoTooltipProps {
  name: string;
  description: string;
  children: React.ReactNode;
}

// Descripción de cada botánico
const botanicDescriptions: Record<string, string> = {
  "Anís estrellado": "Sabor dulce y anisado. Aporta calidez y complejidad aromática a cada sorbo.",
  "Hierba de menta": "Refrescante y vigorizante. Balance perfecto de frialdad con notas verdes.",
  "Regaliz": "Dulzura natural con toques especiados. Suaviza y redondea el perfil completo.",
  "Clavo de olor": "Picante y cálido. Añade profundidad aromática intensa y memorable.",
  "Manzanilla": "Floral y suave. Aporta elegancia y equilibrio delicado al conjunto.",
  "Piel de naranja y de limón": "Cítrico brillante. Trae frescura y levedad etérea al final.",
};

export default function BotanicoTooltip({ name, description, children }: BotanicoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Cerrar tooltip al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node) &&
        triggerRef.current &&
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

  // Keyboard support: Escape para cerrar
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const tooltipContent = description || botanicDescriptions[name] || "Ingrediente premium en nuestra formulación.";

  return (
    <div
      ref={triggerRef}
      className="relative w-full h-full"
      // Desktop: hover
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
      // Mobile: click para toggle
      onClick={() => isMobile && setIsOpen(!isOpen)}
      onKeyDown={handleKeyDown}
    >
      {children}

      {/* Tooltip - aparece arriba del botánico */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={tooltipRef}
            className="botanico-tooltip"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Contenido del tooltip */}
            <div className="botanico-tooltip-content">
              <h4 className="botanico-tooltip-name">{name}</h4>
              <p className="botanico-tooltip-desc">{tooltipContent}</p>
            </div>

            {/* Punta del tooltip (flecha) */}
            <div className="botanico-tooltip-arrow" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
