"use client";

import { useLayoutEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface TextScrollMaskProps {
  activeIndex?: number;
  progressTimeline?: gsap.core.Timeline | null;
  timelinePosition?: number | string;
  duration?: number;
  gap?: number;
  className?: string;
  items: ReactNode[];
}

/**
 * Reusable TextScrollMask Component.
 * Animates a vertical stack of elements inside an overflow-hidden mask window,
 * creating a physical scrolling cut-and-reveal effect.
 */
export const TextScrollMask = ({
  activeIndex,
  progressTimeline,
  timelinePosition = 0,
  duration = 1,
  gap = 48,
  className = "",
  items,
}: TextScrollMaskProps) => {
  const maskRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!maskRef.current || !trackRef.current || itemRefs.current.length === 0)
      return;

    const ctx = gsap.context(() => {
      const getItemHeights = () =>
        itemRefs.current.map((el) => el?.offsetHeight || 0);
      const heights = getItemHeights();

      if (heights.length === 0) return;

      gsap.set(maskRef.current, { height: heights[0] });
      gsap.set(trackRef.current, { y: 0 });

      if (progressTimeline && heights.length > 1) {
        let cumulativeY = 0;
        for (let i = 1; i < heights.length; i++) {
          const shiftY = cumulativeY + heights[i - 1] + gap;
          cumulativeY = shiftY;

          progressTimeline.to(
            trackRef.current,
            {
              y: -shiftY,
              duration,
              ease: "none",
            },
            timelinePosition,
          );

          progressTimeline.to(
            maskRef.current,
            {
              height: heights[i],
              duration,
              ease: "none",
            },
            timelinePosition,
          );
        }
      }
    });

    return () => ctx.revert();
  }, [items.length, progressTimeline, timelinePosition, duration, gap]);

  useLayoutEffect(() => {
    if (activeIndex === undefined || progressTimeline) return;
    if (!maskRef.current || !trackRef.current || itemRefs.current.length === 0)
      return;

    const heights = itemRefs.current.map((el) => el?.offsetHeight || 0);
    const targetIndex = Math.max(0, Math.min(heights.length - 1, activeIndex));

    let shiftY = 0;
    for (let i = 0; i < targetIndex; i++) {
      shiftY += (heights[i] || 0) + gap;
    }

    gsap.to(trackRef.current, {
      y: -shiftY,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(maskRef.current, {
      height: heights[targetIndex] || 0,
      duration: 0.8,
      ease: "power2.out",
    });
  }, [activeIndex, gap, progressTimeline]);

  return (
    <div
      ref={maskRef}
      className={`overflow-hidden w-full relative ${className}`}
    >
      <div
        ref={trackRef}
        className="w-full flex flex-col pt-1 pb-1"
        style={{ gap: `${gap}px` }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
            className="w-full shrink-0"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

// use

{
  /* <TextScrollMask
  progressTimeline={tl}
  gap={48}
  items={[
    <div key="vision">Vision Content...</div>,
    <div key="mission">Mission Content...</div>,
  ]}
/>; */
}
