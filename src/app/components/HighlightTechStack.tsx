import React from "react";

import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobephotoshop,
} from "react-icons/si";
import { HighlightTechStack as TechStackIcon } from "@/components/TechStack";
import EnterDropMotionDiv from "./motion/EnterDropMotionDiv";

const HighlightTechStack = () => {
  return (
    <EnterDropMotionDiv delay={0.2}>
      <div className="px-14 lg:px-0 mb-20 lg:mb-8 flex flex-col lg:flex-row gap-3 lg:gap-7">
        <div className="flex flex-wrap text-center justify-center lg:text-left lg:justify-start gap-7">
          <TechStackIcon icon="Typescript" />
          <TechStackIcon icon="Javascript" />
          <TechStackIcon icon="Python" />
          <TechStackIcon icon="React" />
          <TechStackIcon icon="Firebase" />
          <TechStackIcon icon="TailwindCSS" />
          <TechStackIcon icon="Premiere" />
          <TechStackIcon icon="After Effects" />
          <TechStackIcon icon="Photoshop" />
        </div>
      </div>
    </EnterDropMotionDiv>
  );
};

export default HighlightTechStack;
