"use client";

import { useState } from "react";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { JobItem, JoinTeamData } from "@/website/types/careers";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";
import JobDetailsModal from "./JobDetailsModal";
import CustomModal from "../../common/CustomModal";

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

  const closeModal = () => {
    setSelectedJob(null);
  };

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

      <CustomModal
        open={!!selectedJob}
        onClose={closeModal}
        className="max-w-2xl p-6 md:p-10"
      >
        {selectedJob && (
          <>
            <h3 className="pr-10 font-heading text-xl leading-snug text-primary md:text-2xl">
              {selectedJob.title}
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#dfe4c8] px-4 py-2.5 font-body text-sm text-primary">
                <FiMapPin size={14} />
                {selectedJob.location}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-[#dfe4c8] px-4 py-2.5 font-body text-sm text-primary">
                <FiBriefcase size={14} />
                {selectedJob.type}
              </span>
            </div>

            <div className="mt-6 border-t border-primary/10 pt-6">
              {selectedJob.preferredBackground?.length ||
                selectedJob.whatWeOffer?.length ? (
                <div className="space-y-6">
                  {!!selectedJob.preferredBackground?.length && (
                    <div>
                      <h4 className="font-body text-base text-muted">
                        Preferred Background
                      </h4>

                      <ul className="mt-3 space-y-2.5">
                        {selectedJob.preferredBackground.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 font-body text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {!!selectedJob.whatWeOffer?.length && (
                    <div>
                      <h4 className="font-body text-base text-muted">
                        What We Offer
                      </h4>

                      <ul className="mt-3 space-y-2.5">
                        {selectedJob.whatWeOffer.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 font-body text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <p className="pera leading-relaxed text-muted">
                  {selectedJob.description}
                </p>
              )}
            </div>

            <Button
              type="button"
              onClick={() => {
                onApply?.(selectedJob.title);
                closeModal();
              }}
              className="mt-8 w-full cursor-pointer font-body"
            >
              Apply Now
            </Button>
          </>
        )}
      </CustomModal>
    </section>
  );
};

export default JoinTeam;
