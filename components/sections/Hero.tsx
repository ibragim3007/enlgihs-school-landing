import Image from "next/image";
import { SECTION_IDS } from "@/constants/navigation";
import {
  HERO_HEADING,
  HERO_DESCRIPTION,
  HERO_CTA_TEXT,
  HERO_STATS,
} from "@/constants/hero";
import Button from "@/components/ui/Button";

interface HeroProps {
  onOpenForm: () => void;
}

export default function Hero({ onOpenForm }: HeroProps) {
  return (
    <section id={SECTION_IDS.hero} className="py-8 lg:py-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-surface p-6 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left — Text */}
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-bold leading-tight text-neutral-950 sm:text-4xl lg:text-[52px] lg:leading-[1.1]">
                {HERO_HEADING}
              </h1>

              <p className="text-base text-neutral-700 leading-relaxed lg:text-lg whitespace-pre-line">
                {HERO_DESCRIPTION}
              </p>

              <div className="pt-2">
                <Button
                  onClick={onOpenForm}
                  className="text-base lg:text-lg px-10 py-4"
                >
                  {HERO_CTA_TEXT}
                </Button>
              </div>
            </div>

            {/* Right — Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Stat green */}
              <div className="flex flex-col justify-between rounded-3xl bg-primary-800 p-6 text-white aspect-square sm:p-8">
                <span className="text-5xl font-bold sm:text-6xl lg:text-7xl">
                  {HERO_STATS[0].value}
                </span>
                <p className="mt-auto text-sm leading-snug text-white/80 sm:text-base">
                  {HERO_STATS[0].description}
                </p>
              </div>

              {/* Kids photo */}
              <div className="relative rounded-3xl overflow-hidden aspect-square">
                <Image
                  src="/assets/kids-picture.png"
                  alt="Дети изучают английский язык онлайн в школе English Dome — весёлые уроки для школьников 1-11 классов"
                  fill
                  // sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 280px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Placeholder photo 2 */}
              <div className="rounded-3xl bg-gradient-to-br from-primary-600/20 to-primary-800/30 aspect-square flex items-center justify-center">
                <svg
                  className="h-16 w-16 text-primary-800/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Stat gray */}
              <div className="flex flex-col justify-between rounded-3xl bg-card p-6 aspect-square sm:p-8">
                <span className="text-5xl font-bold text-neutral-950 sm:text-6xl lg:text-7xl">
                  {HERO_STATS[1].value}
                </span>
                <p className="mt-auto text-sm leading-snug text-neutral-700 sm:text-base">
                  {HERO_STATS[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
