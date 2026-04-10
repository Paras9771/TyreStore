"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import TopBar from "@/components/layout/TopBar";
import ContactBar from "@/components/layout/ContactBar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// 👇 IMPORT CART PROVIDER
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>

          <TopBar />
          <ContactBar />
          <Navbar />

          {children}

          <Footer />

        </CartProvider>

      </body>
    </html>
  );
}