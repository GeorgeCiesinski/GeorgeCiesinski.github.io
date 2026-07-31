/**
 * Site header navigation with responsive mobile menu.
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeMenu } from "./ThemeMenu";

const SECTION_IDS = ["about", "projects", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

/** Sticky site header with mobile collapse and primary navigation. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<SectionId | null>(null);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const close = () => setOpen(false);

  useEffect(() => {
    if (!isHome) {
      setActiveId(null);
      return;
    }

    const updateActive = () => {
      // Match sticky nav height ($nav-height: 5rem) plus a little slack.
      const offset = parseFloat(getComputedStyle(document.documentElement).fontSize) * 5 + 8;
      let current: SectionId | null = null;

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        // Last section whose top has crossed under the nav wins.
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }

      // Top of page: About sits below the nav so its top may not have crossed yet.
      if (current === null) {
        current = "about";
      }

      // Short last section: there may not be enough scroll room for its top to
      // reach the nav. When the page bottom is in view, activate Contact.
      const nearBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 80;
      if (nearBottom) {
        current = SECTION_IDS[SECTION_IDS.length - 1];
      }

      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [isHome]);

  const handleNavClick = (id: SectionId) => {
    close();
    setActiveId(id);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link className="navbar__brand" to="/" onClick={close}>
          <img src="/img/favicon.svg" alt="" />
          <div className="navbar__brand-text">
            <span className="navbar__title"> George Ciesinski</span>
            <span className="navbar__subtitle">Software Developer</span>
          </div>
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
          {/* Hash links so in-page section anchors work from any route. */}
          <li>
            <a
              className={`navbar__link${activeId === "about" ? " navbar__link--active" : ""}`}
              href="/#about"
              onClick={() => handleNavClick("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`navbar__link${activeId === "projects" ? " navbar__link--active" : ""}`}
              href="/#projects"
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={`navbar__link${activeId === "contact" ? " navbar__link--active" : ""}`}
              href="/#contact"
              onClick={() => handleNavClick("contact")}
            >
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
