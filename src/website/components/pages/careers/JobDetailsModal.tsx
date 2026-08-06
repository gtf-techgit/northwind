"use client";

import { useEffect } from "react";
import { FiBriefcase, FiMapPin, FiX } from "react-icons/fi";
import { JobItem } from "@/website/types/careers";
import Button from "../../ui/Button";

interface JobDetailsModalProps {
  job: JobItem | null;
  onClose: () => void;
  onApply?: (position: string) => void;
}

const JobDetailsModal = ({ job, onClose, onApply }: JobDetailsModalProps) => {
  useEffect(() => {
    if (!job) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [job, onClose]);

  if (!job) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#F0F0DB]/20 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#fbf6e8] p-6 shadow-lg-custom md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-primary transition-colors hover:bg-primary/10"
        >
          <FiX size={20} />
        </button>

        <h3 className="font-heading pr-10 text-xl leading-snug text-primary md:text-2xl">
          {job.title}
        </h3>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#dfe4c8] px-4 py-2.5 font-body text-sm text-primary">
            <FiMapPin size={14} />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#dfe4c8] px-4 py-2.5 font-body text-sm text-primary">
            <FiBriefcase size={14} />
            {job.type}
          </span>
        </div>

        <div className="mt-6 border-t border-primary/10 pt-6">
          {job.preferredBackground?.length || job.whatWeOffer?.length ? (
            <div className="space-y-6">
              {!!job.preferredBackground?.length && (
                <div>
                  <h4 className="font-body text-base text-muted">Preferred Background</h4>
                  <ul className="mt-3 space-y-2.5">
                    {job.preferredBackground.map((item, i) => (
                      <li key={i} className="flex gap-3 font-body text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!!job.whatWeOffer?.length && (
                <div>
                  <h4 className="font-body text-base text-muted">What We Offer</h4>
                  <ul className="mt-3 space-y-2.5">
                    {job.whatWeOffer.map((item, i) => (
                      <li key={i} className="flex gap-3 font-body text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <p className="pera leading-relaxed text-muted">{job.description}</p>
          )}
        </div>

        <Button
          type="button"
          onClick={() => {
            onApply?.(job.title);
            onClose();
          }}
          className="mt-8 w-full cursor-pointer font-body"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobDetailsModal;
