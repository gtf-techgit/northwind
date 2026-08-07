import React from 'react'
import SectionHeader from '../../ui/SectionHeader'
import Image from 'next/image';
import { InvestorValuesData } from '@/website/types/investor';
import ZoomOut from '../../ui/ZoomOut';



const Values = ({ data }: { data: InvestorValuesData }) => {
  return (
    <section className="relative w-full section-toppadding ">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
        />

        <div className="content mt-7 md:mt-14 max-w-7xl mx-auto relative overflow-hidden rounded-2xl">
          <ZoomOut>
            <Image alt='' src={data.image} width={600} height={400} className="w-full h-auto rounded-2xl" />
          </ZoomOut>
        </div>
      </div>
    </section>
  )
}

export default Values