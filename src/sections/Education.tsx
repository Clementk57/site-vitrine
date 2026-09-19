import { ArrowUpRightIcon } from '../components/icons'
import { certifications, education } from '../data/portfolio'
import { profile } from '../data/profile'

export function Education() {
  return (
    <section className="section section--education" id="education">
      <div className="section__frame">
        <div className="section-heading section-heading--split">
          <p className="section-label">06 — Formation & certifications</p>
          <div>
            <h2>Étudier. Pratiquer. Approfondir.</h2>
            <p>
              Du BTS en alternance au Master spécialisé en intelligence artificielle,
              mes études s’accompagnent d’une expérience professionnelle au Luxembourg.
            </p>
          </div>
        </div>

        <ol className="education-list" aria-label="Formations, de la plus récente à la plus ancienne">
          {education.map((entry) => (
            <li className="education-record" key={entry.degree}>
              <p className="education-record__period">{entry.period}</p>
              <div>
                <p className="education-record__institution">{entry.context}</p>
                <h3>{entry.degree}</h3>
                <p>{entry.description}</p>
              </div>
              <p className="education-record__note">{entry.note}</p>
            </li>
          ))}
        </ol>

        <div className="certifications" id="certifications">
          <div className="certifications__heading">
            <h3>Certifications Microsoft</h3>
            <a className="text-link" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
              Voir sur LinkedIn <ArrowUpRightIcon />
            </a>
          </div>
          <ul className="certifications__list" aria-label="Certifications, de la plus récente à la plus ancienne">
            {certifications.map((certification) => (
              <li className="certification" key={certification.code}>
                <div className="certification__identity">
                  <span>{certification.issuer}</span>
                  <strong>{certification.code}</strong>
                </div>
                <div>
                  <h4>{certification.title}</h4>
                  <p>Obtenue en {certification.issued}</p>
                  <p className="certification__expiry">Expiration : {certification.expires}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
