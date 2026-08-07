import HeroBanner from '@/website/components/common/HeroBanner'
import GallerySection from '@/website/components/pages/gallery/GallerySection'
import { galleryHeroData, gallerySectionData } from '@/website/lib/data/gallery'

const page = () => {
  return (
      <main>
        <HeroBanner data={galleryHeroData} />
        <GallerySection data={gallerySectionData} />
      </main>
    )
}

export default page