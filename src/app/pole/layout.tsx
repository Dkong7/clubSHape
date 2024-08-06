// app/pole-dance/layout-pole-dance.tsx
import React from 'react';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function PoleDanceLayout({
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
