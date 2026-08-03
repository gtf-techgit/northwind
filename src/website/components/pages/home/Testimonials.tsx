"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import SectionHeader from "../../ui/SectionHeader";
import ZoomOut from "../../ui/ZoomOut";
import type { TestimonialsData } from "@/website/types/home";

const AUTOPLAY_DELAY = 4000;

interface TestimonialsProps {
  data: TestimonialsData;
}

const Testimonials = ({ data }: TestimonialsProps) => {
  const [current, setCurrent] = useState(2);
  const [isPlaying, setIsPlaying] = useState(false);
  const { testimonials } = data;
  const total = testimonials.length;

  const goTo = (index: number) => {
    setIsPlaying(false);
    setCurrent(((index % total) + total) % total);
  };

  useEffect(() => {
    if (isPlaying) return;

    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(id);
  }, [current, total, isPlaying]);

  return (
    <section className="relative w-full section-padding overflow-hidden">
      <div className="container-custom">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
        />
      </div>

      <div className="relative mt-14 flex h-[280px] w-full items-center justify-center md:h-[380px] lg:h-[445px]">
        {[-1, 1].map((offset) => {
          const slide = testimonials[((current + offset) % total + total) % total];
          const isLeft = offset === -1;

          return (
            <div
              key={isLeft ? "peek-left" : "peek-right"}
              className={`pointer-events-none absolute top-1/2 hidden h-[70%] w-[18%] -translate-y-1/2 overflow-hidden rounded-lg-custom sm:block ${isLeft ? "left-0" : "right-0"
                }`}
            >
                <ZoomOut
                    className="absolute inset-0 h-full w-full"
                  >
              <Image
                src={slide.image}
                alt=""
                fill
                className=" object-cover blur-[1px]"
              />
              </ZoomOut>
              <div
                className={`absolute inset-0 ${isLeft
                    ? "bg-linear-to-r from-background/60  to-background/60"
                    : "bg-linear-to-l from-background/60  to-background/60"
                  }`}
              />
            </div>
          );
        })}

        <div className="relative z-10 h-full w-[92%] overflow-hidden rounded-xl-custom shadow-lg-custom sm:w-[75%] lg:w-[60%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {isPlaying ? (
                <video
                  key={testimonials[current].video}
                  src={testimonials[current].video}
                  className="h-full w-full object-cover"
                  autoPlay
                  controls
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                />
              ) : (
                <>
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    priority
                    className="object-cover"
                  />

                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play testimonial"
                    className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-110"
                  >
                    <Image
                      src={data.playIcon}
                      alt=""
                      width={68}
                      height={68}
                    />
                  </button>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-3 sm:gap-4">
        {testimonials.map((testimonial, index) => {
          const isActive = index === current;

          return (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              className="relative h-16 w-16 shrink-0 cursor-pointer sm:h-[70px] sm:w-[70px]"
            >
              <span
                className={`absolute inset-0 overflow-hidden rounded-full transition-all duration-300 ${isActive
                    ? "scale-100 opacity-100 ring-4 ring-white shadow-md-custom"
                    : "scale-[0.7] opacity-60 grayscale hover:opacity-90 hover:grayscale-0"
                  }`}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
