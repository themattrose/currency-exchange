import { SafeHydrate } from "@/components/SafeHydrate";
import { useThemeProvider } from "@/hooks/useThemeProvider";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useThemeProvider();
  return (
    <SafeHydrate>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SafeHydrate>
  );
}
