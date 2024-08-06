'use client';
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactoPage = () => {
  return (
    <div className="contacto px-[3.125rem] sm:px-[1.5625rem] md:px-[3.125rem] lg:px-[3.125rem] py-8 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        
        {/* Columna Izquierda: Direcciones y Mapas */}
        <div className="left-column">
          {/* Sede Américas */}
          <div className="sede-americas mb-8">
            <h2 className="text-2xl font-bold text-white uppercase mb-4">Sede Américas</h2>
            <p className="text-xl text-white mb-4">Calle 5 Sur 71d - 84</p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8582486719592!2d-74.14113092583189!3d4.619366295355358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ea5205897c7%3A0xe365bd720f914946!2sCl.%205%20Sur%20%2371d-84%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1722870856540!5m2!1ses!2sco"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Sede Américas"
            ></iframe>
          </div>

          {/* Sede Chía */}
          <div className="sede-chia mb-8">
            <h2 className="text-2xl font-bold text-white uppercase mb-4">Sede Chía</h2>
            <p className="text-xl text-white mb-4">Carrera 3 # 18 - 84 (Aleros de la Sabana)</p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4597101597124!2d-74.05337499566654!3d4.862365531880741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f87f514682991%3A0x92d9caad6d4d22db!2sConjunto%20Aleros%20de%20la%20Sabana%2C%20Ch%C3%ADa%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1722870967314!5m2!1ses!2sco"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Sede Chía"
            ></iframe>
          </div>
        </div>

        {/* Columna Derecha: Información de Contacto */}
        <div className="right-column">
          {/* Información de Contacto */}
          <div className="contact-info">
            <h2 className="text-2xl font-bold text-white uppercase mb-4">Información de Contacto</h2>
            <p className="text-lg text-white mb-6">
              Teléfonos:
              <br />
              Sede Américas: <span className="text-orange-500">+57 1 234 5678</span>
              <br />
              Sede Chía: <span className="text-orange-500">+57 1 876 5432</span>
            </p>
            <p className="text-lg text-white mb-6">
              Redes Sociales:
              <br />
              <a href="https://facebook.com" className="text-orange-500 ml-2" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="inline mr-2" /> Facebook
              </a>
              <br />
              <a href="https://instagram.com" className="text-orange-500 ml-2" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="inline mr-2" /> Instagram
              </a>
              <br />
              <a href="https://wa.me/123456789" className="text-orange-500 ml-2" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="inline mr-2" /> WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
