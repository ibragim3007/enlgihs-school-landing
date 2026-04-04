import { SECTION_IDS } from "@/constants/navigation";
import {
  PROGRAMS_HEADING,
  PROGRAMS_DESCRIPTION,
  PROGRAMS,
  type ProgramIconId,
} from "@/constants/programs";
import SectionHeading from "@/components/ui/SectionHeading";

const iconClass = "h-6 w-6 text-primary-800";

function ProgramIcon({ id }: { id: ProgramIconId }) {
  switch (id) {
    case "abc":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
            strokeWidth={1.5}
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364V3"
          />
        </svg>
      );
    case "letter-a":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <rect
            x={3}
            y={5}
            width={18}
            height={14}
            rx={3}
            stroke="currentColor"
            strokeWidth={1.5}
          />
          <path
            d="M12 9l-3 6h6l-3-6zm0 0v0"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chat":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      );
    case "cap":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15V19.5"
          />
        </svg>
      );
    case "diploma":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Programs() {
  return (
    <section id={SECTION_IDS.programs} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl lg:mb-10">
          <SectionHeading>{PROGRAMS_HEADING}</SectionHeading>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 lg:text-lg">
            {PROGRAMS_DESCRIPTION}
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:max-w-3xl">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="flex items-start gap-4 rounded-2xl bg-surface p-4 sm:items-center sm:gap-5 sm:p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500/25">
                <ProgramIcon id={program.icon} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold leading-snug text-neutral-950 sm:text-base">
                  {program.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  {program.subtitle}
                </p>
                {program.level && (
                  <span className="mt-2 inline-block text-xs font-semibold text-primary-800 sm:text-sm">
                    {program.level}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
