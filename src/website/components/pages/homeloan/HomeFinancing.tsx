import React from 'react'
import Image from 'next/image'
import SectionHeader from '../../ui/SectionHeader'
import { HomeFinancingData } from '@/website/types/homeloan'

const HomeFinancing = ({ data }: { data: HomeFinancingData }) => {
  const { heading, paragraph, cards } = data
  const marqueeCards = [...cards, ...cards]

  return (
    <section className="relative w-full section-padding overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={heading}
          paragraph={paragraph}
        />
      </div>

      <div className="marquee-wrapper relative mt-10 w-full overflow-hidden md:mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent md:w-32" />

        <div className="marquee-content flex w-max gap-5 md:gap-6">
          {marqueeCards.map((card, index) => (
            <div
              key={index}
              className="flex w-[200px] shrink-0 flex-col items-center gap-4 sm:w-[240px] md:w-[270px]"
            >
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md-custom">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 220px, 270px"
                />
              </div>
              <h3 className="text-center font-body text-base text-primary md:text-lg">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeFinancing