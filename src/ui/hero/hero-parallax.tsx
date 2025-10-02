"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

// Componente Header memoizado
export const Header = React.memo(function Header() {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-4xl md:text-7xl font-bold text-green-900 dark:text-green-100 text-center">
        Dorgan Alfalfa <br /> Calidad Insuperable
      </h1>
      <p className="max-w-3xl mx-auto text-base md:text-xl mt-8 text-green-700 dark:text-green-200 text-center">
        Productores y exportadores de alfalfa de la más alta calidad. 
        Comprometidos con la excelencia en cada cosecha, brindando productos premium 
        para la alimentación animal en todo el mundo.
      </p>
    </div>
  );
});

// ProductCard memoizado y optimizado
export const ProductCard = React.memo(function ProductCard({
  product,
  translate,
  index,
  isFirst
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  index: number;
  isFirst: boolean;
}) {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-96 w-[30rem] relative shrink-0 will-change-transform-opacity"
    >
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
          loading={isFirst ? "eager" : "lazy"}
          decoding="async"
        />
      </a>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none rounded-lg transition-opacity duration-300 will-change-transform-opacity"
        tabIndex={-1}
      ></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-bold text-xl transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
});

/**
 * HeroParallax - Componente principal con efecto parallax 3D
 * 
 * @param products - Array de productos con título, enlace y thumbnail
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
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-700, 400]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[220vh] pt-32 pb-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity
        }}
        className="will-change-transform-opacity"
      >
        {/* Primera fila */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`product-row1-${idx}-${product.thumbnail}`}
              index={idx}
              isFirst={idx === 0}
            />
          ))}
        </motion.div>
        {/* Segunda fila */}
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={`product-row2-${idx}-${product.thumbnail}`}
              index={idx}
              isFirst={false}
            />
          ))}
        </motion.div>
        {/* Tercera fila */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`product-row3-${idx}-${product.thumbnail}`}
              index={idx}
              isFirst={false}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};