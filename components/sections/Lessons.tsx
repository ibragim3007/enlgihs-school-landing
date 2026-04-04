import { SECTION_IDS } from "@/constants/navigation";
import {
  LESSONS_HEADING,
  LESSONS_PROMO,
  LESSONS_STEPS,
} from "@/constants/lessons";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Lessons() {
  return (
    <section id={SECTION_IDS.lessons} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-6 max-w-3xl lg:mb-8">
          {LESSONS_HEADING}
        </SectionHeading>

        {/* Promo bar */}
        <div className="mb-10 flex max-w-2xl items-center gap-3 rounded-2xl bg-neutral-100 px-5 py-4 lg:mb-12">
          <span className="text-2xl leading-none" aria-hidden>
            📣
          </span>
          <p className="text-sm leading-snug text-neutral-700 sm:text-base">
            {LESSONS_PROMO}
          </p>
        </div>

        {/* Steps timeline */}
        <div className="relative flex flex-col gap-0 lg:max-w-3xl">
          {LESSONS_STEPS.map((step, idx) => {
            const isLast = idx === LESSONS_STEPS.length - 1;

            return (
              <div key={step.id} className="relative flex gap-5 sm:gap-6">
                {/* Left: circle + connector */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white shadow-md sm:h-16 sm:w-16 sm:text-2xl ${step.color}`}
                  >
                    {step.number}
                  </div>
                  {!isLast && (
                    <div className="w-0.5 flex-1 bg-neutral-200" />
                  )}
                </div>

                {/* Right: card */}
                <div className="mb-6 flex-1 rounded-2xl bg-surface p-5 sm:p-6 lg:mb-8">
                  <span className="text-2xl leading-none" aria-hidden>
                    {step.emoji}
                  </span>
                  <h3 className="mt-3 text-sm font-bold leading-snug text-neutral-950 sm:text-base lg:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
