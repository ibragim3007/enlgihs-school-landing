import { SECTION_IDS } from "@/constants/navigation";
import {
  PROGRAMS_HEADING,
  PROGRAMS_DESCRIPTION,
  PROGRAMS,
} from "@/constants/programs";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Programs() {
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
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="group flex flex-col rounded-3xl bg-surface p-6 transition-shadow hover:shadow-lg sm:p-8"
            >
              <h3 className="text-xl font-bold text-neutral-950">
                {program.title}
              </h3>

              <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                {program.description}
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
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
          ))}
        </div>
      </div>
    </section>
  );
}
