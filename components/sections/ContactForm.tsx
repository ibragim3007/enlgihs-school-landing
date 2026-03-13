"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { PROGRAM_OPTIONS } from "@/constants/programs";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPhone("");
      setProgram("");
      onClose();
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {submitted ? (
        <div className="py-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-800/10">
            <svg
              className="h-8 w-8 text-primary-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-neutral-950">
            Заявка отправлена!
          </h3>
          <p className="mt-2 text-sm text-neutral-700">
            Мы свяжемся с вами в ближайшее время
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-bold text-neutral-950 pr-8">
            Записаться на диагностику
          </h3>
          <p className="mt-2 text-sm text-neutral-700">
            Оставьте номер телефона, и мы свяжемся с вами для записи на
            бесплатное занятие
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-medium text-neutral-950"
              >
                Телефон
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="w-full rounded-xl border border-neutral-200 bg-surface-muted px-4 py-3 text-base text-neutral-950 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary-700 focus:ring-2 focus:ring-primary-700/20"
              />
            </div>

            <div>
              <label
                htmlFor="program"
                className="mb-1.5 block text-sm font-medium text-neutral-950"
              >
                Программа обучения
              </label>
              <select
                id="program"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                className="w-full appearance-none rounded-xl border border-neutral-200 bg-surface-muted px-4 py-3 text-base text-neutral-950 outline-none transition-colors focus:border-primary-700 focus:ring-2 focus:ring-primary-700/20"
              >
                <option value="">Выберите программу</option>
                {PROGRAM_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <Button
              variant="secondary"
              type="submit"
              className="mt-2 w-full py-3.5 text-base"
            >
              Записаться
            </Button>
          </form>
        </>
      )}
    </Modal>
  );
}
