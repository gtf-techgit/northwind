import HeroBanner from '@/website/components/common/HeroBanner'
import Testimonials from '@/website/components/pages/testimonials/Testimonials'
import { testimonialHeroData, testimonialSectionData, textTestimonialsData, videoTestimonialsData } from '@/website/lib/data/testimonials'

const page = () => {
  return (
      <main>
        <HeroBanner data={testimonialHeroData} />
        <Testimonials data={testimonialSectionData} textData={textTestimonialsData} videoData={videoTestimonialsData} />
      </main>
    )
}

export default page