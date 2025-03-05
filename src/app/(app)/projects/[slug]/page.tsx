'use server';

import React from "react";
import ProfileComponent from "@/components/ProfileCard";
import { ProjectDB, SelectProjectBySlug } from "@/services/projectservices";
import { MDXDB, SelectMDX } from "@/services/mdxservices";
import ContentDisplay, { ContentDisplaySkeletalComponent } from "@/app/components/ContentDisplay";
import ProjectDetails, { ProjectDetailsSkeletalComponent } from "./components/ProjectDetails";
import { IoIosArrowBack } from "react-icons/io";
import EnterDropMotionDiv from "@/app/components/motion/EnterDropMotionDiv";

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

type tParams = Promise<{ slug: string }>;

const ProjectPage = async (props: { params: tParams }) => {
  const slug = (await props.params).slug;
  console.log(slug);
  const project: ProjectDB | null = (await SelectProjectBySlug(slug)) as ProjectDB | null;
  if (!project) {
    revalidatePath('/404') // Update cached posts
    redirect('/404') // Update cached posts
  }
  const mdx: MDXDB | null = (await SelectMDX(project.id)) as MDXDB | null
  if (!mdx) {
    revalidatePath('/404') // Update cached posts
    redirect('/404') // Update cached posts
  }


  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 mt-8">
      <div className="relative hidden lg:block">
        <ProfileComponent />
      </div>
      <div className="mt-6 flex flex-col gap-6 max-w-[576px] mx-auto lg:mx-0">
        <div className="">
          <EnterDropMotionDiv>
            <div className="mb-4 w-11/12 md:w-full mx-auto">
              <button className="flex gap-1 items-center text-sm text-[--color-accent] p-1 px-0 hover:underline"
                onClick={() => { }}
              >
                <IoIosArrowBack size={16} /> Projects List
              </button>
            </div>
          </EnterDropMotionDiv>
          <ProjectDetails project={project as ProjectDB} mdx={mdx as MDXDB} />
          {/* <ContentDisplay content={mdx?.content as string} /> */}
        </div>
      </div>
    </div >
  );
};

export default ProjectPage;
