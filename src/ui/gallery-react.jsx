import React, { useState } from 'react';

export function GalleryReact() {
  const [activeFilter, setActiveFilter] = useState('campos');

  const filters = [
    { id: 'campos', label: 'Campos' },
    { id: 'proceso', label: 'Proceso' },
    { id: 'productos', label: 'Productos' },
    { id: 'logistica', label: 'Logística' }
  ];

  const galleryImages = {
    campos: [
      { src: '/images/paisaje.png', alt: 'Campo de alfalfa extenso' },
      { src: '/images/paisajeAbout.jpg', alt: 'Paisaje agropecuario argentino' },
      { src: '/images/tractortrabajando.jpg', alt: 'Tractor trabajando en el campo' },
      { src: '/images/fardos_about_derecho.png', alt: 'Fardos de alfalfa en el campo' },
      { src: '/images/fardos_about_izquierda.png', alt: 'Fardos compactados listos' },
      { src: '/images/alfalfa.png', alt: 'Cultivo de alfalfa de calidad' }
    ],
    proceso: [
      { src: '/images/tractor.png', alt: 'Tractor agrícola moderno' },
      { src: '/images/cosechadora.png', alt: 'Cosechadora en funcionamiento' },
      { src: '/images/tractortrabajando.jpg', alt: 'Proceso de siembra y cosecha' },
      { src: '/images/empresa.jpg', alt: 'Instalaciones de procesamiento' },
      { src: '/images/team.jpg', alt: 'Equipo de trabajo especializado' }
    ],
    productos: [
      { src: '/images/Patricia.png', alt: 'Semilla de Alfalfa Patricia' },
      { src: '/images/Monarca.png', alt: 'Semilla de Alfalfa Monarca' },
      { src: '/images/Araucana.png', alt: 'Semilla de Alfalfa Araucana' },
      { src: '/images/productos.jpg', alt: 'Productos terminados de calidad' },
      { src: '/images/sacos.jpg', alt: 'Sacos de semillas empaquetados' },
      { src: '/images/alfalfa.png', alt: 'Alfalfa procesada premium' }
    ],
    logistica: [
      { src: '/images/camionCargado.jpg', alt: 'Camión cargado para distribución' },
      { src: '/images/empresa.jpg', alt: 'Centro de distribución DORGAN' },
      { src: '/images/sacos.jpg', alt: 'Almacén de productos listos' },
      { src: '/images/fardos_about_derecho.png', alt: 'Fardos preparados para envío' },
      { src: '/images/team.jpg', alt: 'Equipo logístico especializado' }
    ]
  };

  const currentImages = galleryImages[activeFilter] || [];

  return (
  <section id="galeria" className="pt-28 pb-20 md:pb-32 bg-[#000314]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galería de DORGAN ALFALFA
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white italic max-w-4xl mx-auto">
            Conozca nuestras instalaciones, procesos y productos a través de imágenes reales.
          </p>
        </div>

        {/* Filtros/Tabs */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:-translate-y-0.5'
              }`}
              aria-label={`Ver galería de ${filter.label}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de imágenes con animación */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((image, index) => (
            <div
              key={`${activeFilter}-${index}`}
              className="gallery-item-react group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-200 cursor-pointer"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading={index < 3 ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gallery-item-react {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .gallery-item-react:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}
