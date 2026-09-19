import { education } from '../data/portfolio'

export function Education() {
  return (
    <section className="section section--education" id="education">
      <div className="section__frame">
        <div className="section-heading section-heading--split">
          <p className="section-label">06 — Formation</p>
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
      </div>
    </section>
  )
}
