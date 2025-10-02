"use client";
import React from "react";

/**
 * footer.jsx - Componente React del Footer Principal
 * 
 * @description Footer completo con navegación, info y redes sociales
 * @features
 * - Logo y descripción de Dorgan Alfalfa
 * - 3 columnas de enlaces: Empresa, Productos, Servicios
 * - Botón de contacto destacado
 * - Iconos de redes sociales (Facebook, Instagram, Twitter, YouTube)
 * - Copyright dinámico
 * - Fondo verde oscuro degradado
 * - Círculos decorativos sutiles
 * 
 * @usedIn src/components/layout/Footer.astro
 */

const Footer3 = () => {
  const footerLinks = {
    empresa: [
      { name: "Inicio", href: "#hero" },
      { name: "Nosotros", href: "#about" },
      { name: "Productos", href: "#productos" },
      { name: "Contacto", href: "#contacto" },
    ],
    productos: [
      { name: "Alfalfa Monarca", href: "#monarca" },
      { name: "Alfalfa Patricia", href: "#patricia" },
      { name: "Alfalfa Araucana", href: "#araucana" },
      { name: "Exportación", href: "#exportacion" },
    ],
    servicios: [
      { name: "Asesoramiento", href: "#" },
      { name: "Logística", href: "#" },
      { name: "Calidad", href: "#" },
      { name: "Soporte", href: "#" },
    ],
  };

  const socialLinks = [
    {
      label: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: "#",
    },
    {
      label: "Instagram", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.185-1.534-.737-.938-1.074-2.1-1.074-3.454s.337-2.516 1.074-3.454c.737-.938 1.888-1.534 3.185-1.534s2.448.596 3.185 1.534c.737.938 1.074 2.1 1.074 3.454s-.337 2.516-1.074 3.454c-.737.938-1.888 1.534-3.185 1.534zm7.718-10.8c-.297 0-.594-.099-.793-.297s-.297-.496-.297-.793.099-.594.297-.793.496-.297.793-.297.594.099.793.297.297.496.297.793-.099.594-.297.793-.496.297-.793.297z"/>
        </svg>
      ),
      href: "#",
    },
    {
      label: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      href: "#",
    },
    {
      label: "YouTube",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-green-600 via-green-700 to-green-800 dark:from-green-900 dark:via-green-950 dark:to-gray-950 relative">
      {/* Círculos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-16 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a href="#" className="flex justify-center lg:justify-start">
              <div className="flex items-center space-x-3">
                {/* Logo de Alfalfa */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-white">Dorgan</span>
              </div>
            </a>
            <p className="py-8 text-sm text-green-50 lg:max-w-xs text-center lg:text-left leading-relaxed">
              Líderes en producción y comercialización de alfalfa de alta calidad.
              Exportamos excelencia al mundo.
            </p>
            <a
              href="#contacto"
              className="py-3 px-6 block w-fit bg-white hover:bg-green-50 rounded-full shadow-lg text-sm text-green-700 font-semibold mx-auto transition-all duration-300 hover:shadow-xl hover:scale-105 lg:mx-0"
            >
              Contáctanos
            </a>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:mx-auto text-left">
              <h4 className="text-lg text-white font-semibold mb-6 capitalize">
                {title}
              </h4>
              <ul className="text-sm space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-green-50 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/20">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-green-50">
              © 2024{" "}
              <span className="font-medium text-white">
                Dorgan Alfalfa
              </span>
              . Todos los derechos reservados.
            </span>
            <div className="flex mt-6 space-x-4 sm:justify-center lg:mt-0">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex justify-center items-center hover:bg-white hover:border-white text-white hover:text-green-700 transition-all duration-300 hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
