"use client";

import { SECTION_IDS } from "@/constants/navigation";
import {
  TESTIMONIALS_HEADING,
  TESTIMONIALS_SUBTITLE,
  VIDEO_TESTIMONIALS,
  WRITTEN_TESTIMONIALS_HEADING,
  WRITTEN_TESTIMONIALS,
} from "@/constants/testimonials";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-primary-400" : "text-neutral-300"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
        <svg
          className="h-6 w-6 text-primary-600 ml-1"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id={SECTION_IDS.testimonials} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-950 mb-3">
          {TESTIMONIALS_HEADING}
        </h2>
        <p className="text-base lg:text-lg text-neutral-500 mb-10 lg:mb-14">
          {TESTIMONIALS_SUBTITLE}
        </p>

        {/* Video testimonials */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-14 lg:mb-20">
          {VIDEO_TESTIMONIALS.map((t) => (
            <div key={t.id} className="flex flex-col">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200 mb-3 cursor-pointer group">
                {t.thumbnailUrl ? (
                  <img
                    src={t.thumbnailUrl}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-primary-100 to-primary-200" />
                )}
                <PlayButton />
              </div>

              <StarRating count={5} />

              <p className="mt-2 text-sm sm:text-base font-semibold text-neutral-900">
                {t.name}{" "}
                <span className="text-base">{t.flag}</span>
              </p>
              <p className="text-xs sm:text-sm text-neutral-500">{t.role}</p>
              <p className="mt-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Written testimonials */}
        <div className="border-t border-neutral-200 pt-10 lg:pt-14">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-950 mb-8 lg:mb-10">
            {WRITTEN_TESTIMONIALS_HEADING}
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WRITTEN_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl bg-gradient-to-b from-primary-50/80 to-primary-100/40 p-5 sm:p-6"
              >
                <StarRating count={t.stars} />
                <p className="mt-4 text-sm sm:text-base text-neutral-800 leading-relaxed">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
