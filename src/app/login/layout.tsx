import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
