import type { Metadata } from "next";

const title = "Договор-оферта";
const description =
  "Публичная оферта English Dome на оказание образовательных услуг по обучению английскому языку: условия, оплата, возврат и ответственность сторон.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/offer-agreement",
  },
  openGraph: {
    title: `${title} | English Dome`,
    description,
    url: "/offer-agreement",
    type: "article",
    locale: "ru_RU",
  },
};

export default function OfferAgreementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
