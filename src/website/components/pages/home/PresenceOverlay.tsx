"use client";

import { forwardRef, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import type { PresenceArea } from "@/website/types/home";

interface PresenceOverlayProps {
    areas: PresenceArea[];
}

const PresenceOverlay = forwardRef<HTMLDivElement, PresenceOverlayProps>(({ areas }, ref) => {
    const [activeId, setActiveId] = useState(areas[0].id);
    const activeArea = areas.find((area) => area.id === activeId) ?? areas[0];

    const tabRefs = useRef<Partial<Record<string, HTMLButtonElement | null>>>({});
    const pillRef = useRef<HTMLDivElement>(null);
    const pillReady = useRef(false);

    useLayoutEffect(() => {
        const activeBtn = tabRefs.current[activeId];
        const pill = pillRef.current;
        if (!activeBtn || !pill) return;

        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = activeBtn;

        if (!pillReady.current) {
            gsap.set(pill, { x: offsetLeft, y: offsetTop, width: offsetWidth, height: offsetHeight });
            pillReady.current = true;
            return;
        }

        gsap.to(pill, {
            x: offsetLeft,
            y: offsetTop,
            width: offsetWidth,
            height: offsetHeight,
            duration: 0.5,
            ease: "power3.out",
        });
    }, [activeId]);

    return (
        <div ref={ref} className="w-full bg-linear-to-r from-transparent  to-[#0D382912] absolute top-0 right-0 z-10 flex h-full justify-end backdrop-blur-sm">
            <div

                className="w-full  md:max-w-115  bg-page px-5 md:px-10 shadow-lg-custom"
            >
                <div className="flex flex-col justify-center h-full">
                    <h3 className="font-heading text-2xl md:text-3xl text-primary">Area of Operations</h3>
                    <p className="mt-2 text-body text-secondary">
                        We have projects in Greater Noida, Delhi &amp; Dehradun
                    </p>

                    <div className="relative mt-8 flex items-center gap-1 rounded-full border-default p-1.5">
                        <div
                            ref={pillRef}
                            className="absolute left-0 top-0 rounded-full bg-primary"
                            style={{ willChange: "transform, width, height" }}
                        />
                        {areas.map((area) => (
                            <button
                                key={area.id}
                                ref={(el) => {
                                    tabRefs.current[area.id] = el;
                                }}
                                type="button"
                                onClick={() => setActiveId(area.id)}
                                className={`relative z-10 flex-1 cursor-pointer rounded-full px-3 md:px-4 py-2 md:py-2.5 shrink-0 text-[12px] md:text-sm font-heading transition-colors ${activeId === area.id
                                        ? "text-secondary!"
                                        : "text-primary/70 hover:text-primary"
                                    }`}
                            >
                                <span className="text-slide">
                                    <span>{area.label}</span>
                                    <span>{area.label}</span>
                                </span>

                            </button>
                        ))}
                    </div>

                    <div className="mt-6">
                        <div className="relative h-64 w-full overflow-hidden rounded-lg-custom bg-primary">
                            <Image
                                src={activeArea.image}
                                alt={activeArea.project}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="mt-5 flex items-start justify-between gap-4">
                            <h4 className="font-heading text-xl text-primary">
                                {activeArea.project}
                            </h4>
                            <span className="flex h-8 md:h-10 w-8 md:w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M7 17L17 7M17 7H8M17 7V16"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>
                        <p className="mt-2 text-body text-secondary">{activeArea.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

PresenceOverlay.displayName = "PresenceOverlay";

export default PresenceOverlay;
