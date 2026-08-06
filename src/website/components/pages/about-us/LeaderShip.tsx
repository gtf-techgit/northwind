"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import Heading from "@/website/components/ui/Heading";
import Paragraph from "@/website/components/ui/Paragraph";
import type { LeaderShipProps } from "@/website/types/aboutUs";

import "swiper/css";
import useZoomInEntrance from "@/website/hooks/useZoomInEntrance";

interface LeaderShipSectionProps {
  data: LeaderShipProps;
}

const LeaderShip = ({ data }: LeaderShipSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  const listing = data.listing || [];

  useZoomInEntrance(swiperContainerRef, sectionRef, {
    y: 120,
    scale: 0.5,
    opacity: 0,
    start: "top 85%",
    end: "bottom 90%",
    scrub: 0.5,
  });

  return (
    <section
      ref={sectionRef}
      className="relative section-padding bg-background overflow-hidden py-16 md:py-24"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          {data.title?.heading && (
            <Heading className="font-heading text-4xl sm:text-5xl lg:text-[52px] text-primary leading-tight font-normal capitalize">
              {data.title.heading}
            </Heading>
          )}
          {data.description?.desc && (
            <Paragraph className="mt-4 text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              {data.description.desc}
            </Paragraph>
          )}
        </div>
      </div>

      {/* Swiper Carousel Section with Edge Blend Gradient */}
      <div className="relative w-full overflow-hidden pt-25 pb-6">
        {/* Right Side Blend Gradient (Seamless blend as seen in Figma) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-40 sm:w-64 md:w-96 bg-gradient-to-l from-background via-background/80 to-transparent" />
        {/* Left Side Blend Gradient (Soft fade for left edge) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent" />

        <div ref={swiperContainerRef} className="container-custom">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay, Navigation]}
            loop={true}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.25,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 1.35,
                spaceBetween: 36,
              },
              1280: {
                slidesPerView: 1.45,
                spaceBetween: 44,
              },
            }}
            className="w-full !overflow-visible"
          >
            {listing.map((item, index) => {
              const isActive = activeIndex === index;
              const imageSrc =
                item.files?.desktop_file ||
                "/pages/about-us/leadership/leader1s.webp";

              return (
                <SwiperSlide key={index} className="h-auto">
                  {/* Card Container with pop-out image */}
                  <div
                    className={`relative w-full rounded-[32px] sm:rounded-[40px] bg-[#ACC78C1A] p-8 sm:p-10 md:p-12 transition-all duration-500 ease-out flex flex-col md:flex-row items-center justify-between min-h-[380px] sm:min-h-[420px] ${
                      isActive ? "opacity-100" : "opacity-75"
                    }`}
                  >
                    {/* Left Text Content */}
                    <div className="w-full md:w-3/6 z-10 pr-0 md:pr-6">
                      <h3 className="font-heading text-3xl sm:text-4xl lg:text-[40px] text-[#1E382B] leading-tight font-normal">
                        {item.name}
                      </h3>
                      <p className="mt-1 sm:mt-1.5 font-body text-sm sm:text-base text-[#7A8B73] font-normal">
                        {item.designation}
                      </p>

                      <div className="w-full h-[1px] bg-[#0D3829]/12 my-4 sm:my-6" />

                      <p className="font-body text-sm sm:text-base leading-relaxed text-[#7A8B73] max-w-md lg:max-w-lg">
                        {item.desc}
                      </p>
                    </div>

                    {/* Right Leader Cutout Image - Head pops out past card top */}
                    <div className="w-full md:w-3/6 lg:absolute right-0 bottom-0 pointer-events-none">
                      <Image
                        src={imageSrc}
                        alt={item.name}
                        width={480}
                        height={560}
                        priority={index === 0}
                        className="w-auto object-contain object-bottom drop-shadow-sm select-none"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="mt-10 sm:mt-14 flex items-center justify-center gap-4 relative z-40">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous Slide"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#0D3829]/20 bg-white/70 text-[#0D3829] backdrop-blur-sm transition-all duration-300 hover:bg-[#0D3829] hover:text-white cursor-pointer shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next Slide"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#0D3829]/20 bg-white/70 text-[#0D3829] backdrop-blur-sm transition-all duration-300 hover:bg-[#0D3829] hover:text-white cursor-pointer shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeaderShip;
