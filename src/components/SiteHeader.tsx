import { useState } from 'react'

import { CloseIcon, MenuIcon } from './icons'

const navigationItems = [
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projects', label: 'Projets' },
  { href: '#stack', label: 'Stack' },
  { href: '#education', label: 'Formation' },
  { href: '#contact', label: 'Contact' },
] as const

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Retour en haut de la page">
          C.
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav
          aria-label="Navigation principale"
          className="site-nav"
          data-open={isMenuOpen}
          id="primary-navigation"
        >
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-status" href="#contact">
          <span aria-hidden="true"></span>
          Disponible à l’échange
        </a>
      </div>
    </header>
  )
}
