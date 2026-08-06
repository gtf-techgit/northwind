import { useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface ZoomInEntranceOptions {
  y?: number;
  scale?: number;
  opacity?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  ease?: string;
}

/**
 * Custom React hook to apply a bottom zoom-in entrance effect on scroll.
 */
export const useZoomInEntrance = (
  targetRef: RefObject<HTMLElement | null>,
  triggerRef?: RefObject<HTMLElement | null>,
  options: ZoomInEntranceOptions = {}
) => {
  const {
    y = 120,
    scale = 0.8,
    opacity = 0,
    start = "top 90%",
    end = "top top",
    scrub = 0.5,
    ease = "power2.out",
  } = options;

  useLayoutEffect(() => {
    const target = targetRef.current;
    const trigger = triggerRef?.current || target;

    if (!target || !trigger) return;

    const ctx = gsap.context(() => {
      gsap.set(target, {
        y,
        scale,
        opacity,
        transformOrigin: "center center",
      });

      gsap.to(target, {
        y: 0,
        scale: 1,
        opacity: 1,
        ease,
        scrollTrigger: {
          trigger,
          start,
          end,
          scrub,
        },
      });
    });

    return () => ctx.revert();
  }, [targetRef, triggerRef, y, scale, opacity, start, end, scrub, ease]);
};

export default useZoomInEntrance;
