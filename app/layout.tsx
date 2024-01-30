import type { Metadata } from "next";
import { Bitter, Cute_Font, Exo_2, Orbitron, Roboto_Mono } from 'next/font/google'
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

import "./globals.css";

const orbitron: NextFontWithVariable = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  display: "swap",
  variable: '--orbitron',
})

export const metadata: Metadata = {
  title: "ars2sat",
  description: "Conversor de ARS a Satoshis",
  icons: {
    icon: '/satelite-blue.png',
  },
  openGraph: {
    title: 'ars2sat',
    description: 'Conversor de ARS a Satoshis',
    type: "website",
    url: 'https://ars2sat.vercel.app',
    siteName: "ars2sat",
    images: [{
      url: '/satelite-blue.png',
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <body className="orbitron">{children}</body>
    </html>
  );
}
