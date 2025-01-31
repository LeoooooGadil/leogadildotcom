"use client";

import React, { useState, useEffect } from "react";
import ProfileComponent from "@/components/ProfileCard";
import { useParams } from "next/navigation";
import { useProjectsContext } from "@/contexts/ProjectsContext";
import { useMDXContext } from "@/contexts/MDXContext";
import { ProjectDB } from "@/services/projectservices";
import { MDXDB } from "@/services/mdxservices";
import ContentDisplay, { ContentDisplaySkeletalComponent } from "@/app/components/ContentDisplay";
import ProjectDetails, { ProjectDetailsSkeletalComponent } from "./components/ProjectDetails";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import EnterDropMotionDiv from "@/app/components/motion/EnterDropMotionDiv";

const ProjectPage = () => {
  const router = useRouter();
  const [project, setProject] = useState<ProjectDB | undefined>(undefined);
  const [mdx, setmdx] = useState<MDXDB | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state

  const params = useParams();
  const { slug } = params;

  const { projects, getProjectBySlug } = useProjectsContext();
  const { mdxList, getMDXById } = useMDXContext();

  useEffect(() => {
    if(projects === null || mdxList === null) return;

    const fetchData = () => {
      setIsLoading(true); // Set loading state to true before fetching data

      const _project = getProjectBySlug(slug as string);
      const _mdxid = _project?.mdx_id;
      const _mdx = getMDXById(_mdxid as string);
      setProject(_project);
      setmdx(_mdx);

      setIsLoading(false); // Set loading state to false after data is fetched
    };

    fetchData();
  }, [projects, mdxList, slug]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 mt-8">
			<div className="relative hidden lg:block">
        <ProfileComponent />
      </div>
      <div className="mt-6 flex flex-col gap-6 max-w-[576px] mx-auto lg:mx-0">
        <div className="">
          {!(isLoading) ? (
            <>
              <EnterDropMotionDiv>
                <div className="mb-4 w-11/12 md:w-full mx-auto">
                  <button className="flex gap-1 items-center text-sm text-[--color-accent] p-1 px-0 hover:underline"
                    onClick={() => router.push("/projects")}
                  >
                    <IoIosArrowBack size={16} /> Projects List
                  </button>
                </div>
              </EnterDropMotionDiv>
              <ProjectDetails project={project as ProjectDB} mdx={mdx as MDXDB} />
              <ContentDisplay content={mdx?.content as string} />
            </>
          ) : (
            <div className="flex flex-col gap-8 w-full">
              <ProjectDetailsSkeletalComponent />
              <ContentDisplaySkeletalComponent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
