import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const tan = localFont({
  src: [
    {
      path: "../../public/fonts/TAN-MERINGUE.ttf",
      weight: "700",
    },
  ],
  variable: "--font-tan",
});

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
    <html lang="en" className="h-full">
      <body
        className={`h-full bg-black ${montserrat.className} ${tan.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
