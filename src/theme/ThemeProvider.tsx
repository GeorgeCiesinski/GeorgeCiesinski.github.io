/**
 * Theme preference provider component.
 *
 * Syncs preference to the DOM and localStorage, and follows OS appearance
 * when preference is `"system"`. Context and `useTheme` live in
 * `theme-context.ts` so this file only exports a component (Fast Refresh).
 */

import { useEffect, useState, type ReactNode } from "react";
import {
  applyTheme,
  getStoredPreference,
  resolveTheme,
  THEME_STORAGE_KEY,
  type ThemePreference,
} from "./theme";
import { ThemeContext } from "./theme-context";

/**
 * Provides theme preference state to descendants via `ThemeContext`.
 *
 * @param props - Component props.
 * @param props.children - Tree that can call `useTheme` from `theme-context`.
 * @returns Context provider wrapping `children`.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(() =>
    getStoredPreference(),
  );

  useEffect(() => {
    if (preference !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      applyTheme(resolveTheme("system"));
    };

    media.addEventListener("change", onChange);
    // Cleanup
    return () => media.removeEventListener("change", onChange);
  }, [preference]);

  // Sync DOM + localStorage whenever preference changes (including mount)
  useEffect(() => {
    applyTheme(resolveTheme(preference));
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  }, [preference]);

  const setPreference = (next: ThemePreference) => {
    setPreferenceState(next);
  };

  return (
    <ThemeContext.Provider value={{ preference, setPreference }}>
      {children}
    </ThemeContext.Provider>
  );
}
