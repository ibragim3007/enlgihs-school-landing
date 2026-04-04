import type { FormOption } from "@/types";

export type ProgramIconId = "abc" | "letter-a" | "chat" | "cap" | "diploma";

export const PROGRAMS_HEADING = "Подойдёт ли это вашему ребёнку";
export const PROGRAMS_DESCRIPTION =
  "Мы обучаем детей с 1 по 11 класс. Программу подбираем под уровень и цели каждого ребенка.";

export interface ProgramCard {
  id: string;
  icon: ProgramIconId;
  title: string;
  subtitle: string;
  level?: string;
}

export const PROGRAMS: ProgramCard[] = [
  {
    id: "1",
    icon: "abc",
    title: "Ребёнок только начинает учить английский",
    subtitle: "Начнём с нуля через игру и простые слова",
    level: "A0",
  },
  {
    id: "2",
    icon: "letter-a",
    title: "Ребёнок знает слова, но не говорит",
    subtitle: "Научим строить фразы и говорить уверенно",
    level: "A1",
  },
  {
    id: "3",
    icon: "chat",
    title: "Ребёнок понимает, но стесняется говорить",
    subtitle: "Поможем раскрыться и начать говорить без страха",
    level: "A2",
  },
  {
    id: "4",
    icon: "cap",
    title: "Нужно подтянуть английский в школе",
    subtitle: "Разберём темы и повысим уверенность",
  },
  {
    id: "5",
    icon: "diploma",
    title: "Подготовка к экзаменам (ОГЭ / ЕГЭ)",
    subtitle: "Системная подготовка и понятный результат",
  },
];

export const PROGRAM_OPTIONS: FormOption[] = PROGRAMS.map((p) => ({
  value: p.title,
  label: p.title,
}));
