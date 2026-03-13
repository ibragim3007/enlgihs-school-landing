interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-950 ${className}`}
    >
      {children}
    </h2>
  );
}
