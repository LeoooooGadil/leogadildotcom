"use client";

import { ProjectDB } from "@/app/services/projectservices";
import React from "react";
import moment from "moment";
import { MDXDB } from "@/app/services/mdxservices";
import { useRouter } from "next/navigation";
import { TechIcon } from "@/app/components/TechStack";
import EnterDropMotionDiv from "@/app/components/motion/EnterDropMotionDiv";

interface ProjectDetailsProps {
  project: ProjectDB;
  mdx: MDXDB;
}

const ProjectDetails = ({ project, mdx }: ProjectDetailsProps) => {
  const router = useRouter();

  const EditMDX = async () => {
    if (process.env.NODE_ENV === "production") return;
    router.push("/x/editor?mdx=" + mdx.id);
  };

  return (
    <EnterDropMotionDiv delay={0.2}>
      <div className="w-11/12 md:w-full mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <button className="text-left" onClick={EditMDX}>
            <h1 className="text-5xl md:text-6xl font-bold lg:text-6xl uppercase">
              {mdx.title}
            </h1>
          </button>
          <p className="opacity-80 lg:text-lg">{mdx.subtitle}</p>
        </div>
        <div className="flex gap-4">
          {project.techstack.map((tech) => {
            return <TechIcon key={tech} iconName={tech} size={20} />;
          })}
        </div>
        <div className="flex gap-2 mt-6">
          {mdx.keywords.map((keyword) => {
            return <KeywordItem key={`keyword-${keyword}`} keyword={keyword} />;
          })}
        </div>
        <div className="py-4 flex justify-between">
          <div>
            <p className="opacity-50 text-smb ">
              {moment(mdx.create_date).format("MMM D, YYYY")}
            </p>
          </div>
          <div>
            <p className="opacity-50 text-sm">{mdx.readtime} min read</p>
          </div>
        </div>
        <div className="border-b-2 border-[--color-dark-accent] "></div>
      </div>
    </EnterDropMotionDiv>
  );
};

interface KeywordProps {
  keyword: string;
}

const KeywordItem = ({ keyword }: KeywordProps) => {
  return (
    <div className="bg-[--color-accent] px-3 p-1 rounded-xl drop-shadow-lg">
      <h1 className="text-xs text-[--color-dark]">{keyword}</h1>
    </div>
  );
};

// Skeletal

export const ProjectDetailsSkeletalComponent = () => {
  return (
    <div className="relative min-h-56 w-11/12 md:w-full mx-auto">
      <div className="absolute flex flex-col top-0 w-full mt-1 md:mt-2">
        <div className="h-9 md:h-11 bg-[--color-dark-accent] w-full rounded-xl animate-pulseColor delay-200" />
        <div className="mt-5 flex flex-col gap-2">
          <div className="h-4 bg-[--color-dark-accent] w-full rounded-xl animate-pulseColor delay-400" />
          <div className="h-4 bg-[--color-dark-accent] w-1/2 rounded-xl animate-pulseColor delay-600" />
        </div>
        <div className="h-7 mt-10 bg-[--color-dark-accent] w-3/4 rounded-xl animate-pulseColor delay-800" />
        <div className="mt-6 flex justify-between gap-2 mb-5">
          <div className="h-4 bg-[--color-dark-accent] w-40 rounded-xl animate-pulseColor delay-1000" />
          <div className="h-4 bg-[--color-dark-accent] w-24 rounded-xl animate-pulseColor delay-1200" />
        </div>
        <div className="border-b-2 border-[--color-dark-accent] animate-pulseColor delay-1400"></div>
      </div>
    </div>
  );
};

export default ProjectDetails;
