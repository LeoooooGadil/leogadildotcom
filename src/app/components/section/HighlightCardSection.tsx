import React from "react";

import HighlightCard from "@/components/HighlightCard";

const HighlightSection = () => {
  return (
    <div className="px-4 lg:px-0 my-12">
      <div className="max-w-[576px] lg:max-w-none mx-auto flex flex-col md:flex-row md:justify-center space-y-6 md:space-y-0 md:gap-6">
        <HighlightCard
          type="blog"
          title="Spaceverse"
          description=" How I reversed engineered an app to fit my needs"
          link="https://spvr.app/"
          color="--color-secondary"
        />
        <HighlightCard
          type="project"
          title="Medstore"
          description="an online pharmacy"
          link="https://spvr.app/"
          color="--color-primary"
        />
      </div>
    </div>
  );
};

export default HighlightSection;
