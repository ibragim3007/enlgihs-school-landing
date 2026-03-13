"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "inverse";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-800 text-white hover:bg-primary-700 active:bg-primary-900",
  secondary:
    "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950",
  outline:
    "border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white",
  inverse:
    "bg-white text-primary-800 hover:bg-neutral-50 active:bg-neutral-100",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-full px-8 py-3.5 font-semibold transition-colors cursor-pointer ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
