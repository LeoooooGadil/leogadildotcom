"use client";

import React from "react";
import HighlightCard from "@/components/HighlightCard";
import EnterDropMotionDiv from "../motion/EnterDropMotionDiv";

const HighlightSection = () => {
  return (
    <EnterDropMotionDiv delay={.3}>
      <div
        className="px-6 lg:px-0 my-6"
      >
        <div className="max-w-[576px] lg:max-w-none mx-auto flex flex-col gap-5 md:flex-row md:justify-center">
          <HighlightCard
            type="blog"
            title="Spaceverse"
            description=" How I reversed engineered an app to fit my needs"
            link="https://spvr.app/"
            color="--color-secondary"
            additionalText="4 min read"
            className="-rotate-1 lg:-rotate-3"
          />
          <HighlightCard
            type="project"
            title="Medstore"
            description="An online pharmacy"
            link="https://spvr.app/"
            color="--color-primary"
            className="rotate-2 lg:rotate-6"
          />
        </div>
      </div>
    </EnterDropMotionDiv>
  );
};

export default HighlightSection;
