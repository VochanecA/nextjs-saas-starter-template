// components/Features.tsx
// This component can remain a Server Component as it doesn't use client-side hooks or browser APIs directly.
import Card from "./Card"; // Ensure this import path is correct

type Feature = {
  title: string;
  icon: string; // Assuming these are emoji characters
  description: string;
};

const features: Feature[] = [
  {
    icon: "🚀",
    title: "Get Started in Minutes",
    description:
      "Kickstart your next project and focus on building your application instead of configuring tools.",
  },
  {
    icon: "🔓",
    title: "Secure Authentication",
    description:
      "Comes with seamless Reflow integration for user accounts and social sign in. No coding required!",
  },
  {
    icon: "💳",
    title: "Flexible Subscriptions",
    description:
      "Connect your Reflow PRO account and start selling in no time! Supports flexible pricing plans, free trials, and more. Payments by Stripe or Paddle.",
  },
  {
    icon: "👩‍💻",
    title: "Great for Developers",
    description:
      "A modern tech stack that makes development a breeze! Comes with TypeScript, Prisma and Tailwind configured and ready to go.",
  },
  {
    icon: "⚡",
    title: "Amazing Performance",
    description:
      "Built with Next.js 14 for top-notch performance and great SEO results. Deploy anywhere with confidence and deliver a smooth user experience.",
  },
  {
    icon: "✨",
    title: "Open Source",
    description:
      "Fully customizable and open-source under the MIT license. Grab the code on GitHub and modify or extend the functionality as needed!",
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card className="h-full flex flex-col justify-between"> {/* Added h-full and flex for consistent card height/layout */}
      <h3 className="mb-4 text-2xl font-bold text-white drop-shadow-sm"> {/* Changed text color for glassmorphism */}
        <span className="mr-2">{feature.icon}</span> {feature.title}
      </h3>
      <p className="text-white/80">{feature.description}</p> {/* Changed text color for glassmorphism */}
    </Card>
  );
}

export default function Features() {
  return (
    <div
      className="relative flex w-full flex-col items-center overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 px-5 py-24 text-white dark:from-gray-900 dark:to-gray-950" // Changed background to gradient
      id="features"
    >
      {/* Background elements for depth and glassmorphism effect, similar to Hero */}
      {/* Ensure 'animate-blob' and 'animation-delay-*' are defined in your tailwind.config.js */}
      <div className="absolute -top-10 -left-10 h-48 w-48 animate-blob rounded-full bg-blue-400 opacity-20 mix-blend-screen filter blur-xl dark:bg-blue-700"></div>
      <div className="absolute -bottom-10 -right-10 h-56 w-56 animate-blob animation-delay-2000 rounded-full bg-purple-400 opacity-20 mix-blend-screen filter blur-xl dark:bg-purple-700"></div>
      <div className="absolute top-1/2 left-1/3 h-40 w-40 animate-blob animation-delay-4000 rounded-full bg-pink-400 opacity-20 mix-blend-screen filter blur-xl dark:bg-pink-700"></div>

      {/* Content wrapper to ensure it stays above background blobs */}
      <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-center">
        <p className="mb-5 rounded-full border border-white/50 px-3 py-1 text-sm text-white backdrop-blur-sm"> {/* Adjusted styling for glassmorphism */}
          Features
        </p>
        <h2 className="mb-8 text-3xl font-bold text-white drop-shadow-sm sm:mb-12 sm:text-4xl"> {/* Adjusted text color */}
          What's included
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
