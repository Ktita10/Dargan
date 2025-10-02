import React, { useState } from 'react';

export function ProductsReact() {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      name: "Patricia",
      image: "/images/Patricia.png",
      features: [
        "Alta capacidad de rebrote y excelente persistencia",
        "Muy buen comportamiento sanitario y resistencia a enfermedades",
        "Ramificación abundante para mayor cobertura y volumen",
        "Alta producción de forraje desde el segundo año, con 8 a 9 cortes potenciales",
        "Muy productiva, incluso en condiciones exigentes",
      ],
    },
    {
      name: "Monarca",
      image: "/images/Monarca.png",
      features: [
        "Excelente adaptación a diferentes tipos de suelo",
        "Alta resistencia a plagas y enfermedades",
        "Producción sostenida durante toda la temporada",
        "Ideal para sistemas de pastoreo intensivo",
        "Rápida recuperación después del corte",
      ],
    },
    {
      name: "Araucana",
      image: "/images/Araucana.png",
      features: [
        "Variedad de alta rusticidad y adaptabilidad",
        "Excelente comportamiento en suelos marginales",
        "Gran tolerancia a sequías y heladas",
        "Producción estable en condiciones adversas",
        "Ideal para zonas de clima variable",
      ],
    },
  ];

  return (
    <section id="tipos-alfalfa" className="pt-28 pb-20 md:pb-32 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-green-700 italic max-w-4xl mx-auto">
            Tres variedades de alfalfa de alta calidad, adaptadas a diferentes necesidades y condiciones
          </p>
        </div>

        {/* Product Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => setActiveProduct(index)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeProduct === index
                  ? "bg-green-600 text-white shadow-lg shadow-green-600/30 scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:-translate-y-0.5"
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Product Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen del producto */}
          <div 
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              animation: 'fadeIn 0.5s ease-out'
            }}
          >
            <img
              key={activeProduct} // Force re-render on change
              src={products[activeProduct].image}
              alt={`Semilla de Alfalfa ${products[activeProduct].name}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute top-6 left-6">
              <span className="inline-block text-lg px-6 py-2 bg-green-600/90 backdrop-blur-sm text-white font-bold rounded-full shadow-lg">
                {products[activeProduct].name}
              </span>
            </div>
          </div>

          {/* Características del producto */}
          <div 
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 space-y-6"
            style={{
              animation: 'fadeInRight 0.5s ease-out'
            }}
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-2">
                {products[activeProduct].name}
              </h3>
              <p className="text-lg text-green-700 font-semibold">
                Variedad de alta calidad y rendimiento
              </p>
            </div>

            <div className="space-y-4">
              {products[activeProduct].features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3"
                  style={{
                    animation: `slideInLeft 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <svg 
                    className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-block w-full md:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-center rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Solicitar Información
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
