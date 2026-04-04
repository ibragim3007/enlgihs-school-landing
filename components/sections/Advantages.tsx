import { SECTION_IDS } from "@/constants/navigation";
import {
  ADVANTAGES_HEADING,
  ADVANTAGES_CARDS,
  type AdvantageIconId,
} from "@/constants/advantages";
import SectionHeading from "@/components/ui/SectionHeading";

const iconClass = "h-6 w-6 text-primary-800";

function AdvantageIcon({ id }: { id: AdvantageIconId }) {
  switch (id) {
    case "speech-heart":
      return (
        <span className="relative inline-flex h-6 w-6 shrink-0">
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21.75l4.155-4.155c1.153.037 2.294.056 3.435.056 1.136 0 2.248-.017 3.334-.05C21.153 17.495 22 16.435 22 15.298v-4.782c0-1.069-.616-1.953-1.5-2.237z"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="absolute -bottom-px -right-px h-3 w-3 text-primary-800"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
          </svg>
        </span>
      );
    case "thumbs-up":
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
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V2.75a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
          />
        </svg>
      );
    case "treasure":
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
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      );
    case "chart-up":
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
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
          />
        </svg>
      );
    case "house":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Advantages() {
  return (
    <section id={SECTION_IDS.advantages} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-10 max-w-4xl lg:mb-12">
          {ADVANTAGES_HEADING}
        </SectionHeading>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {ADVANTAGES_CARDS.map((card) => (
            <article
              key={card.id}
              className="flex flex-col rounded-2xl bg-neutral-50 p-4 sm:p-5"
            >
              <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500/25">
                <AdvantageIcon id={card.icon} />
              </div>
              <h3 className="text-sm font-bold leading-snug text-neutral-950 sm:text-base">
                {card.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm">
                {card.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
