"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

type Subsection = {
  title: string;
  items: readonly string[];
};

type Section = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
  afterList?: readonly string[];
  subsections?: readonly Subsection[];
};

const sections: readonly Section[] = [
  {
    id: "s1",
    title: "1. Общие положения",
    paragraphs: [
      "1.1. Настоящий документ является публичной офертой (далее — «Договор») и содержит условия оказания образовательных услуг по обучению английскому языку (далее — «Услуги»).",
      "1.2. Оператор персональных данных — Меньшикова Полина Васильевна, владелец школы English Dome.",
      "1.3. Заказчик — любое физическое лицо (родитель или законный представитель ребёнка), осуществившее акцепт настоящей оферты.",
      "1.4. Акцептом настоящей оферты является оплата услуг Исполнителя. С момента оплаты договор считается заключённым.",
      "1.5. Заказчик подтверждает, что ознакомился с условиями настоящего Договора и принимает их в полном объёме.",
    ],
  },
  {
    id: "s2",
    title: "2. Предмет договора",
    paragraphs: [
      "2.1. Исполнитель обязуется оказать Заказчику образовательные услуги по обучению английскому языку для детей и подростков.",
      "2.2. Услуги оказываются в онлайн-формате в виде групповых или индивидуальных занятий.",
      "2.3. Программа, формат, длительность и стоимость занятий определяются выбранным Заказчиком тарифом.",
    ],
  },
  {
    id: "s3",
    title: "3. Порядок оказания услуг",
    paragraphs: [
      "3.1. Занятия проводятся по расписанию, согласованному с Заказчиком.",
      "3.2. Исполнитель вправе вносить изменения в расписание, уведомив Заказчика заранее.",
      "3.3. Услуги считаются оказанными надлежащим образом, если Заказчику был предоставлен доступ к занятиям.",
      "3.4. Пропущенные занятия по вине Заказчика не компенсируются, если иное не предусмотрено тарифом.",
    ],
  },
  {
    id: "s4",
    title: "4. Права и обязанности сторон",
    subsections: [
      {
        title: "4.1. Обязанности Исполнителя:",
        items: [
          "4.1.1. Организовать и провести занятия в соответствии с программой.",
          "4.1.2. Обеспечить выполнение учебного плана, предоставление материалов для занятий.",
          "4.1.3. Обеспечить организацию групповых или индивидуальных уроков.",
          "4.1.4. Предоставить отчет о выполнении программы по запросу Заказчика.",
          "4.1.5. Обеспечить доступ к образовательной платформе для участия в занятиях (если предусмотрено).",
          "4.1.6. Обеспечить обратную связь и консультации с родителями по вопросам успеваемости и участия ребенка в обучении.",
        ],
      },
      {
        title: "4.2. Обязанности Заказчика:",
        items: [
          "4.2.1. Своевременно оплачивать услуги.",
          "4.2.2. Соблюдать дисциплину на занятиях.",
          "4.2.3. Обеспечить ребенку необходимые условия для участия в занятиях, в том числе оборудование и интернет-соединение, если уроки проводятся онлайн.",
          "4.2.4. Регулярно принимать участие в консультациях по успеваемости и обратной связи с преподавателем.",
          "4.2.5. В случае пропуска занятий (по уважительным причинам) согласовывать с Исполнителем возможность переноса занятий или получения материалов.",
        ],
      },
    ],
  },
  {
    id: "s5",
    title: "5. Стоимость услуг и порядок оплаты",
    paragraphs: [
      "5.1. Стоимость услуг определяется в соответствии с тарифами, размещёнными на сайте Исполнителя.",
      "5.2. Оплата производится в размере 100% предоплаты.",
      "5.3. Оплата осуществляется через доступные платёжные системы.",
      "5.4. Моментом оплаты считается поступление денежных средств Исполнителю.",
    ],
  },
  {
    id: "s6",
    title: "6. Условия возврата и пропуск занятий",
    paragraphs: [
      "6.1. Возврат денежных средств за оплаченные курсы невозможен, за исключением случая, когда услуга не была оказана по вине Исполнителя.",
      "6.2. В случае, если Заказчик решит прекратить обучение или не может посетить занятие, отмена или перенос занятия возможны при уведомлении за 8 часов до начала занятия. В противном случае занятие считается пропущенным и списывается с баланса ученика.",
      "6.3. Все оплаченные занятия должны быть проведены в течение оплаченного периода. Если Заказчик не воспользовался услугой в полном объеме, то неиспользованные занятия не подлежат возврату, переносу или компенсации.",
    ],
  },
  {
    id: "s7",
    title: "7. Ответственность сторон",
    paragraphs: [
      "7.1. Стороны несут ответственность в соответствии с законодательством РФ.",
      "7.2. Исполнитель не несёт ответственности за:",
    ],
    list: [
      "технические сбои на стороне Заказчика",
      "нестабильное интернет-соединение",
      "пропуск занятий по вине Заказчика",
    ],
    afterList: [
      "7.3. Исполнитель не гарантирует конкретный результат обучения, так как он зависит от участия и усилий ученика.",
    ],
  },
  {
    id: "s8",
    title: "8. Персональные данные",
    paragraphs: [
      "8.1. Заказчик даёт согласие на обработку персональных данных в целях оказания услуг.",
      "8.2. Обработка осуществляется в соответствии с действующим законодательством РФ.",
    ],
  },
  {
    id: "s9",
    title: "9. Заключительные положения",
    paragraphs: [
      "9.1. Исполнитель вправе вносить изменения в настоящий Договор без предварительного согласования с Заказчиком.",
      "9.2. Актуальная версия Договора размещается на сайте Исполнителя.",
      "9.3. Продолжение использования услуг после внесения изменений означает согласие Заказчика с новыми условиями.",
    ],
  },
];

