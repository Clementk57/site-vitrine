export type ContactLink = {
  label: string
  href: string
}

export type Experience = {
  id: string
  period: string
  title: string
  context: string
  summary: string
  themes: readonly string[]
  current?: boolean
}

export type Education = {
  degree: string
  period: string
  context: string
  description: string
  note: string
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

export type Certification = {
  code: string
  title: string
  issuer: string
  issued: string
  expires: string
}

export type StackGroup = {
  name: string
  technologies: readonly string[]
}
