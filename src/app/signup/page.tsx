'use client';
import React, { useEffect, useState } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Signup: React.FC = () => {
  const [logoUrl, setLogoUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    const logoRef = ref(storage, 'LOGOTIPO-WHITE.png');
    getDownloadURL(logoRef)
      .then((url) => {
        setLogoUrl(url);
      })
      .catch((error) => {
        console.error("Error al obtener la URL del logotipo:", error);
      });
  }, []);

  return (
    <div className="signup-container min-h-screen flex items-center justify-center bg-gradient-to-b from-[rgb(var(--background-start-rgb))] to-[rgb(var(--background-end-rgb))] dark:bg-custom-dark-gray">
      <div className="signup-box w-full max-w-md p-8 space-y-8 rounded-lg shadow-md bg-customDarkGray">
        <div className="logo-container flex justify-center cursor-pointer" onClick={() => router.push('/')}>
          {logoUrl && <img src={logoUrl} alt="Logo" className="h-12 mb-4" />}
        </div>
        <h2 className="signup-title text-2xl font-bold text-center text-custom-dark-text dark:text-custom-light-text">Registrarse</h2>
        <form className="signup-form mt-8 space-y-6">
          <div className="input-group -space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">Correo Electrónico</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-field appearance-none rounded-none relative block w-full px-3 py-2 border border-custom-border dark:border-custom-border-dark placeholder-custom-placeholder dark:placeholder-custom-placeholder-dark text-custom-dark-text dark:text-custom-light-text rounded-t-md focus:outline-none focus:ring-custom-focus dark:focus:ring-custom-focus-dark focus:border-custom-focus-border dark:focus:border-custom-focus-border-dark focus:z-10 sm:text-sm"
                placeholder="Correo Electrónico"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input-field appearance-none rounded-none relative block w-full px-3 py-2 border border-custom-border dark:border-custom-border-dark placeholder-custom-placeholder dark:placeholder-custom-placeholder-dark text-custom-dark-text dark:text-custom-light-text rounded-b-md focus:outline-none focus:ring-custom-focus dark:focus:ring-custom-focus-dark focus:border-custom-focus-border dark:focus:border-custom-focus-border-dark focus:z-10 sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirmar Contraseña</label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="input-field appearance-none rounded-none relative block w-full px-3 py-2 border border-custom-border dark:border-custom-border-dark placeholder-custom-placeholder dark:placeholder-custom-placeholder-dark text-custom-dark-text dark:text-custom-light-text rounded-b-md focus:outline-none focus:ring-custom-focus dark:focus:ring-custom-focus-dark focus:border-custom-focus-border dark:focus:border-custom-focus-border-dark focus:z-10 sm:text-sm"
                placeholder="Confirmar Contraseña"
              />
            </div>
          </div>
          <div className="signup-button">
            <button
              type="submit"
              className="botonBoton bg-orange-500 text-white group relative w-full flex justify-center py-2 px-4 text-sm rounded-md"
            >
              Registrarse
            </button>
          </div>
          <div className="signin-link text-sm text-center">
            <Link href="/login" className="font-medium text-custom-primary dark:text-custom-primary-dark hover:text-custom-primary-hover dark:hover:text-custom-primary-hover-dark">
              ¿Ya tienes una cuenta? Inicia sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
