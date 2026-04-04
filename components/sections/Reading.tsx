import { SECTION_IDS } from "@/constants/navigation";
import {
  READING_HEADING,
  READING_DESCRIPTION,
  READING_FEATURES,
  READING_PREVIEW_SRC,
} from "@/constants/reading";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

export default function Reading() {
  return (
    <section id={SECTION_IDS.reading} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-surface p-6 sm:p-10 lg:p-14">
          <SectionHeading className="mb-6 lg:mb-10">
            {READING_HEADING}
          </SectionHeading>

          <p className="text-base text-neutral-700 leading-relaxed lg:text-lg max-w-2xl mb-6">
            {READING_DESCRIPTION}
          </p>

          <ul className="flex flex-col gap-3">
            {READING_FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-base text-neutral-700"
              >
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-primary-700"
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
          <div className="mt-8 lg:mt-12 max-w-lg">
            <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-sm sm:rounded-3xl aspect-video">
              <Image
                src={READING_PREVIEW_SRC}
                alt="Иллюстрация: как проходят занятия в English Dome"
                fill
                // className="object-cover"
                // sizes="(max-width: 740px) 100vw, 384px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
