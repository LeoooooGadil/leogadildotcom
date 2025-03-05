import React, { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { IoArrowForwardOutline } from "react-icons/io5";

type HighlightType = "project" | "blog" | "video" | "other";

interface HighlightComponentProps {
  title: string;
  description?: string;
  type: HighlightType;
  link: string;
  additionalText?: string;
  className?: string;
}

const HighlightCard = ({
  title,
  type,
  description,
  className,
}: HighlightComponentProps) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <button className="group">
      <div
        className={`group relative w-full rounded-xl p-2 drop-shadow-xl lg:w-72 mx-auto h-40 bg-[--color-dark-accent] border border-[--color-dark-accent-2]`}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              var(--color-accent-hover),
              transparent 80%
            )
          `,
          }}
        />
        <div className="flex flex-col h-full">
          <div className="flex-1 flex p-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-left capitalize font-bold text-sm text-[--color-accent]">{type}</h1>
              <h2 className="text-2xl font-bold text-left">{title}</h2>

              <p className="text-xs font-normal text-left mt-2">
                {description}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center px-2">
            <div></div>
            <div className="relative">
              <IoArrowForwardOutline
                size={25}
                className="transition-all absolute -right-4 group-hover:-right-6 -bottom-3  -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default HighlightCard;
