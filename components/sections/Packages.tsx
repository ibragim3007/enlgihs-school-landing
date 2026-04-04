import { SECTION_IDS } from "@/constants/navigation";
import {
  PACKAGES_HEADING,
  PACKAGES_SUBHEADING,
  PACKAGES_FOOTER,
  PACKAGES,
} from "@/constants/packages";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

interface PackagesProps {
  onOpenForm: () => void;
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-primary-700"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Packages({ onOpenForm }: PackagesProps) {
  return (
    <section id={SECTION_IDS.packages} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-3 lg:mb-4">
          {PACKAGES_HEADING}
        </SectionHeading>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-neutral-700 lg:mb-14 lg:text-lg">
          {PACKAGES_SUBHEADING}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-3xl bg-surface p-6 sm:p-8 ${
                pkg.highlighted
                  ? "ring-2 ring-primary-700 md:scale-105 md:z-10"
                  : ""
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-700 px-5 py-1.5 text-xs font-semibold text-white">
                  {pkg.badge}
                </div>
              )}

              <div className="mb-4 text-4xl">{pkg.icon}</div>

              <h3 className="text-2xl font-bold text-neutral-950">
                {pkg.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-primary-700">
                {pkg.tagline}
              </p>
              {pkg.description && (
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  {pkg.description}
                </p>
              )}

              <ul className="mt-6 flex flex-1 flex-col gap-3 border-b border-neutral-200 pb-6">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-neutral-700"
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 mb-6">
                <p className="text-3xl font-bold text-neutral-950">
                  {pkg.price.toLocaleString("ru-RU")}{" "}
                  <span className="text-lg font-semibold text-neutral-700">
                    {pkg.currency}
                  </span>
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                  / {pkg.period}
                </p>
              </div>

              <Button
                onClick={onOpenForm}
                variant={pkg.highlighted ? "primary" : "outline"}
                className="w-full"
              >
                {pkg.ctaText ?? "Выбрать"}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-neutral-600 lg:mt-12 lg:text-base">
          <svg
            className="h-5 w-5 shrink-0 text-primary-700"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {PACKAGES_FOOTER}
        </p>
      </div>
    </section>
  );
}
