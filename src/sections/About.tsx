export function About() {
  return (
    <section className="section section--about" id="about">
      <div className="section__frame about">
        <div className="section-heading">
          <p className="section-label">02 — À propos</p>
          <h2>Le logiciel, côté métier.</h2>
        </div>

        <div className="about__body">
          <p className="about__lead">
            Développeur logiciel spécialisé dans l’écosystème .NET, j’évolue depuis près de cinq
            années au sein de contextes métier réels.
          </p>
          <div className="about__copy">
            <p>
              J’ai commencé par deux ans d’apprentissage au Luxembourg pendant mon BTS,
              puis travaillé en CDD pendant mon bachelor. Après un an de CDD à temps plein,
              je poursuis aujourd’hui cette activité à temps partiel.
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
