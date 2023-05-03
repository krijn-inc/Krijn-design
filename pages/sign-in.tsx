import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn afterSignInUrl="/" path="/sign-in" routing="path" signUpUrl="/sign-up" />;
}
