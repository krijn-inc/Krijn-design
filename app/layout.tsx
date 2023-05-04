import "@/styles/globals.css";

import { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>Krijn Design</title>
      </head>
      <body>
        <ClerkProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
