"use client";
import { useState } from "react";

// Componente de icono chevron inline (sin dependencias externas)
const ChevronDownIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export function FAQ({ faqs, colorScheme = "green", searchable = false }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = searchable
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqs;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {searchable && (
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar pregunta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors text-lg"
          />
        </div>
      )}

      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div
            key={faq.index || index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-l-4 border-green-600"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-green-50 transition-colors"
            >
              <span className="text-lg font-semibold text-gray-800 pr-4">
                {faq.question}
              </span>
              <ChevronDownIcon
                className={`w-6 h-6 text-green-600 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFaqs.length === 0 && searchable && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No se encontraron preguntas relacionadas con "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
}
