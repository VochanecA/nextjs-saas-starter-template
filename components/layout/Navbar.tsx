// components/layout/Navbar.tsx
// This is a Server Component (no "use client")
import Link from "next/link";
import Logo from "@/components/UI/Logo";
import { BsGithub } from "react-icons/bs"; // Keep BsGithub if used directly in Navbar
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import SignInButton from "../auth/SignInButton";
import UserDropdown from "@/components/auth/UserDropdown";
import NavLink from "@/components/layout/NavLink"; // This NavLink is for desktop, doesn't need icons here
import MobileMenu from "@/components/layout/MobileMenu";
import { appName } from "@/lib/app-config";
import getAuth from "@/auth";
import { Dropdown, DropdownMenuItem } from "@/components/UI/Dropdown";
import { BiChevronDown } from "react-icons/bi"; // Keep BiChevronDown if used directly in Navbar

// REMOVE direct icon imports here:
// import { MdOutlineDashboard } from "react-icons/md";
// import { FaFeatherAlt, FaRocket, FaQuestionCircle, FaSignInAlt, FaMoneyBillAlt, FaDatabase } from "react-icons/fa";
// import { type IconType } from "react-icons";

// === IMPORTANT CHANGE HERE ===
export type NavLinkItem = {
  label: string;
  href: string;
  iconName?: string; // Change from IconType to string
};
// =============================


export async function Navbar() {
  const auth = getAuth();
  const user = await auth.user();
  const isSignedIn = !!user;

  const navLinkItems: NavLinkItem[] = [
    {
      label: "Features",
      href: "/#features",
      iconName: "FaFeatherAlt", // Pass icon name as a string
    },
    {
      label: "Get Started",
      href: "/#get-started",
      iconName: "FaRocket", // Pass icon name as a string
    },
    {
      label: "FAQ",
      href: "/#faq",
      iconName: "FaQuestionCircle", // Pass icon name as a string
    },
  ];

  const navDropdownLink: {
    label: string;
    items: DropdownMenuItem[];
  } = {
    label: "Demos",
    items: [
      {
        label: "Auth",
        href: "/signin",
      },
      {
        label: "Subscriptions",
        href: "/pricing",
      },
      {
        label: "Database",
        href: "/database",
      },
    ],
  };

  const mobileMenuLinkItems: NavLinkItem[] = [
    ...navLinkItems,
    ...(navDropdownLink.items as NavLinkItem[]).map((item) => {
      let iconNameComponent: string | undefined; // Change to string
      switch (item.href) {
        case "/signin":
          iconNameComponent = "FaSignInAlt"; // Pass icon name as a string
          break;
        case "/pricing":
          iconNameComponent = "FaMoneyBillAlt"; // Pass icon name as a string
          break;
        case "/database":
          iconNameComponent = "FaDatabase"; // Pass icon name as a string
          break;
      }

      return {
        ...item,
        label: `${item.label} Demo`,
        iconName: iconNameComponent, // Assign the determined icon name
      };
    }),
  ];

  return (
    <div className="sticky top-0 z-10 w-full bg-white px-5 py-4 shadow-subtle dark:bg-gray-900 dark:text-white dark:shadow-gray-950 xl:px-10">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/" className="flex items-center gap-3 font-extrabold">
            <Logo />
            {appName}
          </Link>
        </div>
        <div className="ml-10 hidden flex-1 items-center justify-between md:flex">
          <div className="flex items-center gap-7 text-gray-700">
            {navLinkItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}

            <Dropdown
              menuButton={
                <div className="mr-2 flex items-center text-gray-700 dark:text-gray-200">
                  {navDropdownLink.label}
                  <BiChevronDown />
                </div>
              }
              menuItems={navDropdownLink.items}
            />
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />

            {isSignedIn ? (
              <UserDropdown user={user} />
            ) : (
              <>
                <SignInButton appearance={{ style: "outline", size: "md" }}>
                  Sign in
                </SignInButton>
                <SignInButton step={"register"} appearance={{ size: "md" }}>
                  Sign up
                </SignInButton>
              </>
            )}

            <a
              href="https://github.com/Reflow-HQ/nextjs-saas-starter-template"
              className="text-3xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <MobileMenu
          isSignedIn={isSignedIn}
          navLinkItems={mobileMenuLinkItems}
        />
      </div>
    </div>
  );
}