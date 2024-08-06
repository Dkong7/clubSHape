'use client';
import React, { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const FlexibilityPage = () => {
  const [images, setImages] = useState({
    flexi1: '',
    flexi2: '',
    flexi3: '',
  });

  useEffect(() => {
    const loadImages = async () => {
      try {
        const flexi1Ref = ref(storage, 'flex1.png');
        const flexi2Ref = ref(storage, 'flex2.png');
        const flexi3Ref = ref(storage, 'flex3.png');

        const urls = await Promise.all([
          getDownloadURL(flexi1Ref),
          getDownloadURL(flexi2Ref),
          getDownloadURL(flexi3Ref),
        ]);

        setImages({
          flexi1: urls[0],
          flexi2: urls[1],
          flexi3: urls[2],
        });

      } catch (error) {
        console.error('Error al obtener las URLs de las imágenes:', error);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="flexibility px-[3.125rem] sm:px-[1.5625rem] md:px-[3.125rem] lg:px-[3.125rem] py-8 relative">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 relative">
        {/* Colage de imágenes */}
        <div className="imagenes-flexibilidad flex-1 grid grid-cols-2 gap-4">
          <img src={images.flexi1} alt="Flexibilidad 1" className="object-cover w-full h-64 rounded-lg shadow-lg" />
          <img src={images.flexi2} alt="Flexibilidad 2" className="object-cover w-full h-64 rounded-lg shadow-lg" />

        </div>

        {/* Información sobre flexibilidad */}
        <div className="info-flexibilidad flex-1 z-10 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-orange-500 uppercase mb-4">Flexibilidad</h1>
          <h2 className="text-3xl font-bold uppercase stroke-text mb-4">Mejora tu Flexibilidad y Movilidad</h2>
          <p className="text-xl text-white mb-6">
            La flexibilidad es un componente crucial de cualquier rutina de ejercicios, ayudando a prevenir lesiones y mejorar el rango de movimiento. Nuestros programas están diseñados para aumentar tu flexibilidad de manera segura y efectiva.
          </p>
          <p className="text-xl text-white mb-6">
            Ya seas un principiante o un atleta avanzado, nuestros entrenadores están aquí para guiarte. Únete a nosotros y descubre cómo mejorar tu flexibilidad puede beneficiar tu salud general y bienestar. ¡Empieza hoy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlexibilityPage;
