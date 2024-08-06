import React from 'react';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';

const StoreLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default StoreLayout;
