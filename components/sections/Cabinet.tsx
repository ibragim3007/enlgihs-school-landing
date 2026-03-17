import { SECTION_IDS } from "@/constants/navigation";
import {
  CABINET_HEADING,
  CABINET_DESCRIPTION,
  CABINET_FEATURES,
} from "@/constants/cabinet";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Cabinet() {
  const icons = ["📝", "📚", "🔄", "📊"];

  return (
    <section
      id={SECTION_IDS.cabinet}
      className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/20 to-white"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-6 lg:mb-10">
          {CABINET_HEADING}
        </SectionHeading>

        <p className="text-base text-neutral-700 leading-relaxed lg:text-lg max-w-2xl mb-12 lg:mb-16">
          {CABINET_DESCRIPTION}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CABINET_FEATURES.map((feature, idx) => (
            <div
              key={feature}
              className="group flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-white border-2 border-primary-500 hover:border-primary-400 hover:shadow-lg hover:bg-primary-50 transition-all"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {icons[idx % icons.length]}
              </div>

              {/* Text */}
              <p className="text-base lg:text-lg font-semibold text-neutral-900 leading-relaxed group-hover:text-primary-700 transition-colors">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
