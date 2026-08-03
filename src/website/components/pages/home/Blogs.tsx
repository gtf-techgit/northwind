"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";
import ZoomOut from "../../ui/ZoomOut";
import type { BlogsData, BlogTab } from "@/website/types/home";

gsap.registerPlugin(ScrollTrigger);

interface BlogsProps {
  data: BlogsData;
}

const Blogs = ({ data }: BlogsProps) => {
  const [activeTab, setActiveTab] = useState<BlogTab>("blogs");
  const items = activeTab === "blogs" ? data.blogs : data.media;

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Partial<Record<BlogTab, HTMLButtonElement | null>>>({});
  const pillRef = useRef<HTMLDivElement>(null);
  const pillReady = useRef(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollDistance = () =>
      Math.max(0, track.scrollWidth - track.clientWidth);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    gsap.set(trackRef.current, { x: 0 });
    ScrollTrigger.refresh();
  }, [activeTab]);

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

  const handleTabChange = (id: BlogTab) => {
  if (id === activeTab) return;

  if ("startViewTransition" in document) {
    document.startViewTransition(() => {
      setActiveTab(id);
    });
  } else {
    setActiveTab(id);
  }
};

  return (
    <section
      ref={sectionRef}
      className="relative w-full md:min-h-screen section-toppadding overflow-hidden"
    >
      <div className="container-custom">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            className="max-w-lg"
            heading={data.heading}
            paragraph={data.paragraph}
          />

          <div className="relative inline-flex shrink-0 items-center gap-1 self-start rounded-full bg-primary/5 p-1 md:self-auto">
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
                onClick={() => handleTabChange(tab.id)}
                className={`relative z-10 cursor-pointer rounded-full font-body px-8 py-3 pera tracking-wide transition-colors ${activeTab === tab.id
                    ? "text-secondary!"
                    : "text-primary/70 hover:text-primary"
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

        <div className="mt-10 overflow-hidden">
          <div ref={trackRef} className="flex gap-8 will-change-transform">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="group w-[80%] shrink-0 sm:w-[55%] md:w-[calc(33.333%-1.334rem)]"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-xl-custom">
                  <ZoomOut
                    className="absolute inset-0 h-full w-full"
                    delay={index * 0.15}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </ZoomOut>
                </div>
                <div className="flex justify-between items-center mt-4 md:mt-6">
                  <h3 className=" text-[14px]  md:text-[18px] max-w-80 font-semibold font-body text-primary">
                  {item.title}
                </h3>
                  <p className="text-sm font-body ">{item.date}</p>
                </div>
                
                <p className="mt-3 line-clamp-2 font-body pera leading-relaxed ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center mt-5">
          <Button className="mt-6 font-semibold cursor-pointer">{data.buttonText}</Button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
