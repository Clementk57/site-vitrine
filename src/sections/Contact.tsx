import { ArrowUpRightIcon } from '../components/icons'
import { getContactLinks } from '../data/profile'

export function Contact() {
  const contactLinks = getContactLinks()

  return (
    <section className="section section--contact" id="contact">
      <div className="section__frame contact">
        <p className="section-label">Contact</p>
        <div className="contact__layout">
          <div>
            <h2>Parlons du prochain sujet exigeant.</h2>
            <p>
              Je reste intéressé par les produits utiles, les problématiques d’architecture et les
              échanges autour de l’intelligence artificielle appliquée.
            </p>
          </div>

          {contactLinks.length > 0 ? (
            <ul className="contact__links">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <span>{link.label}</span>
                    <ArrowUpRightIcon />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="contact__placeholder">
              Les coordonnées de contact seront ajoutées prochainement.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
