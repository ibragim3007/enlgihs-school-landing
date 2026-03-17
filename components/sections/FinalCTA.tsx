import { SECTION_IDS } from "@/constants/navigation";
import {
  FINAL_CTA_HEADING,
  FINAL_CTA_DESCRIPTION,
  FINAL_CTA_BUTTON,
} from "@/constants/final-cta";
import Button from "@/components/ui/Button";

interface FinalCTAProps {
  onOpenForm: () => void;
}

export default function FinalCTA({ onOpenForm }: FinalCTAProps) {
  return (
    <section id={SECTION_IDS.finalCTA} className="py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary-800 p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.1] max-w-2xl mx-auto">
            {FINAL_CTA_HEADING}
          </h2>

          <p className="mt-6 lg:mt-8 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            {FINAL_CTA_DESCRIPTION}
          </p>

          <div className="mt-8 lg:mt-10">
            <Button
              onClick={onOpenForm}
              variant="inverse"
              className="text-base lg:text-lg px-10 py-4"
            >
              {FINAL_CTA_BUTTON}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
