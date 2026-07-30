import React from 'react'
import SectionHeader from '../../ui/SectionHeader'
import Image from 'next/image'

const Project = () => {
    return (
        <section className="w-full h-screen  relative pt-20">
            <div className="container-custom">
                <SectionHeader
                    className="max-w-xl mx-auto text-center"
                    heading="North Wind sanctuary"
                    paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
                    buttonText="Know More"
                    buttonHref='/'
                />
                <div className="absolute w-full bottom-0 left-0 mx-auto">
                    <Image
                        src={"/pages/home/projects/elevation.png"}
                        alt='bgpattern'
                        width={1080}
                        height={800}
                        className='w-full'
                    />
                </div>
            </div>
        </section>
    )
}

export default Project