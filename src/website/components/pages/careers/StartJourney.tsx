"use client";

import { useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";
import { StartJourneyData } from "@/website/types/careers";

const inputClass =
  "w-full rounded-full border border-[#0D382929] bg-[#F0F0DB] px-6 py-4 font-body text-sm text-primary placeholder:text-primary/60 outline-none transition-colors focus:border-primary/30";

const StartJourney = ({ data }: { data: StartJourneyData }) => {
  const [fileName, setFileName] = useState("");

  return (
    <section className="relative w-full section-padding">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
        />

        <form className="content mt-10 md:mt-14 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              required
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No.*"
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Add.*"
              required
              className={inputClass}
            />
            <input
              type="text"
              name="location"
              placeholder="Location*"
              required
              className={inputClass}
            />
            <input
              type="text"
              name="position"
              placeholder="Position Applying For *"
              required
              className={inputClass}
            />

            <label className={`${inputClass} flex cursor-pointer items-center justify-between`}>
              <span className={fileName ? "text-primary" : "text-primary/60"}>
                {fileName || "Attach Your Resume *"}
              </span>
              <FiPaperclip className="shrink-0 text-primary" size={18} />
              <input
                type="file"
                name="resume"
                required
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
              />
            </label>
          </div>

          <label className="mt-8 flex items-center gap-2 font-body text-sm text-primary">
            <input
              type="checkbox"
              name="acceptPolicy"
              required
              className="h-4 w-4 rounded border-primary/30 accent-primary"
            />
            I accept the privacy policy and terms of use
          </label>

          <Button type="submit" className="mt-8 w-full cursor-pointer font-body">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default StartJourney;
