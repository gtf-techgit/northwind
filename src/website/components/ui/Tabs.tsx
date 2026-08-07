"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export type TabItem = {
  id?: string;
  name?: string;
  slug?: string;
};

interface TabsProps {
  items: TabItem[];
  activeTab: string;
  onTabChange: (slug: string) => void;
  className?: string;
}

const Tabs = ({ items, activeTab, onTabChange, className = "" }: TabsProps) => {
  const tabRefs = useRef<Partial<Record<string, HTMLButtonElement | null>>>({});
  const pillRef = useRef<HTMLDivElement>(null);
  const pillReady = useRef(false);

  // Find current active item key
  const activeItem =
    items?.find(
      (item) => (item.slug || "").toLowerCase() === activeTab.toLowerCase(),
    ) || items?.[0];
  const activeKey = activeItem?.id || activeItem?.slug || "";

  useLayoutEffect(() => {
    if (!items || items.length === 0) return;

    const activeBtn = tabRefs.current[activeKey];
    const pill = pillRef.current;
    if (!activeBtn || !pill) return;

    const updatePill = (animate = true) => {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = activeBtn;

      if (!pillReady.current || !animate) {
        gsap.set(pill, {
          x: offsetLeft,
          y: offsetTop,
          width: offsetWidth,
          height: offsetHeight,
        });
        pillReady.current = true;
        return;
      }

      gsap.to(pill, {
        x: offsetLeft,
        y: offsetTop,
        width: offsetWidth,
        height: offsetHeight,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    updatePill(pillReady.current);

    // Scroll active tab into view on mobile
    if (activeBtn && activeBtn.scrollIntoView) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }

    const handleResize = () => updatePill(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeKey, items]);

  if (!items || items.length === 0) return null;

  return (
    <div className={`mb-14 flex justify-center w-full ${className}`}>
      {/* Mobile Scrollable Container */}
      <div className="w-full max-w-full overflow-x-auto overflow-y-hidden no-scrollbar px-4 sm:px-0 flex sm:justify-center">
        <div className="relative inline-flex items-center rounded-full bg-[#0D38290D] p-1 gap-1 shadow-xs shrink-0 mx-auto sm:mx-0">
          {/* Animated GSAP Sliding Pill */}
          <div
            ref={pillRef}
            className="absolute left-0 top-0 rounded-full bg-primary pointer-events-none"
            style={{ willChange: "transform, width, height" }}
          />

          {items.map((item) => {
            const itemSlug = item.slug || "";
            const itemKey = item.id || itemSlug;
            const isActive = activeKey === itemKey;

            return (
              <button
                key={itemKey}
                ref={(el) => {
                  tabRefs.current[itemKey] = el;
                }}
                type="button"
                onClick={() => onTabChange(itemSlug)}
                className={`relative z-10 rounded-full px-6 sm:px-10 py-2.5 sm:py-3 text-sm sm:text-lg font-heading font-medium tracking-wide transition-colors duration-300 cursor-pointer capitalize whitespace-nowrap shrink-0 ${
                  isActive
                    ? "text-secondary!"
                    : "text-primary hover:text-primary/80"
                }`}
              >
                <span className="text-slide">
                  <span>{item.name}</span>
                  <span>{item.name}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
