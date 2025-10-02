"use client";
import { useState, useRef, useEffect } from "react";

/**
 * CarouselMobile.tsx - Carrusel Mobile de Variedades de Alfalfa
 * 
 * @description Carrusel optimizado para dispositivos móviles con swipe gestures
 * @features
 * - Swipe gestures nativos
 * - Cards verticales optimizadas para mobile
 * - Navegación con dots
 * - Auto-scroll opcional
 * - Touch-friendly
 * - Características destacadas en cada card
 * 
 * @usedIn src/components/sections/TiposAlfalfas.astro (solo visible en mobile)
 */

interface SlideData {
  title: string;
  button: string;
  src: string;
  description?: string;
}

interface CarouselMobileProps {
  slides: SlideData[];
}

const getCharacteristics = (variety: string) => {
  switch (variety) {
    case 'Patricia':
      return [
        'Alta capacidad de rebrote',
        'Excelente resistencia a enfermedades',
        'Ramificación abundante',
        '8-9 cortes potenciales',
        'Muy productiva'
      ];
    case 'Monarca':
      return [
        'Alto vigor inicial',
        'Excelente producción otoño-invierno',
        'Muy alta producción grupo 8',
        'Perfil sanitario destacado',
        'Resistente al pastoreo intensivo'
      ];
    case 'Araucana':
      return [
        'Alta producción de forraje',
        'Muy persistente en el tiempo',
        'Perfecta para reservas forrajeras',
        'Resistente a enfermedades',
        'Excelente adaptación pampeana'
      ];
    default:
      return [];
  }
};

export default function CarouselMobile({ slides }: CarouselMobileProps) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Mínima distancia de swipe requerida
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && current < slides.length - 1) {
      setCurrent(current + 1);
    }
    
    if (isRightSwipe && current > 0) {
      setCurrent(current - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full px-4 py-8">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full"
            >
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mx-2">
                {/* Imagen */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Título sobre la imagen */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {slide.title}
                    </h3>
                  </div>
                </div>

                {/* Características */}
                <div className="p-5 bg-white">
                  <h4 className="text-sm font-semibold text-green-800 mb-3 uppercase tracking-wide">
                    Características Destacadas:
                  </h4>
                  <div className="space-y-2">
                    {getCharacteristics(slide.title).map((characteristic, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-700 leading-snug flex-1">
                          {characteristic}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? "w-8 h-2 bg-green-600"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>

      {/* Indicador de swipe (solo se muestra la primera vez) */}
      <div className="text-center mt-4">
        <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Desliza para ver más variedades
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </p>
      </div>
    </div>
  );
}
