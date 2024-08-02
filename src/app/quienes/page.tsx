// app/index/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const QuienesSomos = () => {
  const [grupoUrl, setGrupoUrl] = useState("");

  useEffect(() => {
    const grupoRef = ref(storage, 'grupo.png');

    getDownloadURL(grupoRef)
      .then((url) => {
        setGrupoUrl(url);
      })
      .catch((error) => {
        console.error("Error al obtener la URL de grupo.png:", error);
      });
  }, []);

  return (
    <div className="quienes-somos px-[3.125rem] sm:px-[1.5625rem] md:px-[3.125rem] lg:px-[3.125rem] py-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Información del equipo */}
        <div className="info-equipo flex-1">
          <h1 className="text-4xl font-bold mb-4">Conoce a Nuestro Equipo</h1>
          <p className="text-lg mb-6">
            En la vibrante ciudad de Bogotá, un grupo de tres emprendedores se unió después de la pandemia con un sueño compartido: fusionar la pasión por el deporte con el estilo de vida moderno. Nuestro equipo, compuesto por visionarios y entusiastas del fitness, lanzó un proyecto innovador que combina una boutique de deporte con una variedad de clases especializadas.
          </p>
          <p className="text-lg mb-6">
            En 2022, abrimos nuestra primera sede en Chía, y desde entonces hemos crecido y evolucionado, ofreciendo experiencias únicas y saludables para nuestros usuarios. Nos especializamos en Pole Dance, con un enfoque en el pole sport, brindando un entrenamiento completo que mejora la fuerza, la flexibilidad y la confianza.
          </p>
          <p className="text-lg">
            Únete a nosotros y sé parte de una comunidad apasionada que busca transformar vidas a través del deporte. Nuestra misión es crear experiencias enriquecedoras que te inspiren a alcanzar tus metas y disfrutar de un estilo de vida saludable.
          </p>
        </div>

        {/* Imagen del equipo */}
        <div className="imagen-equipo flex-1 flex justify-center items-center">
          {grupoUrl && <img src={grupoUrl} alt="Nuestro Equipo" className="w-full h-auto max-w-md rounded-lg shadow-lg" />}
        </div>
      </div>

      {/* Cuadrados con estilos */}
      <div className="cuadrados mt-8 flex justify-center gap-4">
        <div className="cuadro-degrade w-32 h-32 bg-gradient-to-b from-orange-500 to-white rounded-lg shadow-lg"></div>
        <div className="cuadro-borde w-32 h-32 border-2 border-orange-500 bg-transparent rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
};

export default QuienesSomos;
