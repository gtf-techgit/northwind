import React from 'react'
import SectionHeader from '../../ui/SectionHeader'
import Image from 'next/image'

const OurProjects = () => {
  return (
    <section className="w-full h-screen section-padding flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 flex justify-center items-center">
            <Image
            src={"/pages/home/projects/bgpattern.png"}
            alt='bgpattern'
            width={400}
            height={400}
            className=''
            />
        </div>
        <SectionHeader
            className="max-w-3xl mx-auto text-center"
            heading="Our Projects That Inspire Better Living"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since 1966,"
            buttonText="Know More"
        />
    </section>
  )
}

export default OurProjects
