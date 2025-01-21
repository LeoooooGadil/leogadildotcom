import ProfileComponent from "@/app/components/home/landing/profilecomponent";
import ProjectsListComponent from "@/app/projects/component/projectslist/projectslistcomponent";
import ContactMeComponent from "@/app/components/home/contactme/contactmecomponent";

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
}


export default Projects;

