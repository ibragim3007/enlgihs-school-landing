export type AdvantageIconId =
  | "speech-heart"
  | "thumbs-up"
  | "treasure"
  | "chart-up"
  | "house";

export const ADVANTAGES_HEADING =
  "Почему дети начинают говорить в English Dome";

export const ADVANTAGES_CARDS: {
  id: string;
  icon: AdvantageIconId;
  title: string;
  subtitle: string;
}[] = [
  {
    id: "1",
    icon: "speech-heart",
    title: "Ребёнок начинает говорить уже с первых уроков",
    subtitle: "Через игру и диалог",
  },
  {
    id: "2",
    icon: "thumbs-up",
    title: "Ребёнок не боится говорить и ошибаться",
    subtitle: "Поддерживающая атмосфера",
  },
  {
    id: "3",
    icon: "treasure",
    title: "Интересно как игра — ребёнок сам хочет заниматься",
    subtitle: "Уроки как приключение",
  },
  {
    id: "4",
    icon: "chart-up",
    title: "Вы видите реальный прогресс ребёнка",
    subtitle: "Понятные результаты и обратная связь",
  },
  {
    id: "5",
    icon: "speech-heart",
    title: "Английский становится частью жизни ребёнка",
    subtitle: "Практика вне уроков",
  },
  {
    id: "6",
    icon: "house",
    title: "Удобно для родителей",
    subtitle: "Все материалы в одном месте",
  },
];
