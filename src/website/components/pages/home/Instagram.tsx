"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import SectionHeader from "../../ui/SectionHeader";
import ZoomOut from "../../ui/ZoomOut";

const posts = [
  { image: "/pages/home/instagram/1.png" },
  { image: "/pages/home/instagram/2.png" },
  { image: "/pages/home/instagram/3.png" },
  { image: "/pages/home/instagram/4.png" },
  { image: "/pages/home/instagram/5.png" },
];

const AUTOPLAY_DELAY = 3000;
const total = posts.length;
const VISIBLE = 6.5;
const HALF = Math.floor(VISIBLE / 2);
const SLOT_COUNT = HALF * 2 + 1;

const getSlideStyle = (offset: number) => {
  const abs = Math.abs(offset);
  const isEdge = abs === HALF;

  if (isEdge) {
    return {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 10 - abs,
      objectPosition: offset < 0 ? "right center" : "left center",
    };
  }

  return {
    scale: Math.max(1 - abs * 0.14, 0.58),
    opacity: Math.max(1 - abs * 0.16, 0.4),
    filter: abs >= 2 ? `blur(${(abs - 1) * 0.8}px)` : "blur(0px)",
    zIndex: 10 - abs,
    objectPosition: "center",
  };
};

const Instagram = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((prev) => prev + 1);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(id);
  }, []);

  const slots = Array.from({ length: SLOT_COUNT }, (_, slot) => {
    const offset = slot - HALF;
    const i = step + offset;
    const imageIndex = ((i % total) + total) % total;
    return { i, offset, image: posts[imageIndex].image };
  });

  const progress = ((step % total) + total) % total;

  return (
    <section className="relative w-full section-padding md:min-h-screen overflow-hidden">
      <div className="container-custom">
        <SectionHeader
          className="max-w-lg mx-auto text-center"
          heading="Follow us on instagram"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
        />
      </div>

      <div className="relative mt-14 flex w-full items-center justify-center py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-40 w-1/6 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-40 w-1/6 bg-linear-to-l from-background to-transparent" />

        <div className="container-custom flex items-center justify-center gap-3 sm:gap-4 lg:gap-5">
          <AnimatePresence initial={false} mode="popLayout">
            {slots.map(({ i, offset, image }) => {
              const style = getSlideStyle(offset);
              const isEdge = Math.abs(offset) === HALF;

              return (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: style.opacity, scale: style.scale, filter: style.filter }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  style={{ zIndex: style.zIndex }}
                  className={`relative aspect-9/14 w-full shrink-0 overflow-hidden rounded-lg-custom shadow-lg-custom ${
                    isEdge ? "max-w-28 flex-none" : "max-w-72 flex-1"
                  }`}
                >
                   <ZoomOut
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    src={image}
                    alt="Instagram post"
                    fill
                    className="object-cover"
                    style={{ objectPosition: style.objectPosition }}
                    priority={offset === 0}
                  />
                  </ZoomOut>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <div className="relative h-0.5 w-full max-w-75 overflow-hidden rounded-full bg-border">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-primary"
            animate={{ width: `${((progress + 1) / total) * 100}%` }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Instagram;
