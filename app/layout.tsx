import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientBottomNavigation from "../components/ClientBottomNavigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lancaster Summer Family Trip - July 12, 2025",
  description: "A hub for the Lancaster, PA trip organized by Kingdom Life Community Church",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16 pb-16 md:pb-0">{children}</main>
        <ClientBottomNavigation />
        <Footer />
      </body>
    </html>
  );
}
