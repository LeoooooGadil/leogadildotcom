import React from "react";
import EnterDropMotionDiv from "./motion/EnterDropMotionDiv";

const ImGladToSeeYouHereComponent = () => {
  return (
    <EnterDropMotionDiv delay={.4}>
      <div
        className="my-6 px-6 lg:px-0"
      >
        <div className="text-center bg-[--color-dark-accent] p-4 px-10 lg:px-8 rounded-xl drop-shadow-md max-w-[576px] lg:max-w-none mx-auto lg:mx-0">
          <h1 className="text-xl font-bold text-center">
            I'm glad to see you here.
          </h1>
        </div>
      </div>
    </EnterDropMotionDiv>
  );
};

export default ImGladToSeeYouHereComponent;
