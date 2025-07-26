// components/Card.tsx
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  // Removed 'background' prop as glassmorphism inherently provides a background effect
  children: ReactNode;
}

export default function Card({
  // Removed 'background' from destructuring
  className, // Keep className
  children,
}: Props) {
  return (
    <div
      className={clsx(
        "relative h-full w-full rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-blue-500/30 dark:border-gray-700/50 dark:bg-gray-800/20 dark:hover:shadow-purple-500/30",
        // The previous conditional background and hover styles are replaced by the glassmorphism styles
        className // Apply any additional classes passed to the Card
      )}
    >
      {children}
    </div>
  );
}
