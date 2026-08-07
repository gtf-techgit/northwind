"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionHeader from "../../ui/SectionHeader";
import { BlogItem, BlogSectionData } from "@/website/types/blogs";

const ITEMS_PER_PAGE = 6;

interface BlogSectionProps {
  data: BlogSectionData;
  items: BlogItem[];
}

const BlogSection = ({ data, items }: BlogSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const swiperRef = useRef<SwiperInstance | null>(null);

  const featuredItems = items.filter((item) => item.isFeature);

  const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));
  const paginatedItems = items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="relative w-full section-padding">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
        />

        <div className="content mt-7 md:mt-14 max-w-7xl mx-auto">
          {featuredItems.length > 0 && (
            <div className="mb-10 md:mb-14">
              {featuredItems.length > 1 ? (
                <>
                  <Swiper
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    slidesPerView={1}
                    loop={featuredItems.length > 1}
                    spaceBetween={24}
                  >
                    {featuredItems.map((item) => (
                      <SwiperSlide key={item.id}>
                        <FeaturedBlogCard item={item} />
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
                <FeaturedBlogCard item={featuredItems[0]} />
              )}
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {paginatedItems.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-3 md:mt-14">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center text-primary transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
              >
                <FiChevronLeft size={18} />
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Go to page ${page}`}
                  className={`flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full font-body text-sm transition-colors md:h-10 md:w-10 ${
                    currentPage === page
                      ? "bg-primary text-white"
                      : "bg-primary/5 text-primary/70 hover:text-primary"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center text-primary transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const FeaturedBlogCard = ({ item }: { item: BlogItem }) => (
  <Link href={`/blogs/${item.slug}`} className="block">
    <div className="relative h-55 w-full overflow-hidden rounded-xl-custom shadow-lg-custom sm:h-85 lg:h-115">
      <Image src={item.image} alt={item.title} fill className="object-cover" />
      <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-body text-white backdrop-blur-sm">
        {item.date}
      </span>
    </div>

    <h3 className="mt-5 font-body text-lg font-semibold text-primary md:text-xl">
      {item.title}
    </h3>
    <p className="mt-2 max-w-3xl font-body text-sm text-primary/60 md:text-base">
      {item.excerpt}{" "}
      <span className="font-semibold text-primary hover:underline">Read More</span>
    </p>
  </Link>
);

const BlogCard = ({ item }: { item: BlogItem }) => (
  <Link href={`/blogs/${item.slug}`} className="block">
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg-custom">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
      <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-body text-white backdrop-blur-sm">
        {item.date}
      </span>
    </div>

    <h3 className="mt-4 font-body text-base font-semibold text-primary">{item.title}</h3>
    <p className="mt-1.5 font-body text-sm text-primary/60">
      {item.excerpt}{" "}
      <span className="font-semibold text-primary hover:underline">Read More</span>
    </p>
  </Link>
);

export default BlogSection;
