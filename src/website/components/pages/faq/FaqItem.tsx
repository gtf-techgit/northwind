import { FiChevronDown } from "react-icons/fi";
import type { Faq } from "@/website/types/faq";

interface FaqItemProps extends Faq {
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
  return (
    <div className="py-6 first:pt-0 last:pb-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
      >
        <span className="font-heading text-primary text-base md:text-lg">
          {question}
        </span>

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
          <FiChevronDown
            size={16}
            className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"
              }`}
          />
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"
          }`}
      >
        <p className="font-body pera overflow-hidden leading-relaxed text-muted pr-14">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
