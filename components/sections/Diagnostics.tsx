import { SECTION_IDS } from "@/constants/navigation";
import {
  DIAGNOSTICS_HEADING,
  DIAGNOSTICS_DESCRIPTION,
  DIAGNOSTICS_CTA_TEXT,
  DIAGNOSTICS_FEATURES,
} from "@/constants/diagnostics";
import Button from "@/components/ui/Button";

interface DiagnosticsProps {
  onOpenForm: () => void;
}

export default function Diagnostics({ onOpenForm }: DiagnosticsProps) {
  return (
    <section id={SECTION_IDS.diagnostics} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary-800 p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {DIAGNOSTICS_HEADING}
            </h2>
            <p className="mt-4 text-base text-white/80 leading-relaxed lg:text-lg">
              {DIAGNOSTICS_DESCRIPTION}
            </p>

            <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2 sm:gap-4">
              {DIAGNOSTICS_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-white">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button
                variant="inverse"
                onClick={onOpenForm}
                className="text-base lg:text-lg px-10 py-4"
              >
                {DIAGNOSTICS_CTA_TEXT}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
