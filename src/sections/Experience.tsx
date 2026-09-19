import { experiences } from '../data/portfolio'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__frame">
        <div className="section-heading section-heading--split">
          <p className="section-label">03 — Expérience</p>
          <div>
            <h2>Du terrain, à chaque étape.</h2>
            <p>
              Aujourd’hui à temps partiel au Luxembourg, après une année à temps plein.
              Un parcours professionnel construit en parallèle de mes études.
            </p>
          </div>
        </div>

        <ol className="experience-timeline" aria-label="Expériences, de la plus récente à la plus ancienne">
          {experiences.map((experience) => (
            <li className="experience-item" data-current={experience.current} key={experience.id}>
              <div className="experience-item__period">{experience.period}</div>
              <div className="experience-item__content">
                <p className="experience-item__context">{experience.context}</p>
                <h3>{experience.title}</h3>
                <p>{experience.summary}</p>
                {experience.themes.length > 0 && <ul aria-label={`Compétences associées à ${experience.title}`} className="tag-list">
                  {experience.themes.map((theme) => (
                    <li key={theme}>{theme}</li>
                  ))}
                </ul>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
