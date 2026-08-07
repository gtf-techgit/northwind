import HeroBanner from "@/website/components/common/HeroBanner";
import ProjectsContainer from "@/website/components/pages/projects/projectsContainer";
import { PlatterListData, ProjectListData } from "@/website/lib/data/projects";
import { HeroData } from "@/website/types/common";
import { ProjectCard } from "@/website/types/projects";

const page = () => {
  const heroData: HeroData = {
    title: "Projects",
    media: {
      type: "image",
      files: {
        desktop_file: "/projects/hero.webp",
        mobile_file: "/projects/hero.webp",
      },
      alt: "Projects",
    },
  };
  const projects = ProjectListData;
  const mappedProjects = projects?.map((project: ProjectCard) => {
    const subTypologyString = project?.projectSubTypology
      ?.map((item) => item?.subTypology?.name)
      ?.filter(Boolean)
      ?.join(", ");

    return {
      ...project,
      subTypology: subTypologyString || project.subTypology,
      slug: `${project.platter?.slug}/${project.slug}`,
      isPage: true,
    };
  });

  return (
    <main className="about-us-page">
      <HeroBanner data={heroData} />
      {projects && projects.length > 0 && (
        <ProjectsContainer
          platters={PlatterListData}
          projects={mappedProjects}
        />
      )}
    </main>
  );
};

export default page;
