import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import Contact from "../pages/home/Contact";
import SocialLinks from "./SocialLinks";
import { contactData } from "@/website/lib/data/home";

const quickLinks = [
  { label: "Construction Update", href: "/construction-update" },
  { label: "Terms & Condition", href: "/terms-condition" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Project", href: "/project" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Award", href: "/award" },
];

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => (
  <div className="flex flex-col items-center">
    <h3 className="font-heading text-xl text-primary md:text-2xl">{title}</h3>
    <span className="mt-3 mb-6 h-px w-10 bg-border" />
    <ul className="flex flex-col items-center gap-4">{children}</ul>
  </div>
);

const Footer = () => {
  return (
    <>
    <Contact data={contactData}/>
    <footer className="relative overflow-hidden bg-page pt-20 pb-8">
      <Image
        src="/images/footer/cloud.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-bottom opacity-15"
      />
      <Image
        src="/images/footer/left-arc.svg"
        alt=""
        width={450}
        height={768}
        className="pointer-events-none absolute left-10 top-1/2 hidden -translate-y-1/2 md:block"
      />
      <Image
        src="/images/footer/right-arc.svg"
        alt=""
        width={449}
        height={768}
        className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 md:block"
      />

      <div className="container-custom relative">
        <div className="grid items-center gap-10 md:grid-cols-3">
          <div className="flex justify-center md:justify-center">
            <Image
              src="/images/footer/igbc.svg"
              alt="IGBC"
              width={110}
              height={130}
              className="h-auto w-16 md:w-20"
            />
          </div>

          <div className="flex flex-col items-center gap-6">
            <Logo variant="dark" width={210} height={46} />
            <SocialLinks />
          </div>

          <div className="flex justify-center md:justify-center">
            <Image
              src="/images/footer/credai.svg"
              alt="CREDAI"
              width={220}
              height={54}
              className="h-auto w-32 md:w-40"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-14 text-center md:grid-cols-3">
          <FooterColumn title="Quick Links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-secondary transition-colors hover:text-primary md:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-secondary transition-colors hover:text-primary md:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Reach Out">
            <li>
              <a
                href="tel:+918881110909"
                className="font-body text-sm text-secondary transition-colors hover:text-primary md:text-base"
              >
                +91-888 111 0909
              </a>
            </li>
            <li>
              <a
                href="mailto:Info@Nwestates.In"
                className="font-body text-sm text-secondary transition-colors hover:text-primary md:text-base"
              >
                Info@Nwestates.In
              </a>
            </li>
            <li className="font-body text-sm leading-relaxed text-secondary md:text-base">
              Plot 07, Sector Pi-1,
              <br />
              Greater Noida, UP-201306
            </li>
          </FooterColumn>
        </div>

        <div className="mt-16  pt-6 text-center font-body text-xs text-muted md:text-sm">
          © {new Date().getFullYear()} Northwind. All rights reserved. &nbsp;|&nbsp; Created By:{" "}
          <Link
            href="https://gtftechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            GTF Technologies
          </Link>
        </div>
      </div>
    </footer>
    </>
  );
};
export default Footer;