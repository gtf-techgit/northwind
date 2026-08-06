"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import SectionHeader from "../../ui/SectionHeader";
import type { VoiceData, VoiceTab } from "@/website/types/media-center";

const ITEMS_PER_PAGE = 6;

const Voices = ({ data }: { data: VoiceData }) => {
    const [activeTab, setActiveTab] = useState<VoiceTab["id"]>(data.tabs[0]?.id ?? "all");
    const [currentPage, setCurrentPage] = useState(1);

    const tabRefs = useRef<Partial<Record<string, HTMLButtonElement | null>>>({});
    const pillRef = useRef<HTMLDivElement>(null);
    const pillReady = useRef(false);

    useLayoutEffect(() => {
        const activeBtn = tabRefs.current[activeTab];
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
    }, [activeTab]);

    const filteredItems =
        activeTab === "all" ? data.items : data.items.filter((item) => item.category === activeTab);

    const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <section className="relative w-full section-toppadding">
            <div className="container-custom relative z-10">
                <SectionHeader
                    className="max-w-2xl mx-auto text-center"
                    heading={data.heading}
                    paragraph={data.paragraph}
                />

                <div className="mt-8 flex justify-center md:mt-12">
                    <div className="relative inline-flex items-center gap-1 rounded-full border-default p-1.5">
                        <div
                            ref={pillRef}
                            className="absolute left-0 top-0 rounded-full bg-primary"
                            style={{ willChange: "transform, width, height" }}
                        />
                        {data.tabs.map((tab) => (
                            <button
                                key={tab.id}
                                ref={(el) => {
                                    tabRefs.current[tab.id] = el;
                                }}
                                type="button"
                                onClick={() => {
                                    setActiveTab(tab.id);
                                    setCurrentPage(1);
                                }}
                                className={`relative z-10 flex-1 cursor-pointer rounded-full px-6 md:px-8 py-2 md:py-2.5 shrink-0 text-[12px] md:text-sm font-body transition-colors ${activeTab === tab.id ? "text-secondary!" : "text-primary/70 hover:text-primary"
                                    }`}
                            >
                                <span className="text-slide">
                                    <span>{tab.label}</span>
                                    <span>{tab.label}</span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="content mt-10 md:mt-14 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-3">
                        {paginatedItems.map((item) => (
                            <div key={item.id}>
                                <div className="relative flex aspect-video w-full items-center justify-center rounded-lg-custom bg-primary p-8">
                                    <Image
                                        src={item.logo}
                                        alt={item.title}
                                        fill
                                        className="object-contain p-10 md:p-18"
                                    />
                                </div>
                                <h3 className="mt-5 font-semibold font-body text-primary md:mt-6">
                                    {item.title}
                                </h3>
                                <p className="mt-2 font-body pera leading-relaxed text-secondary">
                                    {item.description}
                                </p>
                            </div>
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
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M15 6L9 12L15 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                <button
                                    key={page}
                                    type="button"
                                    onClick={() => setCurrentPage(page)}
                                    aria-label={`Go to page ${page}`}
                                    className={`flex h-9 w-9 md:h-10 md:w-10 shrink-0 cursor-pointer items-center justify-center rounded-full font-body text-sm transition-colors ${currentPage === page
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
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M9 6L15 12L9 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Voices;
