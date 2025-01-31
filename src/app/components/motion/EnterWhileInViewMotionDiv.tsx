import React, { FC, PropsWithChildren } from "react";
import * as motion from "motion/react-client"; // Adjusted import for framer-motion

interface EnterWhileInViewMotionDivProps {
  delay?: number; // Define delay as a number for clarity and compatibility
}

const EnterWhileInViewMotionDiv: FC<PropsWithChildren<EnterWhileInViewMotionDivProps>> = ({ children, delay = 0 }) => {
  return (
	<motion.div
	  initial={{ opacity: 0, y: -20 }} // Starting state
	  whileInView={{ opacity: 1, y: 0 }} // Visible state
	  exit={{ opacity: 0, y: 20 }} // Exiting state
	  transition={{ duration: 0.3, delay }} // Smooth animation with delay
	  viewport={{ amount: 0.2, once: true }}
	>
	  {children}
	</motion.div>
  );
};

export default EnterWhileInViewMotionDiv;
