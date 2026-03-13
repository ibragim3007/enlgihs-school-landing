import { SECTION_IDS } from "@/constants/navigation";
import { ADVANTAGES_HEADING, ADVANTAGES } from "@/constants/advantages";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS = [
  // Certificate
  <svg
    key="cert"
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 7V4a1 1 0 011-1h14a1 1 0 011 1v3M4 7v13a1 1 0 001 1h6m-7-14h16m0 0v6m0 0l-3 3m3-3l-3-3M11 21v-4a2 2 0 012-2h0a2 2 0 012 2v4m-4 0h4"
    />
  </svg>,
  // Group
  <svg
    key="group"
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
    />
  </svg>,
  // Book
  <svg
    key="book"
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
  </svg>,
  // Puzzle
  <svg
    key="puzzle"
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 6.087c0-.355.313-.75.75-.75.437 0 .75.395.75.75v0c0 .355-.313.75-.75.75-.437 0-.75-.395-.75-.75v0zm0 0c0-1.26-.812-2.337-2.25-2.337S9.75 4.827 9.75 6.087M14.25 6.087H9.75M14.25 6.087V4.5M9.75 6.087V4.5m4.5 1.587v2.663m-4.5-2.663v2.663m9 3a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h12a.75.75 0 01.75.75v3zm0 0v3.75a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 17.25V13.5"
    />
  </svg>,
  // Chart
  <svg
    key="chart"
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
    />
  </svg>,
  // Clock
  <svg
    key="clock"
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>,
];

export default function Advantages() {
  return (
    <section id={SECTION_IDS.advantages} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-10 lg:mb-14">
          {ADVANTAGES_HEADING}
        </SectionHeading>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((adv, i) => (
            <div
              key={adv.id}
              className="flex flex-col gap-4 rounded-3xl bg-surface p-6 sm:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-800/10 text-primary-800">
                {ICONS[i]}
              </div>
              <h3 className="text-lg font-bold text-neutral-950">
                {adv.title}
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
