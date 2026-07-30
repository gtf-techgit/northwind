"use client";

import Image from "next/image";
import Heading from "@/website/components/ui/Heading";
import Paragraph from "@/website/components/ui/Paragraph";
import Button from "@/website/components/ui/Button";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const stats = [
    { value: "100%", label: "Customer-Centric Planning" },
    { value: "20+", label: "Years of Legacy" },
    { value: "10 Lakh+", label: "Sq. Ft. Delivered" },
];

const Overview = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const topContentRef = useRef<HTMLDivElement>(null);
    const bottomContentRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const distance = topContentRef.current!.offsetHeight;

            gsap.set(bottomContentRef.current, {
                y: distance,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=180%",
                    pin: true,
                    scrub: true,
                    anticipatePin: 1, 
                    // pinSpacing:false,
                    invalidateOnRefresh: true,
                },
            });

            tl.to(
                topContentRef.current,
                {
                     y: '-150%',
                    ease: "none",
                    duration: 2,
                },
                0
            );

            tl.to(
                bottomContentRef.current,
                {
                    y: -distance,
                    ease: "none",
                    duration: 3,
                },
                0
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden section-toppadding mix-blend-multiply">
            <div ref={contentRef} className="container-custom">
                <div ref={topContentRef}
                    className="relative  grid gap-8 md:grid-cols-12 md:gap-6"
                >
                    <div className="md:col-span-7">
                        <Heading className="max-w-xl">
                            North Wind Estates where
                            every breeze brings change
                        </Heading>
                    </div>

                    <div className="md:col-span-5 md:pt-2">
                        <Paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry&apos;s standard dummy
                            text ever since 1500, when an unknown printer took a galley of
                            type.
                        </Paragraph>
                        <Button className="mt-6 font-semibold cursor-pointer">Know More</Button>
                    </div>
                </div>

                <div ref={bottomContentRef} className="mt-20">
                    <div
                        className="relative"
                    >
                        <div className="grid grid-cols-3 divide-x divide-border">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="px-4 text-center first:pl-0 md:px-8"
                                >
                                    <p
                                        className="font-heading text-[42px] text-primary"
                                    >
                                        {stat.value}
                                    </p>
                                    <p className="mt-2 text-[16px]  text-muted md:text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="w-full  mt-10 "
                    >
                        <Image
                            src="/pages/home/overview/art.png"
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
