import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

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
          className={`navbar__links${open ? ' navbar__links--open' : ''}`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
              to="/"
              end
              onClick={close}
            >
              Home
            </NavLink>
          </li>
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
        </ul>
      </div>
    </header>
  )
}
