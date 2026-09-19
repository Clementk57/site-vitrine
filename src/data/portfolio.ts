import type { Education, Experience, Project, StackGroup } from '../types/portfolio'

export const experiences: readonly Experience[] = [
  {
    id: 'current-cdd',
    period: 'Aujourd’hui',
    title: 'Développeur logiciel',
    context: 'CDD à temps partiel · Luxembourg',
    summary:
      'Je poursuis mon activité de développement logiciel au Luxembourg, à temps partiel, en parallèle de mon Master Informatique, parcours Intelligence Artificielle, à Avignon Université.',
    themes: ['C# / .NET', 'Applications métier', 'IA appliquée'],
    current: true,
  },
  {
    id: 'full-time-cdd',
    period: '1 an',
    title: 'Développeur logiciel',
    context: 'CDD à temps plein · Luxembourg',
    summary:
      'Une année consacrée à plein temps au développement logiciel en entreprise, après le bachelor et avant le passage à temps partiel.',
    themes: [],
  },
  {
    id: 'bachelor-cdd',
    period: 'Pendant le bachelor',
    title: 'Développement logiciel en CDD',
    context: 'CDD · Luxembourg',
    summary:
      'Poursuite du parcours professionnel sous contrat à durée déterminée, en parallèle de la préparation du bachelor.',
    themes: [],
  },
  {
    id: 'bts-apprenticeship',
    period: '2 ans',
    title: 'Développeur en apprentissage',
    context: 'Alternance pendant le BTS · Luxembourg',
    summary:
      'Deux années d’apprentissage en entreprise au Luxembourg pendant le BTS : les premiers pas professionnels en développement logiciel, au contact d’applications métier.',
    themes: [],
  },
]

export const education: readonly Education[] = [
  {
    degree: 'Master Informatique',
    period: '2026 — actuellement',
    context: 'Avignon Université',
    description: 'Parcours Intelligence Artificielle',
    note: 'En parallèle d’un CDD à temps partiel au Luxembourg.',
  },
  {
    degree: 'Bachelor',
    period: 'Après le BTS',
    context: 'Études & activité professionnelle',
    description: 'Formation suivie en parallèle d’un CDD.',
    note: 'Activité professionnelle au Luxembourg.',
  },
  {
    degree: 'BTS',
    period: '2 ans',
    context: 'Formation en alternance',
    description: 'Deux années sous contrat d’apprentissage.',
    note: 'Expérience en entreprise au Luxembourg.',
  },
]

export const coreTechnologies = [
  { name: 'C#', field: 'Langage principal' },
  { name: '.NET', field: 'Backend & API' },
  { name: 'React', field: 'Interfaces web' },
  { name: 'Docker', field: 'Conteneurs' },
] as const

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
    note: 'Contribution · développement .NET & intégration IA',
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
    note: 'Contribution · développement & maintenance évolutive',
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
    note: 'Contribution · maintenance & exploitation',
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
    note: 'Recherche universitaire · exploration, non déployée',
  },
]

export const stackGroups: readonly StackGroup[] = [
  {
    name: 'Backend',
    technologies: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'MediatR', 'Hangfire'],
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
    technologies: ['Docker', 'Azure DevOps', 'CI/CD', 'Git', 'Linux'],
  },
  {
    name: 'Quality',
    technologies: ['Tests unitaires', 'Tests d’intégration', 'E2E Testing', 'SonarQube'],
  },
]
