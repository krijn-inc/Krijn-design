import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

import PlausibleProvider from 'next-plausible'

// Make sure Plausible environment variables are set
if (!process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || !process.env.NEXT_PUBLIC_PLAUSIBLE_CUSTOM || !process.env.NEXT_PUBLIC_PLAUSIBLE_HOSTED) {
  throw new Error("Missing environment variables for Plausible Analytics");
}

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN!;
const plausibleCustom = process.env.NEXT_PUBLIC_PLAUSIBLE_CUSTOM!;
const plausibleHosted = process.env.NEXT_PUBLIC_PLAUSIBLE_HOSTED === "true";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain={plausibleDomain} customDomain={plausibleCustom} selfHosted={plausibleHosted}>
      <ClerkProvider {...pageProps}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
        </ThemeProvider>
      </ClerkProvider>
    </PlausibleProvider>
  );
}
