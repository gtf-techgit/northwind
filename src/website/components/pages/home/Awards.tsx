"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { AwardsData } from "@/website/types/home";

const TOTAL_FRAMES = 240;
const FPS = 30;

const getFramePath = (frame: number) =>
  `/pages/home/awards/frames/${String(frame).padStart(3, "0")}.png`;

interface AwardsProps {
  data: AwardsData;
}

const Awards = ({ data }: AwardsProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    imagesRef.current = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new Image();
      img.src = getFramePath(i + 1);
      return img;
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const frameDuration = 1000 / FPS;

    const draw = (time: number) => {
      if (time - lastTimeRef.current >= frameDuration) {
        lastTimeRef.current = time;
        const img = imagesRef.current[frameIndexRef.current];
        if (img?.complete) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
        frameIndexRef.current = (frameIndexRef.current + 1) % TOTAL_FRAMES;
      }
      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-primary section-padding"
    >
      <div className="container-custom relative flex h-full min-h-[calc(100vh-160px)] items-center">
        <div className="grid w-full items-center gap-y-16 md:grid-cols-12">
          {/* Left content */}
          <div className="md:col-span-4">
            <h2 className="max-w-sm font-heading text-3xl md:text-4xl lg:text-[2.75rem]  leading-[1.15] text-brand ">
              {data.heading}
            </h2>

            <Link href={data.buttonHref}>  <button
              type="button"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-white/15 bg-[#B9A1481A] px-8 py-3 font-body text-sm tracking-wide text-brand backdrop-blur-sm transition-colors cursor-pointer"
            >
              {data.buttonText}
            </button>
            </Link>
          </div>
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-95 w-95 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#14694D]/60 blur-3xl" />
          {/* Trophy + glass card */}
          <div className="relative md:col-span-8">
            <div className="relative flex flex-col items-center gap-8 md:min-h-105 md:flex-row">

              {/* Trophy frame sequence */}
              <div className="relative z-10 w-full max-w-50 md:max-w-85 md:left-24">
                <canvas
                  ref={canvasRef}
                  width={720}
                  height={1280}
                  className="h-auto w-full object-contain"
                  aria-label="Award"
                  role="img"
                />
              </div>

              {/* Glass card */}
              <div
                className="relative w-full rounded-[28px] border border-white/25 px-8 py-10 md:absolute md:right-0 md:top-1/2 md:w-[70%] md:-translate-y-1/2 md:px-10 md:py-14 md:pl-32"
              >
                <h3 className="font-heading text-xl md:text-2xl text-brand">
                  {data.cardHeading}
                </h3>
                <p className="mt-3 max-w-sm font-body pera leading-relaxed text-white/70">
                  {data.cardParagraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
