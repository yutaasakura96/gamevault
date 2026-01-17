export interface PlatformChild {
  id: number
  name: string
  slug: string
}

export interface PlatformParent {
  id: number
  name: string
  slug: string
  platforms: PlatformChild[]
}
