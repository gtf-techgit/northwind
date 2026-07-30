import Awards from '@/website/components/pages/home/Awards'
import Blogs from '@/website/components/pages/home/Blogs'
import Contact from '@/website/components/pages/home/Contact'
import HeroSection from '@/website/components/pages/home/HeroSection'
import Instagram from '@/website/components/pages/home/Instagram'
import OurPresence from '@/website/components/pages/home/OurPresence'
import OurProjects from '@/website/components/pages/home/OurProjects'
import Overview from '@/website/components/pages/home/Overview'
import ProjectValuesSequence from '@/website/components/pages/home/ProjectValues/ProjectValuesSequence'
import Testimonials from '@/website/components/pages/home/Testimonials'
import { heroSectionData, overviewData, ourProjectsData, projectValuesData,ourPresenceData,awardsData,testimonialsData,blogsData,instagramData,contactData,} from '@/website/lib/data/home'

const page = () => {
  return (
    <main>
      <HeroSection data={heroSectionData}/>
      <Overview data={overviewData}/>
      <OurProjects data={ourProjectsData}/>
      <ProjectValuesSequence data={projectValuesData}/>
      <OurPresence data={ourPresenceData}/>
      <Awards data={awardsData}/>
      <Testimonials data={testimonialsData}/>
      <Blogs data={blogsData}/>
      <Instagram data={instagramData}/>
      <Contact data={contactData}/>
    </main>
  )
}

export default page