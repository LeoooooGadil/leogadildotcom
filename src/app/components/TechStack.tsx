import { JSX } from "react";
import * as motion from "motion/react-client";

import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiUnity,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobephotoshop,
} from "react-icons/si";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandPython,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandFirebase,
  TbBrandMongodb,
  TbBrandUnity,
  TbBrandAdobePhotoshop,
  TbBrandAdobePremier,
  TbBrandAdobeAfterEffect,
} from "react-icons/tb";

import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";

export type TechIconType =
  | "Typescript"
  | "Javascript"
  | "Python"
  | "React"
  | "TailwindCSS"
  | "Firebase"
  | "MongoDB"
  | "Unity"
  | "Photoshop"
  | "Premiere"
  | "After Effects";

export interface TechIconProps {
  iconName: string;
  size: number;
}

const TechIcon = ({ iconName, size }: TechIconProps): JSX.Element => {
  switch (iconName) {
    case "Typescript":
      return <BiLogoTypescript size={size + 8} />;
    case "Javascript":
      return <RiJavascriptFill size={size + 8} />;
    case "Python":
      return <SiPython size={size} />;
    case "React":
      return <SiReact size={size} />;
    case "TailwindCSS":
      return <SiTailwindcss size={size} />;
    case "Firebase":
      return <SiFirebase size={size} />;
    case "MongoDB":
      return <SiMongodb size={size} />;
    case "Unity":
      return <SiUnity size={size} />;
    case "Photoshop":
      return <SiAdobephotoshop size={size} />;
    case "Premiere":
      return <SiAdobepremierepro size={size} />;
    case "After Effects":
      return <SiAdobeaftereffects size={size} />;
    default:
      return <div />;
  }
};

const TechIconV2 = ({ iconName, size }: TechIconProps): JSX.Element => {
  switch (iconName) {
    case "Typescript":
      return <TbBrandTypescript size={size} />;
    case "Javascript":
      return <TbBrandJavascript size={size} />;
    case "Python":
      return <TbBrandPython size={size} />;
    case "React":
      return <TbBrandReact size={size} />;
    case "TailwindCSS":
      return <TbBrandTailwind size={size} />;
    case "Firebase":
      return <TbBrandFirebase size={size} />;
    case "MongoDB":
      return <TbBrandMongodb size={size} />;
    case "Unity":
      return <TbBrandUnity size={size} />;
    case "Photoshop":
      return <TbBrandAdobePhotoshop size={size} />;
    case "Premiere":
      return <TbBrandAdobePremier size={size} />;
    case "After Effects":
      return <TbBrandAdobeAfterEffect size={size} />;
    default:
      return <div />;
  }
};

const TechStack = ({ techStack }: { techStack: string[] }) => {
  return (
    <div className="flex flex-wrap gap-6">
      {techStack.map((tech, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <TechIcon iconName={tech} size={20} />
            <span className="text-sm opacity-70 hidden">{tech}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export interface HighlightTechStackProps {
  icon: string;
}

const HighlightTechStack = ({ icon }: HighlightTechStackProps) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.5 }}
      exit={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-center h-12 p-3">
          <div className="md:block lg:hidden">
            <TechIcon iconName={icon} size={32} />
          </div>
          <div className="hidden  lg:block">
            <TechIcon iconName={icon} size={32} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { TechIcon, TechIconV2, TechStack, HighlightTechStack };
