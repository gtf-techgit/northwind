"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
import SectionHeader from "../../ui/SectionHeader";
import { CsrGalleryData } from "@/website/types/csr";

const AUTOPLAY_DELAY = 4000;

const CsrGallery = ({ data }: { data: CsrGalleryData }) => {
  const { images } = data;
  const total = images.length;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goTo = useCallback(
    (direction: "left" | "right") => {
      setCurrent((prev) =>
        direction === "left" ? (prev - 1 + total) % total : (prev + 1) % total
      );
    },
    [total]
  );

  useEffect(() => {
    if (lightboxIndex !== null) return;

    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(id);
  }, [current, total, lightboxIndex]);

  useEffect(() => {
    const card = scrollRef.current?.querySelector<HTMLElement>(
      `[data-index="${current}"]`
    );
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, [current]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev! - 1 + total) % total);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev! + 1) % total);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, total]);

  return (
    <section className="relative w-full section-padding overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-lg mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
        />
      </div>

      <div
        ref={scrollRef}
        className="mt-7 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-6 sm:px-10 md:mt-14 lg:px-28"
      >
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            data-index={index}
            onClick={() => setLightboxIndex(index)}
            aria-label={`Open image ${index + 1}`}
            className="relative h-[260px] w-[78%] shrink-0 cursor-pointer snap-start overflow-hidden rounded-xl-custom sm:h-[320px] sm:w-[46%] lg:h-[380px] lg:w-[23%]"
          >
            <Image
              src={image.src}
              alt={image.alt || data.heading}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo("left")}
          aria-label="Previous"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-primary text-primary transition-colors duration-300 hover:bg-primary hover:text-white!"
        >
          <FiArrowLeft size={18} />
        </button>

        <button
          type="button"
          onClick={() => goTo("right")}
          aria-label="Next"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-primary text-background transition-opacity duration-300 hover:opacity-90"
        >
          <FiArrowRight size={18} />
        </button>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-5 top-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <FiX size={22} />
          </button>

          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev! - 1 + total) % total);
            }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <FiArrowLeft size={20} />
          </button>

          <div
            className="relative h-[70vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt || data.heading}
              fill
              className="object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev! + 1) % total);
            }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <FiArrowRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
};

export default CsrGallery;
