import { SECTION_IDS } from "@/constants/navigation";
import {
  CABINET_HEADING,
  CABINET_DESCRIPTION,
  CABINET_FEATURES,
} from "@/constants/cabinet";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Cabinet() {
  return (
    <section id={SECTION_IDS.cabinet} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-6 lg:mb-10">
          {CABINET_HEADING}
        </SectionHeading>

        <p className="text-base text-neutral-700 leading-relaxed lg:text-lg max-w-2xl mb-10">
          {CABINET_DESCRIPTION}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {CABINET_FEATURES.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-4 rounded-2xl bg-surface p-6 sm:p-8"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-800/10 text-primary-700 mt-0.5">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm text-neutral-700 lg:text-base">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
