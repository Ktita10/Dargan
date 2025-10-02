"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * HeroMobile.jsx - Hero Optimizado para Móviles
 * 
 * @description Versión mobile del Hero con parallax simplificado y mejor performance
 * @features
 * - Parallax suave y ligero para mobile
 * - Grid de 2 columnas de imágenes
 * - Título y CTA optimizados para pantallas pequeñas
 * - Mejor rendimiento en dispositivos móviles
 * - Touch-friendly
 * 
 * @usedIn src/components/sections/Hero.astro (solo visible en mobile)
 */

export function HeroMobileDemo() {
  return <HeroMobile products={products} />;
}

const HeroMobile = ({ products }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax más sutil para mobile
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Dividir imágenes en 2 columnas para mobile
  const firstColumn = products.slice(0, Math.ceil(products.length / 2));
  const secondColumn = products.slice(Math.ceil(products.length / 2));

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-green-50 to-white"
      style={{ position: 'relative' }}
    >
      {/* Header con título y CTA */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 pt-20 pb-10 px-4"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-green-900 mb-4 leading-tight"
          >
            DORGAN ALFALFA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed"
          >
            Más de 20 años produciendo semillas de alfalfa de alta calidad para el éxito de tu campo
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="#productos"
            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            Ver Productos
          </motion.a>
        </div>
      </motion.div>

      {/* Grid de imágenes con parallax suave - 2 columnas */}
      <motion.div 
        style={{ y: translateY }}
        className="relative z-0 px-2 pb-10"
      >
        <div className="grid grid-cols-2 gap-2 max-w-2xl mx-auto">
          {/* Primera columna */}
          <div className="space-y-2">
            {firstColumn.map((product, idx) => (
              <motion.div
                key={`first-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title || "Dorgan Alfalfa"}
                  className="w-full h-40 sm:h-48 object-cover"
                  loading={idx < 2 ? "eager" : "lazy"}
                />
              </motion.div>
            ))}
          </div>

          {/* Segunda columna */}
          <div className="space-y-2 pt-6">
            {secondColumn.map((product, idx) => (
              <motion.div
                key={`second-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (idx + firstColumn.length) * 0.1 }}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title || "Dorgan Alfalfa"}
                  className="w-full h-40 sm:h-48 object-cover"
                  loading={idx < 2 ? "eager" : "lazy"}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Gradiente de transición al contenido */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-5"></div>
    </div>
  );
};

// Imágenes optimizadas para mobile
const products = [
  {
    title: "Cosechadora",
    thumbnail: "/images/cosechadora.png",
  },
  {
    title: "Alfalfa",
    thumbnail: "/images/alfalfa.png",
  },
  {
    title: "Tractor",
    thumbnail: "/images/tractor.png",
  },
  {
    title: "Paisaje",
    thumbnail: "/images/paisaje.png",
  },
  {
    title: "Productos",
    thumbnail: "/images/productos.jpg",
  },
  {
    title: "Empresa",
    thumbnail: "/images/empresa.jpg",
  },
];

export default HeroMobileDemo;
