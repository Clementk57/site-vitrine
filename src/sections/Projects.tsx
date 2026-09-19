import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section className="section section--projects" id="projects">
      <div className="section__frame">
        <div className="section-heading section-heading--split">
          <p className="section-label">04 — Selected work</p>
          <div>
            <h2>Projets sélectionnés.</h2>
            <p>
              Des sujets techniques menés dans des contextes professionnels ou universitaires,
              présentés sans compromettre la confidentialité des environnements concernés.
            </p>
          </div>
        </div>

        <ol className="projects-list">
          {projects.map((project) => (
            <li key={project.number}>
              <article className="project">
                <p aria-hidden="true" className="project__number">
                  {project.number}
                </p>
                <div className="project__main">
                  <p className="project__eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project__description">{project.description}</p>
                </div>
                <div className="project__detail">
                  <p>{project.contribution}</p>
                  <ul aria-label={`Technologies utilisées pour ${project.title}`} className="tag-list">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
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
