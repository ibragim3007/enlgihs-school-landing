import { SECTION_IDS } from "@/constants/navigation";

export const ABOUT_HEADING = "О школе";

export const ABOUT_INTRO =
  "English Dome — это онлайн-школа, где дети начинают говорить на английском через игру и сюжет.";

export const ABOUT_BULLETS_SUBHEAD = "Уже через 3–4 недели ребёнок:";

export const ABOUT_BULLETS = [
  "говорит простыми фразами",
  "понимает речь",
  "не боится говорить",
];

export const ABOUT_ATMOSPHERE =
  "Ребёнок чувствует себя спокойно и не боится ошибок — поэтому начинает говорить быстрее";

export const ABOUT_VIDEO_LINK_TEXT = "Посмотрите, как проходят занятия";

export const ABOUT_VIDEO_LINK_HREF = `#${SECTION_IDS.lessons}` as const;

export const ABOUT_LESSONS_PREVIEW_SRC = "/assets/about-lessons-preview.png";

export const ABOUT_STATS = [
  {
    value: "500+",
    label: "довольных учеников",
  },
  {
    value: "5+",
    label: "лет опыта работы с детьми",
  },
  {
    value: "4.9",
    label: "— средняя оценка родителей",
  },
  {
    value: "24/7",
    label: "доступ к материалам",
  },
];
