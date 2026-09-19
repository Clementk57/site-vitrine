import { stackGroups } from '../data/portfolio'

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="section__frame stack">
        <div className="section-heading">
          <p className="section-label">05 — Stack</p>
          <h2>Des outils choisis pour servir le problème.</h2>
        </div>

        <div className="stack__layout">
          <div className="stack__featured">
            <p className="stack__featured-label">Technologie principale</p>
            <p aria-label="C sharp" className="stack__featured-mark">
              C#
            </p>
            <p>
              Un écosystème que j’apprécie pour la solidité de son outillage, la lisibilité de ses
              abstractions et son efficacité dans les applications métier.
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
