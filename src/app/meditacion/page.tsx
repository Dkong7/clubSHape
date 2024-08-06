'use client';
import React, { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const MeditationPage = () => {
  const [images, setImages] = useState({
    medi1: '',
    medi2: '',
    medi3: '',
  });

  useEffect(() => {
    const loadImages = async () => {
      try {
        const medi1Ref = ref(storage, 'meditacion1.png');
        const medi2Ref = ref(storage, 'meditacion2.png');
        const medi3Ref = ref(storage, 'medi3.png');

        

        const urls = await Promise.all([
          getDownloadURL(medi1Ref),
          getDownloadURL(medi2Ref),
          getDownloadURL(medi3Ref),
        ]);

        setImages({
          medi1: urls[0],
          medi2: urls[1],
          medi3: urls[2],
        });

      } catch (error) {
        console.error('Error al obtener las URLs de las imágenes:', error);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="meditation px-[3.125rem] sm:px-[1.5625rem] md:px-[3.125rem] lg:px-[3.125rem] py-8 relative">
      <div className="container mx-auto flex flex-col items-center gap-8 relative">
        {/* Colage de imágenes */}
        <div className="imagenes-meditacion grid grid-cols-1 gap-4 mb-6">
          <img src={images.medi2} alt="Meditación 1" className="object-cover w-full h-64 rounded-lg shadow-lg" />
        </div>

        {/* Información sobre meditación */}
        <div className="info-meditacion text-center max-w-3xl z-10">
          <h1 className="text-2xl font-bold text-orange-500 uppercase mb-4">Meditación</h1>
          <h2 className="text-3xl font-bold uppercase stroke-text mb-4">Encuentra la Paz y la Claridad</h2>
          <p className="text-xl text-white mb-6">
            La meditación es una práctica que ayuda a calmar la mente y mejorar el bienestar emocional. Nuestros programas están diseñados para ayudarte a encontrar un espacio de paz y claridad en tu vida diaria.
          </p>
          <p className="text-xl text-white mb-6">
            Con sesiones guiadas y técnicas personalizadas, puedes aprender a meditar y disfrutar de los beneficios de esta práctica. Únete a nosotros y descubre cómo la meditación puede transformar tu vida, ayudándote a reducir el estrés y aumentar tu bienestar general.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeditationPage;
