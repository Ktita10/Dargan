"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

/**
 * HeroParallaxDemo - Componente de demostración del Hero con efecto Parallax
 * Muestra imágenes de los productos y servicios de Dorgan Alfalfa
 * con un efecto de desplazamiento 3D al hacer scroll
 */
export function HeroParallaxDemo() {
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
