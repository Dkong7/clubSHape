'use client';

import React, { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const Planes = () => {
  const [imageUrls, setImageUrls] = useState({
    cora1Url: '',
    cora2Url: '',
    cora3Url: '',
    chulitoUrl: ''
  });

  useEffect(() => {
    const imageRefs = {
      cora1Url: ref(storage, 'cora1.svg'),
      cora2Url: ref(storage, 'cora2.svg'),
      cora3Url: ref(storage, 'cora3.svg'),
      chulitoUrl: ref(storage, 'chulito.png')
    };

    Object.entries(imageRefs).forEach(([key, imageRef]) => {
      getDownloadURL(imageRef)
        .then((url) => setImageUrls((prev) => ({ ...prev, [key]: url })))
        .catch((error) => console.error(`Error al obtener la URL de ${key}:`, error));
    });
  }, []);

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="text-white text-4xl font-bold uppercase text-center mb-10">
        <span>Listo para empezar </span>
        <span className="stroke-text">tu viaje </span>
        <span className="stroke-text">con nosotros</span>
      </div>

      <div className="plans-container flex flex-col md:flex-row gap-4">
        {/* Plan Básico */}
        <div className="plan bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className="text-center mb-4">
            <img src={imageUrls.cora1Url} alt="Plan Básico" className="w-10 h-10 mx-auto mb-2" />
            <span className="text-lg font-bold">Plan Básico</span>
          </div>
          <div className="text-center text-3xl font-bold mb-4">$39.999/mes</div>
          <div className="features flex flex-col gap-2 text-white">
            <div className="feature flex items-center gap-2">
              <img src={imageUrls.chulitoUrl} alt="Acceso a máquinas básicas" className="w-6 h-6" />
              <span>Acceso a máquinas básicas</span>
            </div>
            <div className="feature flex items-center gap-2">
              <img src={imageUrls.chulitoUrl} alt="1 Clase grupal por semana" className="w-6 h-6" />
              <span>1 Clase grupal por semana</span>
            </div>
            <div className="feature flex items-center gap-2">
              <img src={imageUrls.chulitoUrl} alt="Acceso a vestuarios" className="w-6 h-6" />
              <span>Acceso a vestuarios</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn bg-orange-500 text-white py-2 px-4 rounded">Inscribirse Ahora</button>
          </div>
        </div>

        {/* Plan Premium */}
        <div className="plan bg-gradient-to-br from-orange-400 to-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className="text-center mb-4">
            <img src={imageUrls.cora2Url} alt="Plan Premium" className="w-10 h-10 mx-auto mb-2" />
            <span className="text-lg font-bold">Plan Premium</span>
          </div>
          <div className="text-center text-3xl font-bold mb-4">$79.999/mes</div>
          <div className="features flex flex-col gap-2 text-white">
            <div className="feature flex items-center gap-2">
              <img src={imageUrls.chulitoUrl} alt="Acceso a todas las máquinas" className="w-6 h-6" />
              <span>Acceso a todas las máquinas</span>
            </div>
            <div className="feature flex items-center gap-2">
              <img src={imageUrls.chulitoUrl} alt="Clases grupales ilimitadas" className="w-6 h-6" />
              <span>Clases grupales ilimitadas</span>
            </div>
            <div className="feature flex items-center gap-2">
              <img src={imageUrls.chulitoUrl} alt="Entrenamiento personal mensual" className="w-6 h-6" />
              <span>Entrenamiento personal mensual</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn bg-orange-500 text-white py-2 px-4 rounded">Inscribirse Ahora</button>
          </div>
        </div>

        {/* Plan Pro */}
        <div className="plan bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className="text-center mb-4">
            <img src={imageUrls.cora3Url} alt="Plan Pro" className="w-10 h-10 mx-auto mb-2" />
            <span className="text-lg font-bold">Plan Pro</span>
          </div>
          <div className="text-center text-3xl font-bold mb-4">$119.999/mes</div>
          <div className="features flex flex-col gap-2 text-white">
            <div className="feature flex items-center gap-2">
              <img src={imageUrls.chulitoUrl} alt="Acceso VIP a todas las áreas" className="w-6 h-6" />
              <span>Acceso VIP a todas las áreas</span>
            </div>
            <div className="feature flex items-center gap-2">
              <img src={imageUrls.chulitoUrl} alt="Entrenamiento personal semanal" className="w-6 h-6" />
              <span>Entrenamiento personal semanal</span>
            </div>
            <div className="feature flex items-center gap-2">
              <img src={imageUrls.chulitoUrl} alt="Clases privadas ilimitadas" className="w-6 h-6" />
              <span>Clases privadas ilimitadas</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn bg-orange-500 text-white py-2 px-4 rounded">Inscribirse Ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;
