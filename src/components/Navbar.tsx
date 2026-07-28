/**
 * Site header navigation with responsive mobile menu.
 */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeMenu } from "./ThemeMenu";

/** Sticky site header with mobile collapse and primary navigation. */
export function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link className="navbar__brand" to="/" onClick={close}>
          <img src="/img/logo.svg" alt="" />
          George Ciesinski
        </Link>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          ☰
        </button>

        <ul
          id="primary-nav"
          className={`navbar__links${open ? " navbar__links--open" : ""}`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                `navbar__link${isActive ? " navbar__link--active" : ""}`
              }
              to="/"
              end
              onClick={close}
            >
              Home
            </NavLink>
          </li>
          {/* Hash links so in-page anchors work from any route; Home uses NavLink. */}
          <li>
            <a className="navbar__link" href="/#projects" onClick={close}>
              Projects
            </a>
          </li>
          <li>
            <a className="navbar__link" href="/#contact" onClick={close}>
              Contact Me
            </a>
          </li>
          <li>
            <ThemeMenu />
          </li>
        </ul>
      </div>
    </header>
  );
}
