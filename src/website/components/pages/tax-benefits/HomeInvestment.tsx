"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import SectionHeader from "../../ui/SectionHeader";
import { HomeInvestmentData, HomeInvestmentItem } from "@/website/types/tax-benefits";

interface CardProps {
  item: HomeInvestmentItem;
  variant: "center" | "side";
  side?: "left" | "right";
  onClick?: () => void;
}

const Card = ({ item, variant, side, onClick }: CardProps) => {
  const isCenter = variant === "center";
  const clickable = Boolean(onClick);

  return (
    <div
      onClick={onClick}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={(e) => {
        if (clickable && (e.key === "Enter" || e.key === " ")) onClick?.();
      }}
      aria-label={clickable ? `Show ${item.title}` : undefined}
      className={`relative shrink-0 rounded-xl-custom bg-[#eef1de] shadow-md-custom transition-all duration-500 ease-out ${isCenter
          ? "z-20 w-60 -translate-y-4 sm:w-70 md:w-82.5 md:translate-y-3 lg:w-95"
          : `z-0 hidden translate-y-4 w-55 scale-[0.92] sm:block sm:w-62.5 md:w-75 md:translate-y-6 lg:w-85 ${side === "left"
            ? "-mr-16 md:-mr-20 lg:-mr-24 -rotate-6"
            : "-ml-16 md:-ml-20 lg:-mr-24 rotate-6"
          } ${clickable ? "cursor-pointer" : ""}`
        }`}
    >
      <div className="relative m-3 aspect-square overflow-hidden rounded-lg-custom">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 60vw, 350px"
        />
      </div>
      <div className="px-5 pb-7 pt-3 text-center sm:px-6 sm:pb-8">
        <h3 className="font-heading text-lg text-primary sm:text-xl">
          {item.title}
        </h3>
        <p className="mt-2 pera leading-relaxed text-muted">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const HomeInvestment = ({ data }: { data: HomeInvestmentData }) => {
  const { items } = data;
  const total = items.length;
  const [current, setCurrent] = useState(() => Math.min(1, total - 1));

  const wrap = (index: number) => ((index % total) + total) % total;
  const goTo = (index: number) => setCurrent(wrap(index));

  const prevIndex = wrap(current - 1);
  const nextIndex = wrap(current + 1);

  return (
    <section className="relative w-full md:min-h-screen section-padding">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-3xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
        />
     

      <div className="content mt-14 md:mt-20 ">
        <div className="relative flex items-center justify-center">
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            aria-label="Previous benefit"
            className="absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-default bg-page text-primary transition-colors duration-300 hover:bg-primary hover:text-white sm:h-11 sm:w-11 md:left-6 lg:left-16"
          >
            <IoArrowBackOutline size={18} />
          </button>

          <div className="relative flex w-full md:-ms-20 items-center justify-center">
            {total > 1 && (
              <Card item={items[prevIndex]} variant="side" side="left" onClick={() => goTo(prevIndex)} />
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="relative z-20"
                initial={{ scale: 0.94 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.94 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <Card item={items[current]} variant="center" />
              </motion.div>
            </AnimatePresence>

            {total > 2 && (
              <Card item={items[nextIndex]} variant="side" side="right" onClick={() => goTo(nextIndex)} />
            )}
          </div>

          <button
            type="button"
            onClick={() => goTo(current + 1)}
            aria-label="Next benefit"
            className="absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-default bg-page text-primary transition-colors duration-300 hover:bg-primary hover:text-white sm:h-11 sm:w-11 md:right-6 lg:right-16"
          >
            <IoArrowForwardOutline size={18} />
          </button>
        </div>
      </div>
       </div>
    </section>
  );
};

export default HomeInvestment;
