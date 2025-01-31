"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

import {
  RiProjectorFill,
  RiPencilFill,
  RiAdminFill,
} from "react-icons/ri";
import { TbHomeFilled, TbBriefcaseFilled, TbBallpenFilled, TbShieldFilled } from "react-icons/tb";

const tabs = [
  {
    name: "Home",
    link: "/",
    icon: TbHomeFilled,
    isLocal: false,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: TbBriefcaseFilled,
    isLocal: false,
  },
  {
    name: "Blog",
    link: "/blogs",
    icon: TbBallpenFilled,
    isLocal: false,
  },
  {
    name: "Admin",
    link: "/x",
    icon: TbShieldFilled,
    isLocal: true,
  },
];

const Tabs = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");

  const isLocal = process.env.NODE_ENV === "development";

  useEffect(() => {
    const path = window.location.pathname.split("/")[1] || ""; // Get the first segment or an empty string
    const active = tabs.find((tab) => tab.link === `/${path}`)?.name || "Home"; // Match tab with the first segment
    setActiveTab(active);
  }, []);

  const handleTabChange = (name: string) => {
    setActiveTab(name);
    const targetTab = tabs.find((tab) => tab.name === name);
    if (targetTab) {
      router.push(targetTab.link);
    }
  };

  return (
    <div className="w-full">
      <ul className="flex items-center justify-center">
        {tabs.map((tab, index) =>
          !isLocal && !tab.isLocal ? null : (
            <Tab
              key={index + "tab"}
              name={tab.name}
              Icon={tab.icon}
              link={tab.link}
              active={tab.name === activeTab}
              handleTabChange={handleTabChange}
            />
          )
        )}
      </ul>
    </div>
  );
};

// Tab component
interface TabProps {
  key: string;
  name: string;
  Icon: IconType;
  link: string;
  active: boolean;
  handleTabChange?: (name: string) => void;
}

const Tab: React.FC<TabProps> = ({
  name,
  Icon,
  link,
  active,
  handleTabChange,
}) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <li>
      <div className="relative flex flex-col items-center">
        {/* Button */}
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            handleTabChange && handleTabChange(name);
          }}
          onPointerEnter={() => setOnHover(true)}
          onPointerLeave={() => setOnHover(false)}
          className={`w-12 flex items-center justify-center hover:text-[--color-accent] transition-colors duration-[300]`}
        >
          <Icon size={24} />
        </motion.button>

        {/* Animated Tooltip */}
        <AnimatePresence>
          {onHover && (
            <motion.div
              className="absolute pointer-events-none -bottom-[37px] bg-[--color-dark-accent] px-3 py-0.5 rounded-2xl drop-shadow-lg"
              initial={{ opacity: 0, y: -30 }} // Starting state
              animate={{ opacity: 1, y: 0 }} // Visible state
              exit={{ opacity: 0, y: -30 }} // Exiting state
              transition={{ duration: 0.3 }} // Smooth animation
            >
              <p className="text-xs">{name}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
};

export default Tabs;
