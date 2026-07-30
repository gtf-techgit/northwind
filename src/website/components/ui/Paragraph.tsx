import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const Paragraph = ({ children, className = "" }: ParagraphProps) => {
  return (
    <p className={`font-body text-sm leading-relaxed text-muted md:text-base ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
