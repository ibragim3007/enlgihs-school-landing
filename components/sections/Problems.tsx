import { SECTION_IDS } from "@/constants/navigation";
import { PROBLEMS_HEADING, PROBLEMS } from "@/constants/problems";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Problems() {
  return (
    <section id={SECTION_IDS.problems} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-10 lg:mb-14">
          {PROBLEMS_HEADING}
        </SectionHeading>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {/* Card 1 — top left */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-6 sm:p-8 lg:row-span-1">
            <div className="flex items-start justify-between gap-4">
              <p className="text-base font-medium text-neutral-900 leading-snug lg:text-lg">
                {PROBLEMS[0].title}
              </p>
              <svg
                className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mt-6 h-40 rounded-2xl bg-gradient-to-br from-primary-500/15 to-primary-700/25 flex items-center justify-center">
              <span className="text-4xl">🎓</span>
            </div>
          </div>

          {/* Card 2 — top center */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-6 sm:p-8 lg:row-span-1">
            <div className="flex items-start justify-between gap-4">
              <p className="text-base font-medium text-neutral-900 leading-snug lg:text-lg">
                {PROBLEMS[1].title}
              </p>
              <svg
                className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mt-6 h-40 rounded-2xl bg-gradient-to-br from-primary-600/15 to-primary-800/25 flex items-center justify-center">
              <span className="text-4xl">📚</span>
            </div>
          </div>

          {/* Card 3 — top right, spans 2 rows */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-6 sm:p-8 lg:row-span-2">
            <div className="flex items-start justify-between gap-4">
              <p className="text-base font-medium text-neutral-900 leading-snug lg:text-lg">
                {PROBLEMS[3].title}
              </p>
              <svg
                className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mt-6 flex-1 min-h-[200px] rounded-2xl bg-gradient-to-b from-primary-500/15 to-primary-800/25 flex items-center justify-center">
              <span className="text-5xl">💬</span>
            </div>
          </div>

          {/* Card 4 — bottom left, spans 2 cols */}
          <div className="group relative flex flex-col sm:flex-row sm:items-center gap-6 overflow-hidden rounded-3xl bg-card p-6 sm:p-8 lg:col-span-2 lg:row-span-1">
            <div className="flex flex-1 items-start justify-between gap-4">
              <p className="text-base font-medium text-neutral-900 leading-snug lg:text-lg">
                {PROBLEMS[2].title}
              </p>
              <svg
                className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="h-40 sm:h-full sm:w-1/3 rounded-2xl bg-gradient-to-br from-primary-700/15 to-primary-900/25 flex items-center justify-center shrink-0">
              <span className="text-4xl">✈️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
