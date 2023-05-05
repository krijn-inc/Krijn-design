import "@/styles/globals.css";
import "@/styles/globals.scss";

import { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { ThemeProvider } from "@/components/ThemeProvider";

import PlausibleProvider from 'next-plausible'

// Make sure Plausible environment variables are set
if (!process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || !process.env.NEXT_PUBLIC_PLAUSIBLE_CUSTOM || !process.env.NEXT_PUBLIC_PLAUSIBLE_HOSTED) {
  throw new Error("Missing environment variables for Plausible Analytics");
}

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN!;
const plausibleCustom = process.env.NEXT_PUBLIC_PLAUSIBLE_CUSTOM!;
const plausibleHosted = process.env.NEXT_PUBLIC_PLAUSIBLE_HOSTED === "true";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>Krijn Design</title>
      </head>
      <body>
        <PlausibleProvider domain={plausibleDomain} customDomain={plausibleCustom} selfHosted={plausibleHosted}>
          {/* <ClerkProvider> */}
            <ThemeProvider>{children}</ThemeProvider>
          {/* </ClerkProvider> */}
        </PlausibleProvider>
      </body>
    </html>
  );
}
