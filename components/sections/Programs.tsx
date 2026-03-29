"use client";

import { useState } from "react";
import { SECTION_IDS } from "@/constants/navigation";
import {
  PROGRAMS_HEADING,
  PROGRAMS_DESCRIPTION,
  PROGRAMS,
} from "@/constants/programs";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Programs() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpanded = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <section id={SECTION_IDS.programs} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-14">
          <SectionHeading>{PROGRAMS_HEADING}</SectionHeading>
          <p className="mt-4 text-base text-neutral-700 lg:text-lg">
            {PROGRAMS_DESCRIPTION}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => {
            const isExpanded = expandedIds.includes(program.id);

            return (
              <div
                key={program.id}
                onClick={() => toggleExpanded(program.id)}
                className="group relative flex cursor-pointer flex-col rounded-3xl bg-surface p-6 transition-shadow hover:shadow-lg sm:cursor-default sm:p-8"
              >
                <div
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-colors group-hover:bg-primary-200 sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className={`h-5 w-5 transition-transform duration-300 ${
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
                </div>

                <h3 className="pr-10 text-xl font-bold text-neutral-950 sm:pr-0">
                  {program.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  {program.description}
                </p>

                <div
                  className={`overflow-hidden transition-all duration-300 sm:mt-6 sm:max-h-none sm:opacity-100 ${
                    isExpanded
                      ? "mt-6 max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="flex flex-col gap-2.5">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-neutral-700"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
