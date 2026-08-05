import HeroBanner from '@/website/components/common/HeroBanner'

const page = () => {
  return (
    <main>
        <HeroBanner data={{
            title: "Disclaimer",
            media: {
                type: "image",
                desktop: "/pages/policies/disclaimer.jpg",
                mobile: "/pages/policies/disclaimer.jpg",
                alt: "Disclaimer"
            }
        }} />
    </main>
  )
}

export default page