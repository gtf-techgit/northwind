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
  const mobileFollowerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const items = data.listing || [];
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Animate central SVG path line and rotating green-circle follower icon on Mobile & Desktop
      if (pathRef.current && followerRef.current) {
        const pathLength = pathRef.current.getTotalLength();

        // Calculate starting length (first card center) & ending length (last card center) along SVG path
        let startLength = 0;
        let endLength = pathLength;
        let mobileStartPercent = 0;
        let mobileEndPercent = 100;

        const svgWrapper = pathRef.current.closest(".absolute") as HTMLElement;

        if (svgWrapper && cardRefs.current.length > 0) {
          const wrapperRect = svgWrapper.getBoundingClientRect();

          // First card center
          const firstCard = cardRefs.current[0];
          if (firstCard) {
            const firstCardRect = firstCard.getBoundingClientRect();
            const firstCardCenterY =
              firstCardRect.top + firstCardRect.height / 2 - wrapperRect.top;
            const targetSvgY = (firstCardCenterY / wrapperRect.height) * 1200;
            mobileStartPercent = Math.max(
              0,
              Math.min(100, (firstCardCenterY / wrapperRect.height) * 100)
            );

            for (let l = 0; l <= pathLength; l += 2) {
              const pt = pathRef.current.getPointAtLength(l);
              if (pt.y >= targetSvgY) {
                startLength = l;
                break;
              }
            }
          }

          // Last card center
          const lastCard = cardRefs.current[items.length - 1];
          if (lastCard) {
            const lastCardRect = lastCard.getBoundingClientRect();
            const lastCardCenterY =
              lastCardRect.top + lastCardRect.height / 2 - wrapperRect.top;
            const targetEndSvgY = (lastCardCenterY / wrapperRect.height) * 1200;
            mobileEndPercent = Math.max(
              0,
              Math.min(100, (lastCardCenterY / wrapperRect.height) * 100)
            );

            for (let l = pathLength; l >= 0; l -= 2) {
              const pt = pathRef.current.getPointAtLength(l);
              if (pt.y <= targetEndSvgY) {
                endLength = l;
                break;
              }
            }
          }
        }

        // Set initial stroke dasharray and offset to start at first card's center
        gsap.set(pathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength - startLength,
        });

        // Set initial position for desktop follower at first card center
        const initPoint = pathRef.current.getPointAtLength(startLength);
        gsap.set(followerRef.current, {
          left: `${(initPoint.x / 1000) * 100}%`,
          top: `${(initPoint.y / 1200) * 100}%`,
        });

        if (mobileFollowerRef.current) {
          gsap.set(mobileFollowerRef.current, {
            left: "0px",
            top: `${mobileStartPercent}%`,
          });
        }

        gsap.to(
          {},
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 70%",
              scrub: 1,
              onUpdate: (self) => {
                const currentRotation = self.progress * 1080;
                const isMobile = window.innerWidth < 768;

                if (isMobile && mobileFollowerRef.current) {
                  const currentTop =
                    mobileStartPercent +
                    self.progress * (mobileEndPercent - mobileStartPercent);
                  gsap.set(mobileFollowerRef.current, {
                    left: "0px",
                    top: `${currentTop}%`,
                    rotate: currentRotation,
                  });
                } else if (pathRef.current && followerRef.current) {
                  const currentLength =
                    startLength + self.progress * (endLength - startLength);

                  // Animate active drawing stroke from first card center to last card center
                  gsap.set(pathRef.current, {
                    strokeDashoffset: pathLength - currentLength,
                  });

                  // Position follower icon precisely on the SVG curve up to last card center
                  const point = pathRef.current.getPointAtLength(currentLength);
                  gsap.set(followerRef.current, {
                    left: `${(point.x / 1000) * 100}%`,
                    top: `${(point.y / 1200) * 100}%`,
                    rotate: currentRotation,
                  });
                }
              },
            },
          }
        );
      }

      // 2. Animate individual timeline card entrance & activate as each enters central viewport
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

        // Active state trigger when card reaches central viewport focus zone
        ScrollTrigger.create({
          trigger: card,
          start: "top 65%",
          end: "bottom 35%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveIndex(index);
            }
          },
        });
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
          {/* Central Curved Connecting Path SVG (Desktop/Tablet) with smooth gradient mask top fade */}
          <div
            className="absolute -top-16 bottom-0 left-1/2 -translate-x-1/2 w-full h-[calc(100%+64px)] pointer-events-none hidden md:block"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
          >
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
                  <stop offset="0%" stopColor="#A5C284" stopOpacity="0" />
                  <stop offset="20%" stopColor="#A5C284" stopOpacity="0.9" />
                  <stop offset="80%" stopColor="#A5C284" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#A5C284" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="lineBgGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#A5C284" stopOpacity="0" />
                  <stop offset="20%" stopColor="#A5C284" stopOpacity="0.45" />
                  <stop offset="80%" stopColor="#A5C284" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#A5C284" stopOpacity="0" />
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

            {/* Single Moving & Rotating green-circle.svg Node Icon (Desktop - Shared SVG coordinate system) */}
            <div
              ref={followerRef}
              className="absolute z-30 w-8 h-8 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ left: "47%", top: "0%" }}
            >
              <Image
                src="/images/common/green-circle.svg"
                alt="Moving Timeline Node"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>

          {/* Mobile Straight Vertical Guide Line */}
          <div
            className="absolute -top-8 bottom-0 left-6 w-[1.5px] pointer-events-none md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #A5C284 20%, #A5C284 80%, transparent 100%)",
              opacity: 0.45,
            }}
          >
            <div
              ref={mobileFollowerRef}
              className="absolute z-30 w-7 h-7 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
              style={{ left: "0px", top: "0%" }}
            >
              <Image
                src="/images/common/green-circle.svg"
                alt="Moving Timeline Node"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
            </div>
          </div>

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
                      className={`relative w-full max-w-[480px] p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? "bg-[#A5C284] text-[#1F3124] scale-[1.02] z-10 opacity-100"
                          : "bg-[#E8EFD7] text-[#2D3C25] scale-100 z-0 opacity-80"
                      }`}
                    >
                      {/* Cutlines Background Image - Synced transition with card bg */}
                      <div
                        className={`absolute -right-3 top-0 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive
                            ? "opacity-25 scale-100 translate-x-0 rotate-0"
                            : "opacity-0 scale-90 translate-x-6 -rotate-6"
                        }`}
                      >
                        <Image
                          src="/images/common/cutlines.svg"
                          alt=""
                          width={400}
                          height={400}
                          className="w-40 h-40 sm:w-52 sm:h-52 object-contain"
                        />
                      </div>

                      {/* Card Paragraph Text */}
                      <Paragraph
                        className={`relative z-10 text-base sm:text-[17px] leading-relaxed font-normal transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
