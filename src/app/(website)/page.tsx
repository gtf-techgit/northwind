import Awards from '@/website/components/pages/home/Awards'
import Blogs from '@/website/components/pages/home/Blogs'
import Contact from '@/website/components/pages/home/Contact'
import HeroSection from '@/website/components/pages/home/HeroSection'
import Instagram from '@/website/components/pages/home/Instagram'
import OurPresence from '@/website/components/pages/home/OurPresence'
import OurProjects from '@/website/components/pages/home/OurProjects'
import Overview from '@/website/components/pages/home/Overview'
import Project from '@/website/components/pages/home/Project'
import Testimonials from '@/website/components/pages/home/Testimonials'
import Values from '@/website/components/pages/home/Values'

const page = () => {
  return (
    <main>
      <HeroSection/>
      <Overview/>
      <OurProjects/>
      <Project/>
      <Values/>
      <OurPresence/>
      <Awards/>
      <Testimonials/>
      <Blogs/>
      <Instagram/>
      <Contact/>
    </main>
  )
}

export default page