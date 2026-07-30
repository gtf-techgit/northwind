import Image from 'next/image'
import SectionHeader from '../../ui/SectionHeader'

const Values = () => {
  return (
    <section className="w-full h-screen  relative section-padding">
      <div className="container-custom">
        <SectionHeader
          className="max-w-150 mx-auto text-center"
          heading="Values That Shape Every Space"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
        />

<div className="absolute left-1/2 -translate-x-1/2 bottom-10">
        <Image
          src="/pages/home/values/shape.svg"
          alt="Northwind estate illustration"
          width={400}
          height={500}
          className="object-contain  h-auto mx-auto object-bottom"
        />
        </div>
      </div>
    </section>
  )
}

export default Values