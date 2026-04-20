"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

const sections = [
  {
    id: "s1",
    title: "1. Общие положения",
    paragraphs: [
      "1.1. Настоящее Согласие на обработку персональных данных (далее — «Согласие») дается физическим лицом, заполнившим форму на сайте English Dome, на обработку его персональных данных.",
      "1.2. Заказчик (пользователь) подтверждает, что ознакомлен с настоящим Согласием и даёт своё добровольное согласие на обработку персональных данных.",
      "1.3. Оператор персональных данных — Меньшикова Полина Васильевна, владелец школы English Dome.",
      "1.4. Политика разработана в соответствии с законодательством Российской Федерации в области защиты персональных данных.",
    ],
  },
  {
    id: "s2",
    title: "2. Персональные данные, на обработку которых дается согласие",
    paragraphs: [
      "2.1. Заказчик даёт согласие на обработку следующих персональных данных:",
    ],
    list: [
      "Имя и фамилия",
      "Контактный номер телефона",
      "Адрес электронной почты",
      "Данные о ребенке (при регистрации на курсы)",
      "Данные, которые Заказчик предоставляет через форму на сайте",
    ],
    afterList: [
      "2.2. Персональные данные не включают информацию, относящуюся к чувствительным данным, таким как раса, этническая принадлежность, политические убеждения и т. п.",
    ],
  },
  {
    id: "s3",
    title: "3. Цели обработки персональных данных",
    paragraphs: ["3.1. Персональные данные обрабатываются для следующих целей:"],
    list: [
      "Регистрация и запись на курсы",
      "Предоставление образовательных услуг",
      "Отправка информации о новых курсах, акциях и событиях",
      "Коммуникация с пользователем (например, по вопросам записи или текущего обучения)",
    ],
  },
  {
    id: "s4",
    title: "4. Правовые основания обработки персональных данных",
    paragraphs: [
      "4.1. Обработка персональных данных осуществляется на основании:",
    ],
    list: [
      "Согласия Заказчика на обработку его персональных данных, выраженного при регистрации или заполнении формы на сайте.",
      "Публичной оферты на оказание образовательных услуг, размещённой на сайте.",
    ],
  },
  {
    id: "s5",
    title: "5. Права Заказчика",
    paragraphs: ["5.1. Заказчик имеет право:"],
    list: [
      "Запрашивать информацию о своих персональных данных, которые мы обрабатываем.",
      "Требовать уточнения, блокировки или удаления своих персональных данных, если они являются неполными, устаревшими или обработка которых нарушает закон.",
      "Отозвать согласие на обработку данных в любой момент, отправив соответствующий запрос на электронную почту Исполнителя.",
    ],
  },
  {
    id: "s6",
    title: "6. Сроки хранения персональных данных",
    paragraphs: [
      "6.1. Персональные данные хранятся не дольше, чем это необходимо для выполнения целей обработки.",
      "6.2. Персональные данные будут удалены или обезличены, как только они станут не нужны для достижения указанных целей или по запросу Заказчика.",
    ],
  },
  {
    id: "s7",
    title: "7. Меры защиты персональных данных",
    paragraphs: [
      "7.1. Мы предпринимаем все необходимые технические и организационные меры для защиты персональных данных от несанкционированного доступа, утраты или уничтожения.",
      "7.2. Персональные данные обрабатываются только авторизованными сотрудниками и партнёрами, которые обязаны соблюдать конфиденциальность.",
    ],
  },
  {
    id: "s8",
    title: "8. Передача персональных данных",
    paragraphs: [
      "8.1. Персональные данные не передаются третьим лицам, за исключением случаев:",
    ],
    list: [
      "Когда это необходимо для выполнения обязательств по договору (например, для обработки платежей).",
      "Когда этого требует законодательство Российской Федерации (например, по запросу государственных органов).",
    ],
  },
  {
    id: "s9",
    title: "9. Согласие на обработку персональных данных",
    paragraphs: [
      "9.1. Заказчик подтверждает, что даёт согласие на обработку своих персональных данных при регистрации на сайте или при заполнении формы.",
      "9.2. Согласие считается предоставленным с момента нажатия кнопки «Согласен с политикой конфиденциальности» или аналогичной кнопки.",
    ],
  },
  {
    id: "s10",
    title: "10. Заключительные положения",
    paragraphs: [
      "10.1. Оператор вправе вносить изменения в настоящее Согласие, актуальная версия будет размещена на сайте.",
      "10.2. Продолжение использования услуг после внесения изменений в Согласие означает согласие с новыми условиями.",
    ],
  },
] as const;

export default function PersonalDataConsentPage() {
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
              Согласие на обработку персональных данных
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Добровольное согласие при использовании сайта English Dome
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
                  Согласие на обработку персональных данных
                </h2>
              </div>

              <div className="mt-10 space-y-12">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <h3 className="text-lg font-semibold text-primary-900 sm:text-xl">
                      {section.title}
                    </h3>
                    <div className="mt-4 space-y-4 text-[15px] leading-[1.7] text-neutral-700 sm:text-base">
                      {section.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                      {"list" in section && section.list && (
                        <ul className="my-4 space-y-3 border-l-2 border-primary-400/50 pl-5">
                          {section.list.map((item) => (
                            <li key={item} className="relative">
                              <span
                                className="absolute -left-5 top-[0.55em] h-1.5 w-1.5 rounded-full bg-primary-700/70"
                                aria-hidden
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {"afterList" in section &&
                        section.afterList &&
                        section.afterList.map((p) => <p key={p}>{p}</p>)}
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
