"use client"; // Mark as a Client Component to use useState, useEffect, lazy, Suspense

import { useState, lazy, Suspense } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import NavLink from "@/components/layout/NavLink";
import SignInButton from "../auth/SignInButton";
import SignOutButton from "../auth/SignOutButton";
import { type NavLinkItem } from "./Navbar"; // Keep this import for NavLinkItem type
import { type IconType } from "react-icons"; // Import IconType for type safety of the map values


// Lazy load ALL icons that will be used in this component.
// This includes the menu/close/github/auth icons, AND the icons for navLinkItems.
const BiMenu = lazy(() => import("react-icons/bi").then(mod => ({ default: mod.BiMenu })));
const AiOutlineClose = lazy(() => import("react-icons/ai").then(mod => ({ default: mod.AiOutlineClose })));
const BsGithub = lazy(() => import("react-icons/bs").then(mod => ({ default: mod.BsGithub })));
const MdAccountCircle = lazy(() => import("react-icons/md").then(mod => ({ default: mod.MdAccountCircle })));
const GoSignIn = lazy(() => import("react-icons/go").then(mod => ({ default: mod.GoSignIn })));
const GoSignOut = lazy(() => import("react-icons/go").then(mod => ({ default: mod.GoSignOut })));
const MdOutlineAppRegistration = lazy(() => import("react-icons/md").then(mod => ({ default: mod.MdOutlineAppRegistration })));

// Lazy load icons for navLinkItems (based on their string names)
const FaFeatherAlt = lazy(() => import("react-icons/fa").then(mod => ({ default: mod.FaFeatherAlt })));
const FaRocket = lazy(() => import("react-icons/fa").then(mod => ({ default: mod.FaRocket })));
const FaQuestionCircle = lazy(() => import("react-icons/fa").then(mod => ({ default: mod.FaQuestionCircle })));
const FaSignInAlt = lazy(() => import("react-icons/fa").then(mod => ({ default: mod.FaSignInAlt })));
const FaMoneyBillAlt = lazy(() => import("react-icons/fa").then(mod => ({ default: mod.FaMoneyBillAlt })));
const FaDatabase = lazy(() => import("react-icons/fa").then(mod => ({ default: mod.FaDatabase })));


// Create a mapping from iconName string to the lazy-loaded icon component
const iconComponentMap: { [key: string]: IconType } = {
  "FaFeatherAlt": FaFeatherAlt,
  "FaRocket": FaRocket,
  "FaQuestionCircle": FaQuestionCircle,
  "FaSignInAlt": FaSignInAlt,
  "FaMoneyBillAlt": FaMoneyBillAlt,
  "FaDatabase": FaDatabase,
  // Add any other icons you might use by string name
};


