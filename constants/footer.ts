import type { SocialLink } from "@/types";

export const LEGAL_LINKS = [
  { href: "/policy", label: "Политика конфиденциальности" },
  { href: "/offer-agreement", label: "Договор-оферта" },
  {
    href: "/personal-data-consent",
    label: "Согласие на обработку персональных данных",
  },
] as const;

export const FOOTER_PHONE = "+79180883150";

/** Ссылка на чат WhatsApp с тем же номером, что в контактах */
export const WHATSAPP_CHAT_URL = `https://wa.me/${FOOTER_PHONE.replace(/\D/g, "")}`;

export const FOOTER_EMAIL = "english-dome@mail.ru";
export const FOOTER_ADDRESS = "";

export const FOOTER_TEXT =
  "English Dome — английский, как дома\nОнлайн-школа английского языка для детей";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Telegram", href: "https://t.me/english_dome" },
  {
    platform: "MAX",
    href: "https://max.ru/u/f9LHodD0cOLFMpN-WnM6zmZYuYR_yav3XZEGZ9IMGIFIWHtxJrqKTOKz0y4",
  },
  { platform: "WhatsApp", href: WHATSAPP_CHAT_URL },
];
