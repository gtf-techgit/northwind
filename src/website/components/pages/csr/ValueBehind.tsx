import Image from 'next/image'
import { PiSolarPanel } from 'react-icons/pi'
import SectionHeader from '../../ui/SectionHeader'
import { ValueBehindData, ValueBehindItem } from '@/website/types/csr'

const ValueCard = ({ item }: { item: ValueBehindItem }) => (
  <div className="rounded-xl-custom bg-accent/15 p-6 md:p-8">
    <div className="flex h-10 w-10 items-center justify-center">
      <PiSolarPanel className="text-primary" size={28} />
    </div>

    <h3 className="mt-5 font-heading text-xl text-primary">{item.title}</h3>

    <p className="mt-2 pera leading-relaxed text-muted">{item.description}</p>
  </div>
)

const ValueBehind = ({ data }: { data: ValueBehindData }) => {
  const { heading, paragraph, items, image, imageAlt } = data
  const [left, right] = [items.slice(0, 2), items.slice(2, 4)]

  return (
    <section className="relative w-full section-toppadding">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={heading}
          paragraph={paragraph}
        />

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:mt-14 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-1">
            {left.map((item, index) => (
              <ValueCard key={item.title + index} item={item} />
            ))}
          </div>

          <div className="relative aspect-square w-full overflow-hidden rounded-xl-custom lg:h-full lg:aspect-auto">
            <Image src={image} alt={imageAlt || heading} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-1">
            {right.map((item, index) => (
              <ValueCard key={item.title + index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueBehind