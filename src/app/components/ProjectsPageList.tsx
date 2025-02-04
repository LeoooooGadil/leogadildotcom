"use client";

import ProjectCard from "@/app/components/ProjectCard";
import SectionTitleComponent from "@/app/components/SectionTitle";
import React, { useEffect, useState } from "react";
import { useProjectsContext } from "@/contexts/ProjectsContext";
import EnterDropMotionDiv from "./motion/EnterDropMotionDiv";
import { ProjectDB } from "@/services/projectservices";
import { WholeProjectsList } from "@/assets/projects";

const ProjectsLPageList = () => {
  const [list, setList] = useState<ProjectDB[] | undefined>(undefined);
  const { projects, getProjectBySlug } = useProjectsContext();

  useEffect(() => {
    if (!projects) return;

    const projectsData = getProjectBySlug(WholeProjectsList) as ProjectDB[];
    setList(projectsData);
  }, [projects, getProjectBySlug]);

  return (
    <EnterDropMotionDiv>
      <div className="mt-4">
        <SectionTitleComponent title="recent" subtitle="projects" />
        <div className="flex flex-col gap-1 mt-8 p-3 lg:p-0 items-center lg:items-start">
          {!list
            ? WholeProjectsList.map((project, index) => {
                return (
                  <ProjectCard
                    key={project}
                    picturecolor={
                      index % 1 === 0 ? "--color-primary" : "--color-secondary"
                    }
                    image={null}
                    title=""
                    description=""
                    link=""
                    techStack={[]}
                    isSkeletal
                  />
                );
              })
            : list?.map((project, index) => {
                return (
                  <ProjectCard
                    key={project.slug}
                    picturecolor={
                      index % 1 === 0 ? "--color-primary" : "--color-secondary"
                    }
                    image={project.image}
                    title={project.name}
                    description={project.subtitle}
                    link={`/projects/${project.slug}`}
                    techStack={project.techstack}
                  />
                );
              })}
        </div>
      </div>
    </EnterDropMotionDiv>
  );
};

export default ProjectsLPageList;
