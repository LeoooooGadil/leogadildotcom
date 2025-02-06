import React from "react";
import { TbCaretDownFilled } from "react-icons/tb";
import EnterDropMotionDiv from "@/components/motion/EnterDropMotionDiv";

const LandingTextComponent = () => {
  return (
    <div
      className="mt-4"
    >
      <EnterDropMotionDiv>
        <div className="text-center md:flex md:justify-center md:space-x-4 lg:flex-col lg:justify-start lg:text-left lg:space-x-0">
          <div>
            <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg">
              SOFTWARE
            </h1>
          </div>
          <div className="flex justify-center lg:justify-start gap-16">
            <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-[--color-dark-accent-2] drop-shadow-lg">
              DEVELOPER
            </h1>
          </div>
        </div>

        <div className="text-center mt-8 lg:mt-6 lg:text-left lg:max-w-md mx-auto lg:px-0 lg:mx-0">
          <span className="text-md text-[--color-light] font-normal opacity-60">
            Self-Taught Software Developer, Film Maker, and a recent
            graduate of Bachelor of Science in Computer Science.
          </span>
        </div>
        <div className="flex justify-center lg:justify-start mt-8 lg:mt-9 mb-12">
          <TbCaretDownFilled size={28} className="block lg:hidden animate-bounce" />
        </div>
      </EnterDropMotionDiv>
    </div>
  );
};

export default LandingTextComponent;
