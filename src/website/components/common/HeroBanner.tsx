"use client";

import Image from "next/image";
import ZoomOut from "../ui/ZoomOut";
import type { HeroData } from "@/website/types/common";

interface HeroBannerProps {
  data: HeroData;
  showTitle?: boolean;
}

const HeroBanner = ({ data, showTitle = true }: HeroBannerProps) => {
  return (
    <div className="hero-banner relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-10 bg-black/55" />

      {data.media?.type === "image" && (
        <>
          {/* Desktop */}
          <div className="absolute inset-0 hidden overflow-hidden md:block">
            <ZoomOut
              initialScale={1.15}
              duration={1.5}
              once
              className="absolute inset-0 h-full w-full"
            >
              <Image
                src={data.media.files.desktop_file || ""}
                alt={data.media.alt || data.title || "hero banner image"}
                fill
                priority
                className="object-cover"
              />
            </ZoomOut>
          </div>

          {/* Mobile */}
          <div className="absolute inset-0 block overflow-hidden md:hidden">
            <ZoomOut
              initialScale={1.15}
              duration={1.5}
              once
              className="absolute inset-0 h-full w-full"
            >
              <Image
                src={
                  data.media.files.mobile_file ||
                  data.media.files.desktop_file ||
                  ""
                }
                alt={data.media.alt || data.title || "hero banner image"}
                fill
                priority
                className="object-cover"
              />
            </ZoomOut>
          </div>
        </>
      )}

      {data.media?.type === "video" && (
        <>
          <video
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
            autoPlay
            muted
            loop
            playsInline
            poster={data.media.poster}
          >
            <source src={data.media.files.desktop_file} type="video/mp4" />
          </video>

          <video
            className="absolute inset-0 block h-full w-full object-cover md:hidden"
            autoPlay
            muted
            loop
            playsInline
            poster={data.media.poster}
          >
            <source
              src={
                data.media.files.mobile_file ||
                data.media.files.desktop_file ||
                ""
              }
              type="video/mp4"
            />
          </video>
        </>
      )}

      {showTitle && data.title && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="font-heading text-center text-[36px] leading-[1.1] text-white capitalize md:text-[50px]">
            {data.title}
          </h1>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
