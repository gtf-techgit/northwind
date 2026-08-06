import React from "react";
import ProjectSingleCard from "./projectSingleCard";
import { ProjectCard } from "@/website/types/projects";
import ProjectGridCard from "./ProjectGridCard";

type Props = {
  projects: ProjectCard[];
};

export default function ProjectsContainer({ projects }: Props) {
  if (!projects || projects?.length === 0) return;
  return (
    <section className="projectsContainer py-20">
      <div className="container-custom">
        <div className="mb-15">{/* Tabs Here */}</div>
        <div className="cards">
          {projects.length > 1 ? (
            <>
              Double
              {/* {projects.map((project) => (
                <ProjectGridCard key={project.slug} project={project} />
              ))} */}
            </>
          ) : (
            <>
              <ProjectSingleCard key={projects[0].slug} project={projects[0]} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
