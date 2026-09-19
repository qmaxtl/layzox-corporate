"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "layzox-theme";
type Theme = "light" | "dark";

function storedTheme(): Theme | null {
  try {
    const saved = window.localStorage.getItem(THEME_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

/** Keep the prepaint theme in sync with system preferences and other tabs. */
export function ThemeInitializer() {
  useLayoutEffect(() => {
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = () => {
      applyTheme(storedTheme() ?? (systemPreference.matches ? "dark" : "light"));
    };
    const syncStorage = (event: StorageEvent) => {
      if (event.key === THEME_KEY || event.key === null) syncTheme();
    };
    // React Strict Mode can restore HTML attributes during its development remount.
    syncTheme();
    systemPreference.addEventListener("change", syncTheme);
    window.addEventListener("storage", syncStorage);
    return () => {
      systemPreference.removeEventListener("change", syncTheme);
      window.removeEventListener("storage", syncStorage);
    };
  }, []);
  return null;
}

export function ThemeToggle() {
  const toggle = () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      // Theme switching works when the browser disallows persistent storage.
    }
  };
  return (
    <button type="button" onClick={toggle} className="theme-toggle">
      <Moon size={17} className="theme-when-light" aria-hidden="true" />
      <Sun size={17} className="theme-when-dark" aria-hidden="true" />
      <span className="visually-hidden theme-when-light">Switch to dark mode</span>
      <span className="visually-hidden theme-when-dark">Switch to light mode</span>
    </button>
  );
}
