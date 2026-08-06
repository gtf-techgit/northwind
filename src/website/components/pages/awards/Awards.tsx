import React from 'react'
import Image from 'next/image'
import SectionHeader from '../../ui/SectionHeader'
import { AwardSectionData } from '@/website/types/awards'

const Awards = ({ data }: { data: AwardSectionData }) => {
  const { heading, paragraph, items } = data

  return (
    <section className="relative w-full section-padding ">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={heading}
          paragraph={paragraph}
        />

        <div className="content mt-7 grid grid-cols-1 gap-6 max-w-7xl mx-auto md:mt-14 md:grid-cols-3 md:gap-8">
          {items.map((item, index) => (
            <div key={index}>
              <div className="flex aspect-square items-center justify-center rounded-xl-custom bg-[#F0F0DB] p-10">
                <Image
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  width={280}
                  height={280}
                  className="h-auto w-full max-w-55 object-contain"
                />
              </div>

              <h3 className="mt-6 font-heading text-xl text-primary md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 font-body pera leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
