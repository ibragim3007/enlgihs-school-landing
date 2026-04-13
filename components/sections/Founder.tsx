"use client";

import Image from "next/image";
import { SECTION_IDS } from "@/constants/navigation";
import {
  FOUNDER_HEADING,
  FOUNDER_CREDENTIALS,
  FOUNDER_BIO,
  FOUNDER_QUOTE,
  FOUNDER_QUOTE_HIGHLIGHT,
  FOUNDER_MISSION,
  FOUNDER_CLOSING,
  FOUNDER_CERT_EFSET,
} from "@/constants/founder";
import SectionSignupFooter from "@/components/ui/SectionSignupFooter";

interface FounderProps {
  onOpenForm: () => void;
}

export default function Founder({ onOpenForm }: FounderProps) {
  return (
    <section id={SECTION_IDS.founder} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-950 mb-10 lg:mb-14">
          {FOUNDER_HEADING}
        </h2>

        {/* Top: large photo + bio side by side */}
        <div className="grid md:grid-cols-[minmax(280px,1fr)_1fr] lg:grid-cols-[420px_1fr] gap-8 lg:gap-14 items-start mb-12 lg:mb-16">
          {/* Photo */}
          <div className="relative mx-auto md:mx-0 w-full max-w-sm md:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-200 to-primary-100 -rotate-2" />
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/assets/teacher-picture.jpeg"
                alt="Полина — основатель онлайн-школы английского языка English Dome, сертифицированный преподаватель TESOL и TEFL"
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 40vw, 420px"
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="flex flex-col justify-center space-y-5">
            <p className="text-xs sm:text-sm font-bold text-primary-800 uppercase tracking-widest">
              {FOUNDER_CREDENTIALS}
            </p>

            {FOUNDER_BIO.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {FOUNDER_CLOSING.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base text-neutral-600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom: quote card + certs */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-end">
          <div className="rounded-3xl bg-gradient-to-br from-primary-50 to-primary-100/60 p-6 sm:p-8 lg:p-10 space-y-5">
            <p className="text-md sm:text-md lg:text-md font-semibold text-neutral-900 leading-snug">
              {FOUNDER_QUOTE.split(FOUNDER_QUOTE_HIGHLIGHT).map(
                (part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <strong className="font-bold text-primary-800">
                        {FOUNDER_QUOTE_HIGHLIGHT}
                      </strong>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
              )}
            </p>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {FOUNDER_MISSION}
            </p>
          </div>

          <div className="flex flex-row lg:flex-col gap-3">
            <div className="flex items-center gap-2.5 px-5 py-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <span className="text-2xl">🏆</span>
              <span className="text-sm sm:text-base font-semibold text-neutral-900">
                {FOUNDER_CERT_EFSET}
              </span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <span className="text-yellow-400 text-2xl">⭐</span>
              <span className="text-sm sm:text-base text-neutral-700">
                Оценка{" "}
                <span className="font-bold text-neutral-900">97/100</span> по
                международной шкале
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
