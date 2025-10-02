"use client";

import { FAQ } from "./faq";

/**
 * FAQ-react.jsx - Componente de Preguntas Frecuentes
 * 
 * @description Lista de preguntas y respuestas sobre productos y servicios
 * @features
 * - 8 preguntas frecuentes sobre alfalfa y servicios
 * - Acordeón expandible con animaciones
 * - Información sobre variedades, rendimientos, envíos, pagos
 * - Diseño responsive y accesible
 * 
 * @usedIn src/components/sections/FAQ.astro
 * @dependencies faq.jsx (componente base de acordeón)
 */

const faqsAlfalfa = [
  {
    index: 1,
    question: "¿Qué variedades de alfalfa ofrecen?",
    answer:
      "Ofrecemos tres variedades premium: Patricia, Monarca y Araucana. Cada una adaptada a diferentes condiciones de suelo y clima, con alta producción de forraje y excelente persistencia. Patricia destaca por sus 8-9 cortes potenciales, Monarca por su alto vigor inicial, y Araucana por su adaptación a toda la Región Pampeana.",
  },
  {
    index: 2,
    question: "¿Cuál es la mejor variedad para mi campo?",
    answer:
      "La elección depende de sus condiciones específicas. Patricia es ideal para sistemas de alto rendimiento y condiciones exigentes. Monarca se recomienda para secano en la Región Pampeana con excelente producción en otoño-invierno. Araucana es perfecta para reservas forrajeras y muy persistente en el tiempo. Contáctenos para asesoramiento personalizado.",
  },
  {
    index: 3,
    question: "¿Ofrecen asesoramiento técnico?",
    answer:
      "Sí, en DORGAN brindamos respaldo técnico personalizado a todos nuestros clientes. Nuestro equipo de profesionales con más de 20 años de experiencia le ayudará a elegir la variedad más adecuada, determinar la densidad de siembra y optimizar el manejo del cultivo.",
  },
  {
    index: 4,
    question: "¿Cuánto rinde cada variedad por hectárea?",
    answer:
      "El rendimiento varía según las condiciones del campo, pero nuestras variedades ofrecen alta producción de forraje. Patricia puede alcanzar 8-9 cortes potenciales por año, Monarca tiene muy alta producción total dentro del grupo 8, y Araucana destaca por su persistencia y producción constante. Solicite información técnica detallada para su zona específica.",
  },
  {
    index: 5,
    question: "¿Realizan envíos a todo el país?",
    answer:
      "Sí, realizamos envíos a toda Argentina. Contamos con logística propia y socios estratégicos para garantizar la entrega oportuna de nuestros productos en óptimas condiciones. Consulte disponibilidad y tiempos de entrega para su zona.",
  },
  {
    index: 6,
    question: "¿Qué garantía tienen las semillas?",
    answer:
      "Todas nuestras semillas cuentan con certificación de calidad y pureza varietal. Son producto de más de 20 años de experiencia en producción. Garantizamos la calidad genética, poder germinativo y sanidad de nuestras semillas. Cada lote viene con su respectiva documentación técnica.",
  },
];

export default function FAQView() {
  return (
    <div className="py-20 md:py-20 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-50 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título y descripción */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-green-700 italic max-w-4xl mx-auto">
            Resolvemos tus dudas sobre nuestras semillas de alfalfa y servicios.
          </p>
        </div>

        {/* FAQ Accordion */}
        <FAQ faqs={faqsAlfalfa} colorScheme="green" searchable />
      </div>
    </div>
  );
}
