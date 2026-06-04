"use client";
import { useIsVisible } from "@/hooks/use-is-visible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQCardProps {
  question: string;
  answer: string;
  index: number;
}

export function FAQCard({ question, answer, index }: FAQCardProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, isVisible] = useIsVisible();
  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-xl bg-card transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
    >
      <button
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-card/80"
      >
        <span className="font-semibold">{question}</span>
        <ChevronDown
          className={`shrink-0 text-orange transition-transform duration-300 ${
            openIndex === index ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          openIndex === index ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="px-6 pb-6 text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}
