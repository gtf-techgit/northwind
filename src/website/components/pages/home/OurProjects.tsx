"use client";

import React, { useLayoutEffect, useRef } from 'react'
import SectionHeader from '../../ui/SectionHeader'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const OurProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bgImageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=70%',
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.to(contentRef.current, {
        opacity: 0,
        y: '-100%',
        scale: 0.9,
        ease: 'none',
      }, 0)
        .to(bgImageRef.current, {
          opacity: 0,
          y: '100%',
          ease: 'none',
        }, 0)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full h-screen section-padding flex flex-col justify-center items-center relative">
        <div ref={bgImageRef} className="absolute inset-0 flex justify-center items-center">
            <Image
            src={"/pages/home/projects/bgpattern.png"}
            alt='bgpattern'
            width={400}
            height={400}
            className=''
            />
        </div>
        <div ref={contentRef}>
            <SectionHeader
                className="max-w-3xl mx-auto text-center"
                heading="Our Projects That Inspire Better Living"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since 1966,"
                buttonText="Know More"
            />
        </div>
    </section>
  )
}

export default OurProjects
