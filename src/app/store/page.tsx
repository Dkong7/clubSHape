'use client';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  details: string;
}

const productsData: Product[] = [
  {
    id: 1,
    name: 'Producto 1',
    price: 199.99,
    image: '/images/producto1.jpg',
    description: 'Descripción breve del Producto 1',
    details: 'Detalles extendidos del Producto 1...',
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 299.99,
    image: '/images/producto2.jpg',
    description: 'Descripción breve del Producto 2',
    details: 'Detalles extendidos del Producto 2...',
  },
  {
    id: 3,
    name: 'Producto 3',
    price: 399.99,
    image: '/images/producto3.jpg',
    description: 'Descripción breve del Producto 3',
    details: 'Detalles extendidos del Producto 3...',
  },
  {
    id: 4,
    name: 'Producto 4',
    price: 499.99,
    image: '/images/producto4.jpg',
    description: 'Descripción breve del Producto 4',
    details: 'Detalles extendidos del Producto 4...',
  },
];

const StorePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="store-page py-8 px-4 sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-3xl font-bold text-center mb-8">Tienda Online</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="product-list col-span-1 lg:col-span-2">
          {productsData.map((product) => (
            <div key={product.id} className="product-card bg-white p-4 rounded-lg shadow-md mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover mb-4 rounded-md cursor-pointer"
                onClick={() => handleProductClick(product)}
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-orange-500">${product.price}</p>
              <button
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleProductClick(product)}
              >
                Ver Detalles
              </button>
            </div>
          ))}
        </div>

        <div className="product-details col-span-1">
          {selectedProduct ? (
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
              <p className="text-lg mb-2">{selectedProduct.details}</p>
              <p className="text-lg font-bold text-orange-500">${selectedProduct.price}</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
                <FaShoppingCart className="mr-2" /> Agregar al Carrito
              </button>
              <button
                className="mt-4 ml-4 bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => setSelectedProduct(null)}
              >
                Cerrar
              </button>
            </div>
          ) : (
            <p className="text-center text-gray-500">Selecciona un producto para ver los detalles.</p>
          )}
        </div>
      </div>

      <div className="social-icons mt-8 flex justify-center space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 text-2xl" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-600 text-2xl" />
        </a>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-600 text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default StorePage;
