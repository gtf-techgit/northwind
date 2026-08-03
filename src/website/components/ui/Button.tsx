import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "contact";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-secondary! hover:bg-primary/90",
  outline:
    "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  contact: "bg-secondary text-primary! hover:bg-secondary-light",
};

const TextContent = ({ children }: { children: ReactNode }) => (
  <span className="relative block overflow-hidden leading-none">
    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full will-change-transform">
      {children}
    </span>

    <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full will-change-transform">
      {children}
    </span>
  </span>
);

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const classes = `group inline-flex items-center justify-center rounded-full px-10 py-4 font-heading text-[15px] tracking-wide transition-colors ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <TextContent>{children}</TextContent>
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      <TextContent>{children}</TextContent>
    </button>
  );
};

export default Button;