"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface EditorialImageProps {
  text: string;
  image: string;
  index: number;
}

function EditorialImage({ text, image, index }: EditorialImageProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-96 sm:h-[500px] md:h-[600px] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={text}
        fill
        className="object-cover"
        sizes="100vw"
        quality={85}
        priority={index === 0}
      />

      {/* Enhanced gradient overlay - darker and more sophisticated */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-transparent" />
      
      {/* Additional text shadow for extra legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      {/* Text content with enhanced spacing */}
      <motion.div
        className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-kraut-white text-center leading-tight drop-shadow-lg">
          {text}
        </h3>
      </motion.div>
    </motion.div>
  );
}

export default function EditorialImages() {
  const editorials = [
    {
      text: "El silencio también se bebe.",
      image: "/editorial-1.jpg",
    },
    {
      text: "Notas verdes que dejan huella.",
      image: "/editorial-2.jpg",
    },
    {
      text: "Origen que se siente.",
      image: "/editorial-3.jpg",
    },
    {
      text: "Espíritu del litoral.",
      image: "/editorial-4.jpg",
    },
    {
      text: "Sabor que perdura en el tiempo.",
      image: "/editorial-5.jpg",
    },
    {
      text: "Tradición reinterpretada con carácter.",
      image: "/editorial-6.jpg",
    },
  ];

  return (
    <section className="section w-full bg-kraut-dark">
      {editorials.map((editorial, index) => (
        <EditorialImage
          key={index}
          text={editorial.text}
          image={editorial.image}
          index={index}
        />
      ))}
    </section>
  );
}
