import { SECTION_IDS } from "@/constants/navigation";
import {
  PSYCHOLOGIST_HEADING,
  PSYCHOLOGIST_DESCRIPTION,
  PSYCHOLOGIST_BENEFITS,
  PSYCHOLOGIST_QUOTE,
  PSYCHOLOGIST_QUOTE_BOLD,
  PSYCHOLOGIST_NOTE,
  PSYCHOLOGIST_IMAGE_SRC,
} from "@/constants/psychologist";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSignupFooter from "@/components/ui/SectionSignupFooter";
import Image from "next/image";

interface PsychologistProps {
  onOpenForm: () => void;
}

export default function Psychologist({ onOpenForm }: PsychologistProps) {
  return (
    <section id={SECTION_IDS.psychologist} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-4 lg:mb-6">
          {PSYCHOLOGIST_HEADING}
        </SectionHeading>

        <p className="text-base lg:text-lg text-neutral-700 leading-relaxed max-w-2xl mb-10 lg:mb-14">
          В <span className="text-primary-800 font-bold">English Dome</span>{" "}
          есть поддержка психолога, которая помогает ребёнку справляться со
          страхами, неуверенностью и адаптироваться к обучению
        </p>

        <div className="rounded-3xl bg-surface p-6 sm:p-10 lg:p-14">
          <ul className="flex flex-col gap-3 mb-8 lg:mb-10">
            {PSYCHOLOGIST_BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-base text-neutral-700"
              >
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-primary-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-10 mb-8 lg:mb-10">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={PSYCHOLOGIST_IMAGE_SRC}
                alt="Психолог на занятии с ребёнком"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
              />
            </div>

            <blockquote className="text-lg lg:text-xl text-neutral-700 leading-relaxed italic self-center">
              &ldquo;{PSYCHOLOGIST_QUOTE}{" "}
              <strong className="font-bold text-primary-800">
                {PSYCHOLOGIST_QUOTE_BOLD}
              </strong>
              &rdquo;
            </blockquote>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-primary-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm lg:text-base text-neutral-700">
              {PSYCHOLOGIST_NOTE.split("1000 ₽")[0]}
              <strong className="font-bold">1000 ₽</strong>
              {PSYCHOLOGIST_NOTE.split("1000 ₽")[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
