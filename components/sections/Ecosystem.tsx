"use client";

import { useState } from "react";
import { SECTION_IDS } from "@/constants/navigation";
import { ECOSYSTEM_HEADING, ECOSYSTEM_ITEMS } from "@/constants/ecosystem";
import SectionHeading from "@/components/ui/SectionHeading";

const INITIAL_VISIBLE_COUNT = 3;

export default function Ecosystem() {
  const [isExpanded, setIsExpanded] = useState(false);

  const hiddenCount = ECOSYSTEM_ITEMS.length - INITIAL_VISIBLE_COUNT;

  return (
    <section id={SECTION_IDS.ecosystem} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-10 lg:mb-14">
          {ECOSYSTEM_HEADING}
        </SectionHeading>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ECOSYSTEM_ITEMS.map((item, index) => (
            <div
              key={item}
              className={`flex items-center gap-3 rounded-2xl bg-surface p-4 sm:p-6 ${
                index >= INITIAL_VISIBLE_COUNT && !isExpanded
                  ? "hidden sm:flex"
                  : ""
              }`}
            >
              <svg
                className="h-5 w-5 shrink-0 text-primary-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-neutral-700 lg:text-base font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 rounded-full bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-700 hover:shadow-lg"
            >
              {isExpanded ? "Скрыть" : `Показать все (+${hiddenCount})`}
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
