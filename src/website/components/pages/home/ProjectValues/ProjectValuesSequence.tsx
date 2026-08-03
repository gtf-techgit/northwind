"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rings from "./Rings";
import ValueCards, { cardPositions } from "./ValueCards";
import SectionHeader from "@/website/components/ui/SectionHeader";
import type { ProjectValuesData } from "@/website/types/home";
import { useIsMobile } from "@/website/components/ui/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

interface ProjectValuesSequenceProps {
  data: ProjectValuesData;
}

const ProjectValuesSequence = ({ data }: ProjectValuesSequenceProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectHeadingRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);
  const valuesHeadingRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();
  
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {

      const isMobileView = window.matchMedia("(max-width: 767px)").matches;

      /* ---------------- Initial State ---------------- */
      

      gsap.set(projectHeadingRef.current, {
        opacity: 1,
        y: 0,
      });

      gsap.set(buildingRef.current, {
        opacity: 1,
        y: 0,
      });

      gsap.set(valuesHeadingRef.current, {
        opacity: 0,
        yPercent: -140,
      });

      gsap.set(shapeRef.current, {
        opacity: 0,
        scale: 0.4,
        rotation: -35,
      });

      gsap.set(ringsRef.current, {
        opacity: 0,
        scale: 0.75,
      });

      gsap.set(cardsWrapperRef.current, {
        opacity: 1,
      });

      cardRefs.current.forEach((card) => {
        if (!card) return;

        gsap.set(card, {
          opacity: 0,
          scale: 0.2,
          x: 0,
          y: 0,
          rotate: 0,
        });
      });

      /* ---------------- Master Timeline ---------------- */

      const tl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          // end: "+=260%",
           end: "+=320%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* ===========================================================
         PROJECT EXIT
      =========================================================== */

      tl.to({}, { duration: 4 },0);
      tl.to(
        projectHeadingRef.current,
        {
          yPercent: -140,
          opacity: 0,
          scale: 0.92,
          duration: 0.4,
          ease: "power2.in",
        },
        0
      );

      tl.to(
        buildingRef.current,
        {
          yPercent: 120,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        0
      );

      /* ===========================================================
         VALUES HEADING
      =========================================================== */

      tl.to(
        valuesHeadingRef.current,
        {
          yPercent: 0,
          duration: 0.4,
          opacity: 1,
          ease: "power2.in",
        },
        0.1
      );
      tl.to(
        shapeRef.current,
        {
          opacity: 1,
          scale: 0.8,
          rotation: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        0.18
      );

      /* ===========================================================
         SHAPE
      =========================================================== */

      tl.to(
        shapeRef.current,
        {
          delay: 1,
          scale: 0.4,
          rotation: 360,
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "power3.inOut",
        },
        0.25
      );

      tl.to(
        valuesHeadingRef.current,
        {
          opacity: 0,
          yPercent: -140,
          duration: 0.4,
          ease: "power2.in",
        },
        0.8
      );




      /* ===========================================================
         RINGS
      =========================================================== */

      tl.to(
        ringsRef.current,
        {
          delay: 1.5,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        0.25
      );



      /* ===========================================================
         SMALL FLOAT
      =========================================================== */

      // tl.to(
      //   shapeRef.current,
      //   {
      //     y: -10,
      //     duration: 0.25,
      //   },
      //   0.75
      // );

      // tl.to(
      //   shapeRef.current,
      //   {
      //     y: 0,
      //     duration: 0.25,
      //   },
      //   1
      // );

      /* ===========================================================
         CARDS BURST
      =========================================================== */

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const position = cardPositions[index];
        const targetX = isMobileView ? position.mobilex : position.x;
        const targetY = isMobileView ? position.mobiley : position.y;

        tl.to(
          card,
          {
            delay: 1.2,
            opacity: 1,
            scale: 1,
            x: targetX,
            y: targetY,
            ease: "none",
            duration: 0.8,
          },
          0.42
        );

        tl.to(
          card,
          {
            scale: 1,
            ease: "power2.out",
            duration: 0.18,
          },
          0.62
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="relative h-full w-full">

        {/* ============================
              PROJECT
        ============================ */}

        <div
          ref={projectHeadingRef}
          className="absolute top-20 left-1/2 z-40 w-full max-w-2xl -translate-x-1/2"
        >
          <SectionHeader
            className="mx-auto text-center"
            heading={data.project.heading}
            paragraph={data.project.paragraph}
            buttonText={data.project.buttonText}
            buttonHref={data.project.buttonHref}
          />
        </div>

        <div
          ref={buildingRef}
          className="absolute bottom-0 left-1/2 w-full -translate-x-1/2"
          style={{ zIndex: 5 }}
        >
          <Image
            src={isMobile ? data.project.buildingMob : data.project.buildingDesk}
            alt="Elevation"
            width={1920}
            height={1000}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* ============================
              VALUES
        ============================ */}

        <div
          ref={valuesHeadingRef}
          className="absolute left-1/2 top-[8%] z-40 w-full max-w-2xl -translate-x-1/2"
        >
          <SectionHeader
            className="mx-auto text-center"
            heading={data.values.heading}
            paragraph={data.values.paragraph}
          />
        </div>

        {/* Rings */}
        <Rings ref={ringsRef} />

        {/* Shape */}
        <div ref={shapeRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 origin-center"
        >
          <Image
            src={data.values.shapeImage}
            alt=""
            width={500}
            height={620}
            className="w-[420px] xl:w-[500px] h-auto"
          />
        </div>

        {/* Cards */}

        <div
          className="absolute inset-0 z-30 flex items-center justify-center min-h-screen"
        >
          <ValueCards
            ref={cardsWrapperRef}
            cardRefs={cardRefs}
            valueCards={data.valueCards}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectValuesSequence;