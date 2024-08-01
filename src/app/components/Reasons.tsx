'use client';

import React, { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const Reasons = () => {
  const [images, setImages] = useState({
    foto1: '',
    foto2: '',
    foto3: '',
    foto4: '',
    chulito: '',
    ad1: '',
    ad2: '',
    ad3: '',
  });

  useEffect(() => {
    const loadImages = async () => {
      try {
        const foto1Ref = ref(storage, 'foto1.jpg');
        const foto2Ref = ref(storage, 'foto2.jpg');
        const foto3Ref = ref(storage, 'foto 3.jpg');
        const foto4Ref = ref(storage, 'foto 4.jpg');
        const chulitoRef = ref(storage, 'chulito.png'); // Añadido para el chulito
        const ad1Ref = ref(storage, 'ad1.png'); // Añadido para el chulito
        const ad2Ref = ref(storage, 'ad2.png'); // Añadido para el chulito
        const ad3Ref = ref(storage, 'ad3.png'); // Añadido para el chulito

        const urls = await Promise.all([
          getDownloadURL(foto1Ref),
          getDownloadURL(foto2Ref),
          getDownloadURL(foto3Ref),
          getDownloadURL(foto4Ref),
          getDownloadURL(chulitoRef),
          getDownloadURL(ad1Ref),
          getDownloadURL(ad2Ref),
          getDownloadURL(ad3Ref),
        ]);

        setImages({
          foto1: urls[0],
          foto2: urls[1],
          foto3: urls[2],
          foto4: urls[3],
          chulito: urls[4],
          ad1: urls[5],
          ad2: urls[6],
          ad3: urls[7],
        });

      } catch (error) {
        console.error('Error al obtener las URLs de las imágenes:', error);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="p-4 flex flex-col md:flex-row gap-2">
      <div className="flex-1 grid grid-cols-2 gap-1 md:grid-cols-2 md:gap-4">
        {/* Imágenes en la primera fila */}
        <img 
          src={images.foto1} 
          alt="Foto 1" 
          className="object-cover w-full h-64"
        />
        <img 
          src={images.foto2} 
          alt="Foto 2" 
          className="object-contain w-full h-64"
        />
        {/* Imágenes en la segunda fila */}
        <img 
          src={images.foto3} 
          alt="Foto 3" 
          className="object-cover w-full h-64"
        />
        <img 
          src={images.foto4} 
          alt="Foto 4" 
          className="object-contain w-full h-64"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center uppercase gap-4">
        <span className="font-bold text-orange-500">Algunas Razones</span>
        <div className="text-white text-3xl font-bold">
          <span className="stroke-text">¿Por qué </span> 
          <span>escogernos?</span>
        </div>
        <div className='flex flex-col gap-4'>
          <div className="flex text-base gap-4">
            <img src={images.chulito} alt="Chulito" className="w-8 h-8" />
            <span>+ de 50 expertos</span>
          </div>
          <div className="flex text-base gap-4">
            <img src={images.chulito} alt="Chulito" className="w-8 h-8" />
            <span>Entrenamiento inteligente y rápidamente, como nunca antes</span>
          </div>
          <div className="flex text-base gap-4">
            <img src={images.chulito} alt="Chulito" className="w-8 h-8" />
            <span>1 suscripción de cortesía cada 3 meses</span>
          </div>
          <div className="flex text-base gap-4">
            <img src={images.chulito} alt="Chulito" className="w-8 h-8" />
            <span>Aliados que complementan tu experiencia</span>
          </div>
        </div>
        <span className='text-gray-500 font-normal'>Nuestros Aliados</span>
        <div className="flex gap-6 mt-4 justify-start">
          <img 
            src={images.ad1} 
            alt="Ad 1" 
            className="w-12 h-12 object-contain" 
          />
          <img 
            src={images.ad2} 
            alt="Ad 2" 
            className="w-12 h-12 object-contain" 
          />
          <img 
            src={images.ad3} 
            alt="Ad 3" 
            className="w-12 h-12 object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
