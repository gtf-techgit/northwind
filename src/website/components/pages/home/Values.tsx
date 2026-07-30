"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../../ui/SectionHeader";
import ValueCards from "./ValuesCards";

gsap.registerPlugin(ScrollTrigger);

const cardPositions = [
  { x: 0, y: -360 },
  { x: -470, y: -170 },
  { x: 470, y: -170 },
  { x: -470, y: 170 },
  { x: 470, y: 170 },
  { x: 0, y: 360 },
];

const Values = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const headingRef = useRef<HTMLDivElement>(null);

  const shapeRef = useRef<HTMLDivElement>(null);

  const ringsRef = useRef<HTMLDivElement>(null);

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, {
        opacity: 0,
        y: 120,
      });

      gsap.set(shapeRef.current, {
        scale: 0.45,
        rotation: -35,
        opacity: 0,
      });

      gsap.set(ringsRef.current, {
        scale: 0.75,
        opacity: 0,
      });

      cardsRef.current.forEach((card) => {
        gsap.set(card, {
          x: 0,
          y: 0,
          scale: 0.45,
          opacity: 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Heading

      tl.to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0
      );

      // Rings

      tl.to(
        ringsRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
        },
        0.15
      );

      // Shape

      tl.to(
        shapeRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        0.2
      );

      // Cards

      cardsRef.current.forEach((card, index) => {
        tl.to(
          card,
          {
            x: cardPositions[index].x,
            y: cardPositions[index].y,
            opacity: 1,
            scale: 1,
            ease: "back.out(1.2)",
            duration: 0.45,
          },
          0.45 + index * 0.05
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden ]"
    >
      <div className="container-custom h-full relative">

        <div
          ref={headingRef}
          className="absolute left-1/2 top-16 -translate-x-1/2 z-30"
        >
          <SectionHeader
            className="max-w-xl mx-auto text-center"
            heading="Values That Shape Every Space"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </div>

        {/* Rings */}

        <div
          ref={ringsRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative h-[700px] w-[700px] rounded-full border border-[#d8d2b4]/40">

            <div className="absolute inset-10 rounded-full border border-[#d8d2b4]/30" />

            <div className="absolute inset-20 rounded-full border border-[#d8d2b4]/30" />

            <div className="absolute inset-32 rounded-full border border-[#d8d2b4]/30" />

            <div className="absolute inset-44 rounded-full border border-[#d8d2b4]/30" />

          </div>
        </div>

        {/* Cards */}

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <ValueCards refs={cardsRef} />
        </div>

        {/* Shape */}

        <div
          ref={shapeRef}
          className="absolute left-1/2 bottom-16 -translate-x-1/2 z-10"
        >
          <Image
            src="/pages/home/values/shape.svg"
            alt=""
            width={400}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Values;