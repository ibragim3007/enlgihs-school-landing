import type { VideoTestimonial } from "@/types";

export const TESTIMONIALS_HEADING = "Отзывы учеников";

export const TESTIMONIALS_SUBTITLE = "Реальные отзывы учеников English Dome";

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 1,
    name: "Алиса",
    flag: "🇷🇺",
    role: "Ученица, 6 класс",
    text: "Наши занятия проходят интересно и продуктивно, у меня улучшились оценки в школе!",
    videoUrl: "/assets/review_1.MP4",
  },
  {
    id: 2,
    name: "Арина",
    flag: "🇷🇺",
    role: "Ученица, 4 класс",
    text: "Учетеля все понятно объясняют, теперь я учусь на четыре и пять. Учиться стало интересно благодаря игровой программе!",
    videoUrl: "/assets/review_2.mp4",
  },
];

export const WRITTEN_TESTIMONIALS_HEADING = "Отзывы родителей";

export const PARENT_TESTIMONIAL_IMAGES = [
  "/assets/testimonials/testimonial-1.jpg",
  "/assets/testimonials/testimonial-2.jpg",
  "/assets/testimonials/testimonial-3.jpg",
];
