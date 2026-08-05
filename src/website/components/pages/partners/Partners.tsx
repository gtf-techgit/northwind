import React from 'react'
import SectionHeader from '../../ui/SectionHeader'
import { PartnersData } from '@/website/types/partners';
import Image from 'next/image';

const Partners = ({ data }: { data: PartnersData }) => {
    const { heading, paragraph, logos } = data;

    return (
        <section className="relative w-full  section-padding ">

            <div className="container-custom relative z-10">
                <SectionHeader
                    className="max-w-3xl mx-auto text-center"
                    heading={heading}
                    paragraph={paragraph}
                />

                <div className="content mt-7 md:mt-14">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {logos.map((logo, index) => (
                            <div className="partner-logo  py-14" key={index}>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={200}
                                    height={100}
                                    className='mx-auto '
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Partners