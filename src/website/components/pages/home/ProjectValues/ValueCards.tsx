"use client";

import { forwardRef } from "react";
import { IoLeafOutline } from "react-icons/io5";
import type { ValueCard } from "@/website/types/home";

interface ValueCardsProps {
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  valueCards: ValueCard[];
}

const ValueCards = forwardRef<HTMLDivElement, ValueCardsProps>(
  ({ cardRefs, valueCards }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        {valueCards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] rounded-[28px] bg-accent/15 py-5 px-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] will-change-transform select-none"
          >
            {/* Header */}
            <div className="mb-3 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#DFE8C6]">
                <IoLeafOutline
                  className="text-[#214734]"
                  size={28}
                />
              </div>

              <h3 className="text-[24px] font-semibold text-[#173A2C]">
                {card.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[16px] leading-8 text-[#5E7168]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    );
  }
);

ValueCards.displayName = "ValueCards";

export default ValueCards;