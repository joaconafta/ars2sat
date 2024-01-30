'use client'
import CustomCard from "@/components/CustomCard";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'var(--orbitron)'
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <main className="flex min-h-screen flex-col items-center justify-between pt-10 pl-1 pr-1">
      <CustomCard />
    </main>
    </ThemeProvider>
  );
}
