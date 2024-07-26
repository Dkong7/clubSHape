'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { storage } from '../../../firebase'
import { getDownloadURL, ref } from 'firebase/storage';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [logoUrl, setLogoUrl] = useState("");
    const [language, setLanguage] = useState('en'); // Default language

    useEffect(() => {
        const logoRef = ref(storage, 'LOGOTIPO-WHITE.png');
        getDownloadURL(logoRef)
            .then((url) => {
                setLogoUrl(url);
            })
            .catch((error) => {
                console.error("Error al obtener la URL de la imagen:", error);
            });
    }, []);

    const changeLanguage = () => {
        setLanguage((prevLang) => prevLang === 'en' ? 'es' : 'en');
    };

    function getMenuClasses() {
        return isOpen ?
            "flex flex-col absolute top-[60px] bg-gray-800 w-full p-4 left-0 gap-10 md:hidden" :
            "hidden md:flex";
    }

    return (
        <nav className="bg-gray-800 bg-opacity-10 text-white p-4 sm:p-6 md:flex md:justify-between">
            <div className="container mx-auto flex justify-between items-center">
                <a href="" className="text-2xl font-bold">
                    {logoUrl ? <img src={logoUrl} alt="Logo" className="h-8" /> : "CLUB SHAPE"}
                </a>
                <div className={getMenuClasses()}>
                    <Link href="/" className="mx-2 hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/tienda" className="mx-2 hover:text-gray-300">
                        Store
                    </Link>
                    <Link href="/contacto" className="mx-2 hover:text-gray-300">
                        Contact
                    </Link>
                    <div className="flex items-center gap-2">
                        <button 
                            className="btn text-white bg-orange-500 w-32 flex items-center justify-center gap-2"
                            onClick={changeLanguage}
                        >
                            {language === 'en' ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0L15.09 7.82L23.61 9.08L17.27 14.14L18.18 22.24L12 18.37L5.82 22.24L6.73 14.14L0.39 9.08L8.91 7.82L12 0Z" fill="#0052FF"/>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0L15.09 7.82L23.61 9.08L17.27 14.14L18.18 22.24L12 18.37L5.82 22.24L6.73 14.14L0.39 9.08L8.91 7.82L12 0Z" fill="#FF0000"/>
                                </svg>
                            )}
                            {language === 'en' ? 'ES' : 'EN'}
                        </button>
                        <button className="btn text-white bg-orange-500 w-36">
                            Login
                        </button>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6m6 6L18 18"></path>
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};
