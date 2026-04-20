"use client";

import { useState } from "react";
import Image from "next/image";
import {
  NAV_LINKS,
  SCHOOL_NAME,
  CTA_BUTTON_TEXT,
} from "@/constants/navigation";
import Button from "@/components/ui/Button";

interface HeaderProps {
  onOpenForm: () => void;
}

export default function Header({ onOpenForm }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-neutral-100">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-primary-800"
          >
            <Image
              src="/icon-v1.png"
              alt=""
              width={80}
              height={80}
              className="h-9 w-auto max-w-[88px] shrink-0 object-contain lg:h-10 lg:max-w-[100px]"
              priority
            />
            {SCHOOL_NAME}
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.sectionId}
                href={link.href}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-primary-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button onClick={onOpenForm} className="text-sm px-6 py-2.5">
              {CTA_BUTTON_TEXT}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl lg:hidden cursor-pointer"
            aria-label="Меню"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="border-t border-neutral-100 pb-6 pt-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.sectionId}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-neutral-700 transition-colors hover:text-primary-700"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenForm();
                }}
                className="mt-2 text-sm"
              >
                {CTA_BUTTON_TEXT}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
