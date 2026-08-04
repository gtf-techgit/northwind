"use client";

import Image from "next/image";
import Heading from "@/website/components/ui/Heading";
import Paragraph from "@/website/components/ui/Paragraph";
import Button from "@/website/components/ui/Button";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { OverviewData } from "@/website/types/home";
import Stats from "./Stats";

gsap.registerPlugin(ScrollTrigger);

interface OverviewProps {
    data: OverviewData;
}

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
          end: "+=100%",
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
                    <Stats stats={data.stats} />

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
