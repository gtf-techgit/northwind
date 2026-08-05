import SectionHeader from '../../ui/SectionHeader'
import type { FindUsData } from '@/website/types/contact'

interface FindUsProps {
  data: FindUsData
}

const FindUs = ({ data }: FindUsProps) => {
  const { heading, paragraph, mapEmbedSrc } = data

  return (
    <section className="relative w-full md:min-h-screen section-padding ">

      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={heading}
          paragraph={paragraph}
    />
      </div>

    <div className="content mt-7 md:mt-14">
        <iframe src={mapEmbedSrc} width="100%" height="600" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>

    </section>
  )
}

export default FindUs