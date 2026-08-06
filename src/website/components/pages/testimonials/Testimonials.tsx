"use client";

import { useState } from "react";
import SectionHeader from "../../ui/SectionHeader";
import TextTestimonials from "./TextTestimonials";
import VideoTestimonials from "./VideoTestimonials";
import {
  TestimonialItem,
  TestimonialSectionData,
  VideoTestimonialItem,
} from "@/website/types/testimonials";

type TabKey = "text" | "video";

interface TestimonialsProps {
  data: TestimonialSectionData;
  textData: TestimonialItem[];
  videoData: VideoTestimonialItem[];
}

const Testimonials = ({ data, textData, videoData }: TestimonialsProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>("text");

  return (
    <section className="relative w-full section-padding overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
        />

        <div className="mt-8 flex justify-center md:mt-10">
          <div className="inline-flex items-center gap-1 rounded-full border border-primary/10 bg-[#0D38290D] ">
            <button
              type="button"
              onClick={() => setActiveTab("text")}
              className={`cursor-pointer rounded-full px-6 py-2.5 font-body text-sm tracking-wide transition-colors ${
                activeTab === "text"
                  ? "bg-primary text-secondary!"
                  : "text-primary/70 hover:text-primary"
              }`}
            >
              Text Testimonials
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("video")}
              className={`cursor-pointer rounded-full px-6 py-2.5 font-body text-sm tracking-wide transition-colors ${
                activeTab === "video"
                  ? "bg-primary text-secondary!"
                  : "text-primary/70 hover:text-primary"
              }`}
            >
              Video Testimonials
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-16">
        {activeTab === "text" ? (
          <TextTestimonials data={textData} />
        ) : (
          <VideoTestimonials data={videoData} />
        )}
      </div>
    </section>
  );
};

export default Testimonials;
