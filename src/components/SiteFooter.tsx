import { getContactLinks, profile } from '../data/profile'

export function SiteFooter() {
  const contactLinks = getContactLinks()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          {profile.name} <span>—</span> {profile.role}
        </p>
        <p>© {year}</p>
        {contactLinks.length > 0 ? (
          <ul aria-label="Liens de contact">
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
    </footer>
  )
}
