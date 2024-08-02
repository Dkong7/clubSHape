import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "./components/Hero"; // Importa el componente Hero
import { Navbar } from "../app/components/Navbar";
import  Programs  from "../app/components/Programs";
import  Reasons  from "../app/components/Reasons";
import  Planes  from "../app/components/Planes";
import Testimonials from "./components/Testimonials";
import Join from "./components/Join";
import Footer from "./components/Footer";

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

        {children}


      </body>
    </html>
  );
}
