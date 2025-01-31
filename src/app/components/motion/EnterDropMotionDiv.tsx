import React, { FC, PropsWithChildren } from "react";
import * as motion from "motion/react-client";

interface EnterDropMotionDivProps {
  delay?: number;
}

const EnterDropMotionDiv: FC<PropsWithChildren<EnterDropMotionDivProps>> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, pointerEvents: "auto" }}
      exit={{ opacity: 0, y: -20, pointerEvents: "none" }}
      transition={{ duration: 0.3, delay }}
      style={{
        pointerEvents: "none", // Default state
      }}
    >
      {children}
    </motion.div>
  );
};

export default EnterDropMotionDiv;


