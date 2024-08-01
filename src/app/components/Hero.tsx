'use client';

import React, { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const Hero = () => {
  const [logoWhiteRef, setlogoWhiteUrl] = useState("");
  const [HerodeHeroUrl, setHerodeHeroUrl] = useState("");
  const [coraUrl, setCoraUrl] = useState("");

  useEffect(() => {
    const logoWhiteRef = ref(storage, 'logo-white_1.svg'); // Cambiado a logo-white.png
    const HerodeHeroRef = ref(storage, 'herodehero.png');
    const coraRef = ref(storage, 'orange-heart-svgrepo-com.svg');

    getDownloadURL(logoWhiteRef)
      .then((url) => {
        setlogoWhiteUrl(url); // Cambiado para usar la URL de logo-white.png
      })
      .catch((error) => {
        console.error("Error al obtener la URL de logo-white.png:", error);
      });

    getDownloadURL(coraRef)
      .then((url) => {
        setCoraUrl(url);
      })
      .catch((error) => {
        console.error("Error al obtener la URL de coraRef.png:", error);
      });

    getDownloadURL(HerodeHeroRef)
      .then((url) => {
        setHerodeHeroUrl(url);
      })
      .catch((error) => {
        console.error("Error al obtener la URL de herodehero.png:", error);
      });
  }, []);

  return (
    <div className="hero px-[3.125rem] sm:px-[1.5625rem] md:px-[3.125rem] lg:px-[3.125rem]">
      <div className="hero-content flex flex-col lg:flex-row justify-between relative">
        {/* Lado Izquierdo */}
        <div className="left-h flex-1">
          <div className="hero-banner mt-0 bg-customGray rounded-lg w-full max-w-md lg:max-w-3xl text-white relative flex items-center justify-start mx-auto ml-0 py-0" style={{ marginBottom: '0' }}>
            <div className="banner-bar absolute top-0 left-0 h-[1.0625rem] w-[1.0625rem] bg-orange-500 z-10 rounded-lg slide-right-to-left"></div>
            <span className="texto-banner-bar-wepa ml-4 z-20 text-[0.5rem] md:text-xl lg:text-2xl">Llámanos: 314 666 7777</span>
          </div>
          <div className="hero-text flex flex-col gap-4 uppercase text-[3rem] font-bold text-white overflow-hidden mx-auto lg:text-left text-center mt-4">
            <div className="flex flex-col lg:items-start items-center">
              <span className="letra-all stroke-text text-[5rem] leading-[4.5rem]">All</span>
              <span className="letra-shapes stroke-text text-[5rem] leading-[4.5rem]">Shapes</span>
            </div>
            <div className="fit-here text-[4.6rem] leading-[2.5rem]">Fit Here</div>
            <div className="extra-text text-sm font-light normal-case tracking-wide w-4/5 mx-auto sm:ml-10">
              Transform your life today!
            </div>
          </div>
          <div className="custom-container flex flex-row gap-4 lg:gap-8 mt-2 z-20" style={{ height: '4.375rem' }}>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-white text-xl lg:text-2xl">+140 </span>
              <span className="text-gray-500 uppercase text-xs lg:text-sm">Entrenadores</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-white text-xl lg:text-2xl">+2000 </span>
              <span className="text-gray-500 uppercase text-xs lg:text-sm">Suscripciones</span>
            </div>
            <div className="hidden-figures flex flex-col items-center lg:items-start">
              <span className="text-white text-xl lg:text-2xl">+140 Training Programs</span>
              <span className="text-gray-500 uppercase text-xs lg:text-sm">Programas de entrenamiento</span>
            </div>
          </div>

          <div className="botones flex flex-row gap-4 font-normal mt-[-0.5rem] lg:mt-0 justify-center lg:justify-start">
            <button className="btn text-white bg-orange-500 w-full md:w-32 rounded-[0.25rem]">Start Now</button>
            <button className="btn text-white bg-transparent w-full md:w-32 border-2 border-orange-500 rounded-[0.25rem]">Learn More</button>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="cuadroNaranja right-h lg:flex flex-1 flex-col items-center lg:items-end bg-transparent p-4 rounded-md">
          <div className="right-h-content p-4 hidden md:block new-container" style={{ marginTop: '-0.9375rem' }}>
            <div className="contenedorcorazon hidden md:block">
              <button className='btn-infor mb-4'>+ información</button>
              <div className="heart-rate-container bg-gray-800 p-4 rounded-md mb-[7.1875rem]">
                <div className="heart-rate flex flex-col gap-4 items-start">
                  <img
                    src={coraUrl}
                    alt="Heart Rate"
                    className="w-4 h-4 filter-cora border-2 border-white rounded-full"
                  />
                  <div className="text-gray-500">Heart Rate</div>
                  <div className="text-white text-xl">666 BPM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imágenes Hero */}
        <div className="capas-imagenes hidden lg:block md:block">
          <img src={HerodeHeroUrl} className="herodehero absolute top-10 sm:top-[11.875rem] sm:top-[11.875rem] sm:-translate-y-1/2 sm:right-8 sm:z-20" style={{ width: "46rem" }} />
          <img src={logoWhiteRef} className="fondohero absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-20 sm:w-[12.5%] lg:w-auto lg:left-[24rem] pb-[6.875rem] h-[25rem] hidden md:block" />
        </div>
      </div>
      
      {/* Estilos para tabletas y móviles */}
      <style jsx>{`
    
      `}</style>
    </div>
  );
};

export default Hero;
