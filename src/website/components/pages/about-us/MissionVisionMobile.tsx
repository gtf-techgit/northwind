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

const MissionVisionMobile = ({ data }: MissionVisionSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Slot Refs for Position Calculations
  const mainSlotRef = useRef<HTMLDivElement>(null);
  const bottomThumbSlotRef = useRef<HTMLDivElement>(null);

  // Moving Image Card Refs
  const visionCardRef = useRef<HTMLDivElement>(null);
  const missionCardRef = useRef<HTMLDivElement>(null);

  // Text Scroll Track & Mask Refs
  const textMaskRef = useRef<HTMLDivElement>(null);
  const textTrackRef = useRef<HTMLDivElement>(null);
  const visionTextRef = useRef<HTMLDivElement>(null);
  const missionTextRef = useRef<HTMLDivElement>(null);

  const visionData = data[0] || {};
  const missionData = data[1] || {};

  const visionImgSrc =
    visionData.files?.mobile_file ||
    visionData.files?.desktop_file ||
    "/pages/about-us/vision.webp";

  const missionImgSrc =
    missionData.files?.mobile_file ||
    missionData.files?.desktop_file ||
    "/pages/about-us/mission.webp";

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !mainSlotRef.current ||
      !bottomThumbSlotRef.current ||
      !visionCardRef.current ||
      !missionCardRef.current ||
      !visionTextRef.current ||
      !missionTextRef.current ||
      !textTrackRef.current ||
      !textMaskRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const calculateOffsets = () => {
        const mainRect = mainSlotRef.current!.getBoundingClientRect();
        const thumbRect = bottomThumbSlotRef.current!.getBoundingClientRect();

        const getCenter = (r: DOMRect) => ({
          x: r.left + r.width / 2,
          y: r.top + r.height / 2,
        });

        const mainCenter = getCenter(mainRect);
        const thumbCenter = getCenter(thumbRect);

        return {
          thumbDeltaX: thumbCenter.x - mainCenter.x,
          thumbDeltaY: thumbCenter.y - mainCenter.y,
          thumbScale: thumbRect.width / mainRect.width,
        };
      };

      const calculateTextShift = () => {
        const visionH = visionTextRef.current
          ? visionTextRef.current.offsetHeight
          : 160;
        const missionH = missionTextRef.current
          ? missionTextRef.current.offsetHeight
          : 160;
        const gap = 32; // gap-8 = 32px
        const shiftY = visionH + gap;
        return { visionH, missionH, shiftY };
      };

      const offsets = calculateOffsets();
      const textOffsets = calculateTextShift();

      /* ---------------- Initial States ---------------- */
      // Vision Card starts in center slot (with zoom-in entrance from bottom on section enter)
      gsap.set(visionCardRef.current, {
        x: 0,
        y: 100,
        scale: 0.7,
        borderRadius: "15px",
        transformOrigin: "center center",
        zIndex: 20,
        opacity: 0,
      });

      // Vision Card entrance zoom-in as section enters viewport
      gsap.to(visionCardRef.current, {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top top",
          scrub: 0.5,
        },
      });

      // Mission Card starts at bottom thumbnail position
      gsap.set(missionCardRef.current, {
        x: offsets.thumbDeltaX,
        y: offsets.thumbDeltaY,
        scale: offsets.thumbScale,
        borderRadius: "18px",
        transformOrigin: "center center",
        zIndex: 20,
        opacity: 1,
      });

      // Text Track Initial State: Mask fits Vision text, Track at y: 0
      gsap.set(textMaskRef.current, { height: textOffsets.visionH });
      gsap.set(textTrackRef.current, { y: 0 });

      /* ---------------- Master Scrub Timeline (Mobile) ---------------- */
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: () => {
            const updated = calculateOffsets();
            gsap.set(missionCardRef.current, {
              x: updated.thumbDeltaX,
              y: updated.thumbDeltaY,
              scale: updated.thumbScale,
            });

            const updatedText = calculateTextShift();
            gsap.set(textMaskRef.current, { height: updatedText.visionH });
            gsap.set(textTrackRef.current, { y: 0 });
          },
        },
      });

      // 1. Vision Card moves down from center slot to bottom thumbnail slot
      tl.to(
        visionCardRef.current,
        {
          x: offsets.thumbDeltaX,
          y: offsets.thumbDeltaY,
          scale: offsets.thumbScale,
          borderRadius: "18px",
          duration: 1,
        },
        0,
      );

      // 2. Mission Card moves up from bottom thumbnail slot to center slot
      tl.to(
        missionCardRef.current,
        {
          x: 0,
          y: 0,
          scale: 1,
          borderRadius: "15px",
          duration: 1,
        },
        0,
      );

      // 3. Scroll Text Track upwards so Vision text slides up out & Mission text enters from bottom
      tl.to(
        textTrackRef.current,
        {
          y: -textOffsets.shiftY,
          duration: 1,
        },
        0,
      );

      // 4. Smoothly adjust Mask height to fit Mission text
      tl.to(
        textMaskRef.current,
        {
          height: textOffsets.missionH,
          duration: 1,
        },
        0,
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
      className="lg:hidden relative min-h-screen bg-background py-10 px-4 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ background: "url(bg-1.webp)", backgroundSize: "cover" }}
      />

      <div className="w-full max-w-sm mx-auto relative z-10 flex flex-col items-center">
        {/* Top Text Area with Vertical Text Scroll Mask */}
        <div ref={textMaskRef} className="overflow-hidden w-full relative">
          <div
            ref={textTrackRef}
            className="w-full flex flex-col gap-8 text-center pt-1 pb-1"
          >
            {/* Vision Text */}
            <div ref={visionTextRef} className="w-full shrink-0">
              {visionData.title?.heading && (
                <Heading className="font-heading text-3xl sm:text-4xl text-primary leading-tight text-center">
                  {visionData.title.heading}
                </Heading>
              )}
              {visionData.description?.desc && (
                <Paragraph className="mt-3 text-muted text-sm leading-relaxed text-center max-w-xs mx-auto">
                  {visionData.description.desc}
                </Paragraph>
              )}
            </div>

            {/* Mission Text */}
            <div ref={missionTextRef} className="w-full shrink-0">
              {missionData.title?.heading && (
                <Heading className="font-heading text-3xl sm:text-4xl text-primary leading-tight text-center">
                  {missionData.title.heading}
                </Heading>
              )}
              {missionData.description?.desc && (
                <Paragraph className="mt-3 text-muted text-sm leading-relaxed text-center max-w-xs mx-auto">
                  {missionData.description.desc}
                </Paragraph>
              )}
            </div>
          </div>
        </div>

        {/* Center Main Card Slot Container */}
        <div
          ref={mainSlotRef}
          className="relative w-full aspect-[4/4] rounded-[15px] my-6 flex justify-center items-center"
        >
          {/* Vision Moving Card (Starts center main, moves to bottom thumbnail slot) */}
          <div
            ref={visionCardRef}
            onClick={() => handleScrollToProgress(0)}
            className="absolute inset-0 w-full h-full rounded-[15px] overflow-hidden shadow-xl cursor-pointer will-change-transform z-20"
          >
            <Image
              src={visionImgSrc}
              alt={visionData.title?.heading || "Our Vision"}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Mission Moving Card (Starts bottom thumbnail slot, moves to center main slot) */}
          <div
            ref={missionCardRef}
            onClick={() => handleScrollToProgress(1)}
            className="absolute inset-0 w-full h-full rounded-[15px] overflow-hidden shadow-xl cursor-pointer will-change-transform z-20"
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

        {/* Bottom Thumbnail Slot Reference Box */}
        <div
          ref={bottomThumbSlotRef}
          onClick={() => handleScrollToProgress(1)}
          className="w-30 h-30 rounded-[18px] mt-10 cursor-pointer z-30 flex items-center justify-center"
          title="Click to view next section"
        />
      </div>
    </section>
  );
};

export default MissionVisionMobile;
