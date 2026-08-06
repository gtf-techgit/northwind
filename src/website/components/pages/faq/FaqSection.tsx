"use client";

import { useState } from 'react'
import SectionHeader from '../../ui/SectionHeader'
import FaqItem from './FaqItem'
import { FaqSectionData } from '@/website/types/faq'

const FaqSection = ({ data }: { data: FaqSectionData }) => {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section className="relative w-full section-padding ">

            <div className="container-custom relative z-10">
                <SectionHeader
                    className="max-w-2xl mx-auto text-center"
                    heading={data.heading}
                    paragraph={data.paragraph}
                />

                <div className="content mt-7 md:mt-14 max-w-7xl mx-auto">
                    <div className="rounded-xl-custom bg-[#eef0dc] p-8 md:p-14">
                        <div className="divide-y divide-border">
                            {data.faqs.map((faq, index) => (
                                <FaqItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onToggle={() =>
                                        setOpenIndex((prev) => (prev === index ? -1 : index))
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FaqSection
