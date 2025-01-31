"use client";

import ProjectCard from "@/app/components/ProjectCard";
import SectionTitleComponent from "@/app/components/SectionTitle";
import React from "react";
import { useProjectsContext } from "@/contexts/ProjectsContext";
import EnterDropMotionDiv from "./motion/EnterDropMotionDiv";

const ProjectsLPageList = () => {
  const { projects } = useProjectsContext();

  return (
    <EnterDropMotionDiv>
      <div className="mt-4">
        <SectionTitleComponent title="recent" subtitle="projects" />
        <div className="flex flex-col gap-1 mt-8 p-3 lg:p-0 items-center lg:items-start">
          {projects &&
            projects.map((data, index) => {
              return (
                <ProjectCard
                  key={index}
                  picturecolor="--color-secondary"
                  title={data.name}
                  description={data.subtitle}
                  link={"/projects/" + data.slug}
                  techStack={data.techstack}
                />
              );
            })}
        </div>
      </div>
    </EnterDropMotionDiv>
  );
};

export default ProjectsLPageList;
