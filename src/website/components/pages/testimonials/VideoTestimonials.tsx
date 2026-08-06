"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { FaPlay } from "react-icons/fa";
import { VideoTestimonialItem } from "@/website/types/testimonials";

const AUTOPLAY_DELAY = 4500;
const PEEK_OFFSETS = [-2, -1, 0, 1, 2];

const slotStyles: Record<number, string> = {
  0: "z-30 w-[64%] h-full opacity-100 sm:w-[52%] md:w-[46%] lg:w-[40%]",
  1: "z-20 hidden h-[78%] opacity-80 sm:block sm:w-[21%] md:w-[20%] lg:w-[19%]",
  2: "z-10 hidden h-[58%] opacity-45 lg:block lg:w-[12%]",
};

const VideoTestimonials = ({ data }: { data: VideoTestimonialItem[] }) => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const total = data.length;

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
    <div className="w-full">
      <div className="relative mx-auto flex h-60 w-full  items-center justify-center gap-2 overflow-hidden px-3 sm:h-75 md:h-90 md:gap-4 lg:h-110">
        {PEEK_OFFSETS.map((offset) => {
          const isCenter = offset === 0;
          const idx = ((current + offset) % total + total) % total;
          const item = data[idx];

          return (
            <div
              key={offset}
              className={`relative shrink-0 overflow-hidden rounded-lg-custom shadow-md-custom transition-all duration-500 ease-out ${slotStyles[Math.abs(offset)]} ${isCenter ? "rounded-xl-custom shadow-lg-custom" : ""}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  initial={{  scale: 0.97 }}
                  animate={{  scale: 1 }}
                  exit={{  scale: 0.97 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {isCenter && isPlaying ? (
                    <video
                      key={item.video}
                      src={item.video}
                      className="h-full w-full object-cover"
                      autoPlay
                      controls
                      playsInline
                      onEnded={() => setIsPlaying(false)}
                    />
                  ) : (
                    <>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        priority={isCenter}
                        className={`object-cover ${isCenter ? "" : "brightness-75"}`}
                      />

                      {!isCenter && (
                        <button
                          type="button"
                          onClick={() => goTo(idx)}
                          aria-label={`Show video testimonial from ${item.name}`}
                          className="absolute inset-0 cursor-pointer bg-primary/20 transition-colors hover:bg-primary/10"
                        />
                      )}

                      {isCenter && (
                        <>
                          <div className="absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-transparent" />
                          <button
                            type="button"
                            onClick={() => setIsPlaying(true)}
                            aria-label="Play testimonial"
                            className="group absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-primary shadow-md-custom transition-transform duration-300 hover:scale-110 md:h-16 md:w-16"
                          >
                            <FaPlay className="ml-1 text-lg md:text-xl" />
                          </button>
                          {/* <div className="absolute inset-x-0 bottom-0 px-4 pb-4 md:px-6 md:pb-6">
                            <h4 className="font-heading text-sm font-semibold text-white md:text-base">
                              {item.name}
                            </h4>
                            <p className="mt-0.5 text-xs text-white/80">{item.role}</p>
                          </div> */}
                        </>
                      )}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 md:mt-10">
        {data.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show video testimonial from ${item.name}`}
            className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
              index === current ? "w-6 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonials;
