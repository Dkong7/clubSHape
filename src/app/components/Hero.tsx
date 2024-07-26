'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from "../components/Navbar";
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const Hero = () => {
  const [fondoHeroUrl, setFondoHeroUrl] = useState("");
  const [HerodeHeroUrl, setHerodeHeroUrl] = useState("");
  const [coraUrl, setCoraUrl] = useState("");

  useEffect(() => {
    const fondoHeroRef = ref(storage, 'fondo-hero.png');
    const HerodeHeroRef = ref(storage, 'herodehero.png');
    const coraRef = ref(storage, 'orange-heart-svgrepo-com.svg');

    getDownloadURL(fondoHeroRef)
      .then((url) => {
        setFondoHeroUrl(url);
      })
      .catch((error) => {
        console.error("Error al obtener la URL de fondo-hero.png:", error);
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
      <Navbar />
      <div className="hero-content flex flex-col lg:flex-row justify-between relative">
        {/* Lado Izquierdo */}
        <div className="left-h flex-1">
          <div className="hero-banner mt-0.5 bg-customGray rounded-lg w-full max-w-md lg:max-w-3xl text-white relative flex items-center justify-start mx-auto ml-0 pt-2 pb-2">
            <div className="banner-bar absolute top-0 left-0 h-full w-12 bg-orange-500 z-10 rounded-lg slide-right-to-left"></div>
            <span className="ml-4 z-20 text-lg md:text-xl lg:text-2xl">All Shapes Fit Here</span>
          </div>
          <div className="hero-text flex flex-col gap-6 md:gap-4 lg:gap-6 uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white overflow-hidden mx-auto lg:text-left text-center">
            <div className="flex flex-col lg:items-start items-center">
              <span className="stroke-text text-4xl sm:text-5xl md:text-6xl lg:text-6xl">All</span>
              <span className="stroke-text text-4xl sm:text-5xl md:text-6xl lg:text-6xl">Shapes</span>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Fit Here</div>
            <div className="extra-text text-sm sm:text-xs font-light normal-case tracking-wide w-4/5 mx-auto sm:ml-10">
              Transform your life today!
            </div>
          </div>
          <div className="custom-container flex flex-col lg:flex-row gap-4 lg:gap-8 mt-6 z-20 hidden md:flex">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-white text-2xl lg:text-3xl">+140 Trainers</span>
              <span className="text-gray-500 uppercase text-sm lg:text-base">Entrenadores</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-white text-2xl lg:text-3xl">+2000 Subscriptions</span>
              <span className="text-gray-500 uppercase text-sm lg:text-base">Suscripciones</span>
            </div>
            <div className="hidden-figures flex flex-col items-center lg:items-start">
              <span className="text-white text-2xl lg:text-3xl">+140 Training Programs</span>
              <span className="text-gray-500 uppercase text-sm lg:text-base">Programas de entrenamiento</span>
            </div>
          </div>
          <div className="botonesflex flex-row gap-4 font-normal">
            <button className="btn text-white bg-orange-500 w-full md:w-32">Start Now</button>
            <button className="btn text-white bg-transparent w-full md:w-32 border-2 border-orange-500">Learn More</button>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="cuadroNaranja right-h lg:flex flex-1 flex-col items-center lg:items-end bg-transparent p-4 rounded-md">
          <div className="right-h-content p-4 hidden md:block">
            <button className='btn mb-4'>+ información</button>
            <div className="heart-rate-container bg-gray-800 p-4 rounded-md">
              <div className="heart-rate flex flex-col gap-4 items-start">
                <img src={coraUrl} alt="Heart Rate" className="w-4 h-4 filter-cora" /> {/* Ajustar tamaño */}
                <div className="text-gray-500">Heart Rate</div>
                <div className="text-white text-xl">666 BPM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Imágenes Hero */}
        <div className="capas-imagenes hidden lg:block">
          <img src={HerodeHeroUrl} className="herodehero absolute top-10 sm:top-1/2 sm:-translate-y-1/2 sm:right-8 sm:z-20" style={{ width: "46rem" }} />
          <img src={fondoHeroUrl} className="fondohero absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-20 sm:w-[12.5%] lg:w-auto lg:left-[35rem]" />
        </div>
      </div>
      
      {/* Estilos para tabletas */}
      <style jsx>{`
        @media (min-width: 768px) and (max-width: 1024px) {
          .herodehero {
            opacity: 0.7;
          }
          .hero-banner {
            width: calc(100% - 2rem); /* Ajustar el padding según sea necesario */
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
