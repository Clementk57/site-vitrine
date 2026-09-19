import { experiences } from '../data/portfolio'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__frame">
        <div className="section-heading section-heading--split">
          <p className="section-label">03 — Expérience</p>
          <div>
            <h2>Une expérience construite dans la durée.</h2>
            <p>
              Du développement quotidien à la fiabilité des déploiements, avec une attention
              constante aux contraintes d’un environnement professionnel.
            </p>
          </div>
        </div>

        <ol className="experience-timeline">
          {experiences.map((experience) => (
            <li className="experience-item" key={experience.title}>
              <div className="experience-item__period">{experience.period}</div>
              <div className="experience-item__content">
                <p className="experience-item__context">{experience.context}</p>
                <h3>{experience.title}</h3>
                <p>{experience.summary}</p>
                <ul aria-label={`Compétences associées à ${experience.title}`} className="tag-list">
                  {experience.themes.map((theme) => (
                    <li key={theme}>{theme}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
