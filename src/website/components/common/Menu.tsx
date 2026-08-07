"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Projects", href: "/projects" },
  { label: "Media Center", href: "/media-center" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blogs" },
];

const contactInfo = [
  {
    label: "Visit Us",
    icon: IoLocationSharp,
    value: (
      <>
        Plot 07, Sector Pi-1, Greater
        <br />
        Noida, UP-201306
      </>
    ),
  },
  {
    label: "Call Us",
    icon: IoCallSharp,
    value: "+91-888 111 0909",
    href: "tel:+918881110909",
  },
  {
    label: "Email Us",
    icon: IoIosMail,
    value: "info@nwestates.in",
    href: "mailto:info@nwestates.in",
  },
];

const Menu = ({ open, onClose }: MenuProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;

    const lenis = (
      window as Window & { lenis?: { stop?: () => void; start?: () => void } }
    ).lenis;

    lenis?.stop?.();

    const body = document.body;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;
    const previousBodyOverflow = body.style.overflow;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
      body.style.overflow = previousBodyOverflow;
      body.style.left = "";
      body.style.right = "";

      window.scrollTo(0, scrollY);

      lenis?.start?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-9999 flex flex-col overflow-hidden bg-primary"
        >
              <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 -bottom-1/2 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/70 blur-[120px]"
            />
          <div className="relative flex items-center justify-center px-6 py-6 md:px-12 md:py-8">
            <button
              type="button"
              onClick={onClose}
              className="absolute left-6 cursor-pointer rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-[16px] tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/20 font-heading md:left-12"
            >
              Close
            </button>

            <Logo variant="white" width={200} height={50} />
          </div>

          <div className="container-custom relative flex flex-1 flex-col justify-center gap-16 overflow-hidden py-10 md:flex-row md:items-center md:justify-between">
          

            <Image
              src="/images/common/menu-bg.png"
              alt=""
              fill
              aria-hidden
              className="pointer-events-none absolute inset-0 object-contain object-bottom opacity-10"
            />

            <nav className="relative z-10 flex flex-col gap-4 md:gap-5">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-center gap-4"
                  >
                    {isActive && (
                      <>
                        <Image
                          src="/images/common/green-circle.svg"
                          alt=""
                          width={32}
                          height={32}
                        />
                        <span className="h-px w-10 bg-accent" />
                      </>
                    )}
                    <span
                      className={`font-body text-4xl transition-colors md:text-5xl font-semibold ${
                        isActive
                          ? "text-accent"
                          : "text-[#F0F0DB] group-hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="relative z-10 flex flex-col gap-8">
              {contactInfo.map(({ label, icon: Icon, value, href }) => (
                <div key={label} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-accent">
                    <Icon size={16} />
                    <span className="font-body text-sm">{label}</span>
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="font-body text-lg text-white md:text-xl"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-body text-lg text-white md:text-xl">
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="container-custom  border-t border-white/15 py-6 ">
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <SocialLinks variant="dark" />
            <Link
              href="/privacy-policy"
              onClick={onClose}
              className="font-body text-sm text-white/80 transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
