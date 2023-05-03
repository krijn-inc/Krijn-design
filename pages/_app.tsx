import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  );
}
