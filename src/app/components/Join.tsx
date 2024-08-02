import React from 'react';

const Join = () => {
  return (
    <div className="join-container flex px-8 gap-[10rem] pt-[6.25rem]" id="join-us">
      <div className="left-h text-white text-3xl font-bold uppercase relative">
        <hr className="absolute w-[10.5rem] border-2 border-orange rounded-[20%] -m-2"/> {/* Estilos para el <hr> */}
        <div className="flex gap-4 mt-8"> {/* Estilos para el contenedor de texto */}
          <span>Listo para</span>
          <span className="stroke-text">que tu cuerpo</span>
        </div>
        <div className="flex gap-4">
          <span>cambie</span>
          <span className="stroke-text">con nosotros?</span>
        </div>
      </div>
      <div className="right-h flex flex-col items-center mt-6"> {/* Agregada clase mt-6 */}
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className="p-2 border border-gray-300 rounded-md w-full max-w-xs mb-4" /* Estilos para el input */
        />
        <button className="btn btn-j py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300"> {/* Estilos para el botón */}
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Join;
