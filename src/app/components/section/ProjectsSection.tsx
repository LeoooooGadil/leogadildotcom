"use client";

import React, { useState, useEffect } from "react";

import SectionTitleComponent from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import EnterWhileInViewMotionDiv from "../motion/EnterWhileInViewMotionDiv";
import { useProjectsContext } from "@/contexts/ProjectsContext";
import { ProjectDB } from "@/services/projectservices";
import { RecentProjects } from "@/assets/projects";

const RecentProjectComponent = () => {
  const [list, setList] = useState<ProjectDB[] | undefined>(undefined);
  const { projects, getProjectBySlug } = useProjectsContext();

  useEffect(() => {
    if (!projects) return;

    const projectsData = getProjectBySlug(RecentProjects) as ProjectDB[];
    setList(projectsData);
  }, [projects]);

  return (
    <EnterWhileInViewMotionDiv>
      <div className="my-6">
        <SectionTitleComponent title="recent" subtitle="projects" />

        <div className="flex flex-col gap-1 mt-4 p-3 lg:p-0 md:items-center lg:items-start">
          {!list
            ? RecentProjects.map((index) => {
                return (
                  <ProjectCard
                    key={index}
                    picturecolor="--color-secondary"
                    title=""
                    description=""
                    link=""
                    techStack={[]}
                    isSkeletal
                  />
                );
              })
            : list?.map((project) => {
                return (
                  <ProjectCard
                    key={project.slug}
                    picturecolor="--color-secondary"
                    title={project.name}
                    description={project.subtitle}
                    link={`/projects/${project.slug}`}
                    techStack={project.techstack}
                  />
                );
              })}
        </div>
      </div>
    </EnterWhileInViewMotionDiv>
  );
};

export default RecentProjectComponent;
