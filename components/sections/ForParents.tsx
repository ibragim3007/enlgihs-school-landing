"use client";

import { SECTION_IDS } from "@/constants/navigation";
import {
  FOR_PARENTS_HEADING,
  FOR_PARENTS_DESCRIPTION,
  FOR_PARENTS_BENEFITS,
  FOR_PARENTS_TARIFF_NOTE,
  FOR_PARENTS_QUOTE,
  FOR_PARENTS_BOTTOM_NOTE,
} from "@/constants/for-parents";
import SectionSignupFooter from "@/components/ui/SectionSignupFooter";

interface ForParentsProps {
  onOpenForm: () => void;
}

export default function ForParents({ onOpenForm }: ForParentsProps) {
  return (
    <section id={SECTION_IDS.forParents} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — heading & description (sticky on desktop) */}
          <div className="lg:sticky lg:top-32 space-y-5">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-950 leading-tight">
              {FOR_PARENTS_HEADING}
            </h2>
            <p className="text-base lg:text-xl text-neutral-600 leading-relaxed whitespace-pre-line">
              {FOR_PARENTS_DESCRIPTION}
            </p>
          </div>

          {/* Right — card with benefits */}
          <div className="rounded-3xl bg-gradient-to-b from-primary-50 to-primary-100/60 p-6 sm:p-8 lg:p-10 space-y-6">
            <p className="text-sm font-bold text-primary-700 uppercase tracking-wide">
              🎯 Вы получаете:
            </p>

            <ul className="space-y-3">
              {FOR_PARENTS_BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-primary-600 text-white text-sm">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg text-neutral-800 font-medium">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-sm lg:text-base text-neutral-600 leading-relaxed">
              {FOR_PARENTS_TARIFF_NOTE.split(/(Home|Dome)/g).map((part, i) =>
                part === "Home" || part === "Dome" ? (
                  <span key={i} className="font-semibold text-primary-700">
                    {part}
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>

            <div className="rounded-2xl bg-white p-5 sm:p-6 lg:p-8 relative">
              <div className="absolute -top-3 right-4 sm:right-6 lg:right-8 text-4xl lg:text-5xl">
                👨‍👩‍👧
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-900 leading-snug pr-12">
                &quot;{FOR_PARENTS_QUOTE.split("начинает говорить").map(
                  (part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <em>начинает говорить</em>
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                )}
                &quot;
              </p>
            </div>

            <p className="text-sm lg:text-base font-medium text-neutral-700 flex items-center gap-2">
              <span className="text-yellow-400">⭐</span>
              {FOR_PARENTS_BOTTOM_NOTE}
            </p>
          </div>
        </div>

        <SectionSignupFooter onOpenForm={onOpenForm} />
      </div>
    </section>
  );
}
