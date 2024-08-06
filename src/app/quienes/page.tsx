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
    <div className="quienes-somos px-[3.125rem] sm:px-[1.5625rem] md:px-[3.125rem] lg:px-[3.125rem] py-8 relative">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 relative">
        {/* Información del equipo */}
        <div className="info-equipo flex-1 z-10 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-orange-500 uppercase mb-4">¿Quiénes somos?</h1>
          <h1 className="text-4xl font-bold uppercase stroke-text mb-4">Conoce a Nuestro Equipo</h1>
          <p className="text-xl text-white mb-6">
            En el corazón de Bogotá, un grupo de tres emprendedores unió su pasión por el deporte con una visión moderna para crear una boutique de fitness única. Desde el inicio de nuestra andanza en 2022, hemos desarrollado un espacio donde la innovación se encuentra con el bienestar físico, ofreciendo una gama de clases especializadas en Pole Dance. Nuestro enfoque no solo mejora la fuerza y la flexibilidad, sino que también promueve una actitud positiva y una vida saludable.
          </p>
          <p className="text-xl text-white mb-6">
            Al unirte a nosotros, te integras en una comunidad dinámica que busca transformar vidas a través del deporte. Estamos comprometidos a proporcionar experiencias enriquecedoras que no solo te ayudarán a alcanzar tus metas personales, sino que también te inspirarán a disfrutar de cada momento mientras te mantienes activo y saludable. ¡Ven y sé parte de esta emocionante aventura con nosotros!
          </p>
        </div>

        {/* Imagen del equipo */}
        <div className="imagen-equipo flex-1 flex justify-center items-center relative z-20">
          {grupoUrl && <img src={grupoUrl} alt="Nuestro Equipo" className="w-full h-auto max-w-md rounded-lg shadow-lg" />}
        </div>
        
        {/* Cuadrados con estilos */}
        <div className="cuadrados absolute top-0 right-0 flex flex-col items-center gap-4 z-10">
          <div className="cuadro1 w-[17rem] h-[20rem] border-2 border-orange-500 bg-transparent absolute right-[9rem] top-[0.9rem]"></div>
          <div
            className="cuadro2 w-[17rem] h-[19rem] absolute right-[7rem] top-[4rem]"
            style={{
              background: 'linear-gradient(to bottom, orange, black)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
