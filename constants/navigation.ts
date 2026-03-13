import type { NavLink } from "@/types";

export const SECTION_IDS = {
  hero: "hero",
  problems: "problems",
  about: "about",
  programs: "programs",
  advantages: "advantages",
  diagnostics: "diagnostics",
  testimonials: "testimonials",
} as const;

export const NAV_LINKS: NavLink[] = [
  {
    label: "О школе",
    href: `#${SECTION_IDS.about}`,
    sectionId: SECTION_IDS.about,
  },
  {
    label: "Направления",
    href: `#${SECTION_IDS.programs}`,
    sectionId: SECTION_IDS.programs,
  },
  {
    label: "Преимущества",
    href: `#${SECTION_IDS.advantages}`,
    sectionId: SECTION_IDS.advantages,
  },
  {
    label: "Диагностика",
    href: `#${SECTION_IDS.diagnostics}`,
    sectionId: SECTION_IDS.diagnostics,
  },
  {
    label: "Отзывы",
    href: `#${SECTION_IDS.testimonials}`,
    sectionId: SECTION_IDS.testimonials,
  },
];

export const SCHOOL_NAME = "English School";
export const CTA_BUTTON_TEXT = "Оставить заявку";
