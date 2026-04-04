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
  FOUNDER_CERT_SCORE,
} from "@/constants/founder";

export default function Founder() {
  return (
    <section id={SECTION_IDS.founder} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto lg:max-w-none">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-950 mb-10 lg:mb-14">
            {FOUNDER_HEADING}
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — photo + bio */}
            <div>
              <div className="flex gap-5 sm:gap-6 items-start mb-8">
                <div className="w-36 h-44 sm:w-44 sm:h-56 lg:w-52 lg:h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/teacher-picture.jpeg"
                    alt="Полина — основатель онлайн-школы английского языка English Dome, сертифицированный преподаватель TESOL и TEFL"
                    width={208}
                    height={256}
                    sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 208px"
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="pt-1 space-y-3">
                  <p className="text-xs sm:text-sm font-bold text-primary-800 uppercase tracking-wider">
                    {FOUNDER_CREDENTIALS}
                  </p>
                  {FOUNDER_BIO.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-base text-neutral-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — quote card + certs */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-gradient-to-b from-primary-50 to-primary-100/60 p-6 sm:p-8 lg:p-10 space-y-5">
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900 leading-snug">
                  <span className="text-primary-400 text-3xl lg:text-4xl leading-none">
                    &ldquo;
                  </span>
                  {FOUNDER_QUOTE.split(FOUNDER_QUOTE_HIGHLIGHT).map(
                    (part, i, arr) =>
                      i < arr.length - 1 ? (
                        <span key={i}>
                          {part}
                          <strong className="font-bold">
                            {FOUNDER_QUOTE_HIGHLIGHT}
                          </strong>
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                  )}
                  <span className="text-primary-400 text-3xl lg:text-4xl leading-none">
                    &rdquo;
                  </span>
                </p>

                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {FOUNDER_MISSION}
                </p>
              </div>

              <div className="space-y-2">
                {FOUNDER_CLOSING.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-base text-neutral-700 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-neutral-200 shadow-sm">
                  <span className="text-xl">🏆</span>
                  <span className="text-sm sm:text-base font-semibold text-neutral-900">
                    {FOUNDER_CERT_EFSET}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-neutral-200 shadow-sm">
                  <span className="text-yellow-400 text-xl">⭐</span>
                  <span className="text-sm sm:text-base text-neutral-700">
                    Оценка{" "}
                    <span className="font-bold text-neutral-900">97/100</span>{" "}
                    по международной шкале
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
