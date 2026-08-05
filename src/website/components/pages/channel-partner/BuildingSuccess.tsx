import React from 'react'
import Image from 'next/image'
import SectionHeader from '../../ui/SectionHeader'
import { BuildingSuccessData, BuildingSuccessItem } from '@/website/types/channel-partner'
import {
  IoBusinessOutline,
  IoShareSocialOutline,
  IoHeadsetOutline,
  IoSyncOutline,
  IoBarChartOutline,
  IoTrendingUpOutline,
} from 'react-icons/io5'

const successIcons = {
  quality: IoBusinessOutline,
  marketing: IoShareSocialOutline,
  support: IoHeadsetOutline,
  process: IoSyncOutline,
  insights: IoBarChartOutline,
  growth: IoTrendingUpOutline,
}

const SuccessCard = ({ item, className = '' }: { item: BuildingSuccessItem; className?: string }) => {
  const Icon = successIcons[item.icon]

  return (
    <div className={`rounded-xl-custom bg-[#eef1de] py-6 px-5 w-fit text-center ${className}`}>
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <Icon className="text-white" size={22} />
      </div>
<div className="max-w-50 mx-auto">
      <h3 className="mt-4 font-heading text-lg text-primary">
        {item.title}
      </h3>
      <p className="mt-2 pera leading-relaxed text-muted">
        {item.description}
      </p>
</div>
    </div>
  )
}

const BuildingSuccess = ({ data }: { data: BuildingSuccessData }) => {
  const { heading, paragraph, image, imageAlt, items } = data
  const leftItems = items.filter((_, index) => index % 2 === 0)
  const rightItems = items.filter((_, index) => index % 2 !== 0)

  return (
    <section className="relative w-full section-padding">
          <div  className="absolute inset-0 flex justify-center z-0 items-center">
                            <Image
                            src="/images/common/logo-pattern.png"
                            alt='bgpattern'
                            width={500}
                            height={500}
                            className='mt-40'
                            />
                        </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-4xl mx-auto text-center"
          heading={heading}
          paragraph={paragraph}
        />

        <div className="content mt-10 grid grid-cols-1 items-center gap-6 md:mt-14 lg:grid-cols-3 lg:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {leftItems.map((item, index) => (
              <SuccessCard
                key={index}
                item={item}
                className={index === 1 ? 'lg:translate-x-12 xl:translate-x-24' : ''}
              />
            ))}
          </div>

          <div className="relative order-first aspect-4/3 w-full overflow-hidden rounded-xl-custom lg:order-0 lg:aspect-auto lg:h-140">
            <Image
              src={image}
              alt={imageAlt || heading}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {rightItems.map((item, index) => (
              <SuccessCard
                key={index}
                item={item}
                className={index !== 1 ? 'lg:translate-x-12 xl:translate-x-24' : ''}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildingSuccess
