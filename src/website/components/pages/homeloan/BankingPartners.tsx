import Image from 'next/image'
import React from 'react'
import SectionHeader from '../../ui/SectionHeader'
import { BankingPartnersData } from '@/website/types/homeloan'

const BankingPartners = ({data}: { data: BankingPartnersData }) => {
  return (
    <section className="relative w-full section-padding overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
        />

      <div className="marquee-wrapper relative mt-10 w-full overflow-hidden md:mt-16">
       

        <div className=" flex w-max gap-5 md:gap-10 mx-auto">
          {data.logos.map((logo, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center w-48 h-20 md:w-56 md:h-24"
            >
              <Image
                src={logo.image}
                alt={logo.alt}
                width={250}
                height={100}
                priority
                className="h-full w-full object-contain "
              />
            </div>
          ))}
                  </div>
        </div>
      </div>
    </section>
  )
}

export default BankingPartners