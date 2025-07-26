// components/layout/Footer.tsx
import Link from "next/link";
import Logo from "@/components/UI/Logo"; // Assuming Logo is a client component or doesn't use client-side hooks
import clsx from "clsx"; // Import clsx for conditional classes

export default async function Footer() {
  return (
    <div className="relative flex w-full flex-col items-center gap-4 px-5 py-7 md:px-10 md:py-10
                    bg-gradient-to-br from-blue-500 to-purple-600 text-white overflow-hidden
                    dark:from-gray-900 dark:to-gray-950">
      {/* Background elements for depth and glassmorphism effect, similar to Hero and Features */}
      {/* Ensure 'animate-blob' and 'animation-delay-*' are defined in your tailwind.config.js */}
      <div className="absolute -top-10 -left-10 h-48 w-48 animate-blob rounded-full bg-blue-400 opacity-20 mix-blend-screen filter blur-xl dark:bg-blue-700"></div>
      <div className="absolute -bottom-10 -right-10 h-56 w-56 animate-blob animation-delay-2000 rounded-full bg-purple-400 opacity-20 mix-blend-screen filter blur-xl dark:bg-purple-700"></div>
      <div className="absolute top-1/2 left-1/3 h-40 w-40 animate-blob animation-delay-4000 rounded-full bg-pink-400 opacity-20 mix-blend-screen filter blur-xl dark:bg-pink-700"></div>

      {/* Content wrapper to ensure it stays above background blobs */}
      <div className="relative z-10 flex w-full flex-col items-center gap-4">
        <Logo className="text-white drop-shadow-sm" /> {/* Added text-white to Logo for visibility */}
        <nav className="flex flex-wrap justify-center gap-3 font-semibold sm:gap-4 sm:text-lg text-white/90"> {/* Adjusted text color */}
          <Link href="/pricing" className="hover:text-blue-200 transition-colors">Pricing</Link>
          <Link href="/privacy" className="hover:text-blue-200 transition-colors">Privacy</Link>
            <Link href="/refund" className="hover:text-blue-200 transition-colors">Refund</Link>
          <Link href="/terms" className="hover:text-blue-200 transition-colors">Terms</Link>
          <Link href="mailto:example@example.com" target="_blank" className="hover:text-blue-200 transition-colors">
            Contact
          </Link>
        </nav>
        <p className="text-white/70"> {/* Adjusted text color */}
          Company © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
