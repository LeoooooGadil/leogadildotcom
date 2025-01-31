import React from "react";

import SectionTitleComponent from "@/components/SectionTitle";
import { StaticImageData } from "next/image";
import EnterWhileInViewMotionDiv from "../motion/EnterWhileInViewMotionDiv";

import vscodeimage from "@/assets/images/vscode.png";
import vercelimage from "@/assets/images/vercel.svg";
import chatgptimage from "@/assets/images/chatgpt.png";
import dockerimage from "@/assets/images/docker.webp";
import mongodbimage from "@/assets/images/mongodb.svg";
import figmaimage from "@/assets/images/figma.png";
import reactimage from "@/assets/images/react.png";
import reacticonsimage from "@/assets/images/react-icons.svg";

const ToolsComponent = () => {
  return (
    <EnterWhileInViewMotionDiv>
      <div className="my-6">
        <SectionTitleComponent title="Tools" subtitle="I am Using" />
        <div className="flex justify-center lg:justify-start">
          <div className="w-full grid grid-cols-1 max-w-[576px] lg:max-w-none md:grid-cols-2 lg:grid-cols-2 gap-1 mt-4 p-3 lg:p-0">
            <ToolComponent
              title="VS Code"
              description="Code Editor"
              image={vscodeimage}
              link="https://code.visualstudio.com/"
              className={"rotate-6"}
            />
            <ToolComponent
              title="Vercel"
              description="Deployment Platform"
              image={vercelimage}
              link="https://vercel.com/"
              className={"-rotate-12"}
            />
            <ToolComponent
              title="ChatGPT"
              description="AI Assistant"
              image={chatgptimage}
              link="https://chat.openai.com/"
              className={"-rotate-6"}
            />
            <ToolComponent
              title="Docker"
              description="Containerization Tool"
              image={dockerimage}
              link="https://www.docker.com/"
              className={"rotate-6"}
            />
            <ToolComponent
              title="MongoDB Atlas"
              description="Database"
              image={mongodbimage}
              link="https://www.mongodb.com/lp/cloud/atlas/try4-reg"
              className={"rotate-12"}
            />
            <ToolComponent
              title="Figma"
              description="Design Tool"
              image={figmaimage}
              link="https://www.figma.com/"
              className={"rotate-12"}
            />
            <ToolComponent
              title="React"
              description="Frontend Library"
              image={reactimage}
              link="https://react.dev/"
              className={"-rotate-12"}
            />
            <ToolComponent
              title="React Icons"
              description="Icon Library"
              image={reacticonsimage}
              link="https://react-icons.github.io/react-icons/"
              className={"-rotate-6"}
            />
          </div>
        </div>
      </div>
    </EnterWhileInViewMotionDiv>
  );
};

interface ToolProps {
  title: string;
  description: string;
  image: StaticImageData;
  link?: string;
  className?: string;
}

const ToolComponent = ({ title, description, image, className, link }: ToolProps) => {
  return (
    <a
      className="group flex gap-4 p-3 rounded-2xl w-full hover:bg-[--color-dark-accent] hover:drop-shadow-lg transition-colors cursor-pointer"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <div className={`h-16 w-16 bg-[--color-light] drop-shadow-lg rounded-2xl flex items-center justify-center ${className} group-hover:rotate-0 transition-transform duration-300`}>
          <img
            src={image.src}
            alt={title}
            className="h-10 w-10 object-contain"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="opacity-70 text-sm">{description}</p>
      </div>
    </a>
  );
};

export default ToolsComponent;
