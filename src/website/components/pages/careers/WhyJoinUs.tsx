import React from 'react'
import Image from 'next/image'
import SectionHeader from '../../ui/SectionHeader'
import { WhyJoinUsData } from '@/website/types/careers'

const WhyJoinUs = ({data}: {data: WhyJoinUsData}) => {
  return (
     <section className="relative w-full section-padding ">

      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
    />

    <div className="content mt-7 md:mt-14 max-w-7xl mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 items-center">
      <div className="relative  w-full overflow-hidden rounded-xl-custom lg:aspect-auto lg:h-full">
        <Image
          src={data.image}
          alt={data.imageAlt || data.heading}
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {data.items.map((item, index) => (
          <div key={index} className="rounded-xl bg-[#eef1de] p-6">
            <h3 className="font-heading text-lg text-primary">
              {item.title}
            </h3>
            <p className="mt-2 pera leading-relaxed text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
      </div>

    </section>
  )
}

export default WhyJoinUs
