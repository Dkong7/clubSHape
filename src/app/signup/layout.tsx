// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar"; // Asegúrate de la correcta importación del Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Club Shape",
  description: "All Shapes fit Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Navbar en la parte superior del layout */}
        {children} {/* Contenido de las páginas */}
        <Footer /> {/* Footer al final del layout */}
      </body>
    </html>
  );
}
