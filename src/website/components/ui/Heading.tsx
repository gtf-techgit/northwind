import { ElementType, ReactNode } from "react";

interface HeadingProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const Heading = ({ as: Tag = "h2", children, className = "" }: HeadingProps) => {
  return (
    <Tag
      className={`font-heading text-3xl leading-snug text-primary md:text-4xl lg:text-[2.75rem] ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;
