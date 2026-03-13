import { SECTION_IDS } from "@/constants/navigation";
import { ABOUT_HEADING, ABOUT_TEXT, ABOUT_STATS } from "@/constants/about";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id={SECTION_IDS.about} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-surface p-6 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left — Text */}
            <div>
              <SectionHeading className="mb-6 lg:mb-8">
                {ABOUT_HEADING}
              </SectionHeading>
              <div className="flex flex-col gap-4">
                {ABOUT_TEXT.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-neutral-700 lg:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right — Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-start justify-center rounded-2xl bg-surface-muted p-6 sm:p-8"
                >
                  <span className="text-3xl font-bold text-primary-800 sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-sm text-neutral-700 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
