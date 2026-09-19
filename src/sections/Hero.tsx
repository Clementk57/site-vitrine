import { getContactLinks, profile } from '../data/profile'
import { ArrowUpRightIcon } from '../components/icons'

export function Hero() {
  const contactLinks = getContactLinks()

  return (
    <section className="hero" id="top">
      <div className="hero__frame">
        <div className="hero__meta hero__meta--top">
          <span>01 — 06</span>
          <span>Software engineering</span>
        </div>

        <div className="hero__name-wrap">
          <p className="hero__overline">Portfolio personnel · 2026</p>
          <h1>CLÉMENT</h1>
          <div className="hero__rule" aria-hidden="true"></div>
        </div>

        <div className="hero__content">
          <p className="hero__statement">
            Je conçois des applications <strong>.NET robustes</strong> et des solutions qui rendent
            l’intelligence artificielle réellement utile.
          </p>

          <div className="hero__details">
            <p>{profile.location}</p>
            <p>{profile.specialty}</p>
          </div>
        </div>

        <div className="hero__footer">
          <div className="hero__actions">
            <a className="button-link button-link--solid" href="#projects">
              Voir mes projets
              <ArrowUpRightIcon />
            </a>
            <a className="button-link button-link--quiet" href="#contact">
              Me contacter
            </a>
          </div>

          {contactLinks.length > 0 ? (
            <ul aria-label="Liens de profil" className="hero__socials">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  )
}
