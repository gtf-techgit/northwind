'use client'

import React from 'react'
import Image from 'next/image'
import SectionHeader from '../../ui/SectionHeader'
import { useIsMobile } from '../../ui/useIsMobile'
import { cardPositions } from '../home/ProjectValues/ValueCards'
import { HomeBuyingExperienceData } from '@/website/types/nri-corner'

const HomeBuyingExperience = ({ data }: { data: HomeBuyingExperienceData }) => {
  const { heading, paragraph, image, imageAlt, items } = data
  const isMobile = useIsMobile()

  return (
    <section className="relative w-full section-padding">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-3xl mx-auto text-center"
          heading={heading}
          paragraph={paragraph}
        />

        <div className="content relative mx-auto mt-7 min-h-205 w-full max-w-7xl md:mt-14 md:min-h-190">
          <div className="absolute left-1/2 top-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="relative flex aspect-square w-55 items-center justify-center md:w-80">
              <div className="absolute inset-0 rounded-full border border-primary/5" />
              <div className="absolute inset-[10%] rounded-full border border-primary/5" />
              <div className="absolute inset-[20%] rounded-full border border-primary/5" />
              <div className="absolute inset-[30%] rounded-full border border-primary/5" />
              <Image
                src={image}
                alt={imageAlt || heading}
                width={320}
                height={320}
                className="relative z-10 h-auto w-[80%] object-contain"
              />
            </div>
          </div>

          {items.map((item, index) => {
            const position = cardPositions[index]
            const x = isMobile ? position.mobilex : position.x
            const y = isMobile ? position.mobiley : position.y

            return (
              <div
                key={item.title}
                className="absolute left-1/2 top-1/2 z-10 w-55 rounded-[28px] bg-accent/15 px-6 py-6 text-center shadow-[0_15px_40px_rgba(0,0,0,0.06)] sm:w-65 md:w-70"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
              >
                <h3 className="font-body font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="pera mt-1 leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeBuyingExperience
