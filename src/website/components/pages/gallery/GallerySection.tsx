"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiPlay,
  FiX,
} from "react-icons/fi";
import SectionHeader from "../../ui/SectionHeader";
import { GallerySectionData } from "@/website/types/gallery";
import { galleryItems, galleryProjects } from "@/website/lib/data/gallery";

type MediaTab = "images" | "videos";
type ViewMode = "slider" | "grid";

const GallerySection = ({ data }: { data: GallerySectionData }) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mediaTab, setMediaTab] = useState<MediaTab>("images");
  const [viewMode, setViewMode] = useState<ViewMode>("slider");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filterKey = `${selectedProject ?? "all"}-${mediaTab}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setLightboxIndex(null);
  }

  const filteredItems = galleryItems.filter((item) => {
    const projectMatch = !selectedProject || item.project === selectedProject;
    const typeMatch = mediaTab === "images" ? item.type === "image" : item.type === "video";
    return projectMatch && typeMatch;
  });

  const total = filteredItems.length;

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + total) % total));
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % total));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, total]);

  return (
    <section className="relative w-full section-padding">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-12 md:justify-between ">
          <div className="flex flex-wrap items-center justify-center gap-3 mx-auto">
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen((open) => !open)}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-body text-secondary! transition-opacity hover:opacity-90 md:px-6"
              >
                {selectedProject ?? "Select Project"}
                <FiChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 top-full z-20 mt-2 w-56 overflow-hidden rounded-lg-custom border-default bg-white shadow-lg-custom">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProject(null);
                      setIsDropdownOpen(false);
                    }}
                    className={`block w-full cursor-pointer px-5 py-2.5 text-left text-sm font-body transition-colors hover:bg-primary/5 ${
                      !selectedProject ? "font-semibold text-primary" : "text-primary/70"
                    }`}
                  >
                    All Projects
                  </button>
                  {galleryProjects.map((project) => (
                    <button
                      key={project}
                      type="button"
                      onClick={() => {
                        setSelectedProject(project);
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full cursor-pointer px-5 py-2.5 text-left text-sm font-body transition-colors hover:bg-primary/5 ${
                        selectedProject === project ? "font-semibold text-primary" : "text-primary/70"
                      }`}
                    >
                      {project}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMediaTab("images")}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-body transition-colors md:px-6 ${
                mediaTab === "images" ? "bg-primary text-white!" : "bg-[#F0F0DB] text-primary"
              }`}
            >
              Images
            </button>
            <button
              type="button"
              onClick={() => setMediaTab("videos")}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-body transition-colors md:px-6 ${
                mediaTab === "videos" ? "bg-primary text-white!" : "bg-[#F0F0DB] text-primary"
              }`}
            >
              Videos
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setViewMode("slider")}
              aria-label="Slider view"
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-default transition-colors ${
                viewMode === "slider" ? "bg-primary text-secondary!" : "bg-transparent text-primary"
              }`}
            >
              <span className="block h-2.5 w-2.5 rounded-[2px] bg-current" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-default transition-colors ${
                viewMode === "grid" ? "bg-primary text-secondary!" : "bg-transparent text-primary"
              }`}
            >
              <FiGrid size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="content mt-8 md:mt-14">
        {total === 0 ? (
          <p className="text-center text-sm text-primary/60">
            No {mediaTab} found for this project.
          </p>
        ) : viewMode === "slider" ? (
          <>
            <Swiper
              key={`${selectedProject ?? "all"}-${mediaTab}`}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1.15}
              centeredSlides
              spaceBetween={20}
              loop={total > 2}
              breakpoints={{
                640: { slidesPerView: 1.4, spaceBetween: 24 },
                1024: { slidesPerView: 1.7, spaceBetween: 32 },
              }}
              className="!px-6 sm:!px-10 lg:!px-0"
            >
              {filteredItems.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Open ${item.alt ?? "image"}`}
                    className="relative block h-[260px] w-full cursor-pointer overflow-hidden rounded-xl-custom shadow-lg-custom sm:h-[380px] lg:h-[460px]"
                  >
                    <Image src={item.src} alt={item.alt ?? data.heading} fill className="object-cover" />
                    {item.type === "video" && (
                      <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-primary">
                          <FiPlay size={22} className="translate-x-0.5" />
                        </span>
                      </span>
                    )}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-primary text-primary transition-colors duration-300 hover:bg-primary hover:text-white!"
              >
                <FiChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-primary text-background transition-opacity duration-300 hover:opacity-90"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </>
        ) : (
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Open ${item.alt ?? "image"}`}
                  className="relative aspect-4/3 w-full cursor-pointer overflow-hidden rounded-lg-custom"
                >
                  <Image
                    src={item.src}
                    alt={item.alt ?? data.heading}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {item.type === "video" && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary">
                        <FiPlay size={18} className="translate-x-0.5" />
                      </span>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
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

          {total > 1 && (
            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + total) % total));
              }}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <FiChevronLeft size={20} />
            </button>
          )}

          <div className="relative h-[70vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt ?? data.heading}
              fill
              className="object-contain"
            />
          </div>

          {total > 1 && (
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % total));
              }}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <FiChevronRight size={20} />
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default GallerySection;
