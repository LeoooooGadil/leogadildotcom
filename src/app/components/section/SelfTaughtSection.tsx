import React from "react";
import SectionTitleComponent from "../SectionTitle";
import BlogCard from "@/components/BlogCard";
import EnterWhileInViewMotionDiv from "../motion/EnterWhileInViewMotionDiv";

const SelfThoughtComponent = () => {
  return (
    <EnterWhileInViewMotionDiv>
      <div className="my-6">
        <SectionTitleComponent title="self-taught" subtitle="coder" />
        <div className="text-center mt-2 lg:text-left">
          <span className="max-w-md lg:max-w-lg mx-auto lg:mx-0 text-md text-[--color-light] font-normal opacity-60 px-8 lg:px-0">
            As a self-taught coder, I quickly learn new tech and solve problems
            through continuous practice.
          </span>
        </div>
        <div className="flex flex-col gap-1 mt-8 p-3 lg:p-0 md:items-center lg:items-start">
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

export default SelfThoughtComponent;
