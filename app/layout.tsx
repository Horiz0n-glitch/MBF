import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Basket Formativo - Capacitación para Entrenadores",
  description: "Cursos especializados en básquet formativo para entrenadores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${anton.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className="font-body bg-background-light text-text-light antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
