"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";

/**
 * HeroParallax.jsx - Componente Demo de Hero con Efecto Parallax
 * 
 * @description Wrapper del componente HeroParallax con las imágenes del negocio
 * @features
 * - 9 imágenes divididas en 3 filas (parallax)
 * - Efecto 3D al hacer scroll
 * - Animaciones con Framer Motion
 * - Imágenes de cosechadoras, tractores, campos, productos
 * 
 * @usedIn src/components/sections/Hero.astro
 * @dependencies hero-parallax.tsx (componente base)
 */
export function HeroParallaxDemo() {
  // Preload de las primeras imágenes críticas para carga instantánea
  React.useEffect(() => {
    const criticalImages = [
      "/images/cosechadora.png",
      "/images/alfalfa.png",
      "/images/tractor.png",
      "/images/paisaje.png"
    ];
    
    criticalImages.forEach((src, index) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      if (index === 0) link.fetchpriority = 'high';
      document.head.appendChild(link);
    });
  }, []);

  return <HeroParallax products={products} />;
}

// Array de productos con imágenes locales de la carpeta public/images
// Se divide automáticamente en 3 filas para el efecto parallax (3 imágenes por fila)
const products = [
  {
    title: "",
    link: "#cosechadora",
    thumbnail: "/images/cosechadora.png",
  },
  {
    title: "",
    link: "#alfalfa",
    thumbnail: "/images/alfalfa.png",
  },
  {
    title: "",
    link: "#tractor",
    thumbnail: "/images/tractor.png",
  },
  {
    title: "",
    link: "#paisaje",
    thumbnail: "/images/paisaje.png",
  },
  {
    title: "",
    link: "#sacos",
    thumbnail: "/images/sacos.jpg",
  },
  {
    title: "",
    link: "#empresa",
    thumbnail: "/images/empresa.jpg",
  },
  {
    title: "",
    link: "#team",
    thumbnail: "/images/team.jpg",
  },
  {
    title: "",
    link: "#productos",
    thumbnail: "/images/productos.jpg",
  },
  {
    title: "",
    link: "#tractortrabajando",
    thumbnail: "/images/tractortrabajando.jpg",
  },
  {
    title: "",
    link: "#camionCargado",
    thumbnail: "/images/camionCargado.jpg",
  },
];
