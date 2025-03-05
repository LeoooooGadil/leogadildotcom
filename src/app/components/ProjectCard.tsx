"use client";

import { IoArrowForwardOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProjectCardProps {
  picturecolor?: string;
  image: string | null;
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
  picturecolor,
  link,
  isSkeletal,
}: ProjectCardProps) => {
  const router = useRouter();

  return (
    <button
      className={`group border border-transparent flex gap-6 p-3 rounded-2xl w-full max-w-[576px] hover:bg-[--color-dark-accent] hover:drop-shadow-lg hover:border-[--color-dark-accent-2] cursor-pointer ${isSkeletal &&
        "hover:bg-[--color-dark] hover:drop-shadow-none bg-[--color-dark] cursor-default"
        } `}
      onClick={!isSkeletal ? () => router.push(link) : () => { }}
    >
      <div className="">
        {!isSkeletal ? (
          <div
            className="h-24 lg:h-36 w-24 lg:w-36 bg-[--color-dark-accent-2] overflow-hidden rounded-xl"
            style={{ backgroundColor: `var(${picturecolor})` }}
          >
            {image && (
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt="Image"
                  fill
                  className="object-cover rounded-xl transition-all duration-500"
                />
              </div>
            )}
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
                <div>
                  <h1 className="text-left capitalize font-bold text-sm text-[--color-accent]">
                    Project
                  </h1>
                  <h1 className="text-2xl font-bold mt-1">{title}</h1>
                </div>
                <div className="relative">
                  <IoArrowForwardOutline
                    size={25}
                    className="transition-all absolute -left-4 group-hover:-left-2 top-3 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
              <p className="opacity-70 text-sm mt-2">{description}</p>
            </>
          ) : (
            <>
              <div className="flex justify-between">
                <div className="bg-[--color-dark-accent] h-8 w-3/4 rounded-xl mb-2" />
                <div className="relative">
                  <IoArrowForwardOutline
                    size={25}
                    className="transition-all absolute -left-2 group-hover:-left-1 top-3 -translate-x-1/2 -translate-y-1/2"
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
