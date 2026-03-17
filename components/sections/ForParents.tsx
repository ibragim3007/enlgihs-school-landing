"use client";

import { SECTION_IDS } from "@/constants/navigation";
import {
  FOR_PARENTS_HEADING,
  FOR_PARENTS_DESCRIPTION,
  FOR_PARENTS_BENEFITS,
  FOR_PARENTS_CONCLUSION,
} from "@/constants/for-parents";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ForParents() {
  return (
    <section id={SECTION_IDS.forParents} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-12 lg:mb-16">
          {FOR_PARENTS_HEADING}
        </SectionHeading>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left column - Text */}
          <div className="space-y-6">
            <p className="text-lg lg:text-xl font-semibold text-neutral-900 leading-relaxed whitespace-pre-line">
              {FOR_PARENTS_DESCRIPTION}
            </p>

            {/* Benefits with icons */}
            <div className="space-y-3 pt-4">
              <p className="text-sm font-bold text-primary-700 uppercase tracking-wide">
                🎯 Вы получаете:
              </p>
              <ul className="space-y-3">
                {FOR_PARENTS_BENEFITS.map((benefit, idx) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary-50 border border-primary-500 hover:bg-primary-100 transition-colors"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary-700 text-white text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-sm lg:text-base text-neutral-700 font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - Highlighted box */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl transform -rotate-1"></div>
            <div className="relative bg-white p-8 lg:p-10 rounded-3xl shadow-xl">
              <div className="absolute -top-4 -right-4 text-5xl">👨‍👩‍👧‍👦</div>

              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-950 mb-4">
                Мы создаём условия для результата
              </h3>

              <p className="text-neutral-700 leading-relaxed italic text-base lg:text-lg border-l-4 border-primary-700 pl-4">
                "{FOR_PARENTS_CONCLUSION}"
              </p>

              <div className="mt-6 pt-6 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-500 uppercase">
                  Для Вашего спокойствия
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
