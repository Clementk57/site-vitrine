import { stackGroups } from '../data/portfolio'

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="section__frame stack">
        <div className="section-heading">
          <p className="section-label">05 — Stack</p>
          <h2>Du code au déploiement.</h2>
        </div>

        <div className="stack__layout">
          <div className="stack__featured">
            <p className="stack__featured-label">Mon socle technique</p>
            <p aria-label="C sharp" className="stack__featured-mark">
              C#
            </p>
            <p className="stack__featured-title">.NET, au quotidien.</p>
            <p>
              APIs, logique métier, traitements asynchrones et intégration d’IA.
              React pour les interfaces, Docker pour les environnements conteneurisés.
            </p>
          </div>

          <div className="stack__groups">
            {stackGroups.map((group) => (
              <section className="stack-group" key={group.name}>
                <h3>{group.name}</h3>
                <ul>
                  {group.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
