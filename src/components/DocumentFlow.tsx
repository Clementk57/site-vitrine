export function DocumentFlow() {
  return (
    <figure className="document-flow" aria-labelledby="document-flow-caption">
      <div className="document-flow__header">
        <span>.NET / Semantic Kernel</span>
        <span aria-hidden="true">01</span>
      </div>
      <div className="document-flow__body">
        <div className="document-flow__source">
          <span className="document-flow__label">Point de départ</span>
          <strong>Un corpus documentaire.</strong>
          <span>Import · Knowledge bases</span>
        </div>
        <div className="document-flow__branches">
          <div>
            <span className="document-flow__label">Interroger</span>
            <strong>Recherche sémantique</strong>
            <span className="document-flow__connector" aria-hidden="true">↓</span>
            <strong>Conversations</strong>
            <span>Réponses en streaming</span>
          </div>
          <div>
            <span className="document-flow__label">Structurer</span>
            <strong>Templates d’extraction</strong>
            <span className="document-flow__connector" aria-hidden="true">↓</span>
            <strong>Données JSON</strong>
            <span>Extraction structurée</span>
          </div>
        </div>
      </div>
      <figcaption id="document-flow-caption">Deux usages d’un même corpus · schéma de principe</figcaption>
    </figure>
  )
}
