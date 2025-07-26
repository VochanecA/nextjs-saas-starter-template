"use client"; // Mark as a Client Component to use useState, useEffect, lazy, Suspense

import { useState, useEffect, lazy, Suspense } from "react";
import clsx from "clsx"; // For conditional classes

// --- Lazy Load Icons for Performance ---
// These icons will only be loaded when the component mounts on the client,
// reducing the initial JavaScript bundle size.
const SiTailwindcss = lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiTailwindcss })));
const SiPrisma = lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiPrisma })));
const SiPaddle = lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiPaddle })));
const SiReact = lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiReact })));
const BsStripe = lazy(() => import("react-icons/bs").then(mod => ({ default: mod.BsStripe })));


export default function Hero() {
  // State to ensure component is mounted on client before rendering dynamic elements
  // This helps prevent hydration mismatches, especially with effects that rely on window/DOM.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render a minimal placeholder on the server and until mounted on client
  if (!mounted) {
    return (
      <div className="relative flex min-h-[500px] w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-900 dark:to-gray-950 p-6 sm:p-10">
        <div className="h-64 w-64 animate-pulse rounded-xl bg-white/10 backdrop-blur-md"></div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white dark:from-gray-900 dark:to-gray-950 sm:p-10 md:min-h-[700px] lg:min-h-[800px]">
      {/* Background elements for depth and glassmorphism effect */}
      <div className="absolute -top-20 -left-20 h-64 w-64 animate-blob rounded-full bg-blue-400 opacity-30 mix-blend-screen filter blur-xl dark:bg-blue-700"></div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-purple-400 opacity-30 mix-blend-screen filter blur-xl dark:bg-purple-700"></div>
      <div className="absolute top-1/4 right-1/4 h-52 w-52 animate-blob animation-delay-4000 rounded-full bg-pink-400 opacity-30 mix-blend-screen filter blur-xl dark:bg-pink-700"></div>

      {/* Main Glassmorphic Container */}
      <div className="relative flex w-full max-w-4xl flex-col items-center rounded-3xl border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-blue-500/30 dark:border-gray-700/50 dark:bg-gray-800/20 dark:hover:shadow-purple-500/30 sm:p-10 md:p-16 lg:p-20">
        {/* Removed z-10 from here. The z-index is no longer needed on this element as it's not meant to stack above other page sections, but rather to contain its own content. */}
        {/* Animated Icon - Reverted to emoji */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/30 bg-white/20 text-5xl shadow-inner shadow-white/10 transition-transform duration-300 hover:scale-105 dark:border-gray-600/30 dark:bg-gray-700/20">
          <span className="rotate-0 text-white drop-shadow-lg">👍️</span>
        </div>

        {/* Headings */}
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
          Next.js <span className="text-blue-300 dark:text-blue-400">SAAS</span>
        </h1>

        <h2 className="mb-4 text-xl font-light text-white/90 drop-shadow-sm sm:text-2xl md:text-3xl">
          Auth and Subscriptions Starter Template for Next.js Apps
        </h2>

        <p className="mb-8 max-w-2xl text-lg text-white/70 drop-shadow-sm sm:text-xl">
          A free and open-source template for supercharging your project with modern authentication and billing.
        </p>

        {/* Call-to-Action Buttons (Optional, but good for a hero) */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-300"
          >
            Get Started
          </a>
          <a
            href="https://github.com/Reflow-HQ/nextjs-saas-starter-template"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/20 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            View on GitHub
          </a>
        </div>

        {/* Tech Stack Icons */}
        <div className="mb-12 flex flex-wrap justify-center gap-x-6 gap-y-4 text-4xl text-white/80 sm:text-5xl">
          <Suspense fallback={<div className="h-10 w-10 animate-pulse rounded-full bg-white/20"></div>}>
            <a target="_blank" href="https://react.dev/" rel="noopener noreferrer" aria-label="React">
              <SiReact className="transition-transform duration-300 hover:scale-110 hover:text-blue-300" />
            </a>
            <a target="_blank" href="https://stripe.com/" rel="noopener noreferrer" aria-label="Stripe">
              <BsStripe className="transition-transform duration-300 hover:scale-110 hover:text-purple-300" />
            </a>
            <a target="_blank" href="https://www.paddle.com/" rel="noopener noreferrer" aria-label="Paddle">
              <SiPaddle className="transition-transform duration-300 hover:scale-110 hover:text-orange-300" />
            </a>
            <a target="_blank" href="https://www.prisma.io/" rel="noopener noreferrer" aria-label="Prisma">
              <SiPrisma className="transition-transform duration-300 hover:scale-110 hover:text-green-300" />
            </a>
            <a target="_blank" href="https://tailwindcss.com/" rel="noopener noreferrer" aria-label="Tailwind CSS">
              <SiTailwindcss className="transition-transform duration-300 hover:scale-110 hover:text-cyan-300" />
            </a>
          </Suspense>
        </div>

        {/* Hero Image (using next/image is generally better, but sticking to img for direct replacement) */}
        {/* Ensure /hero.webp is optimized and responsive */}
        <img
          src="/hero.webp"
          alt="Next.js SAAS Starter Template Screenshot"
          width={800} // Add explicit width and height for layout shift prevention
          height={450} // Adjust based on your image's aspect ratio
          loading="lazy" // Lazy load the image
          className="mt-8 block w-full max-w-[800px] rounded-xl object-cover shadow-2xl transition-transform duration-300 hover:scale-[1.01] dark:hidden"
        />
      </div>
    </div>
  );
}
