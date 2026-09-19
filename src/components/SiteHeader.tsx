import { useRef, useState } from 'react'

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
  const menuButton = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu()
        menuButton.current?.focus()
      }
    }} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) closeMenu()
    }}>
      <div className="site-header__inner">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Clément — retour en haut de la page">
          <span className="wordmark__monogram" aria-hidden="true">C.</span>
          <span className="wordmark__name">Clément</span>
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
          ref={menuButton}
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

        <span className="header-location">Luxembourg / France</span>
      </div>
    </header>
  )
}
