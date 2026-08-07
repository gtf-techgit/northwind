"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/website/components/ui/Heading";
import Paragraph from "@/website/components/ui/Paragraph";
import Ticker from "@/website/components/ui/Ticker";
import type { OverViewProps } from "@/website/types/aboutUs";

gsap.registerPlugin(ScrollTrigger);

interface OverviewProps {
  data: OverViewProps;
}

const parseStatValue = (val: string) => {
  const match = val.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: val };
  return { number: Number(match[1]), suffix: match[2] };
};

const Overview = ({ data }: OverviewProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const imageSrc =
    data.files?.desktop_file ||
    data.files?.mobile_file ||
    "/pages/about-us/hero.webp";

  useLayoutEffect(() => {
    if (!imageRef.current || !sectionRef.current || !imageWrapperRef.current)
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });

      tl.fromTo(
        imageRef.current,
        { scale: 2 },
        { scale: 1, ease: "none" },
        0,
      ).fromTo(
        imageWrapperRef.current,
        { clipPath: "inset(35% 0% 10% 0% round 32px)" },
        { clipPath: "inset(0% 0% 0% 0% round 32px)", ease: "none" },
        0,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-background overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-between ">
            <div className="">
              {data.title?.heading && (
                <Heading className="max-w-xl font-heading leading-tight text-primary 2xl:text-5xl lg:max-w-[70%] 2xl:max-w-[50%]">
                  {data.title.heading}
                </Heading>
              )}

              {data.description?.desc && (
                <Paragraph className="mt-6 md:mt-12 max-w-xl text-muted leading-relaxed 2xl:text-2xl">
                  {data.description.desc}
                </Paragraph>
              )}
            </div>

            {/* Stats Row */}
            {data.listing && data.listing.length > 0 && (
              <div className="mt-12 md:mt-22 grid grid-cols-3 divide-x divide-border/30">
                {data.listing.map((item: any, index: number) => {
                  const { number, suffix } = parseStatValue(item.key);
                  const isNumeric = !isNaN(number) && number > 0;

                  return (
                    <div
                      key={index}
                      className="px-3 md:px-6 first:pl-0 last:pr-0 flex flex-col justify-start"
                    >
                      {isNumeric ? (
                        <Ticker
                          value={number}
                          suffix={suffix}
                          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary !justify-start"
                        />
                      ) : (
                        <span className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary leading-none">
                          {item.key}
                        </span>
                      )}

                      {item.value && (
                        <p className="mt-2 text-xs md:text-sm font-medium text-muted font-body leading-snug">
                          {item.value}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 overflow-hidden rounded-[32px] h-full flex flex-col">
            <div
              ref={imageWrapperRef}
              className="relative w-full h-full min-h-[420px] lg:min-h-[540px] 2xl:min-h-[640px] aspect-[3/4.2] overflow-hidden rounded-[32px] shadow-sm"
            >
              <Image
                ref={imageRef}
                src={imageSrc}
                alt={data.title?.heading || "North Wind Estates Overview"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
