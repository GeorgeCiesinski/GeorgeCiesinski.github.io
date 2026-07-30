/**
 * Theme React context and consumer hook.
 *
 * Separated from `ThemeProvider.tsx` so that file only exports a component
 * (satisfies `react-refresh/only-export-components`). Pair with
 * `ThemeProvider` in the tree; call `useTheme` from descendants.
 */

import { createContext, useContext } from "react";
import { type ThemePreference } from "./theme";

type ThemeContextValue = {
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
};

/** Shared context; value is set by `ThemeProvider`, read by `useTheme`. */
export const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Reads the current theme preference and updater from `ThemeContext`.
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
