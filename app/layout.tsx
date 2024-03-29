import type { Metadata } from "next";
import { Roboto_Mono } from 'next/font/google'
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";

const orbitron: NextFontWithVariable = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  display: "swap",
  variable: '--orbitron',
})

export const metadata: Metadata = {
  title: "ars2sat",
  description: "Conversor de pesos falsificados a satoshis",
  icons: {
    icon: '/satelite-blue.png',
  },
  openGraph: {
    title: 'ars2sat',
    description: 'Conversor de pesos falsificados a satoshis',
    type: "website",
    url: 'https://ars2sat.vercel.app',
    siteName: "ars2sat",
    images: [{
      url: 'https://ars2sat.vercel.app/satelite-blue.png',
    }],
  },
  metadataBase: new URL("https://ars2sat.vercel.app")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <body className="orbitron">{children}</body>
      <GoogleAnalytics gaId="G-L31DKJ1WDV" />
    </html>
  );
}
