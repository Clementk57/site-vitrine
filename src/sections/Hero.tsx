import { getContactLinks, profile } from '../data/profile'
import { ArrowUpRightIcon } from '../components/icons'
import { coreTechnologies } from '../data/portfolio'

export function Hero() {
  const contactLinks = getContactLinks()

  return (
    <section className="hero" id="top">
      <div className="hero__frame">
        <div className="hero__meta">
          <span>Portfolio / {new Date().getFullYear()}</span>
          <span>{profile.location}</span>
        </div>
        <div className="hero__layout">
          <div className="hero__intro">
            <p className="hero__overline">Software Developer</p>
            <h1>Clément<span>.</span></h1>
            <p className="hero__statement">
              Du backend à l’interface.<br />
              <strong>Des logiciels faits pour servir.</strong>
            </p>
            <p className="hero__description">
              Je développe des applications métier avec C#, .NET et React,
              et j’explore les usages concrets de l’intelligence artificielle.
            </p>
            <div className="hero__actions">
              <a className="button button--solid" href="#projects">
                Voir mes projets <ArrowUpRightIcon />
              </a>
              <a className="button button--quiet" href="#contact">Me contacter</a>
            </div>
          </div>
          <aside className="hero__aside" aria-label="Situation actuelle">
            <span className="hero__aside-index" aria-hidden="true">/01</span>
            <dl>
              <div>
                <dt>Aujourd’hui</dt>
                <dd>Développeur logiciel<span>CDD à temps partiel · Luxembourg</span></dd>
              </div>
              <div>
                <dt>En parallèle</dt>
                <dd>Master en IA<span>Avignon Université</span></dd>
              </div>
            </dl>
            <a className="text-link" href="#experience">Mon parcours <ArrowUpRightIcon /></a>
          </aside>
        </div>
        <div className="hero__footer">
          <p>Architecture logicielle / applications métier / IA appliquée</p>
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
        <ul className="technology-rail" aria-label="Technologies principales">
          {coreTechnologies.map((technology) => (
            <li key={technology.name}>
              <span>{technology.field}</span>
              <strong>{technology.name}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