function ListBlock({ items }: { items: readonly string[] }) {
  return (
    <ul className="my-4 space-y-3 border-l-2 border-primary-400/50 pl-5">
      {items.map((item) => (
        <li key={item} className="relative">
          <span
            className="absolute -left-5 top-[0.55em] h-1.5 w-1.5 rounded-full bg-primary-700/70"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function OfferAgreementPage() {
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  return (
    <>
      <Header onOpenForm={openForm} />
      <main className="min-h-[calc(100vh-5rem)]">
        <div className="relative overflow-hidden border-b border-primary-500/20 bg-gradient-to-br from-primary-500/35 via-surface to-secondary-500/25">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-600/40 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary-600/35 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-900/80">
              Документ
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              Договор-оферта
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Об оказании образовательных услуг
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
            <aside className="mb-10 lg:mb-0">
              <nav
                aria-label="Содержание документа"
                className="sticky top-24 rounded-2xl border border-neutral-100 bg-surface p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Содержание
                </p>
                <ol className="mt-4 space-y-2 text-sm">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-neutral-700 transition-colors hover:text-primary-800"
                      >
                        {s.title.replace(/^\d+\.\s*/, "")}
                      </a>
                    </li>
                  ))}
                </ol>
                <a
                  href="/"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-800 transition-colors hover:text-primary-900"
                >
                  <span aria-hidden>←</span> На главную
                </a>
              </nav>
            </aside>

            <article className="rounded-3xl border border-neutral-100 bg-surface p-6 shadow-[0_2px_24px_-4px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10">
              <div className="border-b border-neutral-100 pb-8">
                <h2 className="text-xl font-semibold text-neutral-950 sm:text-2xl">
                  Об оказании образовательных услуг
                </h2>
              </div>

              <div className="mt-10 space-y-12">
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28"
                  >
                    <h3 className="text-lg font-semibold text-primary-900 sm:text-xl">
                      {section.title}
                    </h3>
                    <div className="mt-4 space-y-4 text-[15px] leading-[1.7] text-neutral-700 sm:text-base">
                      {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                      {section.list && <ListBlock items={section.list} />}
                      {section.afterList?.map((p) => <p key={p}>{p}</p>)}
                      {section.subsections?.map((sub) => (
                        <div key={sub.title} className="space-y-3">
                          <p className="font-medium text-neutral-800">
                            {sub.title}
                          </p>
                          <ListBlock items={sub.items} />
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
      <ContactForm isOpen={formOpen} onClose={closeForm} />
    </>
  );
}
