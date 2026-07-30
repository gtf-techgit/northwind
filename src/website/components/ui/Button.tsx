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

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const classes = `inline-flex items-center justify-center font-body cursor-pointed rounded-full px-10 py-3 text-[15px] font-heading tracking-wide transition-colors ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
