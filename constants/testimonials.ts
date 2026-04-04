import type { VideoTestimonial, WrittenTestimonial } from "@/types";

export const TESTIMONIALS_HEADING = "Отзывы родителей";

export const TESTIMONIALS_SUBTITLE =
  "Реальные отзывы родителей учеников English Dome";

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 1,
    name: "Светлана",
    flag: "🇷🇺",
    role: "Мама ученицы, 11 лет",
    text: "Занятия вдохновляют, ребёнок начал говорить по-английски",
    videoUrl: "/assets/review_1.MP4",
  },
  {
    id: 2,
    name: "Анна",
    flag: "🇷🇺",
    role: "Мама ученика, 9 лет",
    text: "За полгода занятий сын заговорил и стал учиться на пятёрки.",
    videoUrl: "/assets/review_2.mp4",
  },
];

export const WRITTEN_TESTIMONIALS_HEADING = "Письменные отзывы";

export const WRITTEN_TESTIMONIALS: WrittenTestimonial[] = [
  {
    id: 1,
    stars: 5,
    text: "За полгода занятий сын начал разговаривать на английском. Оценки в школе улучшились с тройки до пятёрки. Преподаватели находят подход к каждому ребёнку.",
  },
  {
    id: 2,
    stars: 5,
    text: "Дочь успешно сдала ОГЭ по английскому на 5. Преподаватели отлично готовят к экзаменам. Очень рекомендую школу всем знакомым.",
  },
  {
    id: 3,
    stars: 5,
    text: "Ребёнок наконец-то полюбил английский! Занятия проходят в интересном формате — сын ходит с удовольствием. Результаты видны уже через месяц.",
  },
  {
    id: 4,
    stars: 5,
    text: "Готовились к ЕГЭ в этой школе. Дочь набрала 92 балла! Системный подход, понятное объяснение всех тем, постоянная практика — всё на высшем уровне.",
  },
];
