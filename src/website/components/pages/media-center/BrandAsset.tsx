import React from 'react'
import Image from 'next/image'
import SectionHeader from '../../ui/SectionHeader'
import { BrandAssetData } from '@/website/types/media-center'
import { IoDownloadOutline } from 'react-icons/io5'

const BrandAsset = ({ data }: { data: BrandAssetData }) => {
  return (
     <section className="relative w-full section-padding ">

      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
    />

    <div className="content mt-7 md:mt-14 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {data.logos.map((logo) => (
          <div
            key={logo.id}
            className={`flex flex-col items-center justify-between rounded-lg-custom p-8 md:p-12 min-h-70 md:min-h-85 ${
              logo.theme === "dark" ? "bg-primary" : "bg-primary/5"
            }`}
          >
            <div className="relative flex w-full flex-1 items-center justify-center">
              <Image
                src={logo.image}
                alt={logo.alt}
                width={280}
                height={80}
                className="h-auto w-45 md:w-60 object-contain"
              />
            </div>

            <div
              className={`flex items-center gap-3 md:gap-4 font-body text-sm ${
                logo.theme === "dark" ? "text-white" : "text-primary"
              }`}
            >
              {logo.files.map((file, index) => (
                <React.Fragment key={file.label}>
                  {index > 0 && (
                    <span className={logo.theme === "dark" ? "text-white/30" : "text-primary/20"}>
                      |
                    </span>
                  )}
                  <a
                    href={file.url}
                    download
                    aria-label={`Download ${logo.alt} as ${file.label}`}
                    className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
                  >
                    <IoDownloadOutline size={16} />
                    {file.label}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>

    </section>
  )
}

export default BrandAsset
