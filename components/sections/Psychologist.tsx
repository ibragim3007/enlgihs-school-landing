import { SECTION_IDS } from "@/constants/navigation";
import {
  PSYCHOLOGIST_HEADING,
  PSYCHOLOGIST_SUBHEADING,
  PSYCHOLOGIST_SUBTITLE,
  PSYCHOLOGIST_DESCRIPTION,
  PSYCHOLOGIST_BENEFITS,
  PSYCHOLOGIST_CONCLUSION,
  PSYCHOLOGIST_FORMAT,
  PSYCHOLOGIST_NOTE,
} from "@/constants/psychologist";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Psychologist() {
  return (
    <section
      id={SECTION_IDS.psychologist}
      className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-white"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-12 lg:mb-16">
          {PSYCHOLOGIST_HEADING}
        </SectionHeading>

        <div className="grid gap-12 lg:gap-16">
          {/* Main Card */}
          <div className="rounded-3xl bg-white p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow">
            {/* Subheading */}
            <div className="mb-2 flex items-center gap-3">
              <span className="text-3xl">💬</span>
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-950">
                {PSYCHOLOGIST_SUBHEADING}
              </h3>
            </div>
            <p className="text-base lg:text-lg text-primary-700 font-semibold mb-8">
              {PSYCHOLOGIST_SUBTITLE}
            </p>

            {/* Description */}
            <p className="text-base lg:text-lg text-neutral-700 leading-relaxed whitespace-pre-line mb-8 text-justify">
              {PSYCHOLOGIST_DESCRIPTION}
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {PSYCHOLOGIST_BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-600"
                >
                  <svg
                    className="mt-1 h-6 w-6 shrink-0 text-primary-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm lg:text-base text-neutral-700 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="rounded-2xl bg-primary-700/5 p-6 border-l-4 border-primary-700 mb-8">
              <p className="text-base lg:text-lg text-neutral-700 leading-relaxed italic">
                &ldquo;{PSYCHOLOGIST_CONCLUSION}&rdquo;
              </p>
            </div>

            {/* Format and Note */}
            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-neutral-200">
              <div>
                <p className="text-sm font-semibold text-neutral-950 mb-2 flex items-center gap-2">
                  <span className="text-xl">📅</span>
                  Формат:
                </p>
                <p className="text-base text-neutral-700 font-medium">
                  {PSYCHOLOGIST_FORMAT}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-950 mb-2 flex items-center gap-2">
                  <span className="text-xl">ℹ️</span>
                  Примечание:
                </p>
                <p className="text-base text-neutral-700 font-medium">
                  {PSYCHOLOGIST_NOTE}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
