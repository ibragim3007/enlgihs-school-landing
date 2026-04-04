export const LESSONS_HEADING = "Как ребёнок начинает говорить на занятиях";

export const LESSONS_PROMO =
  "Уже на первом месяце ребёнок говорит простыми фразами";

export interface LessonStep {
  id: string;
  number: number;
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
}

export const LESSONS_STEPS: LessonStep[] = [
  {
    id: "1",
    number: 1,
    emoji: "🎯",
    title: "Разогреваем речь через игру",
    subtitle: "Ребёнок включается и начинает говорить с первых минут",
    color: "bg-blue-500",
  },
  {
    id: "2",
    number: 2,
    emoji: "",
    title:
      "Практикуем разговор в виде игры и взаимодействия с другими учениками",
    subtitle: "Говорим, а не просто выполняем задания",
    color: "bg-green-500",
  },
  {
    id: "3",
    number: 3,
    emoji: "",
    title: "Закрепляем и используем в жизни",
    subtitle: "Фразы переходят в реальную речь ребёнка",
    color: "bg-purple-500",
  },
];
