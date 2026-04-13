import Image from "next/image";
import { SECTION_IDS } from "@/constants/navigation";
import {
  CABINET_HEADING,
  CABINET_DESCRIPTION,
  CABINET_BENEFITS,
  CABINET_PREVIEW_SRC,
  CABINET_PREVIEW_CAPTION,
} from "@/constants/cabinet";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSignupFooter from "@/components/ui/SectionSignupFooter";

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-5 w-5 shrink-0 text-primary-800"
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

interface CabinetProps {
  onOpenForm: () => void;
}

export default function Cabinet({ onOpenForm }: CabinetProps) {
  return (
    <section id={SECTION_IDS.cabinet} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionHeading className="mb-4 lg:mb-6">
            {CABINET_HEADING}
          </SectionHeading>

          <p className="text-base leading-relaxed text-neutral-700 lg:text-lg">
            {CABINET_DESCRIPTION}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:mt-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-14">
          {/* Benefits list */}
          <ul className="flex flex-col gap-6">
            {CABINET_BENEFITS.map((b) => (
              <li key={b.title} className="flex gap-3">
                <CheckIcon />
                <div>
                  <p className="text-sm leading-snug text-neutral-950 sm:text-base lg:text-lg">
                    <span className="font-bold">{b.title}</span>
                    <span className="font-bold">{b.bold}</span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                    {b.subtitle}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Cabinet preview */}
          <div className="flex flex-col items-center">
            <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-lg sm:rounded-3xl">
              <Image
                src={CABINET_PREVIEW_SRC}
                alt="Скриншот личного кабинета ученика English Dome"
                width={800}
                height={600}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-4 text-center text-xs text-neutral-500 sm:text-sm">
              {CABINET_PREVIEW_CAPTION}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
