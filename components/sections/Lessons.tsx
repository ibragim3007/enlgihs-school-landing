import { SECTION_IDS } from "@/constants/navigation";
import {
  LESSONS_HEADING,
  LESSONS_DESCRIPTION,
  LESSONS_ADDITIONAL,
} from "@/constants/lessons";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Lessons() {
  return (
    <section id={SECTION_IDS.lessons} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-6 lg:mb-10">
          {LESSONS_HEADING}
        </SectionHeading>

        <p className="text-base text-neutral-700 leading-relaxed lg:text-lg max-w-2xl whitespace-pre-line">
          {LESSONS_DESCRIPTION}
        </p>

        <div className="mt-10 lg:mt-14">
          <p className="text-sm font-semibold text-neutral-950 uppercase tracking-wide">
            Дополнительно:
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {LESSONS_ADDITIONAL.map((item) => (
              <li
                key={item}
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
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
