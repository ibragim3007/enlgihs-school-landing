import type { ReactNode } from "react";
import Image from "next/image";
import { SECTION_IDS } from "@/constants/navigation";
import {
  ABOUT_HEADING,
  ABOUT_INTRO,
  ABOUT_BULLETS_SUBHEAD,
  ABOUT_BULLETS,
  ABOUT_ATMOSPHERE,
  ABOUT_VIDEO_LINK_TEXT,
  ABOUT_VIDEO_LINK_HREF,
  ABOUT_LESSONS_PREVIEW_SRC,
  ABOUT_STATS,
} from "@/constants/about";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSignupFooter from "@/components/ui/SectionSignupFooter";

function CheckBullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-left">
      <span
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-800"
        aria-hidden
      >
        <svg
          className="h-3.5 w-3.5 text-white"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 6L5 8.5L9.5 3.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-base leading-relaxed text-neutral-700 lg:text-lg">
        {children}
      </span>
    </li>
  );
}

interface AboutProps {
  onOpenForm: () => void;
}

export default function About({ onOpenForm }: AboutProps) {
  return (
    <section id={SECTION_IDS.about} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-surface p-6 sm:p-10 lg:p-14">
          <div className="flex flex-col gap-10 lg:gap-12">
            <div className="max-w-3xl">
              <SectionHeading className="mb-6 lg:mb-8">
                {ABOUT_HEADING}
              </SectionHeading>

              <p className="text-base leading-relaxed text-neutral-700 lg:text-lg">
                {ABOUT_INTRO}
              </p>

              <p className="mt-6 text-base font-semibold text-neutral-950 lg:text-lg">
                {ABOUT_BULLETS_SUBHEAD}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {ABOUT_BULLETS.map((item) => (
                  <CheckBullet key={item}>{item}</CheckBullet>
                ))}
              </ul>

              <p className="mt-6 text-base leading-relaxed text-neutral-700 lg:text-lg">
                <span className="font-semibold text-neutral-950">
                  Атмосфера:{" "}
                </span>
                {ABOUT_ATMOSPHERE}
              </p>

              <a
                href={ABOUT_VIDEO_LINK_HREF}
                className="mt-8 inline-flex items-center gap-2 text-base font-medium text-primary-800 underline decoration-primary-800 underline-offset-2 transition hover:text-primary-700 lg:text-lg"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                {ABOUT_VIDEO_LINK_TEXT}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
              {ABOUT_STATS.map((stat) => (
                <div
                  key={stat.value + stat.label}
                  className="flex flex-col justify-center rounded-2xl bg-primary-500/25 px-5 py-6 sm:px-6 sm:py-8"
                >
                  <span className="text-3xl font-bold text-primary-800 sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-sm leading-snug text-neutral-700 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-sm sm:rounded-3xl aspect-video max-w-4xl lg:mx-auto lg:max-w-5xl">
              <Image
                src={ABOUT_LESSONS_PREVIEW_SRC}
                alt="Иллюстрация: как проходят занятия в English Dome"
                fill
                // className="object-cover"
                // sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </div>
        </div>

        <SectionSignupFooter onOpenForm={onOpenForm} />
      </div>
    </section>
  );
}
