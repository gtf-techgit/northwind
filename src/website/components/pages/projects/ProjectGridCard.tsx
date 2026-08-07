import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import Heading from "@/website/components/ui/Heading";
import { ProjectCard } from "@/website/types/projects";

type Props = {
  project: ProjectCard;
};

export default function ProjectGridCard({ project }: Props) {
  const title = project.projectName || project.name;
  const location = project.address;
  const subTypology =
    project.subTypology ||
    project.projectSubTypology?.[0]?.subTypology?.name ||
    project.otherDetails?.projectTag;
  const platterName = project.platter?.name || "Residential";

  const imageSrc =
    project.files?.desktop_image ||
    project.files?.desktop_file ||
    "/projects/project-1.webp";

  const href = project.slug ? `/projects/${project.slug}` : "#";

  return (
    <Link href={href} className="group block w-full">
      <div className="flex flex-col w-full">
        {/* Top Image Container with Pill Badge Overlay */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl overflow-hidden mb-3">
          <Image
            src={imageSrc}
            alt={title || "Project image"}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Top Left Glassmorphism Pill Badge */}
          {platterName && (
            <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/70 bg-white/20 backdrop-blur-md text-white font-body text-xs sm:text-sm font-normal capitalize shadow-sm select-none">
              {platterName}
            </span>
          )}
        </div>

        {/* Card Details Section */}
        <div className="flex flex-col space-y-1.5 px-0.5">
          {/* Status / SubTypology Tag */}
          {subTypology && (
            <p className="font-body text-xs sm:text-sm text-muted font-normal">
              {subTypology}
            </p>
          )}

          {/* Thin Horizontal Divider Line */}
          <div className="w-full h-[1px] bg-[#0D3829]/15 my-1" />

          {/* Project Title */}
          {title && (
            <Heading
              as="h3"
              className="text-xl sm:text-2xl text-primary font-heading font-normal leading-tight group-hover:text-primary/80 transition-colors pt-0.5"
            >
              {title}
            </Heading>
          )}

          {/* Address / Location with Icon */}
          {location && (
            <div className="flex items-center gap-1.5 text-muted font-body text-xs sm:text-sm pt-0.5">
              <IoLocationSharp className="w-4 h-4 text-primary shrink-0" />
              <span className="line-clamp-1">{location}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
