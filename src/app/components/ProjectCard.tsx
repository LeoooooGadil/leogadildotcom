"use client";

import { TbArrowUpRight } from "react-icons/tb";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  picturecolor?: string;
  title: string;
  description: string;
  link: string;
  techStack: string[];
}

const ProjectCard = ({
  title,
  description,
  techStack,
  picturecolor,
  link,
}: ProjectCardProps) => {
  const router = useRouter();

  return (
    <button
      className="group flex gap-6 p-3 rounded-2xl w-full max-w-[576px] hover:bg-[--color-dark-accent] hover:drop-shadow-lg transition-colors cursor-pointer"
      onClick={() => router.push(link)}
    >
      <div className="">
        <div
          className="h-24 lg:h-36 w-24 lg:w-36 bg-[--color-dark-accent-2] rounded-xl"
          style={{ backgroundColor: `var(${picturecolor})` }}
        />
      </div>

      <div className="flex flex-col h-24 lg:h-36 w-full">
        <div className="text-left flex-1">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="relative">
              <TbArrowUpRight size={25} className="transition-all absolute -left-2 group-hover:-left-1 top-3 group-hover:top-1 -translate-x-1/2 -translate-y-1/2"/>
            </div>
          </div>
          <p className="opacity-70 text-sm">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
