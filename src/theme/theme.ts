/**
 * Theme preference helpers: storage, OS detection, and DOM application.
 *
 * Preference is `light` | `dark` | `system`. Only `light` | `dark` is applied
 * to `document.documentElement` via `data-theme`.
 */

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme-pref";

/**
 * Reads the OS color-scheme preference.
 *
 * @returns `"dark"` if the system prefers dark mode, otherwise `"light"`.
 */
export function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Turns a stored preference into a concrete light/dark theme.
 *
 * @param pref - User preference (`light`, `dark`, or `system`).
 * @returns Resolved theme to apply to the document.
 */
export function resolveTheme(pref: ThemePreference): ResolvedTheme {
  return pref === "system" ? getSystemTheme() : pref;
}

/**
 * Reads the theme preference from localStorage.
 *
 * @returns Stored preference, or `"system"` when missing/invalid.
 */
export function getStoredPreference(): ThemePreference {
  const value = localStorage.getItem(THEME_STORAGE_KEY);
  if (value === "light" || value === "dark" || value === "system") return value;
  return "system";
}

/**
 * Applies a resolved theme to the document root.
 *
 * @param resolved - `"light"` or `"dark"` to set on `data-theme` and `color-scheme`.
 * @returns Nothing.
 */
export function applyTheme(resolved: ResolvedTheme): void {
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
}
