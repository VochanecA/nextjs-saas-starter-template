// components/UI/Button.tsx
"use client";

import { ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
  appearance?: ButtonStyleProps;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

export interface ButtonStyleProps {
  style?: "primary" | "outline" | "danger" | "muted" | "solid"; // Added "solid" to the union type
  size?: "sm" | "md" | "lg";
  fontWeight?: "light" | "medium" | "bold";
}

export function Button({
  onClick,
  type = "button",
  appearance = {},
  disabled = false,
  children,
  className,
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick && onClick(e);
  };

  // Base styles applied to all buttons
  const baseStyles = "w-fit text-sm enabled:hover:shadow-md disabled:opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Styles for different button appearances
  const primaryStyles = "bg-blue-600 text-white shadow-md hover:bg-blue-700 dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-300";
  const outlineStyles = "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900";
  const dangerStyles = "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-rose-500 hover:to-red-500";
  const mutedStyles = "bg-gray-400 text-white hover:bg-gray-600";
  // New solid style, aligning with Hero's "Get Started" button's white background in light mode
  // and blue-400 in dark mode, ensuring consistency with the glassmorphism theme.
  const solidStyles = "bg-white text-blue-600 shadow-lg hover:bg-gray-100 hover:shadow-xl dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-300";


  return (
    <button
      className={clsx(
        baseStyles,
        // Apply appearance-specific styles based on the 'style' prop
        {
          [primaryStyles]: !appearance.style || appearance.style === "primary", // Default or 'primary'
          [outlineStyles]: appearance.style === "outline",
          [dangerStyles]: appearance.style === "danger",
          [mutedStyles]: appearance.style === "muted",
          [solidStyles]: appearance.style === "solid", // Apply solid styles when 'solid' is specified
        },
        // Apply font weight styles
        {
          "font-bold": !appearance.fontWeight || appearance.fontWeight === "bold",
          "font-medium": appearance.fontWeight === "medium",
          "font-light": appearance.fontWeight === "light",
        },
        // Apply size styles
        {
          "rounded-full px-8 py-3": !appearance.size || appearance.size === "lg",
          "rounded-full px-6 py-2": appearance.size === "md",
          "rounded-lg px-2 py-1 text-xs": appearance.size === "sm",
        },
        className // Apply any additional classes passed from parent components
      )}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
