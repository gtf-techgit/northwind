import Image from "next/image";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";
import type { ContactData } from "@/website/types/home";

interface ContactProps {
  data: ContactData;
}

const Contact = ({ data }: ContactProps) => {
  return (
    <section className="relative w-full md:min-h-screen section-padding overflow-hidden">
      <Image
        src={data.bgImage}
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(172, 199, 140, 0.01)",
          backdropFilter: "blur(12px)",
        }}
      />

      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
          headingClassName="text-secondary!"
          paragraphClassName="text-accent!"
        />

        <form className="mx-auto mt-12 max-w-3xl space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name*"
              required
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-body pera text-white placeholder-[#adc88d] transition-colors focus:border-secondary/60 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone No.*"
              required
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-body text-sm text-white placeholder-[#adc88d] transition-colors focus:border-secondary/60 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Add.*"
              required
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-body text-sm text-white placeholder-[#adc88d] transition-colors focus:border-secondary/60 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Location*"
              required
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-body text-sm text-white placeholder-[#adc88d] transition-colors focus:border-secondary/60 focus:outline-none"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full resize-none rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-body text-sm text-white placeholder-[#adc88d] transition-colors focus:border-secondary/60 focus:outline-none"
          />

          <label className="flex cursor-pointer items-center gap-3 font-body text-xs text-white/70 select-none">
            <input
              type="checkbox"
              required
              className="h-4 w-4 cursor-pointer rounded-sm border border-white/30 bg-white/5 accent-secondary"
            />
            I accept the privacy policy and terms of use
          </label>

          <Button type="submit" variant="contact" className="w-full font-body cursor-pointer">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
