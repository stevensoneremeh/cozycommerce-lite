export interface Category {
  id: string
  title: string
  slug: string
  img?: string
  updatedAt: Date
}

export interface Product {
  id: string
  title: string
  slug: string
  shortDescription?: string
  description?: string
  price: number
  discountedPrice?: number
  quantity: number
  updatedAt: Date
  tags?: string[]
  sku?: string
  body?: string
  offers?: string
}

export interface Review {
  id: string
  name: string
  email: string
  comment: string
  ratings: number
  productSlug: string
  isApproved: boolean
}

export interface HeaderSetting {
  id: string
  headerLogo?: string
  emailLogo?: string
  headerText?: string
}

export interface Countdown {
  id: string
  title: string
  subtitle?: string
  countdownImage: string
  updatedAt: Date
}

export interface HeroBanner {
  id: string
  updatedAt: Date
}

export interface HeroSlider {
  id: string
  updatedAt: Date
}

export interface SeoSetting {
  id: string
  siteName?: string
}
