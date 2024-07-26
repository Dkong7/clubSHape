import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "./components/Hero"; // Importa el componente Hero

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
        <Hero /> {/* Agrega el componente Hero aquí */}
        {children}
      </body>
    </html>
  );
}
