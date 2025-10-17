export interface Service {
  slug: string
  title: string
  summary: string
  description: string
  bullets: string[]
  prerequisites: string[]
  cta: string
}

export interface Marque {
  name: string
  logo: string
  description: string
  categories?: string[]
  specialites?: string[]
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
  badges: string[]
  diplomes: string[]
  langues: string[]
}

export interface Horaire {
  jour: string
  ouverture: string | null
  fermeture: string | null
  ferme: boolean
}
