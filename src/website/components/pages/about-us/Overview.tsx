"use client";

import Image from "next/image";
import Heading from "@/website/components/ui/Heading";
import Paragraph from "@/website/components/ui/Paragraph";
import ScaleIn from "@/website/components/ui/ScaleIn";
import Ticker from "@/website/components/ui/Ticker";
import type { OverViewProps } from "@/website/types/aboutUs";

interface OverviewProps {
  data: OverViewProps;
}

const parseStatValue = (val: string) => {
  const match = val.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: val };
  return { number: Number(match[1]), suffix: match[2] };
};

const Overview = ({ data }: OverviewProps) => {
  const imageSrc =
    data.files?.desktop_file ||
    data.files?.mobile_file ||
    "/pages/about-us/hero.webp";

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-between ">
            <div className="">
              {data.title?.heading && (
                <Heading className="max-w-xl font-heading leading-tight text-primary 2xl:text-5xl lg:max-w-[50%]">
                  {data.title.heading}
                </Heading>
              )}

              {data.description?.desc && (
                <Paragraph className="mt-6 md:mt-12 max-w-xl text-muted leading-relaxed 2xl:text-2xl">
                  {data.description.desc}
                </Paragraph>
              )}
            </div>

            {/* Stats Row */}
            {data.listing && data.listing.length > 0 && (
              <div className="mt-12 md:mt-22 grid grid-cols-3 divide-x divide-border/30">
                {data.listing.map((item: any, index: number) => {
                  const { number, suffix } = parseStatValue(item.key);
                  const isNumeric = !isNaN(number) && number > 0;

                  return (
                    <div
                      key={index}
                      className="px-3 md:px-6 first:pl-0 last:pr-0 flex flex-col justify-start"
                    >
                      {isNumeric ? (
                        <Ticker
                          value={number}
                          suffix={suffix}
                          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary !justify-start"
                        />
                      ) : (
                        <span className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary leading-none">
                          {item.key}
                        </span>
                      )}

                      {item.value && (
                        <p className="mt-2 text-xs md:text-sm font-medium text-muted font-body leading-snug">
                          {item.value}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <ScaleIn delay={0.1} duration={1.2} amount={0.2}>
              <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full overflow-hidden rounded-[24px] md:rounded-[32px] lg:rounded-[36px] shadow-sm">
                <Image
                  src={imageSrc}
                  alt={data.title?.heading || "North Wind Estates Overview"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
