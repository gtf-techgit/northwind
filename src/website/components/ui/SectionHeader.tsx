import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";
import SlideIn from "./SlideIn";

interface SectionHeaderProps {
  heading?: ReactNode;
  paragraph?: ReactNode;
  buttonText?: ReactNode;
  buttonHref?: string;
  className?: string;
  headingClassName?: string;
  paragraphClassName?: string;
  buttonClassName?: string;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      heading,
      paragraph,
      buttonText,
      buttonHref,
      className = "",
      headingClassName = "",
      paragraphClassName = "",
      buttonClassName = "",
      buttonProps,
    },
    ref
  ) => {
    return (
      <div ref={ref} className={`space-y-5 ${className}`}>
        <SlideIn>
          {heading && <Heading className={headingClassName}>{heading}</Heading>}

          {paragraph && (
            <Paragraph className={paragraphClassName}>{paragraph}</Paragraph>
          )}

          {buttonText && (
            <Button
              href={buttonHref}
              className={`mt-4 font-semibold cursor-pointer ${buttonClassName}`}
              {...buttonProps}
            >
              {buttonText}
            </Button>
          )}
        </SlideIn>
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
