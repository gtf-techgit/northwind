import React from 'react'
import Image from 'next/image'
import { KeyBenefitsData, KeyBenefitItem } from '@/website/types/common'
import { FiCheckCircle } from 'react-icons/fi'
import {
  IoCreateOutline,
  IoSearchOutline,
  IoLinkOutline,
  IoTrendingUpOutline,
  IoCallOutline,
} from 'react-icons/io5'
import SectionHeader from '../ui/SectionHeader'
import { HiOutlineBuildingOffice } from 'react-icons/hi2'
import { GiHouseKeys } from 'react-icons/gi'
import { PiHandshake } from 'react-icons/pi'

const benefitIcons = {
  register: IoCreateOutline,
  explore: IoSearchOutline,
  connect: IoLinkOutline,
  grow: IoTrendingUpOutline,
  call: IoCallOutline,
  building: HiOutlineBuildingOffice,
  keys: GiHouseKeys,
  handshake: PiHandshake
}

const BenefitItem = ({ item }: { item: KeyBenefitItem }) => {
  const Icon = item.icon ? benefitIcons[item.icon] : null

  return (
    <div className="flex items-center gap-5">
      {Icon ? (
        <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-primary">
          <Icon className="text-primary" size={22} />
        </div>
      ) : (
        <FiCheckCircle className="mt-0.5 shrink-0 text-primary" size={32} />
      )}
      <div>
        <h3 className="font-body font-semibold text-lg text-primary">
          {item.title}
        </h3>
        <p className="mt-1 pera leading-relaxed text-muted">
          {item.description}
        </p>
      </div>
    </div>
  )
}

const KeyBenefits = ({ data }: { data: KeyBenefitsData }) => {
  const { heading, paragraph, image, imageAlt, items } = data

  return (
    <section className="relative w-full section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-12 items-stretch gap-10  lg:gap-16">
          <div className="relative w-full min-h-75 overflow-hidden rounded-lg-custom col-span-5">
            <Image
              src={image}
              alt={imageAlt || heading}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className='col-span-7'>
            <SectionHeader
          className="max-w-xl "
          heading={heading}
          paragraph={paragraph}
    />

            <div className="mt-10 space-y-12">
              {items.map((item, index) => (
                <BenefitItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyBenefits
