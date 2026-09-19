import { projects } from '../data/portfolio'
import { DocumentFlow } from '../components/DocumentFlow'

export function Projects() {
  return (
    <section className="section section--projects" id="projects">
      <div className="section__frame">
        <div className="section-heading section-heading--split">
          <p className="section-label">04 — Projets sélectionnés</p>
          <div>
            <h2>Des sujets concrets.<br />Des choix techniques.</h2>
            <p>
              Quatre contributions, de l’application métier à la recherche universitaire.
              Les projets d’entreprise sont présentés sous des noms génériques.
            </p>
          </div>
        </div>

        <ol className="projects-list">
          {projects.map((project, index) => (
            <li key={project.number}>
              <article className={`project${index === 0 ? ' project--featured' : ''}`}>
                <p aria-hidden="true" className="project__number">
                  {project.number}
                </p>
                <div className="project__main">
                  <p className="project__eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project__description">{project.description}</p>
                </div>
                {index === 0 && <DocumentFlow />}
                <div className="project__detail">
                  <ul aria-label={`Technologies utilisées pour ${project.title}`} className="tag-list">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <details className="project__disclosure">
                    <summary>Contributions techniques<span className="project__toggle" aria-hidden="true">+</span></summary>
                    <p>{project.contribution}</p>
                  </details>
                  <p className="project__note">{project.note}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
