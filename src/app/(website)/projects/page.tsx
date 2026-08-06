import HeroBanner from "@/website/components/common/HeroBanner";
import ProjectsContainer from "@/website/components/pages/projects/projectsContainer";
import { ProjectListData } from "@/website/lib/data/projects";
import { HeroData } from "@/website/types/common";

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
  return (
    <main className="about-us-page">
      <HeroBanner data={heroData} />
      {projects && projects.length > 0 && (
        <ProjectsContainer projects={projects} />
      )}
    </main>
  );
};

export default page;
