import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoLocationSharp } from "react-icons/io5";
import Button from "@/website/components/ui/Button";
import Heading from "@/website/components/ui/Heading";
import Paragraph from "@/website/components/ui/Paragraph";
import { ProjectCard } from "@/website/types/projects";
import useZoomInEntrance from "@/website/hooks/useZoomInEntrance";

type Props = {
  project: ProjectCard;
};

export default function ProjectSingleCard({ project }: Props) {
  const CardRef = useRef<HTMLAnchorElement>(null);
  const RefInner = useRef<HTMLDivElement>(null);

  const title = project.projectName || project.name;
  const description =
    project.otherDetails?.description || project.shortDescription;
  const location = project.address;
  const subTypology = project.subTypology;

  const imageSrc =
    project.files?.desktop_image ||
    project.files?.desktop_file ||
    "/projects/project-1.webp";

  const href = project.slug ? `/projects/${project.slug}` : "#";

  return (
    <Link ref={CardRef} href={href} className="group block w-full">
      <div
        ref={RefInner}
        className="relative w-full  bg-[#ACC78C1A] rounded-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-500 hover:shadow-sm"
      >
        {/* Left Content Side */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-4 sm:p-6 lg:p-8">
          <div className="w-[75%]  space-y-6 mx-auto text-center">
            {title && (
              <Heading
                as="h3"
                className="text-2xl sm:text-3xl lg:text-[2.25rem] leading-tight text-primary font-heading font-normal"
              >
                {title}
              </Heading>
            )}

            {description && (
              <Paragraph className="text-sm sm:text-base text-muted text-center leading-relaxed">
                {description}
              </Paragraph>
            )}

            {location && (
              <div className="flex items-center justify-center gap-2 text-primary font-heading text-sm sm:text-base border-b border-[#0D382933] pb-6 w-fit mx-auto px-10">
                <IoLocationSharp className="w-5 h-5 text-primary shrink-0" />
                <span>{location}</span>
              </div>
            )}

            {subTypology && (
              <p className="font-heading text-sm sm:text-base text-primary/90 font-medium">
                {subTypology}
              </p>
            )}

            <Button
              variant="primary"
              className="pointer-events-none mt-2 transition-transform duration-300 group-hover:scale-105"
            >
              Explore Now
            </Button>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[400px] lg:h-[560px] rounded-2xl lg:rounded-[28px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={project.name || "Project image"}
            fill
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </Link>
  );
}
