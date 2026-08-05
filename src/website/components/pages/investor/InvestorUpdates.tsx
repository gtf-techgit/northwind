"use client"

import { useState } from 'react'
import SectionHeader from '../../ui/SectionHeader'
import Button from '../../ui/Button'
import { InvestorUpdatesData } from '@/website/types/investor'
import { IoDownloadOutline } from 'react-icons/io5'

const PAGE_SIZE = 4

const InvestorUpdates = ({ data }: { data: InvestorUpdatesData }) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visibleItems = data.items.slice(0, visibleCount)
  const hasMore = visibleCount < data.items.length

  return (
    <section className="relative w-full section-padding ">

      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
        />

        <div className="content mt-7 md:mt-14 max-w-7xl mx-auto">
          <div className="">
            {visibleItems.map((item, index) => (
              <div
                key={item.title + index}
                className="group flex flex-col gap-4 border-b border-primary py-7 md:flex-row md:items-center md:justify-between md:gap-6 md:px-6 -mx-6 transition-colors duration-300 hover:bg-linear-to-t hover:from-secondary/10 hover:via-secondary/5 hover:to-transparent"
              >
                <h3 className="font-heading text-xl leading-snug text-primary md:text-2xl lg:text-[28px]">
                  {item.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 md:gap-8">
                  <span
                    className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-body whitespace-nowrap ${
                      item.isNew
                        ? "bg-primary text-white"
                        : "border border-border text-primary"
                    }`}
                  >
                    {item.tag}
                  </span>

                  <div className="flex flex-col text-sm">
                    <span className="text-muted text-xs">Date</span>
                    <span className="font-medium text-primary">{item.date}</span>
                  </div>

                  <a
                    href={item.fileUrl}
                    download
                    aria-label={`Download ${item.title}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors duration-300 hover:bg-primary/90"
                  >
                    <IoDownloadOutline size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="mt-10 flex justify-center md:mt-14">
              <Button onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
                Load More
              </Button>
            </div>
          )}
        </div>
      </div>

    </section>
  )
}

export default InvestorUpdates
