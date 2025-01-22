import ProfileComponent from "@/app/components/ProfileCard";
import ProjectsListComponent from "@/components/ProjectsPageList";
import ContactMeComponent from "@/app/components/section/ContactMeSection";

const Projects = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative hidden lg:block">
        <ProfileComponent />
      </div>
      <div className="mt-8 flex flex-col gap-10">
        <ProjectsListComponent />
        <ContactMeComponent />
      </div>
    </div>
  );
};

export default Projects;
