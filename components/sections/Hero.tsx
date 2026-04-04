import Image from "next/image";
import { SECTION_IDS } from "@/constants/navigation";
import {
  HERO_HEADING,
  HERO_SUBLINE_1,
  HERO_SUBLINE_2,
  HERO_CTA_TEXT,
  HERO_PROMO_BOX_BEFORE,
  HERO_PROMO_BOX_ACCENT,
  HERO_VIDEO_CAPTION_BEFORE,
  HERO_VIDEO_CAPTION_ACCENT,
} from "@/constants/hero";
import Button from "@/components/ui/Button";

interface HeroProps {
  onOpenForm: () => void;
}

export default function Hero({ onOpenForm }: HeroProps) {
  return (
    <section
      id={SECTION_IDS.hero}
      className="bg-surface pb-10 pt-6 sm:pb-14 sm:pt-8 lg:pb-20 lg:pt-10 xl:pb-24 xl:pt-12"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          {/* Text + CTA */}
          <div className="flex max-w-xl flex-col items-center text-center lg:max-w-none lg:items-start lg:text-left">
            <h1 className="text-2xl font-bold leading-tight text-neutral-950 sm:text-3xl lg:text-[44px] lg:leading-[1.12] xl:text-[52px]">
              {HERO_HEADING}
            </h1>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-700 sm:text-base lg:mt-6 lg:max-w-lg lg:text-lg xl:text-xl">
              {HERO_SUBLINE_1}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-700 sm:text-base lg:mt-4 lg:max-w-lg lg:text-lg xl:text-xl">
              {HERO_SUBLINE_2}
            </p>

            <div className="mt-8 w-full max-w-md lg:mt-10 lg:max-w-md">
              <Button
                onClick={onOpenForm}
                className="w-full px-6 py-4 text-base font-semibold sm:text-lg lg:px-10 lg:py-4 lg:text-lg xl:text-xl"
              >
                {HERO_CTA_TEXT}
              </Button>
            </div>

            <div className="shadow-lg mt-6 w-full max-w-md rounded-2xl bg-neutral-50 px-4 py-4 text-sm leading-snug text-neutral-700 sm:text-base lg:mt-8 lg:px-6 lg:py-5 lg:text-lg">
              {HERO_PROMO_BOX_BEFORE}
              <span className="font-medium text-primary-800">
                {HERO_PROMO_BOX_ACCENT}
              </span>
            </div>
          </div>

          {/* Video + caption */}
          <div className="flex w-full flex-col items-center lg:items-stretch">
            <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] sm:aspect-video sm:rounded-3xl">
              <Image
                src="/assets/kids-picture.png"
                alt="Дети на занятии English Dome"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={onOpenForm}
                  className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white/85 text-neutral-800 shadow-lg backdrop-blur-[2px] transition hover:scale-105 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800 lg:h-20 lg:w-20"
                  aria-label="Смотреть, как дети говорят через месяц"
                >
                  <svg
                    className="ml-1 h-7 w-7 lg:h-9 lg:w-9"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </button>
              </div>
            </div>

            <p className="mt-5 max-w-md text-center text-sm leading-relaxed text-neutral-700 sm:text-base lg:mt-6 lg:max-w-none lg:text-left lg:text-lg xl:text-xl">
              {HERO_VIDEO_CAPTION_BEFORE}
              <span className="font-medium text-primary-800">
                {HERO_VIDEO_CAPTION_ACCENT}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
