"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../../ui/SectionHeader";
import Image from "next/image";
import PresenceOverlay from "./PresenceOverlay";

gsap.registerPlugin(ScrollTrigger);

const OurPresence = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(overlayRef.current, { xPercent: 100, opacity: 0 });

            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=100%",
                    pin: true,
                    scrub: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            }).to(overlayRef.current, { xPercent: 0, ease: "none", opacity: 100 }, 0);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden  section-padding"
        >
            <div className="container-custom">
                <SectionHeader
                    className="max-w-150 mx-auto text-center"
                    heading="Our presence"
                    paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
                />

                <div className="absolute left-1/2 -translate-x-1/2 bottom-10">
                    <div className="relative">
                        <div className="arrow ">
                            <div className="absolute left-[-93%] top-[40%] -translate-y-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="281"
                                    height="40"
                                    viewBox="0 0 281 40"
                                    fill="none"
                                    className='relative left-20'
                                >
                                    <path
                                        opacity="0.6"
                                        d="M274.997 2.6665C274.997 4.13926 276.191 5.33317 277.664 5.33317C279.136 5.33317 280.33 4.13926 280.33 2.6665C280.33 1.19374 279.136 -0.00016284 277.664 -0.00016284C276.191 -0.00016284 274.997 1.19374 274.997 2.6665ZM2.88672 2.6665V2.1665H2.38672V2.6665H2.88672ZM2.88672 39.1644L5.77347 34.1644H-3.26633e-05L2.88672 39.1644ZM277.664 2.6665V2.1665H2.88672V2.6665V3.1665H277.664V2.6665ZM2.88672 2.6665H2.38672V34.6644H2.88672H3.38672V2.6665H2.88672Z"
                                        fill="#0D3829"
                                    />
                                </svg>

                                {/* Text */}
                                <div className="absolute top-16 left-0 -translate-x-1/4 w-72 text-center">
                                    <h3 className="font-heading text-4xl text-primary">
                                        Area of Operations
                                    </h3>

                                    <p className="mt-4 text-body text-secondary leading-relaxed">
                                        We have projects in Greater Noida,
                                        <br />
                                        Delhi &amp; Dehradun
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image
                            src="/pages/home/presence/map.png"
                            alt="Northwind estate illustration"
                            width={400}
                            height={500}
                            className="object-contain  h-auto mx-auto object-bottom"
                        />
                    </div>
                </div>
            </div>

            <PresenceOverlay ref={overlayRef} />
        </section>
    );
};

export default OurPresence;
