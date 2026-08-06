import { TestimonialItem } from "@/website/types/testimonials";
import Marquee from "../../ui/Marquee";
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from "next/image";

const TestimonialCard = ({ name, role, message, image }: TestimonialItem) => (
  <div className="relative w-70 shrink-0 rounded-3xl  bg-[#F0F0DB] px-6 py-7 md:w-100 md:px-7 md:py-12">
    <RiDoubleQuotesL className="absolute right-6 top-6 text-3xl text-primary/10 md:text-5xl" />

    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Image src={image} alt="avatar" width={40} height={40} className="rounded-full w-12 h-12 object-cover" />
      </span>
      <div>
        <h4 className="font-body text-[15px] font-semibold leading-tight text-primary">
          {name}
        </h4>
        <p className="mt-1 text-xs ">{role}</p>
      </div>
    </div>

    <p className="mt-5 font-body text-[13px] leading-relaxed text-secondary">
      {message}
    </p>
  </div>
);

const TextTestimonials = ({ data }: { data: TestimonialItem[] }) => {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent md:w-32" />
      <Marquee
        items={data}
        direction="left"
        renderItem={(item, index) => (
          <TestimonialCard key={`row1-${item.id}-${index}`} {...item} />
        )}
      />
      <Marquee
        items={data}
        direction="right"
        offset
        className="mt-6 md:mt-8"
        renderItem={(item, index) => (
          <TestimonialCard key={`row2-${item.id}-${index}`} {...item} />
        )}
      />
    </div>
  );
};

export default TextTestimonials;
