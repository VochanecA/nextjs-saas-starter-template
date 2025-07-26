// components/UI/Logo.tsx
import clsx from "clsx"; // Import clsx for combining classes
import { HTMLAttributes } from "react"; // Import HTMLAttributes for standard div props

interface LogoProps extends HTMLAttributes<HTMLDivElement> { // Extend HTMLAttributes to accept standard div props like className
  // className?: string; // className is now included via HTMLAttributes
}

export default function Logo({ className, ...props }: LogoProps) { // Destructure className and rest of props
  return (
    <div
      className={clsx(
        "shadow-blue flex h-[34px] w-[35px] -rotate-6 items-center justify-center rounded-[6px] bg-[linear-gradient(90deg,#edeffb,#e4e6fa)] text-lg",
        className // Apply the passed className here
      )}
      {...props} // Pass through any other standard HTML attributes
    >
      <span className="rotate-6">💰</span>
    </div>
  );
}
