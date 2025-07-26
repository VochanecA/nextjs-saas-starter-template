"use client";

import { signOut } from "@reflowhq/auth-next/client";
import { Button, ButtonStyleProps } from "../UI/Button";
import { useRouter } from "next/navigation";
import { clsx } from "clsx"; // Import clsx if you plan to use it here, though not strictly needed just for passing className

interface Props {
  children: React.ReactNode;
  appearance?: ButtonStyleProps;
  onSignout?: () => void;
  className?: string; // Add className to the props interface
}

export default function SignOutButton({
  children,
  appearance,
  onSignout,
  className, // Destructure className from props
}: Props) {
  const router = useRouter();

  // You can keep this logic for default onSignout behavior
  const handleSignoutSuccess =
    onSignout ||
    (() => {
      router.push("/");
      router.refresh();
    });

  return (
    <Button
      appearance={appearance}
      onClick={() => signOut({ onSuccess: handleSignoutSuccess })}
      className={className} // Pass the className prop directly to the Button component
    >
      {children}
    </Button>
  );
}