"use client";

import Image from "next/image";
import Heading from "@/website/components/ui/Heading";
import Paragraph from "@/website/components/ui/Paragraph";
import Button from "@/website/components/ui/Button";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ticker from "@/website/components/ui/Ticker";
import type { OverviewData } from "@/website/types/home";

gsap.registerPlugin(ScrollTrigger);

interface OverviewProps {
    data: OverviewData;
}

const parseStatValue = (value: string) => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return { number: 0, suffix: value };
    return { number: Number(match[1]), suffix: match[2] };
};

const Overview = ({ data }: OverviewProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const topContentRef = useRef<HTMLDivElement>(null);
    const bottomContentRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

useLayoutEffect(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    const ctx = gsap.context(() => {
      const distance = topContentRef.current!.offsetHeight;

      gsap.set(bottomContentRef.current, {
        y: distance,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        topContentRef.current,
        {
          y: "-150%",
          ease: "none",
          duration: 1.4,
        },
        0
      );

      tl.to(
        bottomContentRef.current,
        {
          y: "-50%",
          ease: "none",
          duration: 2,
        },
        0
      );
    });

    return () => ctx.revert();
  });

  return () => mm.revert();
}, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden section-toppadding mix-blend-multiply ">
            <div ref={contentRef} className="container-custom">
                <div ref={topContentRef}
                    className="relative  grid gap-8 md:grid-cols-12 md:gap-6"
                >
                    <div className="md:col-span-7">
                        <Heading className="max-w-xl">
                            {data.heading}
                        </Heading>
                    </div>

                    <div className="md:col-span-5 md:pt-2">
                        <Paragraph>
                            {data.paragraph}
                        </Paragraph>
                        <Button className="mt-6 font-semibold cursor-pointer">{data.buttonText}</Button>
                    </div>
                </div>

                <div ref={bottomContentRef} className="mt-20">
                    <div
                        className="relative"
                    >
                        <div className="grid grid-cols-3 divide-x divide-border">
                            {data.stats.map((stat) => {
                                const { number, suffix } = parseStatValue(stat.value);
                                return (
                                    <div
                                        key={stat.label}
                                        className="px-4 text-center first:pl-0 md:px-8"
                                    >
                                        <Ticker
                                            value={number}
                                            suffix={suffix}
                                            className="font-heading text-[28px] md:text-[42px] text-primary"
                                        />
                                        <p className="mt-2 text-[12px] md:text-[16px]  text-muted ">
                                            {stat.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div
                        className="w-full  mt-10 "
                    >
                        <Image
                            src={data.image}
                            alt="Northwind estate illustration"
                            width={900}
                            height={800}
                            className="object-contain w-full  h-auto mx-auto object-bottom"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
