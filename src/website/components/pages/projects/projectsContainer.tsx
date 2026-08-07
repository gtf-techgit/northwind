"use client";

import React, { useState } from "react";
import ProjectSingleCard from "./projectSingleCard";
import { Platter, ProjectCard } from "@/website/types/projects";
import ProjectGridCard from "./ProjectGridCard";
import Tabs from "@/website/components/ui/Tabs";

type Props = {
  projects: ProjectCard[];
  platters?: Platter[];
};

export default function ProjectsContainer({ projects, platters }: Props) {
  const [activeTab, setActiveTab] = useState(
    platters?.[0]?.slug || "residential",
  );

  if (!projects || projects?.length === 0) return null;

  const filteredProjects = projects.filter(
    (project) =>
      !project.platter?.slug ||
      project.platter?.slug?.toLowerCase() === activeTab.toLowerCase(),
  );

  const displayProjects =
    filteredProjects.length > 0 ? filteredProjects : projects;

  return (
    <section className="projectsContainer py-26">
      <div className="container-custom">
        {/* Pill Navigation Tabs */}
        {platters && (
          <Tabs
            items={platters}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        )}

        {/* Cards */}
        <div className="cards">
          {displayProjects.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {displayProjects.map((project) => (
                <>
                  {/* if projects are > 1 then ui will diff similar  */}
                  <ProjectGridCard
                    key={project.id || project.slug}
                    project={project}
                  />
                </>
              ))}
            </div>
          ) : (
            <ProjectSingleCard
              key={displayProjects[0].id || displayProjects[0].slug}
              project={displayProjects[0]}
            />
          )}
        </div>
      </div>
    </section>
  );
}
