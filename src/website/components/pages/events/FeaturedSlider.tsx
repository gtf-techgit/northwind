"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import type { EventItem } from "@/website/types/events";

const AUTOPLAY_DELAY = 4000;
const SWIPE_THRESHOLD = 60;

interface FeaturedSliderProps {
  items: EventItem[];
}

const FeaturedSlider = ({ items }: FeaturedSliderProps) => {
  const [current, setCurrent] = useState(0);
  const total = items.length;
  const isDragging = useRef(false);

  const wrap = (index: number) => ((index % total) + total) % total;
  const goTo = (index: number) => setCurrent(wrap(index));
  const next = () => setCurrent((prev) => wrap(prev + 1));
  const prev = () => setCurrent((prev) => wrap(prev - 1));

  useEffect(() => {
    if (total < 2) return;

    const id = setInterval(() => {
      if (!isDragging.current) setCurrent((prev) => ((prev + 1) % total + total) % total);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(id);
  }, [total]);

  if (total === 0) return null;

  const prevItem = items[wrap(current - 1)];
  const activeItem = items[current];
  const nextItem = items[wrap(current + 1)];

  return (
    <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden sm:h-[300px] md:h-[400px] lg:h-[460px]">
      {total > 1 && (
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label={`Show ${prevItem.title}`}
          className="absolute left-0 top-1/2 hidden h-[80%] w-[16%] -translate-y-1/2 cursor-pointer overflow-hidden rounded-tr-xl  rounded-br-xl sm:block"
        >
          <Image src={prevItem.image} alt="" fill className="object-cover" draggable={false} />
          <div className="absolute inset-0 bg-black/30" />
        </button>
      )}

      <motion.div       
        className="relative z-10 h-full w-full cursor-grab active:cursor-grabbing sm:w-[70%] md:w-[66%]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{  scale: 0.97 }}
            animate={{  scale: 1 }}
            exit={{  scale: 0.97 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 overflow-hidden rounded-xl-custom shadow-lg-custom"
          >
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              priority
              className="pointer-events-none object-cover"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {total > 1 && (
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label={`Show ${nextItem.title}`}
          className="absolute right-0 top-1/2 hidden h-[80%] w-[16%] -translate-y-1/2 cursor-pointer overflow-hidden rounded-tl-xl  rounded-bl-xl sm:block"
        >
          <Image src={nextItem.image} alt="" fill className="object-cover" draggable={false} />
          <div className="absolute inset-0 bg-black/30" />
        </button>
      )}
    </div>
  );
};

export default FeaturedSlider;