export default function MobileMenu({
  isSignedIn,
  navLinkItems,
}: {
  isSignedIn: boolean;
  navLinkItems: NavLinkItem[];
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleCloseMenu = () => setOpen(false);

  const onSignin = () => {
    handleCloseMenu();
    router.push("/profile");
    router.refresh();
  };

  const onSignout = () => {
    handleCloseMenu();
    router.refresh();
  };

  return (
    <div>
      <div className="flex items-center gap-2 md:hidden">
        <ThemeSwitcher />
        <Suspense fallback={<div>...</div>}>
          <BiMenu
            size={30}
            className="cursor-pointer text-gray-800 dark:text-white" // Ensure menu icon is visible
            onClick={() => setOpen((open) => !open)}
            aria-label="Open mobile menu"
          />
        </Suspense>
      </div>

      {/* Overlay - Adjusted for more transparency to show glassmorphism */}
      <div
        className={clsx(
          "fixed bottom-0 left-0 right-0 top-0 bg-black/40 transition-opacity duration-300", // More subtle overlay
          "z-[9999]", // Increased z-index to a very high value
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={handleCloseMenu}
        aria-hidden={!open}
      ></div>

      {/* Mobile Navigation - Glassmorphism applied here */}
      <nav
        className={clsx(
          "fixed bottom-0 right-0 top-0 flex min-w-[300px] flex-col gap-4 p-6 shadow-lg transition-transform duration-300",
          "z-[10000]", // Increased z-index to an even higher value for the menu panel
          "rounded-l-3xl border border-white/20 bg-white/10 backdrop-blur-xl", // Glassmorphism classes
          "dark:border-gray-700/50 dark:bg-gray-800/20", // Dark mode glassmorphism
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Background blobs for depth within the menu */}
        <div className="absolute -top-10 -left-10 h-32 w-32 animate-blob rounded-full bg-blue-400 opacity-20 mix-blend-screen filter blur-xl dark:bg-blue-700"></div>
        <div className="absolute -bottom-10 -right-10 h-36 w-36 animate-blob animation-delay-2000 rounded-full bg-purple-400 opacity-20 mix-blend-screen filter blur-xl dark:bg-purple-700"></div>
        <div className="absolute top-1/3 left-1/4 h-28 w-28 animate-blob animation-delay-4000 rounded-full bg-pink-400 opacity-20 mix-blend-screen filter blur-xl dark:bg-pink-700"></div>

        {/* Content wrapper to ensure text is above blobs */}
        <div className="relative z-10 flex flex-col gap-4 h-full"> {/* Added h-full to fill nav height */}
          <div className="flex justify-end mb-4">
            <Suspense fallback={<div>...</div>}>
              <AiOutlineClose
                size={30}
                className="cursor-pointer text-white dark:text-gray-200" // Adjusted for glassmorphism background
                onClick={handleCloseMenu}
                aria-label="Close mobile menu"
              />
            </Suspense>
          </div>

          {navLinkItems.map((item) => {
            const IconComponent = item.iconName ? iconComponentMap[item.iconName] : undefined;
            return (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={handleCloseMenu}
                className="flex items-center gap-3 text-lg font-medium text-white dark:text-gray-200 hover:text-blue-300 dark:hover:text-blue-400" // Adjusted for glassmorphism background
              >
                <Suspense fallback={<div></div>}>
                  {IconComponent && <IconComponent size={20} />}
                </Suspense>
                {item.label}
              </NavLink>
            );
          })}

          <hr className="my-4 border-white/30 dark:border-gray-600" /> {/* Adjusted border color */}

          {isSignedIn ? (
            <>
              <NavLink
                href="/profile"
                onClick={handleCloseMenu}
                className="flex items-center gap-3 text-lg font-medium text-white dark:text-gray-200 hover:text-blue-300 dark:hover:text-blue-400" // Adjusted for glassmorphism background
              >
                <Suspense fallback={<div></div>}>
                  <MdAccountCircle size={20} />
                </Suspense>
                Account
              </NavLink>
              <SignOutButton
                appearance={{ style: "outline" }}
                onSignout={onSignout}
                className="flex items-center justify-center gap-3 w-full py-2 px-4 border border-blue-300 text-blue-300 rounded-md hover:bg-blue-300 hover:text-gray-900 transition-colors dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900" // Adjusted button colors
              >
                <Suspense fallback={<div></div>}>
                  <GoSignOut size={20} />
                </Suspense>
                Sign out
              </SignOutButton>
            </>
          ) : (
            <>
              <SignInButton
                onSignin={onSignin}
                step="login"
                appearance={{ style: "outline" }}
                className="flex items-center justify-center gap-3 w-full py-2 px-4 border border-blue-300 text-blue-300 rounded-md hover:bg-blue-300 hover:text-gray-900 transition-colors dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900" // Adjusted button colors
              >
                <Suspense fallback={<div></div>}>
                  <GoSignIn size={20} />
                </Suspense>
                Sign in
              </SignInButton>
              <SignInButton
                onSignin={onSignin}
                step="register"
                className="flex items-center justify-center gap-3 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors dark:bg-blue-400 dark:hover:bg-blue-500 dark:text-gray-900" // Adjusted button colors
              >
                <Suspense fallback={<div></div>}>
                  <MdOutlineAppRegistration size={20} />
                </Suspense>
                Sign up
              </SignInButton>
            </>
          )}

          <a
            href="https://github.com/Reflow-HQ/nextjs-saas-starter-template"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 self-center text-white/70 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors" // Adjusted for glassmorphism background
            aria-label="View on GitHub"
          >
            <Suspense fallback={<div></div>}>
              <BsGithub size={30} />
            </Suspense>
          </a>
        </div>
      </nav>
    </div>
  );
}
