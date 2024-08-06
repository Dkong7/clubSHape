'use client';
import React, { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const GymStrengthPage = () => {
  const [images, setImages] = useState({
    fuerza1: '',
    fuerza2: '',
    fuerza3: '',
    fuerza4: '',
  });

  useEffect(() => {
    const loadImages = async () => {
      try {
        const fuerza1Ref = ref(storage, 'fuerza1.png');
        const fuerza2Ref = ref(storage, 'fuerza2.png');
        const fuerza3Ref = ref(storage, 'fuerza3.png');
        const fuerza4Ref = ref(storage, 'fuerza4.png');

        const urls = await Promise.all([
          getDownloadURL(fuerza1Ref),
          getDownloadURL(fuerza2Ref),
          getDownloadURL(fuerza3Ref),
          getDownloadURL(fuerza4Ref),
        ]);

        setImages({
          fuerza1: urls[0],
          fuerza2: urls[1],
          fuerza3: urls[2],
          fuerza4: urls[3],
        });

      } catch (error) {
        console.error('Error al obtener las URLs de las imágenes:', error);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="gym-strength px-[3.125rem] sm:px-[1.5625rem] md:px-[3.125rem] lg:px-[3.125rem] py-8 relative">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 relative">
        {/* Colage de imágenes */}
        <div className="imagenes-fuerza flex-1 grid grid-cols-2 gap-4">
          <img src={images.fuerza1} alt="Fuerza 1" className="object-cover w-full h-64 rounded-lg shadow-lg" />
          <img src={images.fuerza2} alt="Fuerza 2" className="object-cover w-full h-64 rounded-lg shadow-lg" />
          <img src={images.fuerza3} alt="Fuerza 3" className="object-cover w-full h-64 rounded-lg shadow-lg" />
          <img src={images.fuerza4} alt="Fuerza 4" className="object-cover w-full h-64 rounded-lg shadow-lg" />
        </div>

        {/* Información sobre fuerza en el gimnasio */}
        <div className="info-fuerza flex-1 z-10 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-orange-500 uppercase mb-4">Fuerza en el Gimnasio</h1>
          <h2 className="text-3xl font-bold uppercase stroke-text mb-4">Desarrolla tu Fuerza y Resistencia</h2>
          <p className="text-xl text-white mb-6">
            La fuerza en el gimnasio es clave para mejorar tu rendimiento físico y alcanzar tus objetivos de fitness. Ofrecemos programas de entrenamiento diseñados para todos los niveles, desde principiantes hasta atletas avanzados. Aprende técnicas efectivas de levantamiento de pesas y mejora tu resistencia.
          </p>
          <p className="text-xl text-white mb-6">
            Únete a nuestros programas de entrenamiento de fuerza y descubre cómo puedes transformar tu cuerpo y tu mente. Ofrecemos un ambiente de apoyo con entrenadores profesionales que te guiarán en cada paso de tu camino hacia una mejor salud y forma física. ¡Comienza hoy y alcanza tus metas de fuerza!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GymStrengthPage;
