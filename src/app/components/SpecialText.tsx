import React from "react";
import EnterDropMotionDiv from "./motion/EnterDropMotionDiv";
import * as motion from "motion/react-client";

const ImGladToSeeYouHereComponent = () => {
  return (
    <EnterDropMotionDiv delay={0.4}>
      <div className="overflow-hidden lg:overflow-visible h-52">
        {/* <motion.div
          className="my-6 px-6 lg:px-0"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02, rotate: 2 }}
          exit={{ scale: 1.1 }}
          transition={{ duration: 0.1 }}
        >
          <div className="relative overflow-hidden flex justify-center items-center py-3 rounded-xl drop-shadow-md max-w-[576px] lg:max-w-none mx-auto lg:mx-0">
            <h1 className="text-base md:text-4xl cursor-default uppercase rounded-lg font-bold text-center py-1 px-1 w-max">
              I am glad to see you here.
            </h1>
          </div>
        </motion.div> */}
      </div>
    </EnterDropMotionDiv>
  );
};

export default ImGladToSeeYouHereComponent;
