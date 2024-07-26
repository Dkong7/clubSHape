import React from 'react';
import { Navbar } from "../components/Navbar";

const Hero = () => {
  return (
    <div className="hero px-4 md:px-8 lg:px-16">
      <div className="left-h">
        <Navbar />

        <div className="hero-banner mt-0.5 bg-customGray rounded-lg w-full max-w-md lg:max-w-3xl text-white relative flex items-center justify-start mx-auto ml-0 pt-2 pb-2">
          <div className="banner-bar absolute top-0 left-0 h-full w-12 bg-orange-500 z-10 rounded-lg"></div>
          <span className="ml-4 z-20 text-base lg:text-lg">All Shapes Fit Here</span>
        </div>

        <div className="hero-text flex flex-col gap-6 md:gap-4 lg:gap-6 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white overflow-hidden">
          <div>
            <span className="stroke-text">All</span>
            <span className="stroke-text">Shapes</span>
          </div>
          <div>Fit Here</div>
          <div className="extra-text text-sm sm:text-xs font-light normal-case tracking-wide w-4/5 mx-auto ml-0">
            Transform your life today!
          </div>
        </div>

        <div className="figures flex flex-col lg:flex-row gap-4 lg:gap-8 mt-6">
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-white text-2xl lg:text-3xl">+140 Trainers</span>
            <span className="text-gray-500 uppercase text-sm lg:text-base">Entrenadores</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-white text-2xl lg:text-3xl">+2000 Subscriptions</span>
            <span className="text-gray-500 uppercase text-sm lg:text-base">Suscripciones</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-white text-2xl lg:text-3xl">+140 Training Programs</span>
            <span className="text-gray-500 uppercase text-sm lg:text-base">Programas de entrenamiento</span>
          </div>
        </div>

        <div className="botones-hero flex gap-4 font-normal">
          <button className="btn text-white bg-orange-500 w-32">Start Now</button>
          <button className="btn text-white bg-transparent w-32 border-2 border-orange-500">Learn More</button>
        </div>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
};

export default Hero;
