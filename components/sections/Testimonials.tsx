"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  type TouchEvent,
} from "react";
import { SECTION_IDS } from "@/constants/navigation";
import {
  TESTIMONIALS_HEADING,
  TESTIMONIALS_SUBTITLE,
  VIDEO_TESTIMONIALS,
  WRITTEN_TESTIMONIALS_HEADING,
  PARENT_TESTIMONIAL_IMAGES,
} from "@/constants/testimonials";
import type { VideoTestimonial } from "@/types";
import Image from "next/image";
import SectionSignupFooter from "@/components/ui/SectionSignupFooter";

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

function VideoCard({ testimonial }: { testimonial: VideoTestimonial }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  const mimeType = testimonial.videoUrl?.toLowerCase().endsWith(".mov")
    ? "video/quicktime"
    : "video/mp4";

  return (
    <div className="flex flex-col">
      <div
        className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 mb-3 cursor-pointer group"
        onClick={toggle}
      >
        {testimonial.videoUrl ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            playsInline
            preload="metadata"
            loop
          >
            <source src={testimonial.videoUrl} type={mimeType} />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-primary-100 to-primary-200" />
        )}

        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
              <svg
                className="h-6 w-6 text-primary-600 ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <StarRating count={5} />

      <p className="mt-2 text-sm sm:text-base font-semibold text-neutral-900">
        {testimonial.name} <span className="text-base">{testimonial.flag}</span>
      </p>
      <p className="text-xs sm:text-sm text-neutral-500">{testimonial.role}</p>
      <p className="mt-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
        {testimonial.text}
      </p>
    </div>
  );
}

function ParentTestimonialsSlider() {
  const total = PARENT_TESTIMONIAL_IMAGES.length;
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
  }, [total]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [resetAutoplay]);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    const SWIPE_THRESHOLD = 50;
    if (touchDeltaX.current < -SWIPE_THRESHOLD) {
      next();
      resetAutoplay();
    } else if (touchDeltaX.current > SWIPE_THRESHOLD) {
      prev();
      resetAutoplay();
    }
  };

  return (
    <div>
      <div
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {PARENT_TESTIMONIAL_IMAGES.map((src, i) => (
            <div key={src} className="w-full shrink-0 px-1">
              <div className="mx-auto max-w-md overflow-hidden rounded-2xl bg-white shadow-md">
                <Image
                  src={src}
                  alt={`Отзыв родителя ${i + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto"
                  sizes="(max-width: 640px) 100vw, 448px"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            prev();
            resetAutoplay();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
          aria-label="Предыдущий отзыв"
        >
          <svg
            className="h-5 w-5 text-neutral-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          onClick={() => {
            next();
            resetAutoplay();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
          aria-label="Следующий отзыв"
        >
          <svg
            className="h-5 w-5 text-neutral-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2.5">
        {PARENT_TESTIMONIAL_IMAGES.map((src, i) => (
          <button
            key={src}
            onClick={() => {
              goTo(i);
              resetAutoplay();
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-primary-700"
                : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
            }`}
            aria-label={`Отзыв ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

interface TestimonialsProps {
  onOpenForm: () => void;
}

export default function Testimonials({ onOpenForm }: TestimonialsProps) {
  return (
    <section id={SECTION_IDS.testimonials} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-950 mb-3">
          {TESTIMONIALS_HEADING}
        </h2>
        <p className="text-base lg:text-lg text-neutral-500 mb-10 lg:mb-14">
          {TESTIMONIALS_SUBTITLE}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-14 lg:mb-20">
          {VIDEO_TESTIMONIALS.map((t) => (
            <VideoCard key={t.id} testimonial={t} />
          ))}
        </div>

        <div className="border-t border-neutral-200 pt-10 lg:pt-14">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-950 mb-8 lg:mb-10">
            {WRITTEN_TESTIMONIALS_HEADING}
          </h3>

          <ParentTestimonialsSlider />
        </div>
      </div>
    </section>
  );
}
