import HeroBanner from '@/website/components/common/HeroBanner'
import BlogSection from '@/website/components/pages/blogs/BlogSection'
import { blogItems, blogSectionData, blogsHeroData } from '@/website/lib/data/blogs'

const page = () => {
  return (
      <main>
        <HeroBanner data={blogsHeroData} />
        <BlogSection data={blogSectionData} items={blogItems} />
      </main>
    )
}

export default page