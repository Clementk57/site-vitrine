export function About() {
  return (
    <section className="section section--about" id="about">
      <div className="section__frame about">
        <div className="section-heading">
          <p className="section-label">02 — À propos</p>
          <h2>Une pratique tournée vers les produits qui durent.</h2>
        </div>

        <div className="about__body">
          <p className="about__lead">
            Développeur logiciel spécialisé dans l’écosystème .NET, j’évolue depuis près de cinq
            années au sein de contextes métier réels.
          </p>
          <div className="about__copy">
            <p>
              Mon parcours a commencé en alternance avant de se poursuivre au Luxembourg. J’y
              contribue à des applications professionnelles en conciliant qualité du code,
              compréhension des usages et sens de la maintenance.
            </p>
            <p>
              En parallèle, je poursuis un Master Informatique — parcours Intelligence
              Artificielle — à Avignon Université. J’explore avec exigence les architectures, les
              systèmes distribués, les API et les usages concrets du RAG comme des agents IA.
            </p>
          </div>
        </div>

        <dl className="about__facts">
          <div>
            <dt>Expérience</dt>
            <dd>≈ 5 années</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Architecture & produits métier</dd>
          </div>
          <div>
            <dt>Formation</dt>
            <dd>Master IA · Avignon Université</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
