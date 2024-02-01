'use client'
import CustomCard from "@/components/CustomCard";
import { ThemeProvider, createTheme } from "@mui/material";
import Image from 'next/image'

const theme = createTheme({
  typography: {
    fontFamily: 'var(--orbitron)'
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <main className="flex flex-col items-center justify-between pt-10 pl-1 pr-1">
      <CustomCard />
      <Image src="/satelite.png"
       className="mt-10"
       style={{ filter: "invert(87%) sepia(2%) saturate(4%) hue-rotate(7deg) brightness(90%) contrast(91%)" }}
        width={300}
        height={300}
        alt="ARSAT"></Image>
    </main>
    </ThemeProvider>
  );
}
