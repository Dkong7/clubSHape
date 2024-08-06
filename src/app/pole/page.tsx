'use client';
import React, { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const PoleDancePage = () => {
  const [images, setImages] = useState({
    pole1: '',
    pole2: '',
    pole3: '',
    pole4: '',
  });

  useEffect(() => {
    const loadImages = async () => {
      try {
        const pole1Ref = ref(storage, 'pole1.jpg');
        const pole2Ref = ref(storage, 'pole2.jpg');
        const pole3Ref = ref(storage, 'pole3.jpg');
        const pole4Ref = ref(storage, 'pole4.jpg');

        const urls = await Promise.all([
          getDownloadURL(pole1Ref),
          getDownloadURL(pole2Ref),
          getDownloadURL(pole3Ref),
          getDownloadURL(pole4Ref),
        ]);

        setImages({
          pole1: urls[0],
          pole2: urls[1],
          pole3: urls[2],
          pole4: urls[3],
        });

      } catch (error) {
        console.error('Error al obtener las URLs de las imágenes:', error);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="pole-dance px-[3.125rem] sm:px-[1.5625rem] md:px-[3.125rem] lg:px-[3.125rem] py-8 relative">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 relative">
        {/* Información del Pole Dance y Pole Sport */}
        <div className="info-pole flex-1 z-10 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-orange-500 uppercase mb-4">Pole Dance y Pole Sport</h1>
          <h2 className="text-3xl font-bold uppercase stroke-text mb-4">Explora y Mejora tus Habilidades</h2>
          <p className="text-xl text-white mb-6">
            Pole Dance y Pole Sport son disciplinas que combinan fuerza, flexibilidad y ritmo en una experiencia única y emocionante. Ofrecemos cursos para todos los niveles, desde principiantes hasta avanzados. Aprende técnicas innovadoras, mejora tu condición física y sé parte de una comunidad apasionada por el movimiento y el fitness.
          </p>
          <p className="text-xl text-white mb-6">
            Inscríbete en nuestros cursos y descubre cómo el Pole Dance puede transformar tu vida. Te ofrecemos entrenamientos personalizados y un ambiente de apoyo para ayudarte a alcanzar tus objetivos. ¡No pierdas la oportunidad de unirte a nosotros y mejorar tu bienestar físico y emocional!
          </p>
        </div>

        {/* Colage de imágenes */}
        <div className="imagenes-pole flex-1 grid grid-cols-2 gap-4">
          <img src={images.pole1} alt="Pole 1" className="object-cover w-full h-64 rounded-lg shadow-lg" />
          <img src={images.pole2} alt="Pole 2" className="object-cover w-full h-64 rounded-lg shadow-lg" />
          <img src={images.pole3} alt="Pole 3" className="object-cover w-full h-64 rounded-lg shadow-lg" />
          <img src={images.pole4} alt="Pole 4" className="object-cover w-full h-64 rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default PoleDancePage;
