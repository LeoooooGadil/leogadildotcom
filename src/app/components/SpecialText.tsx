import React from "react";
import EnterDropMotionDiv from "./motion/EnterDropMotionDiv";
import * as motion from "motion/react-client";

const ImGladToSeeYouHereComponent = () => {
  return (
    <EnterDropMotionDiv delay={0.4}>
      <div className="hover:animate-spin overflow-hidden lg:overflow-visible">
        <motion.div
          className="my-6 px-6 lg:px-0"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02, rotate: 2 }}
          exit={{ scale: 1.1 }}
          transition={{ duration: 0.1 }}
        >
          <div className="relative overflow-hidden flex justify-center items-center py-3 rounded-xl drop-shadow-md max-w-[576px] lg:max-w-none mx-auto lg:mx-0">
            <YellowtapeBackground />
            <h1 className="text-xl md:text-4xl cursor-default text-[--color-dark] uppercase rounded-lg font-bold text-center bg-[--color-yellotape] py-1 px-1 w-max">
              I am glad to see you here.
            </h1>
          </div>
        </motion.div>
      </div>
    </EnterDropMotionDiv>
  );
};

const YellowtapeBackground = () => {
  return (
    <div className="absolute -left-1/2 top-0 -translate-y-1/2 flex -z-10">
      {[...Array(25)].map((_, index) => (
        <div
          key={index}
          className={`w-10 h-64 rotate-45 ${
            index % 2 === 0 ? "bg-[--color-yellotape]" : "bg-[--color-dark-accent]"
          }`}
        />
      ))}
    </div>
  );
};

export default ImGladToSeeYouHereComponent;
