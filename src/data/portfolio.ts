import type { Experience, Project, StackGroup } from '../types/portfolio'

export const experiences: readonly Experience[] = [
  {
    period: '4 ans',
    title: 'Parcours en alternance',
    context: 'Développement logiciel · applications métier',
    summary:
      'Une première expérience longue au contact de produits utilisés au quotidien : maintenance, évolution fonctionnelle et construction de bases techniques durables.',
    themes: ['C#', '.NET', 'APIs', 'SQL', 'Testing'],
  },
  {
    period: 'Aujourd’hui',
    title: 'Software Developer · Luxembourg',
    context: 'CDD · logiciels d’entreprise',
    summary:
      'Conception et évolution de solutions professionnelles où l’architecture, l’automatisation, la fiabilité et la compréhension du métier comptent autant que le code.',
    themes: ['ASP.NET Core', 'CI/CD', 'Observabilité', 'IA appliquée'],
  },
]

export const projects: readonly Project[] = [
  {
    number: '01',
    eyebrow: 'Intelligence artificielle appliquée',
    title: 'Plateforme documentaire augmentée',
    description:
      'Un environnement de travail pour interroger, structurer et exploiter des corpus documentaires sans perdre le contexte métier.',
    contribution:
      'Knowledge bases, import de documents, recherche sémantique, conversations contextualisées, streaming de réponses et extraction de données structurées.',
    technologies: ['C#', '.NET', 'Semantic Kernel', 'RAG', 'LLM', 'Hangfire'],
    note: 'Travail présenté sans nom de produit ni données internes.',
  },
  {
    number: '02',
    eyebrow: 'Logiciel d’entreprise',
    title: 'Plateforme métier multi-domaines',
    description:
      'Un socle applicatif qui relie fonctionnalités RH, opérations financières, reporting et production documentaire.',
    contribution:
      'Évolution d’API, génération de documents, orchestration de traitements asynchrones, permissions, tests et maintenance fonctionnelle.',
    technologies: ['.NET', 'EF Core', 'MediatR', 'SQL', 'Azure DevOps'],
    note: 'Périmètre fonctionnel volontairement généralisé.',
  },
  {
    number: '03',
    eyebrow: 'Fiabilité & exploitation',
    title: 'Application métier critique',
    description:
      'Un produit où la continuité de service, la lecture des signaux techniques et le soin apporté au déploiement sont des enjeux concrets.',
    contribution:
      'Investigation d’incidents, télémétrie, analyse de performances, déploiements, migration de serveurs et amélioration des pipelines.',
    technologies: ['Linux', 'CI/CD', 'REST APIs', 'Testing', 'Performance'],
    note: 'Aucun client ni élément d’infrastructure n’est divulgué.',
  },
  {
    number: '04',
    eyebrow: 'Recherche universitaire',
    title: 'Agents IA & processus métier',
    description:
      'Une exploration académique des usages réalistes des agents IA dans l’entreprise et de leur capacité à améliorer les processus existants.',
    contribution:
      'Veille technologique, cadrage de cas d’usage et réflexion sur l’intégration responsable de systèmes agentiques.',
    technologies: ['AI Agents', 'RAG', 'Architecture', 'Processus métier'],
    note: 'Travail de recherche et d’exploration, non présenté comme un produit déployé.',
  },
]

export const stackGroups: readonly StackGroup[] = [
  {
    name: 'Backend',
    technologies: ['.NET', 'ASP.NET Core', 'Entity Framework Core', 'MediatR'],
  },
  {
    name: 'AI',
    technologies: ['Semantic Kernel', 'RAG', 'LLM', 'AI Agents', 'Extraction structurée'],
  },
  {
    name: 'Frontend',
    technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    name: 'Data',
    technologies: ['SQL', 'SQL Server'],
  },
  {
    name: 'DevOps',
    technologies: ['Azure DevOps', 'CI/CD', 'Git', 'Linux'],
  },
  {
    name: 'Quality',
    technologies: ['Tests unitaires', 'Tests d’intégration', 'E2E Testing', 'SonarQube'],
  },
]
