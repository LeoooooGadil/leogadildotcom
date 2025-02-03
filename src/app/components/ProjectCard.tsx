"use client";

import { TbArrowUpRight } from "react-icons/tb";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  picturecolor?: string;
  image: string | null,
  title: string;
  description: string;
  link: string;
  techStack: string[];
  isSkeletal?: boolean;
}

const ProjectCard = ({
  title,
  image,
  description,
  techStack,
  picturecolor,
  link,
  isSkeletal,
}: ProjectCardProps) => {
  const router = useRouter();

  return (
    <button
      className={`group flex gap-6 p-3 rounded-2xl w-full max-w-[576px] hover:bg-[--color-dark-accent] hover:drop-shadow-lg transition-colors cursor-pointer ${
        isSkeletal &&
        "hover:bg-[--color-dark] hover:drop-shadow-none bg-[--color-dark] cursor-default"
      } `}
      onClick={!isSkeletal ? () => router.push(link) : () => {}}
    >
      <div className="">
        {!isSkeletal ? (
          <div
            className="h-24 lg:h-36 w-24 lg:w-36 bg-[--color-dark-accent-2] overflow-hidden rounded-xl"
            style={{ backgroundColor: `var(${picturecolor})` }}
          >
            {image && <img src={image} alt={image} className="w-full h-full transition-all duration-500 rounded-xl" />}
          </div>
        ) : (
          <div className="h-24 lg:h-36 w-24 lg:w-36 bg-[--color-dark-accent] rounded-xl" />
        )}
      </div>

      <div className="flex flex-col h-24 lg:h-36 w-full">
        <div className="text-left flex-1">
          {!isSkeletal ? (
            <>
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="relative">
                  <TbArrowUpRight
                    size={25}
                    className="transition-all absolute -left-2 group-hover:-left-1 top-3 group-hover:top-1 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
              <p className="opacity-70 text-sm">{description}</p>
            </>
          ) : (
            <>
              <div className="flex justify-between">
                <div className="bg-[--color-dark-accent] h-8 w-3/4 rounded-xl mb-2" />
                <div className="relative">
                  <TbArrowUpRight
                    size={25}
                    className="transition-all absolute -left-2 group-hover:-left-1 top-3 group-hover:top-1 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
              <div className="bg-[--color-dark-accent] h-3 w-1/2 rounded-xl mb-2" />
            </>
          )}
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
