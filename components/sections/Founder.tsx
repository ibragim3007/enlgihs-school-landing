"use client";

import { SECTION_IDS } from "@/constants/navigation";
import {
  FOUNDER_HEADING,
  FOUNDER_INTRO,
  FOUNDER_BACKGROUND,
  FOUNDER_CERTIFICATIONS,
  FOUNDER_ACHIEVEMENTS,
  FOUNDER_PHILOSOPHY,
  FOUNDER_APPROACH,
  FOUNDER_CONCLUSION,
} from "@/constants/founder";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Founder() {
  return (
    <section
      id={SECTION_IDS.founder}
      className="py-16 lg:py-24 bg-gradient-to-b from-neutral-50 to-white"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-12 lg:mb-16">
          {FOUNDER_HEADING}
        </SectionHeading>

        <div className="max-w-4xl mx-auto">
          {/* Avatar placeholder with intro */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12 items-start">
            {/* Avatar */}
            <div className="lg:col-span-1 flex flex-col items-center">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-7xl shadow-lg">
                👩‍🏫
              </div>
              <p className="mt-6 text-center text-sm font-semibold text-primary-700 uppercase tracking-wide">
                Основатель
                <br />
                English Dome
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 text-xs font-semibold text-white bg-primary-700 rounded-full">
                  TESOL
                </span>
                <span className="px-3 py-1 text-xs font-semibold text-white bg-primary-700 rounded-full">
                  TEFL
                </span>
              </div>
            </div>

            {/* Intro text */}
            <div className="lg:col-span-2">
              <p className="text-xl lg:text-2xl font-bold text-neutral-950 leading-relaxed mb-4">
                {FOUNDER_INTRO}
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-primary-700 to-primary-400"></div>
            </div>
          </div>

          {/* Background paragraphs */}
          <div className="space-y-4 mb-8 pb-8 border-b border-neutral-200">
            {FOUNDER_BACKGROUND.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base lg:text-lg text-neutral-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Certifications & Achievements - Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-primary-50 border border-primary-200">
              <p className="text-sm font-bold text-primary-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span className="text-xl">🏆</span>
                Сертификаты
              </p>
              <p className="text-base text-neutral-700 leading-relaxed">
                {FOUNDER_CERTIFICATIONS}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-green-50 border border-green-200">
              <p className="text-sm font-bold text-green-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span className="text-xl">⭐</span>
                Достижения
              </p>
              <p className="text-base text-neutral-700 leading-relaxed">
                {FOUNDER_ACHIEVEMENTS}
              </p>
            </div>
          </div>

          {/* Philosophy - Highlighted section */}
          <div className="rounded-3xl bg-gradient-to-br from-primary-100 to-primary-50 p-8 lg:p-10 border border-primary-300 mb-10">
            <p className="text-sm font-bold text-primary-700 uppercase tracking-wide mb-4 flex items-center gap-2">
              <span className="text-2xl">💚</span>
              Философия обучения
            </p>
            <div className="space-y-4">
              {FOUNDER_PHILOSOPHY.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base lg:text-lg text-neutral-900 leading-relaxed italic"
                >
                  "{paragraph}"
                </p>
              ))}
            </div>
          </div>

          {/* Approach */}
          <div className="bg-white p-8 rounded-2xl border-l-4 border-primary-700 mb-10 shadow-md">
            <p className="text-base lg:text-lg text-neutral-700 leading-relaxed font-medium">
              {FOUNDER_APPROACH}
            </p>
          </div>

          {/* Conclusion - Final message */}
          <div className="space-y-4 pt-8 border-t border-neutral-200">
            {FOUNDER_CONCLUSION.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg lg:text-xl text-neutral-900 leading-relaxed font-semibold"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Decorative element */}
          <div className="mt-12 text-center">
            <p className="text-4xl">🏠</p>
          </div>
        </div>
      </div>
    </section>
  );
}
