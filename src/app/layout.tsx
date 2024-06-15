import Footer from "./ui/footer";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";


import "./globals.css";

import { NavBar } from "./ui/nav-bar";

const montserrat = Montserrat({ subsets: ["latin"], weight: '600' });

export const metadata: Metadata = {
  title: `MFP`,
  description: `MFP`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="min-h-screen bg-black">
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
