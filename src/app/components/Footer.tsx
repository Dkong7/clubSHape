'use client'
import React, { useState } from 'react';

// Lista de citas
const quotes = [
  { text: "La disciplina convierte las metas en logros. ¡Empieza hoy y alcanza lo que te propones!", author: "Jim Ryun", category: "deporte" },
  { text: "Tu único rival eres tú mismo. Mide tu progreso y celebra tus mejoras cada día.", author: "Unknown", category: "deporte" },
  { text: "La verdadera fortaleza radica en superar los desafíos que antes parecían imposibles.", author: "Rikki Rogers", category: "deporte" },
  { text: "Cada éxito inicia con la decisión de intentarlo. No te detengas, ¡sigue adelante!", author: "Gail Devers", category: "deporte" },
  { text: "El éxito nace del amor por lo que haces. Encuentra tu pasión y triunfa con ella.", author: "Albert Schweitzer", category: "deporte" },
  { text: "El pole dance es la perfecta combinación de esfuerzo y elegancia, transformando tu vida y cuerpo.", author: "Unknown", category: "pole dance" },
  { text: "En el pole dance, cada movimiento es una victoria personal. Compite solo contigo mismo.", author: "Unknown", category: "pole dance" },
  { text: "La verdadera confianza se construye a través de la práctica constante y la perseverancia.", author: "Unknown", category: "pole dance" },
  { text: "El pole dance no solo fortalece tu cuerpo, sino que también eleva tu espíritu de forma divertida.", author: "Unknown", category: "pole dance" },
  { text: "Más que una danza, el pole dance celebra la fuerza, la gracia y la individualidad.", author: "Unknown", category: "pole dance" }
];

const Footer = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handlePrevQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <footer className="footer-container flex flex-col md:flex-row justify-between items-start px-8 py-6 bg-gray-800 text-white relative">
      {/* Columna de Navegación */}
      <div className="footer-nav flex flex-col space-y-4 md:w-1/3">
        <h4 className="text-lg font-bold">Navegación</h4>
        <div className="nav-options flex flex-col space-y-2">
          <a href="#home" className="hover:text-orange-500">Inicio</a>
          <a href="#about" className="hover:text-orange-500">Quiénes somos</a>
          <a href="#contact" className="hover:text-orange-500">Contacto</a>
          <a href="#services" className="hover:text-orange-500">Servicios</a>
        </div>
        <div className="social-media flex space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {/* Icono de Facebook */}
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12v-9.294H9.294V12h2.706v-1.529c0-2.686 1.603-4.147 4.013-4.147 1.152 0 2.147.085 2.436.124v2.825h-1.671c-1.304 0-1.558.619-1.558 1.528V12h3.117l-.406 2.706h-2.711V24h5.314C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {/* Icono de X */}
              <path d="M24 4.557a9.835 9.835 0 01-2.828.775A4.941 4.941 0 0023.337 3.1a9.869 9.869 0 01-3.127 1.195 4.924 4.924 0 00-8.39 4.487 13.957 13.957 0 01-10.141-5.14 4.93 4.93 0 001.523 6.574A4.917 4.917 0 01.964 9.72v.061a4.926 4.926 0 003.95 4.827 4.902 4.902 0 01-2.224.084 4.926 4.926 0 004.599 3.42a9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.068a13.933 13.933 0 007.547 2.212c9.055 0 14.004-7.502 14.004-14.004 0-.213-.004-.425-.014-.636A9.935 9.935 0 0024 4.557z" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Columna de Citas */}
      <div className="footer-quotes flex flex-col items-center md:w-1/3 mt-6 md:mt-0">
        <blockquote className="text-center">
          <p className="text-lg italic text-yellow-400">{quotes[currentQuoteIndex].text}</p>
          <footer className="mt-2 text-sm text-gray-300">— {quotes[currentQuoteIndex].author}</footer>
        </blockquote>
        <div className="mt-4 flex space-x-4">
          <button onClick={handlePrevQuote} className="flex items-center justify-center bg-gray-700 p-2 rounded hover:bg-gray-600">
            <svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {/* Icono de Flecha Izquierda */}
              <path d="M14.707 16.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L12.414 12l2.293 2.293a1 1 0 010 1.414z" />
            </svg>
          </button>
          <button onClick={handleNextQuote} className="flex items-center justify-center bg-gray-700 p-2 rounded hover:bg-gray-600">
            <svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {/* Icono de Flecha Derecha */}
              <path d="M9.293 16.707a1 1 0 001.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 1.414L10.586 12 8.293 14.293a1 1 0 000 1.414z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Columna de Información de Contacto */}
      <div className="footer-contact flex flex-col items-center md:w-1/3 mt-6 md:mt-0">
        <h4 className="text-lg font-bold">Contáctanos</h4>
        <div className="contact-info text-center mt-2">
          <p className="text-sm">Dirección: Calle Ejemplo, 123</p>
          <p className="text-sm">Teléfono: (123) 456-7890</p>
          <p className="text-sm">Email: contacto@example.com</p>
        </div>
      </div>

      {/* Créditos */}
      <div className="absolute bottom-0 left-0 w-full text-center text-gray-500 py-2 bg-gray-800">
        <p className="text-sm">© {new Date().getFullYear()} Desarrolado por dkongstudio.com Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
