import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return <SignUp afterSignUpUrl="/" path="/sign-up" routing="path" signInUrl="/sign-up" />;
}
