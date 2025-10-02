"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

/**
 * carousel.tsx - Carrusel 3D Interactivo de Variedades de Alfalfa
 * 
 * @description Carrusel con efecto 3D mostrando las 3 variedades de alfalfa
 * @features
 * - Cartas 3D con efecto hover y mouse tracking
 * - Navegación con flechas (prev/next)
 * - Transiciones suaves entre diapositivas
 * - Carta activa muestra características destacadas
 * - Cartas inactivas muestran solo título
 * - Responsive y accesible
 * - Animaciones con requestAnimationFrame
 * 
 * @usedIn src/components/sections/TiposAlfalfas.astro
 * @props slides - Array de objetos con title, button, src, description
 */

interface SlideData {
  title: string;
  button: string;
  src: string;
  description?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title, description } = slide;

  const getCharacteristics = (variety: string) => {
    switch (variety) {
      case 'Patricia':
        return [
          'Alta capacidad de rebrote y excelente persistencia.',
          'Muy buen comportamiento sanitario y resistencia a enfermedades.',
          'Ramificación abundante para mayor cobertura y volumen.',
          'Alta producción de forraje desde el segundo año, con 8 a 9 cortes potenciales.',
          'Muy productiva, incluso en condiciones exigentes.',
          'Ideal para sistemas de alto rendimiento.',
          'Excelente opción para corte y pastoreo.',
          'Reposo corto y rápida recuperación'
        ];
      case 'Monarca':
        return [
          'Alto vigor inicial y muy buena velocidad de rebrote.',
          'Mejora la oferta de forraje en Otoño-Invierno.',
          'Muy alta producción total dentro de los grupo 8.',
          'Excelente perfil sanitario y persistencia.',
          'Excelente para carne y leche destacada en pastoreo directo.',
          'Muy resistente al pastoreo intensivo, alta relación Hoja-Tallo.',
          'Recomendada para secano en la Región Pampeana'
        ];
      case 'Araucana':
        return [
          'Alta producción de forraje',
          'Muy persistente en el tiempo',
          'Perfecta para reservas forrajeras',
          'Ideal para carne y leche',
          'Apta para pastoreo directo o corte',
          'Resistente a enfermedades de raíz y corona',
          'Buena adaptación a zonas de secano y regadío',
          'Excelente adaptación a toda la Región Pampeana'
        ];
      default:
        return [];
    }
  };

  return (
    <li
      ref={slideRef}
      className={`relative group cursor-pointer transition-all duration-300 ease-in-out ${
        current !== index
          ? "w-[45rem] h-[32rem] scale-95 opacity-70"
          : "w-[50rem] h-[36rem] scale-100 opacity-100"
      } rounded-2xl overflow-hidden shadow-2xl mx-4`}
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          alt={title}
          src={src}
          onLoad={imageLoaded}
          loading="eager"
          decoding="sync"
        />
        {/* Overlay oscuro solo para la carta activa para mejor legibilidad */}
        {current === index && (
          <div className="absolute inset-0 bg-black/50" />
        )}
      </div>

      {/* Contenido superpuesto */}
      {current === index && (
        <div className="relative h-full flex flex-col justify-between p-8">
          {/* Título en la parte superior */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              {title}
            </h2>
          </div>

          {/* Características destacables - con fondo para mejor legibilidad */}
          <div className="flex-1 flex items-start justify-start mt-6">
            <div className="max-w-md space-y-4">
              <div className="space-y-4 bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                {getCharacteristics(title).slice(0, 5).map((characteristic, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mt-1 shadow-lg">
                      <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-white text-base leading-relaxed font-medium">
                      {characteristic}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Título simple para cartas inactivas */}
      {current !== index && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6">
          <h2 className="text-2xl font-bold text-white text-center drop-shadow-lg">
            {title}
          </h2>
        </div>
      )}
    </li>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-green-500 focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  useEffect(() => {
    const container = document.querySelector('.carousel-slides') as HTMLElement;
    if (container) {
      container.style.setProperty('--carousel-translate', `-${current * (100 / slides.length)}%`);
    }
  }, [current, slides.length]);

  return (
    <div
      className="carousel-container relative w-full max-w-7xl mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul className="carousel-slides flex justify-center items-center gap-6 transition-transform duration-1000 ease-in-out">
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
