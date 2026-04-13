"use client";

import Button from "@/components/ui/Button";

interface SectionSignupFooterProps {
  onOpenForm: () => void;
  className?: string;
}

export default function SectionSignupFooter({
  onOpenForm,
  className = "",
}: SectionSignupFooterProps) {
  return (
    <div className={`flex justify-center pt-10 lg:pt-12 ${className}`}>
      <Button onClick={onOpenForm} className="text-base px-10 py-4">
        Записаться онлайн
      </Button>
    </div>
  );
}
