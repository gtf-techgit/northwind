import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const Paragraph = ({ children, className = "" }: ParagraphProps) => {
  return (
    <p className={`font-body pera leading-relaxed text-muted  ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
