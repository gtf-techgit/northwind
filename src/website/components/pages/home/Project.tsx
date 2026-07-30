// "use client";

// import React, { useLayoutEffect, useRef } from 'react'
// import SectionHeader from '../../ui/SectionHeader'
// import Image from 'next/image'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const Project = () => {
//     const sectionRef = useRef<HTMLDivElement>(null)
//     const contentRef = useRef<HTMLDivElement>(null)
//     const imageRef = useRef<HTMLDivElement>(null)

//     useLayoutEffect(() => {
//         const ctx = gsap.context(() => {
//             gsap.set(contentRef.current, { opacity: 0, y: 60 })
//             gsap.set(imageRef.current, { opacity: 0, y: 120 })

//             gsap.timeline({
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: 'top bottom',
//                     end: 'top top',
//                     scrub: true,
//                 },
//             })
//                 .to(contentRef.current, { opacity: 1, y: 0, ease: 'none' }, 0)
//                 .to(imageRef.current, { opacity: 1, y: 0, ease: 'none' }, 0)

// gsap.timeline({
//   scrollTrigger: {
//     trigger: sectionRef.current,
//     start: "top top",
//     end: "+=70%",
//     pin: true,
//     scrub: true,
//     anticipatePin: 1,
//     invalidateOnRefresh: true,
//   },
// })
// .to(
//   contentRef.current,
//   {
//     opacity: 0,
//     y: "-100%",
//     scale: 0.9,
//     ease: "none",
//   },
//   0
// )
// .to(
//   imageRef.current,
//   {
//     y: "100%",
//     opacity: 0,
//     ease: "none",
//   },
//   0
// );
//         }, sectionRef)

//         return () => ctx.revert()
//     }, [])

//     return (
//         <section ref={sectionRef} className="w-full h-screen  relative pt-20">
//             <div className="container-custom">
//                 <div ref={contentRef}>
//                     <SectionHeader
//                         className="max-w-xl mx-auto text-center"
//                         heading="North Wind sanctuary"
//                         paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
//                         buttonText="Know More"
//                         buttonHref='/'
//                     />
//                 </div>
//                 <div ref={imageRef} className="absolute w-full bottom-0 left-0 mx-auto">
//                     <Image
//                         src={"/pages/home/projects/elevation.png"}
//                         alt='bgpattern'
//                         width={1080}
//                         height={800}
//                         className='w-full'
//                     />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Project


"use client";

import React, { useLayoutEffect, useRef } from "react";
import SectionHeader from "../../ui/SectionHeader";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial State
      gsap.set(contentRef.current, {
        opacity: 0,
        y: 80,
      });

      gsap.set(imageRef.current, {
        opacity: 0,
        y: 140,
      });

      // Entrance Animation
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "none",
          },
          0
        )
        .to(
          imageRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "none",
          },
          0.15
        );

      // Exit Animation
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=80%",
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
        .to(
          contentRef.current,
          {
            yPercent: -120,
            scale: 0.92,
            opacity: 0,
            ease: "none",
          },
          0
        )
        .to(
          imageRef.current,
          {
            yPercent: 120,
            opacity: 0,
            ease: "none",
          },
          0
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden pt-20"
    >
      <div className="container-custom relative h-full">
        {/* Heading */}
        <div ref={contentRef}>
          <SectionHeader
            className="mx-auto max-w-xl text-center"
            heading="North Wind sanctuary"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
            buttonText="Know More"
            buttonHref="/"
          />
        </div>

        {/* Building */}
        <div
          ref={imageRef}
          className="absolute bottom-0 left-1/2 w-full -translate-x-1/2"
        >
          <Image
            src="/pages/home/projects/elevation.png"
            alt="Elevation"
            width={1920}
            height={900}
            priority
            className="mx-auto w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;