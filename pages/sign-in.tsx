import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function SignInPage() {
  const theme = useTheme();

  const baseTheme = theme.systemTheme === "dark" ? dark : undefined;

  return (
    <div className="grid h-screen place-items-center">
      <SignIn afterSignInUrl="/" path="/sign-in" routing="path" signUpUrl="/sign-up" appearance={{ baseTheme }} />
    </div>
  );
}
