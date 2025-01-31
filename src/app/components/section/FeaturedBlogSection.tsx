import React from "react";
import SectionTitleComponent from "../SectionTitle";
import BlogCard from "@/components/BlogCard";
import EnterWhileInViewMotionDiv from "../motion/EnterWhileInViewMotionDiv";

const FeaturedBlogPostComponent = () => {
  return (
    <EnterWhileInViewMotionDiv>
      <div className="my-6">
        <SectionTitleComponent title="Featured" subtitle="Blog Post" />
        <div className="flex flex-col gap-1 mt-4 p-3 lg:p-0 items-center lg:items-start">
          <BlogCard
            picturecolor="--color-primary"
            title="How to Create a React App from Scratch"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            readTime="5 min"
            datepublished="July 20, 2021"
          />
          <BlogCard
            picturecolor="--color-secondary"
            title="The Ultimate Guide to TailwindCSS"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            readTime="7 min"
            datepublished="July 20, 2021"
          />
        </div>
      </div>
    </EnterWhileInViewMotionDiv>
  );
};

export default FeaturedBlogPostComponent;
