"use client";

import React, { useEffect, useState } from "react";
import { Row, ToggleButton, useTheme } from "@once-ui-system/core";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, [theme]);

  const icon = currentTheme === "dark" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={() => {
        // update Once UI context
        setTheme(nextTheme);
        // persist and sync with document root so Tailwind `dark:` and global CSS react
        try {
          localStorage.setItem('data-theme', nextTheme);
          document.documentElement.setAttribute('data-theme', nextTheme);
          if (nextTheme === 'dark') document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
          setCurrentTheme(nextTheme);
        } catch (e) {
          // ignore in SSR or disabled storage environments
        }
      }}
      aria-label={`Switch to ${nextTheme} mode`}
      size="l"
    />
  );
};