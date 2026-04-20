import type { Metadata } from "next";

const title = "Политика конфиденциальности";
const description =
  "Политика конфиденциальности English Dome: порядок обработки персональных данных, цели, сроки хранения и права пользователей.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/policy",
  },
  openGraph: {
    title: `${title} | English Dome`,
    description,
    url: "/policy",
    type: "article",
    locale: "ru_RU",
  },
};

export default function PolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
