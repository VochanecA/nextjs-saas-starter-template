"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";
import clsx from "clsx";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [changeThemeValue, setChangeThemeValue] = useState<string>();

  useEffect(() => {
    // This effect determines the value to switch TO...I think,must test
    setChangeThemeValue(theme === "dark" ? "light" : "dark");
  }, [theme]);

  // The second useEffect from original code is redundant and can be removed.
  // The first useEffect correctly sets `changeThemeValue`.
  // The logic for `checkDarkTheme` is handled by `next-themes` internally for initial setup.

  return (
    <button
      className={clsx(
        "-ml-3 flex h-8 w-8 items-center justify-center rounded-full",
        "text-gray-700 dark:text-white", // Ensures visibility in both light and dark modes
      )}
      onClick={() => setTheme(changeThemeValue ?? "dark")} // Use changeThemeValue or default to 'dark'
      aria-label={`Switch to ${changeThemeValue} theme`} // Accessible label
    >
      <BiMoon
        className={clsx({ hidden: theme !== "dark", block: theme === "dark" })}
        size={20}
      />
      <BiSun
        className={clsx({ block: theme !== "dark", hidden: theme === "dark" })}
        size={20}
      />
    </button>
  );
}
