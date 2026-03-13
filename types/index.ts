export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface HeroStat {
  value: string;
  description: string;
  variant: "green" | "gray";
}

export interface ProblemItem {
  id: number;
  title: string;
}

export interface Program {
  id: number;
  title: string;
  ageRange: string;
  description: string;
  features: string[];
}

export interface Advantage {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
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
