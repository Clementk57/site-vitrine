import type { ContactLink } from '../types/portfolio'

export const profile = {
  name: 'Clément',
  role: 'Software Developer',
  location: 'Luxembourg / France',
  specialty: 'C# · .NET · Intelligence artificielle',
  contact: {
    email: '',
    github: '',
    linkedin: 'https://www.linkedin.com/in/clement-kontzler-dev/',
  },
} as const

export function getContactLinks(): ContactLink[] {
  const candidates: Array<ContactLink | null> = [
    profile.contact.email
      ? { label: 'Email', href: `mailto:${profile.contact.email}` }
      : null,
    profile.contact.linkedin
      ? { label: 'LinkedIn', href: profile.contact.linkedin }
      : null,
    profile.contact.github
      ? { label: 'GitHub', href: profile.contact.github }
      : null,
  ]

  return candidates.filter((candidate): candidate is ContactLink => candidate !== null)
}
