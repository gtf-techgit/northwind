"use client";

import { useState } from "react";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { JobItem, JoinTeamData } from "@/website/types/careers";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";
import JobDetailsModal from "./JobDetailsModal";

interface JoinTeamProps {
  data: JoinTeamData;
  onApply?: (position: string) => void;
}

const DESCRIPTION_WORD_LIMIT = 20;

const previewDescription = (text: string, limit: number) => {
  const words = text.trim().split(/\s+/);
  if (words.length <= limit) {
    return { preview: text, hasMore: false };
  }
  return { preview: `${words.slice(0, limit).join(" ")}...`, hasMore: true };
};

const JoinTeam = ({ data, onApply }: JoinTeamProps) => {
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);

  return (
    <section className="relative w-full ">
      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
        />

        <div className="content mt-7 md:mt-14 rounded-3xl bg-[#eef1de] p-6 md:p-12">
          {data.jobs.map((job, index) => {
            const { preview, hasMore } = previewDescription(
              job.description,
              DESCRIPTION_WORD_LIMIT
            );

            return (
              <div
                key={index}
                className={index === 0 ? "" : "mt-6 border-t border-primary/10 pt-6"}
              >
                <h3 className="font-body font-semibold text-lg md:text-xl text-primary">{job.title}</h3>

                <p className="mt-3 pera leading-relaxed text-muted">
                  {preview}
                  {hasMore && (
                    <>
                      {" "}
                      <button
                        type="button"
                        onClick={() => setSelectedJob(job)}
                        className="cursor-pointer font-body font-semibold text-primary hover:underline"
                      >
                        Read More
                      </button>
                    </>
                  )}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#dfe4c8] px-4 py-2.5 font-body text-sm text-primary">
                      <FiBriefcase size={14} />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#dfe4c8] px-4 py-2.5 font-body text-sm text-primary">
                      <FiMapPin size={14} />
                      {job.location}
                    </span>
                  </div>

                  <Button
                    type="button"
                    onClick={() => onApply?.(job.title)}
                    className="cursor-pointer font-body"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <JobDetailsModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        onApply={onApply}
      />
    </section>
  );
};

export default JoinTeam;
