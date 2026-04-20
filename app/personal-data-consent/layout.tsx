import type { Metadata } from "next";

const title = "Согласие на обработку персональных данных";
const description =
  "Согласие субъекта персональных данных на обработку ПДн при использовании сайта English Dome: цели, сроки, права и меры защиты.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/personal-data-consent",
  },
  openGraph: {
    title: `${title} | English Dome`,
    description,
    url: "/personal-data-consent",
    type: "article",
    locale: "ru_RU",
  },
};

export default function PersonalDataConsentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
