"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

/**
 * HeroParallax - Componente principal con efecto parallax 3D
 * 
 * @param products - Array de productos con título, enlace y thumbnail
 * 
 * Funcionalidad:
 * - Divide los productos en 3 filas (5 por fila)
 * - Aplica transformaciones 3D basadas en el scroll
 * - Anima las filas horizontalmente en direcciones alternas
 * - Usa Framer Motion para animaciones suaves con springs
 */
export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  // Dividir productos en 3 filas para el efecto parallax
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  
  const ref = React.useRef(null);
  
  // Hook de scroll: monitorea el progreso del scroll en este componente
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Inicia cuando el top toca el viewport, termina cuando sale
  });

  // Configuración de animación spring (rebote suave)
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Transformaciones de desplazamiento horizontal (para las filas de imágenes)
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  
  // Transformaciones 3D (rotación y opacidad del contenedor)
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]), // Rotación inicial en X
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), // Fade in inicial
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]), // Rotación inicial en Z
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-700, 400]), // Desplazamiento vertical
    springConfig
  );
  
  return (
    <div
      ref={ref}
      className="h-[220vh] pt-32 pb-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* Header con título y descripción */}
      <Header />
      
      {/* Contenedor animado con las 3 filas de imágenes */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        {/* Primera fila: desplazamiento de izquierda a derecha */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`product-row1-${idx}`}
            />
          ))}
        </motion.div>
        
        {/* Segunda fila: desplazamiento de derecha a izquierda */}
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={`product-row2-${idx}`}
            />
          ))}
        </motion.div>
        
        {/* Tercera fila: desplazamiento de izquierda a derecha */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`product-row3-${idx}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Componente Hero con efecto Parallax
// Muestra un header con título y descripción, seguido de 3 filas de imágenes
// que se desplazan horizontalmente al hacer scroll
export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      {/* Título principal centrado */}
      <h1 className="text-4xl md:text-7xl font-bold text-green-900 dark:text-green-100 text-center">
        Dorgan Alfalfa <br /> Calidad Insuperable
      </h1>
      {/* Descripción del negocio */}
      <p className="max-w-3xl mx-auto text-base md:text-xl mt-8 text-green-700 dark:text-green-200 text-center">
        Productores y exportadores de alfalfa de la más alta calidad. 
        Comprometidos con la excelencia en cada cosecha, brindando productos premium 
        para la alimentación animal en todo el mundo.
      </p>
    </div>
  );
};

/**
 * ProductCard - Tarjeta de producto individual con animación parallax
 * 
 * @param product - Objeto con title, link y thumbnail
 * @param translate - Valor de transformación horizontal para el efecto parallax
 * 
 * Características:
 * - Se desplaza horizontalmente según el scroll (parallax)
 * - Efecto hover: se eleva (-20px) al pasar el mouse
 * - Overlay oscuro al hacer hover
 * - Título visible al hacer hover
 */
export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate, // Desplazamiento horizontal controlado por scroll
      }}
      whileHover={{
        y: -20, // Efecto de elevación al hacer hover
      }}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      {/* Enlace con la imagen del producto */}
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 rounded-lg"
          alt={product.title}
        />
      </a>
      
      {/* Overlay oscuro que aparece al hacer hover */}
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none rounded-lg transition-opacity duration-300"></div>
      
      {/* Título que aparece al hacer hover */}
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-bold text-xl transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};
