import React from "react";
import { BlogPostComponent } from "../../../components/home/boasts/selfthoughtcomponent";

const BlogListComponent = () => {
  return (
    <div className="mt-4">
      <div className="text-center md:flex md:justify-center md:space-x-4 lg:flex-col lg:justify-start lg:text-left lg:space-x-0">
        <h1 className="text-6xl font-bold lg:text-8xl">BLOG</h1>
        <h1 className="text-6xl lg:text-7xl font-bold text-[--color-dark-accent-2] drop-shadow-lg">
          LIST
        </h1>
      </div>
      <div className="">
        <RecentBlogComponent />
      </div>
    </div>
  );
};

const RecentBlogComponent = () => {
  return (
    <div className="flex flex-col gap-4 mt-8 p-3 lg:p-0 md:items-center lg:items-start">
      <BlogPostComponent
        picturecolor="--color-primary"
        title="How to Create a React App from Scratch"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        readTime="5 minutes"
        datepublished="July 20, 2021"
      />
      <BlogPostComponent
        picturecolor="--color-secondary"
        title="The Ultimate Guide to TailwindCSS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        readTime="7 minutes"
        datepublished="July 20, 2021"
      />
      <BlogPostComponent
        picturecolor="--color-primary"
        title="How to Apply for a Job"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        readTime="5 minutes"
        datepublished="July 20, 2021"
      />
    </div>
  );
};

export default BlogListComponent;
