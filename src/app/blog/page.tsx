import ProfileComponent from "@/app/components/home/landing/profilecomponent";
import BlogListComponent from "@/app/blog/component/bloglist/bloglistcomponent";
import ContactMeComponent from "@/app/components/home/contactme/contactmecomponent";

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

