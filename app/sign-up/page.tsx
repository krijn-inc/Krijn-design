"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function SignUpPage() {
  const theme = useTheme();

  const baseTheme = theme.systemTheme === "dark" ? dark : undefined;

  return (
    <div className="grid h-screen place-items-center">
      <SignUp afterSignUpUrl="/" path="/sign-up" routing="path" signInUrl="/sign-in" appearance={{ baseTheme }} />
    </div>
  );
}
