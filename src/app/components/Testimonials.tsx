'use client';

import React, { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);

  const testimonials = [
    { text: "Las clases de pole dance en este gimnasio son increíbles. ¡La mejor experiencia que he tenido!", name: "Juanita Pérez" },
    { text: "El ambiente aquí es muy acogedor y motivador. Me encanta venir a entrenar cada día.", name: "María Gómez" },
    { text: "Los entrenadores son muy profesionales y siempre están dispuestos a ayudarte a mejorar.", name: "Andrés Rodríguez" },
    { text: "Las instalaciones están siempre limpias y bien equipadas. Recomiendo este gimnasio a todos!", name: "Catalina Martínez" }
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const imageRefs = [
      ref(storage, 'gente1.png'),
      ref(storage, 'gente2.png'),
      ref(storage, 'gente3.png'),
      ref(storage, 'gente4.png')
    ];

    Promise.all(imageRefs.map((imageRef) => getDownloadURL(imageRef)))
      .then((urls) => {
        if (urls && Array.isArray(urls)) {
          setImageUrls(urls);
        } else {
          console.error("Error: La estructura de 'urls' no es un array válido:", urls);
        }
      })
      .catch((error) => {
        console.error("Error al obtener las URLs de las imágenes:", error);
      });
  }, []);

  return (
    <div className='relative flex gap-4 px-8 mt-8'>
      <div className="left-h">
        <div className="contenedorTestimonios flex flex-col flex-1 gap-4 uppercase text-white">
          <span className="testimonios text-orange-500 font-bold">Testimonios</span>
          <span className="loqueellos font-bold text-3xl stroke-text leading-tight">lo que ellos dicen</span>
          <span className="denosotros font-bold text-3xl leading-tight">de nosotros</span>
          
          <p className="text-white mt-4 text-lg">{testimonials[currentTestimonial].text}</p>
          <span className="text-orange-300 mt-2 block">{testimonials[currentTestimonial].name}</span>
          
          <button 
            onClick={handleNextTestimonial} 
            className="mt-4 px-4 py-2 border border-orange-500 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center max-w-fit">
            <svg className="w-4 h-4 text-white inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="text-sm">Siguiente</span>
          </button>
        </div>
      </div>
      <div className="right-h relative">
        <div className="cuadro1 absolute w-[17rem] h-[20rem] border-2 border-orange-500 bg-transparent right-[9rem] top-[0.9rem] z-10"></div>
        <div
          className="cuadro2 absolute w-[17rem] h-[19rem] right-[7rem] top-[4rem] z-10"
          style={{
            background: 'linear-gradient(to bottom, orange, black)',
          }}
        ></div>
        {imageUrls.length > 0 && (
          <img
            src={imageUrls[currentTestimonial]}
            alt={`Testimonial ${currentTestimonial + 1}`}
            className="w-64 h-64 object-contain rounded-[20px] z-20" // Tamaño ajustado de la imagen con border-radius
          />
        )}
      </div>
    </div>
  );
};

export default Testimonials;
