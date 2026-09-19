export type ContactLink = {
  label: string
  href: string
}

export type Experience = {
  period: string
  title: string
  context: string
  summary: string
  themes: readonly string[]
}

export type Project = {
  number: string
  title: string
  eyebrow: string
  description: string
  contribution: string
  technologies: readonly string[]
  note: string
}

export type StackGroup = {
  name: string
  technologies: readonly string[]
}
