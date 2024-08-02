// app/quienes/layout-quienes.tsx
import React from 'react';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function QuienesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
