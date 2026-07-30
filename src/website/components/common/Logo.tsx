import Image from "next/image";

export const whiteLogo = "/images/common/white-logo.svg";
export const darkLogo = "/images/common/dark-logo.svg";

interface LogoProps {
  variant?: "white" | "dark";
  width?: number;
  height?: number;
}

const Logo = ({
  variant = "dark",
  width = 180,
  height = 48,
}: LogoProps) => {
  const src = variant === "white" ? whiteLogo : darkLogo;

  return (
    <Image
      src={src}
      alt="Northwind Logo"
      width={width}
      height={height}
      priority
    />
  );
};

export default Logo;