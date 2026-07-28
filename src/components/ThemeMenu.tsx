/**
 * Nav dropdown to choose light, dark, or system theme.
 */

import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

/**
 * Renders a Theme button and a menu of light / dark / system options.
 *
 * @returns Theme toggle button and option menu.
 */
export function ThemeMenu() {
  const [open, setOpen] = useState(false);
  const { preference, setPreference } = useTheme();

  return (
    <div className="theme-menu">
      <button
        type="button"
        className="theme-menu__toggle"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
      >
        Theme
      </button>

      {open && (
        <ul className="theme-menu__list" role="menu">
          {(["light", "dark", "system"] as const).map((option) => (
            <li key={option} role="none">
              <button
                type="button"
                role="menuitemradio"
                aria-checked={preference === option}
                className={`theme-menu__option${preference === option ? " theme-menu__option--active" : ""}`}
                onClick={() => {
                  setPreference(option);
                  setOpen(false);
                }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
