import type { NavLink } from "@/types";

export const SECTION_IDS = {
  hero: "hero",
  problems: "problems",
  about: "about",
  programs: "programs",
  advantages: "advantages",
  lessons: "lessons",
  reading: "reading",
  cabinet: "cabinet",
  ecosystem: "ecosystem",
  packages: "packages",
  psychologist: "psychologist",
  founder: "founder",
  forParents: "for-parents",
  diagnostics: "diagnostics",
  testimonials: "testimonials",
  finalCTA: "final-cta",
} as const;

export const NAV_LINKS: NavLink[] = [
  {
    label: "О школе",
    href: `/#${SECTION_IDS.about}`,
    sectionId: SECTION_IDS.about,
  },
  {
    label: "Преимущества",
    href: `/#${SECTION_IDS.advantages}`,
    sectionId: SECTION_IDS.advantages,
  },
  {
    label: "Направления",
    href: `/#${SECTION_IDS.programs}`,
    sectionId: SECTION_IDS.programs,
  },
  {
    label: "Формат обучения",
    href: `/#${SECTION_IDS.packages}`,
    sectionId: SECTION_IDS.packages,
  },
  {
    label: "Отзывы",
    href: `/#${SECTION_IDS.testimonials}`,
    sectionId: SECTION_IDS.testimonials,
  },
];

export const SCHOOL_NAME = "English Dome";
export const CTA_BUTTON_TEXT = "Записаться на пробный урок";
