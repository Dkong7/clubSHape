'use client';
import React, { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import Link from "next/link";

const Programs = () => {
  const [poleIconUrl, setPoleIconUrl] = useState('');
  const [pesasIconUrl, setPesasIconUrl] = useState('');
  const [flexIconUrl, setFlexIconUrl] = useState('');
  const [meditacionIconUrl, setMeditacionIconUrl] = useState('');

  useEffect(() => {
    const poleIconRef = ref(storage, 'poleIconWhite.png');
    const pesasIconRef = ref(storage, 'PesasIconWhite.png');
    const flexIconRef = ref(storage, 'FlexIconWhite.png');
    const meditacionIconRef = ref(storage, 'meditacionIconWhite.png');

    getDownloadURL(poleIconRef)
      .then((url) => setPoleIconUrl(url))
      .catch((error) => console.error('Error al obtener la URL de pole dance:', error));

    getDownloadURL(pesasIconRef)
      .then((url) => setPesasIconUrl(url))
      .catch((error) => console.error('Error al obtener la URL de fuerza:', error));

    getDownloadURL(flexIconRef)
      .then((url) => setFlexIconUrl(url))
      .catch((error) => console.error('Error al obtener la URL de flexibilidad:', error));

    getDownloadURL(meditacionIconRef)
      .then((url) => setMeditacionIconUrl(url))
      .catch((error) => console.error('Error al obtener la URL de meditación:', error));
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="text-center text-2xl font-bold uppercase mt-10 flex justify-center items-center gap-2">
        <span className="text-stroke">Explora</span>
        <span>nuestros</span>
        <span className="text-stroke">Programas</span>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="w-[200px] h-[280px] bg-white bg-opacity-10 border border-white border-opacity-50 rounded-2xl flex flex-col items-center p-4 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-orange-100 text-center">
          <img src={poleIconUrl} alt="Pole Dance" className="max-w-full max-h-24 object-contain" />
          <span className="mt-4 text-lg">Pole Dance</span>
          <span className="text-xs text-yellow-500 mt-2">Descubre la sensualidad y fuerza del pole dance.</span>
          <Link href="/pole">
            <button className="mt-2 px-2 py-1 bg-orange-500 text-white rounded-sm cursor-pointer transition-colors duration-200 ease-in-out hover:bg-yellow-400 text-sm">Conocer más</button>
          </Link>
        </div>
        <div className="w-[200px] h-[280px] bg-white bg-opacity-10 border border-white border-opacity-50 rounded-2xl flex flex-col items-center p-4 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-orange-100 text-center">
          <img src={pesasIconUrl} alt="Fuerza" className="max-w-full max-h-24 object-contain" />
          <span className="mt-4 text-lg">Fuerza</span>
          <span className="text-xs text-yellow-500 mt-2">Aumenta tu fuerza con entrenamientos especializados.</span>
          <Link href="/fuerza">
            <button className="mt-2 px-2 py-1 bg-orange-500 text-white rounded-sm cursor-pointer transition-colors duration-200 ease-in-out hover:bg-yellow-400 text-sm">Conocer más</button>
          </Link>
        </div>
        <div className="w-[200px] h-[280px] bg-white bg-opacity-10 border border-white border-opacity-50 rounded-2xl flex flex-col items-center p-4 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-orange-100 text-center">
          <img src={flexIconUrl} alt="Flexibilidad" className="max-w-full max-h-24 object-contain" />
          <span className="mt-4 text-lg">Flexibilidad</span>
          <span className="text-xs text-yellow-500 mt-2">Mejora tu flexibilidad y equilibrio.</span>
          <Link href="/flex">
            <button className="mt-2 px-2 py-1 bg-orange-500 text-white rounded-sm cursor-pointer transition-colors duration-200 ease-in-out hover:bg-yellow-400 text-sm">Conocer más</button>
          </Link>
        </div>
        <div className="w-[200px] h-[280px] bg-white bg-opacity-10 border border-white border-opacity-50 rounded-2xl flex flex-col items-center p-4 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-orange-100 text-center">
          <img src={meditacionIconUrl} alt="Meditación" className="max-w-full max-h-24 object-contain" />
          <span className="mt-4 text-lg">Meditación</span>
          <span className="text-xs text-yellow-500 mt-2">Encuentra la paz interior a través de la meditación.</span>
          <Link href="/meditacion">
            <button className="mt-2 px-2 py-1 bg-orange-500 text-white rounded-sm cursor-pointer transition-colors duration-200 ease-in-out hover:bg-yellow-400 text-sm">Conocer más</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Programs;
