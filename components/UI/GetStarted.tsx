// components/GetStarted.tsx
// This component can remain a Server Component as it doesn't use client-side hooks or browser APIs directly.
import Card from "./Card"; // Ensure this import path is correct
import Link from "next/link";
import SignInButton from "../auth/SignInButton";
import { Button } from "./Button"; // Ensure this import path is correct

export default function GetStarted() {
  return (
    <div
      className="relative flex w-full flex-col items-center overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500 px-5 py-24 text-white dark:from-gray-950 dark:to-gray-900" // Changed background to a new gradient
      id="get-started"
    >
      {/* Background elements for depth and glassmorphism effect, similar to Hero and Features */}
      {/* Ensure 'animate-blob' and 'animation-delay-*' are defined in your tailwind.config.js */}
      <div className="absolute -top-10 -right-10 h-48 w-48 animate-blob rounded-full bg-purple-400 opacity-20 mix-blend-screen filter blur-xl dark:bg-purple-700"></div>
      <div className="absolute -bottom-10 -left-10 h-56 w-56 animate-blob animation-delay-2000 rounded-full bg-pink-400 opacity-20 mix-blend-screen filter blur-xl dark:bg-pink-700"></div>
      <div className="absolute top-1/2 right-1/4 h-40 w-40 animate-blob animation-delay-4000 rounded-full bg-blue-400 opacity-20 mix-blend-screen filter blur-xl dark:bg-blue-700"></div>

      {/* Content wrapper to ensure it stays above background blobs */}
      <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-center">
        <p className="mb-5 rounded-full border border-white/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
          Get Started
        </p>
        <h2 className="mb-8 text-3xl font-bold text-white drop-shadow-sm sm:mb-12 sm:text-4xl">
          Check out the features in action
        </h2>

        <div className="grid w-full max-w-[600px] grid-cols-1 gap-8 text-center">
          {/* Card 1: User Authentication */}
          <Card className="flex flex-col justify-between p-8"> {/* Adjusted padding and flex for better layout */}
            <h3 className="mb-4 text-2xl font-bold text-white drop-shadow-sm">User Authentication</h3>
            <p className="mb-4 text-white/80">
              This starter kit uses{" "}
              <a className="text-blue-300 hover:text-blue-200 transition-colors" href="https://reflowhq.com" target="_blank" rel="noopener noreferrer"> {/* Adjusted link styling */}
                Reflow
              </a>{" "}
              for handling user auth. It supports standard email + password
              accounts, as well social media sign in using Google, Facebook and
              Apple among others.
            </p>
            <p className="mb-4 text-white/80">
              Try signing in using the button below:
            </p>
            <SignInButton appearance={{ style: "solid", size: "md" }} className="w-fit self-center"> {/* Added styling and center alignment */}
              Demo Sign In
            </SignInButton>
          </Card>

          {/* Card 2: Subscriptions */}
          <Card className="flex flex-col justify-between p-8"> {/* Adjusted padding and flex for better layout */}
            <h3 className="mb-4 text-2xl font-bold text-white drop-shadow-sm">Subscriptions</h3>
            <p className="mb-4 text-white/80">
              Subscriptions are provided by{" "}
              <a className="text-blue-300 hover:text-blue-200 transition-colors" href="https://reflowhq.com" target="_blank" rel="noopener noreferrer"> {/* Adjusted link styling */}
                Reflow
              </a>
              , which takes care of recurring billing, subscription management and
              handling webhooks. You can choose between Stripe and Paddle as your
              payment provider.
            </p>
            <p className="mb-4 text-white/80">
              Visit the pricing page and try subscribing (it's free):
            </p>
            <Link href="/pricing" className="w-fit self-center"> {/* Added styling and center alignment */}
              <Button appearance={{ style: "primary", size: "md" }}>Pricing Page Demo</Button>
            </Link>
          </Card>

          {/* Card 3: Database Integration */}
          <Card className="flex flex-col justify-between p-8"> {/* Adjusted padding and flex for better layout */}
            <h3 className="mb-4 text-2xl font-bold text-white drop-shadow-sm">Database Integration</h3>
            <p className="mb-4 text-white/80">
              Connect to your database using{" "}
              <a
className="text-blue-300 hover:text-blue-200 transition-colors" /* Adjusted link styling */


                target="_blank"
                href="https://www.prisma.io/"
                rel="noopener noreferrer"
              >
                Prisma
              </a>
              . It supports all major DB types and offers an unmatched developer
              experience with easy migrations and an excellent ORM.
            </p>
            <p className="mb-4 text-white/80">
              Check out an example integration in the database demo:
            </p>
            <Link href="/database" className="w-fit self-center"> {/* Added styling and center alignment */}
              <Button appearance={{ style: "primary", size: "md" }}>Database Demo</Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
