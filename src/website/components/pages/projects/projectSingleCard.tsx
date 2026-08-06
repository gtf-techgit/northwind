import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import Button from "@/website/components/ui/Button";
import Heading from "@/website/components/ui/Heading";
import Paragraph from "@/website/components/ui/Paragraph";
import { ProjectCard } from "@/website/types/projects";

type Props = {
  project: ProjectCard;
};

export default function ProjectSingleCard({ project }: Props) {
  const imageSrc =
    project.files?.desktop_file ||
    (project as any)?.media?.files?.desktop_file ||
    "/projects/project-1.webp";

  const href = project.slug ? `/projects/${project.slug}` : "#";

  return (
    <Link href={href} className="group block w-full">
      <div className="relative w-full rounded-3xl lg:rounded-[36px] bg-[#FAF7EC] border border-primary/10 p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-500 hover:shadow-xl">
        {/* Left Content Side */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-4 sm:p-6 lg:p-8 space-y-6">
          <Heading
            as="h3"
            className="text-2xl sm:text-3xl lg:text-[2.25rem] leading-tight text-primary font-heading font-normal"
          >
            {project.name}
          </Heading>

          {project.shortDescription && (
            <Paragraph className="text-sm sm:text-base text-muted max-w-xs leading-relaxed">
              {project.shortDescription}
            </Paragraph>
          )}

          {project.address && (
            <div className="flex items-center justify-center gap-2 text-primary font-heading font-semibold text-sm sm:text-base">
              <IoLocationSharp className="w-5 h-5 text-primary shrink-0" />
              <span>{project.address}</span>
            </div>
          )}

          {project.subTypology && (
            <p className="font-heading text-sm sm:text-base text-primary/90 font-medium">
              {project.subTypology}
            </p>
          )}

          <Button
            variant="primary"
            className="pointer-events-none mt-2 transition-transform duration-300 group-hover:scale-105"
          >
            Explore Now
          </Button>
        </div>

        {/* Right Image Side */}
        <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[400px] lg:h-[460px] rounded-2xl lg:rounded-[28px] overflow-hidden">
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

