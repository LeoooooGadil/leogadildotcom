/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect, useRef } from "react";
import { IconType } from "react-icons";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// Types
interface IconDropdownProps {
  options: IconType[];
  onSelect: (index: number) => void;
  isActive: (index: number) => boolean | undefined;
}

export const IconDropdown: React.FC<IconDropdownProps> = ({
  options,
  onSelect,
  isActive,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  useEffect(() => {
    const activeIndex = options.findIndex((_, index) => isActive(index));

    if (activeIndex !== -1) {
      setSelectedOption(activeIndex);
      setActive(true);
    } else setActive(false);
  }, [options, isActive, active]);

  return (
    <div
      className={` text-white rounded-lg h-10 flex overflow-y-hidden border ${active
        ? "border-[--color-primary-hover]"
        : "border-[--color-dark-accent-1]"
        }`}
    >
      <button
        className={`pl-3 pr-3 py-2 transition-colors
        ${active
            ? "bg-[--color-primary]"
            : "bg-[--color-dark-accent] hover:bg-[--color-dark-accent-1]"
          }
        `}
        onClick={() => onSelect(selectedOption)}
      >
        {options[selectedOption] &&
          React.createElement(options[selectedOption], { size: 20 })}
      </button>
      <button
        className={`px-1 transition-colors
        ${active
            ? "bg-[--color-primary]"
            : "bg-[--color-dark-accent] hover:bg-[--color-dark-accent-1]"
          }
      `}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {isDropdownOpen ? (
          <IoIosArrowUp size={12} />
        ) : (
          <IoIosArrowDown size={12} />
        )}
      </button>

      {
        isDropdownOpen &&
        <div className="flex items-center gap-2 fixed top-16 h-12 -translate-x-1/2 bg-[--color-dark] border-b border-[--color-dark-accent-1] ">
          {options.map((Opt, index) => {
            return (
              <button key={index}>
                <Opt size={20} />
              </button>
            );
          })}
        </div>
      }

    </div>
  );
};
