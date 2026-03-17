import { SECTION_IDS } from "@/constants/navigation";
import { PACKAGES_HEADING, PACKAGES } from "@/constants/packages";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

interface PackagesProps {
  onOpenForm: () => void;
}

export default function Packages({ onOpenForm }: PackagesProps) {
  return (
    <section id={SECTION_IDS.packages} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-10 lg:mb-14">
          {PACKAGES_HEADING}
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl transition-all ${
                pkg.highlighted
                  ? "ring-2 ring-primary-700 md:scale-105 md:z-10"
                  : "bg-surface"
              } ${!pkg.highlighted ? "bg-surface" : "bg-surface"} p-8`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-700 px-4 py-1 text-xs font-semibold text-white">
                  {pkg.badge}
                </div>
              )}

              <div className="text-4xl mb-4">{pkg.icon}</div>

              <h3 className="text-2xl font-bold text-neutral-950">
                {pkg.name}
              </h3>
              <p className="text-sm text-primary-700 font-semibold mt-1">
                {pkg.tagline}
              </p>
              <p className="text-sm text-neutral-700 mt-3 mb-6">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8 pb-8 border-b border-neutral-200">
                {pkg.features.map((feature) => (
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

              <div className="mb-6">
                <p className="text-3xl font-bold text-neutral-950">
                  {pkg.price}{" "}
                  <span className="text-lg text-neutral-700 font-semibold">
                    {pkg.currency}
                  </span>
                </p>
                <p className="text-sm text-neutral-700 mt-1">за {pkg.period}</p>
              </div>

              <Button
                onClick={onOpenForm}
                variant={pkg.highlighted ? "primary" : "outline"}
                className="w-full"
              >
                Выбрать
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
