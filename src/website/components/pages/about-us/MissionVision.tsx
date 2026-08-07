"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/website/components/ui/Heading";
import Paragraph from "@/website/components/ui/Paragraph";
import type { MissionVisionProps } from "@/website/types/aboutUs";

gsap.registerPlugin(ScrollTrigger);

interface MissionVisionSectionProps {
  data: MissionVisionProps[];
}

const MissionVision = ({ data }: MissionVisionSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Slots for measuring positions (Placeholders)
  const mainSlotRef = useRef<HTMLDivElement>(null);
  const topLeftSlotRef = useRef<HTMLDivElement>(null);
  const bottomRightSlotRef = useRef<HTMLDivElement>(null);

  // Moving Image Cards
  const visionCardRef = useRef<HTMLDivElement>(null);
  const missionCardRef = useRef<HTMLDivElement>(null);

  // Text Refs
  const visionTextRef = useRef<HTMLDivElement>(null);
  const missionTextRef = useRef<HTMLDivElement>(null);

  const visionData = data[0] || {};
  const missionData = data[1] || {};

  const visionImgSrc =
    visionData.files?.desktop_file ||
    visionData.files?.mobile_file ||
    "/pages/about-us/vision.webp";

  const missionImgSrc =
    missionData.files?.desktop_file ||
    missionData.files?.mobile_file ||
    "/pages/about-us/mission.webp";

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !mainSlotRef.current ||
      !topLeftSlotRef.current ||
      !bottomRightSlotRef.current ||
      !visionCardRef.current ||
      !missionCardRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const calculateOffsets = () => {
        const mainRect = mainSlotRef.current!.getBoundingClientRect();
        const topLeftRect = topLeftSlotRef.current!.getBoundingClientRect();
        const bottomRightRect =
          bottomRightSlotRef.current!.getBoundingClientRect();

        const getCenter = (r: DOMRect) => ({
          x: r.left + r.width / 2,
          y: r.top + r.height / 2,
        });

        const mainCenter = getCenter(mainRect);
        const topLeftCenter = getCenter(topLeftRect);
        const bottomRightCenter = getCenter(bottomRightRect);

        return {
          visionDeltaX: topLeftCenter.x - mainCenter.x,
          visionDeltaY: topLeftCenter.y - mainCenter.y,
          visionScale: topLeftRect.width / mainRect.width,

          missionDeltaX: bottomRightCenter.x - mainCenter.x,
          missionDeltaY: bottomRightCenter.y - mainCenter.y,
          missionScale: bottomRightRect.width / mainRect.width,
        };
      };

      const offsets = calculateOffsets();

      /* ---------------- Initial States ---------------- */
      // Vision Card starts in main center slot (Full size, 100% opacity)
      gsap.set(visionCardRef.current, {
        x: 0,
        y: 0,
        scale: 1,
        borderRadius: "32px",
        transformOrigin: "center center",
        zIndex: 20,
        opacity: 1,
      });

      // Mission Card starts in bottom-right thumbnail slot (Thumbnail size, 100% opacity)
      gsap.set(missionCardRef.current, {
        x: offsets.missionDeltaX,
        y: offsets.missionDeltaY,
        scale: offsets.missionScale,
        borderRadius: "20px",
        transformOrigin: "-30% center",
        zIndex: 20,
        opacity: 1,
      });

      // Initial Text States
      gsap.set(visionTextRef.current, { opacity: 1, y: 0 });
      gsap.set(missionTextRef.current, { opacity: 0, y: 40 });

      /* ---------------- Master Scrub Timeline ---------------- */
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: () => {
            const updated = calculateOffsets();
            gsap.set(missionCardRef.current, {
              x: updated.missionDeltaX,
              y: updated.missionDeltaY,
              scale: updated.missionScale,
            });
          },
        },
      });

      // 1. Vision Card moves continuously from main center -> top-left thumbnail slot
      tl.to(
        visionCardRef.current,
        {
          x: offsets.visionDeltaX,
          y: offsets.visionDeltaY,
          scale: offsets.visionScale,
          borderRadius: "20px",
          duration: 1,
        },
        0,
      );

      // 2. Mission Card moves continuously from bottom-right thumbnail slot -> main center
      tl.to(
        missionCardRef.current,
        {
          x: 0,
          y: 0,
          scale: 1,
          borderRadius: "32px",
          duration: 1,
        },
        0,
      );

      // 3. Vision Text slides out
      tl.to(
        visionTextRef.current,
        {
          opacity: 0,
          y: -30,
          duration: 0.5,
        },
        0,
      );

      // 4. Mission Text slides in
      tl.to(
        missionTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        0.5,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToProgress = (targetProgress: number) => {
    if (!sectionRef.current) return;
    const st = ScrollTrigger.getAll().find(
      (s) => s.trigger === sectionRef.current,
    );
    if (st) {
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-background py-12 md:py-20 flex items-center justify-center"
    >
      {/* Subtle Architectural Blueprint Vector Lines Background */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
        style={{ background: "url(bg-1.webp)", backgroundSize: "cover" }}
      />
      <div className="max-w-[80%] w-full m-auto mr-0">
        <div className="container-custom relative z-10 w-full">
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 min-h-[580px]">
            {/* Center Main Slot Column */}
            <div className="lg:col-span-7 flex justify-center items-center relative py-6">
              {/* Top-Left Thumbnail Slot Placeholder (Positioned at top-left shoulder of center main card) */}
              <div
                ref={topLeftSlotRef}
                onClick={() => handleScrollToProgress(0)}
                className="absolute top-4 -left-4 sm:-left-12 lg:-left-20 z-30 w-20 h-20 sm:w-28 sm:h-28 rounded-[20px] cursor-pointer"
                title="Click to view Our Vision"
              />

              {/* Main Center Slot Reference Box */}
              <div
                ref={mainSlotRef}
                className="relative w-[80%] aspect-[2/3] lg:h-[540px] 2xl:h-[640px] rounded-[32px]"
              >
                {/* Vision Moving Card (Starts center main, moves to top-left shoulder slot) */}
                <div
                  ref={visionCardRef}
                  onClick={() => handleScrollToProgress(0)}
                  className="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden shadow-xl cursor-pointer will-change-transform z-20"
                >
                  <Image
                    src={visionImgSrc}
                    alt={visionData.title?.heading || "Our Vision"}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Mission Moving Card (Starts bottom-right, moves to center main slot) */}
                <div
                  ref={missionCardRef}
                  onClick={() => handleScrollToProgress(1)}
                  className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden shadow-xl cursor-pointer will-change-transform z-20"
                >
                  <Image
                    src={missionImgSrc}
                    alt={missionData.title?.heading || "Our Mission"}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Text Column & Bottom-Right Thumbnail Slot */}
            <div className="lg:col-span-5 relative flex flex-col justify-center min-h-[480px] lg:pl-4 py-2">
              {/* Text Area */}
              <div className="relative min-h-[260px]">
                {/* Vision Text */}
                <div ref={visionTextRef} className="absolute inset-x-0 top-0">
                  {visionData.title?.heading && (
                    <Heading className="font-heading text-3xl sm:text-4xl lg:text-[44px] text-primary leading-tight">
                      {visionData.title.heading}
                    </Heading>
                  )}
                  {visionData.description?.desc && (
                    <Paragraph className="mt-6 text-muted text-sm sm:text-base leading-relaxed max-w-lg">
                      {visionData.description.desc}
                    </Paragraph>
                  )}
                </div>

                {/* Mission Text */}
                <div ref={missionTextRef} className="absolute inset-x-0 top-0">
                  {missionData.title?.heading && (
                    <Heading className="font-heading text-3xl sm:text-4xl lg:text-[44px] text-primary leading-tight">
                      {missionData.title.heading}
                    </Heading>
                  )}
                  {missionData.description?.desc && (
                    <Paragraph className="mt-6 text-muted text-sm sm:text-base leading-relaxed max-w-lg">
                      {missionData.description.desc}
                    </Paragraph>
                  )}
                </div>
              </div>

              {/* Bottom-Right Thumbnail Slot Placeholder (Aligned to bottom-right of text column) */}
              <div
                ref={bottomRightSlotRef}
                onClick={() => handleScrollToProgress(1)}
                className="self-end mt-6 w-20 h-20 sm:w-28 sm:h-28 rounded-[20px] cursor-pointer z-30"
                title="Click to view Our Mission"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
