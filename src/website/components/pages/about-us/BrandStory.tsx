"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/website/components/ui/Heading";
import Paragraph from "@/website/components/ui/Paragraph";
import type { BrnadStoryProps } from "@/website/types/aboutUs";

gsap.registerPlugin(ScrollTrigger);

interface BrandStorySectionProps {
  data: BrnadStoryProps;
}

const BrandStory = ({ data }: BrandStorySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const items = data.listing || [];
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Animate central SVG path line and single rotating green-circle follower icon on Mobile & Desktop
      if (followerRef.current) {
        const pathLength = pathRef.current
          ? pathRef.current.getTotalLength()
          : 0;
        if (pathRef.current) {
          gsap.set(pathRef.current, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });
        }

        const animObj = { progress: 0 };
        gsap.to(animObj, {
          progress: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 1,
            onUpdate: (self) => {
              if (!followerRef.current) return;
              const isMobile = window.innerWidth < 768;
              const currentRotation = self.progress * 1080; // Continuously rotate on scroll

              if (isMobile) {
                // Mobile: Straight vertical guide line along left-6 (24px)
                gsap.set(followerRef.current, {
                  left: "24px",
                  top: `${self.progress * 100}%`,
                  rotate: currentRotation,
                });
              } else if (pathRef.current) {
                // Desktop: Trace S-curve path
                const currentLength = self.progress * pathLength;

                gsap.set(pathRef.current, {
                  strokeDashoffset: pathLength * (1 - self.progress),
                });

                const point = pathRef.current.getPointAtLength(currentLength);
                gsap.set(followerRef.current, {
                  left: `${(point.x / 1000) * 100}%`,
                  top: `${(point.y / 1200) * 100}%`,
                  rotate: currentRotation,
                });
              }

              // Synchronize active card index with scroll progress
              if (items.length > 0) {
                const step = 1 / items.length;
                const newActiveIndex = Math.min(
                  items.length - 1,
                  Math.floor(self.progress / step),
                );
                setActiveIndex(newActiveIndex);
              }
            },
          },
        });
      }

      // 2. Animate individual timeline card entrance
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const isEven = index % 2 === 0;

        // Card Entrance animation
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            x: isEven ? 30 : -30,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 55%",
              scrub: 0.5,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [items.length]);

  return (
    <section
      ref={sectionRef}
      className="relative section-padding bg-background overflow-hidden py-16 md:py-24"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          {data.title?.heading && (
            <Heading className="font-heading text-4xl sm:text-5xl lg:text-[52px] text-primary leading-tight font-normal">
              {data.title.heading}
            </Heading>
          )}
          {data.description?.desc && (
            <Paragraph className="mt-4 text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              {data.description.desc}
            </Paragraph>
          )}
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto min-h-[600px]">
          {/* Central Curved Connecting Path SVG (Desktop/Tablet) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none hidden md:block">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 1200"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="lineFadeGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#B5C99A" stopOpacity="0" />
                  <stop offset="10%" stopColor="#B5C99A" stopOpacity="1" />
                  <stop offset="90%" stopColor="#B5C99A" stopOpacity="1" />
                  <stop offset="100%" stopColor="#B5C99A" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="lineBgGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#B5C99A" stopOpacity="0" />
                  <stop offset="10%" stopColor="#B5C99A" stopOpacity="0.3" />
                  <stop offset="90%" stopColor="#B5C99A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#B5C99A" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Soft background line guide */}
              <path
                d="M 470 0 L 470 200 C 470 280, 530 270, 530 350 L 530 520 C 530 600, 470 590, 470 670 L 470 840 C 470 920, 530 910, 530 990 L 530 1200"
                stroke="url(#lineBgGradient)"
                strokeWidth="1.5"
              />
              {/* Animated drawing line */}
              <path
                ref={pathRef}
                d="M 470 0 L 470 200 C 470 280, 530 270, 530 350 L 530 520 C 530 600, 470 590, 470 670 L 470 840 C 470 920, 530 910, 530 990 L 530 1200"
                stroke="url(#lineFadeGradient)"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Single Moving & Rotating green-circle.svg Node Icon (Mobile + Desktop) */}
          <div
            ref={followerRef}
            className="absolute z-30 w-8 h-8 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 pointer-events-none drop-shadow-sm"
            style={{ left: "50%", top: "0%" }}
          >
            <Image
              src="/images/common/green-circle.svg"
              alt="Moving Timeline Node"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Mobile Straight Vertical Guide Line */}
          <div className="absolute top-0 bottom-0 left-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#A5C284]/30 to-transparent md:hidden" />

          {/* Timeline Items List */}
          <div className="space-y-12 md:space-y-24">
            {items.map((item: { desc?: string }, index: number) => {
              const isEven = index % 2 === 0;
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Empty Spacer Column for Desktop Alternating Grid */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Card Column */}
                  <div
                    className={`w-full pl-16 md:pl-0 md:w-1/2 flex ${
                      isEven
                        ? "justify-start md:pl-6 lg:pl-10"
                        : "justify-end md:pr-6 lg:pr-10"
                    }`}
                  >
                    <div
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      className={`relative w-full max-w-[480px] p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] shadow-sm overflow-hidden transition-all duration-500 ease-out ${
                        isActive
                          ? "bg-[#A5C284] text-[#1F3124] scale-[1.02] shadow-md z-10"
                          : "bg-[#E8EFD7] text-[#2D3C25] opacity-80 scale-100 z-0"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute -right-3 top-0 opacity-20 duration-500">
                          <Image
                            src="/images/common/cutlines.svg"
                            alt=""
                            width={400}
                            height={400}
                            className="w-40 h-40 sm:w-50 sm:h-50 object-contain"
                          />
                        </div>
                      )}

                      {/* Card Paragraph Text */}
                      <Paragraph
                        className={`relative z-10 text-base sm:text-[17px] leading-relaxed font-normal transition-colors duration-500 ${
                          isActive ? "text-[#1F3124]" : "text-[#2D3C25]"
                        }`}
                      >
                        {item.desc}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
