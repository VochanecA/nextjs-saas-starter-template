// components/layout/NavLink.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // Import clsx

// Define the props interface for NavLink
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // Add className as an optional prop
}

export default function NavLink({ href, onClick, children, className }: NavLinkProps) {
  const currentPath = usePathname();
  const active = currentPath === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      // Use clsx to combine the default styles with the passed className
      className={clsx(
        active
          ? "font-semibold text-black dark:text-white"
          : "text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100",
        className // This is where the magic happens: apply the external className
      )}
    >
      {children}
    </Link>
  );
}