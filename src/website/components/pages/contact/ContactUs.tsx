import Image from "next/image";
import SectionHeader from "../../ui/SectionHeader";
import SocialLinks from "../../common/SocialLinks";
import type { ContactInfoItem, ContactUsData } from "@/website/types/contact";
import ZoomOut from "../../ui/ZoomOut";

interface ContactUsProps {
  data: ContactUsData;
}

const InfoBlock = ({ icon: Icon, label, lines }: ContactInfoItem) => (
  <div>
    <div className="flex items-center gap-2 text-primary">
      <Icon size={20} />
      <span className="font-body text-base md:text-lg">{label}</span>
    </div>
    <div className="mt-3 font-body text-lg font-semibold leading-relaxed text-primary md:text-xl">
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  </div>
);

const ContactUs = ({ data }: ContactUsProps) => {
  const { heading, paragraph, image, infoLeft, infoRight } = data;

  return (
    <section className="relative w-full section-padding">
      <div className="absolute inset-0 flex justify-center z-0 items-center">
        <ZoomOut>
          <Image
            src={image.bgpattern}
            alt='bgpattern'
            width={500}
            height={500}
            className='mt-40'
          />
        </ZoomOut>
      </div>
      <div className="container-custom">
        <SectionHeader
          className="mx-auto max-w-150 text-center"
          heading={heading}
          paragraph={paragraph}
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-14 md:grid-cols-3 md:gap-8 max-w-7xl mx-auto">
          <div className="order-2 flex flex-col gap-12 text-center md:order-1 md:text-left">
            {infoLeft.map((item) => (
              <InfoBlock key={item.label} {...item} />
            ))}
          </div>

          <div className="order-1 flex justify-center md:order-2 w-full z-20">
            <div className="overflow-hidden rounded-xl-custom max-w-[320px] md:max-w-95 w-full">
              <ZoomOut className="w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={420}
                  height={534}
                  className="h-full w-full z-1 object-cover"
                />
              </ZoomOut>
            </div>
          </div>

          <div className="order-3 flex flex-col items-end  gap-12 text-center md:text-left">
            {infoRight.map((item) => (
              <InfoBlock key={item.label} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
