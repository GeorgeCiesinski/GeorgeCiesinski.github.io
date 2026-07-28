/**
 * React context for theme preference (light / dark / system).
 *
 * Keeps `document.documentElement` and localStorage in sync with the
 * user's preference, and follows OS appearance changes when preference
 * is "system".
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  applyTheme,
  getStoredPreference,
  resolveTheme,
  THEME_STORAGE_KEY,
  type ThemePreference,
} from "./theme";

type ThemeContextValue = {
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
};

/** Null until a ThemeProvider mounts — lets useTheme detect misuse. */
const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Reads the current theme preference and updater from context.
 *
 * @returns Preference (`light` | `dark` | `system`) and `setPreference`.
 * @throws {Error} If called outside a `ThemeProvider`.
 */
export function useTheme(): ThemeContextValue {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return value;
}

/**
 * Provides theme preference state to descendants and syncs it to the DOM
 * and localStorage. When preference is `system`, also listens for OS
 * appearance changes.
 *
 * @param props - Component props.
 * @param props.children - Tree that can call `useTheme`.
 * @returns Context provider wrapping `children`.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(() => getStoredPreference());

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
