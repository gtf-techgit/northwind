import SectionHeader from '../../ui/SectionHeader'
import Image from 'next/image'
import type { OurSpacesData } from '@/website/types/contact'

interface OurSpacesProps {
  data: OurSpacesData
}

const OurSpaces = ({ data }: OurSpacesProps) => {
  const { heading, paragraph, backgroundImage } = data

  return (
   <section className="relative w-full md:min-h-screen section-padding overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-black/55"

      />

      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={heading}
          paragraph={paragraph}
          headingClassName="text-white!"
          paragraphClassName="text-white!"
    />

      </div>
    </section>
  )
}

export default OurSpaces