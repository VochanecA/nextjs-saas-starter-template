// components/auth/SignInButton.tsx
"use client";

import { signIn } from "@reflowhq/auth-next/client";
import { Button, ButtonStyleProps } from "../UI/Button";
import { useRouter } from "next/navigation";
import { clsx } from "clsx"; // Import clsx if you plan to use it here, though not strictly needed just for passing className

interface Props {
  children: React.ReactNode;
  appearance?: ButtonStyleProps;
  onSignin?: () => void;
  onError?: () => void;
  step?: "login" | "register";
  className?: string; // Add className to the props interface
}

export default function SignInButton({
  children,
  appearance,
  onSignin,
  onError,
  step,
  className, // Destructure className from props
}: Props) {
  const router = useRouter();

  // Refactored to a named function for clarity and consistent prop passing
  const handleSignInSuccess =
    onSignin ||
    (() => {
      router.push("/profile");
      router.refresh();
    });

  return (
    <Button
      appearance={appearance}
      onClick={() => signIn({ onSignin: handleSignInSuccess, onError, step })}
      className={className} // Pass the className prop directly to the Button component
    >
      {children}
    </Button>
  );
}