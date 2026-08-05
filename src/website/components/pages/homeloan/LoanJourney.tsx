import React from 'react'
import Image from 'next/image'
import {
  IoListOutline,
  IoHandLeftOutline,
  IoDocumentTextOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5'
import SectionHeader from '../../ui/SectionHeader'
import { LoanJourneyData, LoanJourneyStep } from '@/website/types/homeloan';

const stepIcons = {
  list: IoListOutline,
  hand: IoHandLeftOutline,
  document: IoDocumentTextOutline,
  check: IoCheckmarkCircleOutline,
};

const StepItem = ({ step }: { step: LoanJourneyStep }) => {
  const Icon = stepIcons[step.icon];

  return (
    <div className="flex  items-center gap-4 text-left">
      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-primary">
        <Icon className="text-primary" size={22} />
      </div>
      <div>
        <h3 className="font-body font-semibold text-lg text-primary">{step.title}</h3>
        <p className="mt-2 font-body pera leading-relaxed text-muted">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const LoanJourney = ({ data }: { data: LoanJourneyData }) => {
  const { heading, paragraph, image, steps } = data;
  const [leftSteps, rightSteps] = [steps.slice(0, 2), steps.slice(2, 4)];

  return (
   <section className="relative w-full section-padding overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={heading}
          paragraph={paragraph}
        />

        <div className="mt-12 md:mt-16 md:max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-10 lg:hidden">
            <div className="relative aspect-16/10 w-full max-w-2xl overflow-hidden rounded-lg-custom">
              <Image
                src={image}
                alt={heading}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="grid w-full grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8">
              {steps.map((step, index) => (
                <StepItem key={index} step={step} />
              ))}
            </div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-[1fr_1.4fr_1fr] lg:items-center lg:gap-8">
            <div className="flex h-full flex-col justify-between py-4">
              {leftSteps.map((step, index) => (
                <StepItem key={index} step={step} />
              ))}
            </div>

            <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg-custom">
              <Image
                src={image}
                alt={heading}
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>

            <div className="flex h-full flex-col justify-between py-4">
              {rightSteps.map((step, index) => (
                <StepItem key={index} step={step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoanJourney
