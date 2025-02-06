import ProfileComponent from "@/app/components/ProfileCard";
import BlogListComponent from "@/app/components/BlogsPageList";
import ContactMeComponent from "@/app/components/section/ContactMeSection";

const Blog = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 mt-8">
      <div className="relative hidden lg:block">
        <ProfileComponent />
      </div>
      <div className="mt-2 flex flex-col gap-6">
        <BlogListComponent />
        <ContactMeComponent />
      </div>
    </div>
  );
};

export default Blog;
