import ProfileComponent from "@/app/components/ProfileCard";
import BlogListComponent from "@/app/components/BlogsPageList";
import ContactMeComponent from "@/app/components/section/ContactMeSection";

const Blog = () => {
	return (
		<div className="flex flex-col lg:flex-row">
			<div className="relative hidden lg:block">
				<ProfileComponent />
			</div>
			<div className="mt-8 flex flex-col gap-10">
				<BlogListComponent />
				<ContactMeComponent />
			</div>
		</div>
	);
}


export default Blog;

