'use client'

import { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '../../ui/SectionHeader'
import { HomeBuyingExperienceData } from '@/website/types/nri-corner'
import Rings from '../home/ProjectValues/Rings'

gsap.registerPlugin(ScrollTrigger)
interface CardPosition {
  x: number;
  y: number;
  mobilex: number;
  mobiley: number;
}

export const cardPositions: CardPosition[] = [
  { x: 0, y: -340, mobilex: 0, mobiley: -320 },
  { x: -450, y: -150, mobilex: 0, mobiley: -200 },
  { x: 450, y: -150, mobilex: 0, mobiley: -80 },
  { x: -450, y: 150, mobilex: 0, mobiley: 40 },
  { x: 450, y: 150, mobilex: 0, mobiley: 160 },
  { x: 0, y: 270, mobilex: 0, mobiley: 280 }, 
];

const HomeBuyingExperience = ({ data }: { data: HomeBuyingExperienceData }) => {
  const { heading, paragraph, image, imageAlt, items } = data
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const isMobileView = window.matchMedia('(max-width: 767px)').matches

      cardRefs.current.forEach((card, index) => {
        if (!card) return

        const position = cardPositions[index]
        const targetX = isMobileView ? position.mobilex : position.x
        const targetY = isMobileView ? position.mobiley : position.y

        gsap.set(card, {
          opacity: 0,
          scale: 0.2,
          x: 0,
          y: 0,
        })

        gsap.to(card, {
          opacity: 1,
          scale: 1,
          x: targetX,
          y: targetY,
          duration: 0.9,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full section-padding">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-3xl mx-auto text-center"
          heading={heading}
          paragraph={paragraph}
        />

        <div className="content relative mx-auto mt-7 min-h-205 w-full max-w-7xl  md:min-h-180">
          <div className="absolute left-1/2 top-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="relative flex aspect-square w-55 items-center justify-center md:w-80">
              <Rings/>
              <Image
                src={image}
                alt={imageAlt || heading}
                width={320}
                height={320}
                className="relative z-10 h-auto w-full object-contain"
              />
            </div>
          </div>

          {items.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="absolute left-1/2 top-1/2 z-10 w-55 -translate-x-1/2 -translate-y-1/2 rounded-[22px] bg-accent/15 py-3 md:py-5 px-6 text-center shadow-[0_15px_40px_rgba(0,0,0,0.06)] will-change-transform sm:w-65 md:w-70"
            >
              <h3 className="font-body font-semibold text-primary">
                {item.title}
              </h3>
              <p className="pera mt-1 leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeBuyingExperience
