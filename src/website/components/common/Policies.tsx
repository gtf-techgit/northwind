import React from 'react'
import Heading from '../ui/Heading'
import { marked } from 'marked'
import type { PolicyData } from '@/website/types/common'
import SlideIn from '../ui/SlideIn'

interface PoliciesProps {
    data: PolicyData
}

const Policies = ({ data }: PoliciesProps) => {
    return (
        <section className="w-full  section-padding">
            <div className="container-custom">
                <div className="headings text-center">
                    <SlideIn>
                        <Heading>
                            {data.heading}
                        </Heading>
                    </SlideIn>
                </div>

                <div className="content mx-auto mt-10 md:mt-14 md:max-w-5xl">
                    <div className="policies-content space-y-5 text-center ">
                        <div
                            className="page-data-content"
                            dangerouslySetInnerHTML={{
                                __html: marked.parse(data?.content || "") as string,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Policies