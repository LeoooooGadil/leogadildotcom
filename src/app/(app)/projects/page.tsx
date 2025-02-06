import ProfileComponent from "@/app/components/ProfileCard";
import ProjectsListComponent from "@/components/ProjectsPageList";
import ContactMeComponent from "@/app/components/section/ContactMeSection";

const Projects = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 mt-8">
      <div className="relative hidden lg:block">
        <ProfileComponent />
      </div>
      <div className="mt-2 flex flex-col gap-6">
        <ProjectsListComponent />
        <ContactMeComponent />
      </div>
    </div>
  );
};

export default Projects;
