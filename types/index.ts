export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface ProblemItem {
  id: number;
  title: string;
}

export interface VideoTestimonial {
  id: number;
  name: string;
  flag: string;
  role: string;
  text: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

export interface WrittenTestimonial {
  id: number;
  stars: number;
  text: string;
}

export interface SocialLink {
  platform: string;
  href: string;
}

export interface FormOption {
  value: string;
  label: string;
}

export interface Package {
  id: number;
  icon: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  price: number;
  currency: string;
  period: string;
  highlighted: boolean;
  badge?: string;
  ctaText?: string;
}
