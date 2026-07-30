"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TickerProps {
    value: number;
    suffix?: string;
    className?: string;
}

const Ticker = ({ value, suffix = "", className = "" }: TickerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const digits = String(value).split("");

    useEffect(() => {
        if (!containerRef.current) return;

        const digitElements = containerRef.current.querySelectorAll(".digit-column");

        const ctx = gsap.context(() => {
            digitElements.forEach((el, index) => {
                gsap.fromTo(
                    el,
                    { y: "0em" },
                    {
                        y: "-10em",
                        duration: 1.5 + index * 0.2,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 85%",
                            // once: true,
                            toggleActions:  "play none none reverse"
                        },
                    }
                );
            });
        }, containerRef.current);

        return () => ctx.revert();
    }, [value]);

    return (
        <div ref={containerRef} className={`flex items-center justify-center leading-none ${className}`}>
            {digits.map((digit, i) => (
                <div key={i} className="relative h-[1em] overflow-hidden leading-none">
                    <span className="invisible opacity-0">{digit}</span>
                    <div className="digit-column absolute top-0 left-0 right-0 flex flex-col text-center">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, digit].map((n, idx) => (
                            <span key={idx} className="h-[1em] leading-none">
                                {n}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
            {suffix && <span className="leading-none ml-1">{suffix}</span>}
        </div>
    );
};

export default Ticker;
