"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";

type Tab = "blogs" | "media";

const blogs = [
  {
    id: 1,
    image: "/pages/home/blogs/1.png",
    title: "Lorem Ipsum is simply dummy text.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  },
  {
    id: 2,
    image: "/pages/home/blogs/2.png",
    title: "Lorem Ipsum is simply dummy text.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  },
  {
    id: 3,
    image: "/pages/home/blogs/3.png",
    title: "Lorem Ipsum is simply dummy text.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  },
];

const media = [
  {
    id: 1,
    image: "/pages/home/blogs/2.png",
    title: "Lorem Ipsum is simply dummy text.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  },
  {
    id: 2,
    image: "/pages/home/blogs/3.png",
    title: "Lorem Ipsum is simply dummy text.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  },
  {
    id: 3,
    image: "/pages/home/blogs/1.png",
    title: "Lorem Ipsum is simply dummy text.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  },
];

const tabs: { id: Tab; label: string }[] = [
  { id: "blogs", label: "Blogs" },
  { id: "media", label: "Media" },
];

const Blogs = () => {
  const [activeTab, setActiveTab] = useState<Tab>("blogs");
  const items = activeTab === "blogs" ? blogs : media;

  return (
    <section className="relative w-full min-h-screen section-toppadding">
      <div className="container-custom">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            className="max-w-lg"
            heading="Explore Our Blogs"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
          />

          <div className="inline-flex shrink-0 items-center gap-1 self-start rounded-full bg-primary/5 p-1 md:self-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer rounded-full font-body px-8 py-3  text-sm tracking-wide transition-colors ${activeTab === tab.id
                    ? "bg-primary text-secondary!"
                    : "text-primary/70 hover:text-primary"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl-custom">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6  text-xl font-semibold font-body text-primary">
                {item.title}
              </h3>
              <p className="mt-3 line-clamp-2 font-body text-sm leading-relaxed text-muted md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-5">
         <Button className="mt-6 font-semibold cursor-pointer">Know More</Button>
         </div>
      </div>
    </section>
  );
};

export default Blogs;
