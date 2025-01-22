"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

import { RiHome9Fill } from "react-icons/ri";
import { RiProjectorFill } from "react-icons/ri";
import { RiPencilFill } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";

const tabs = [
  {
    name: "Home",
    link: "/",
    icon: RiHome9Fill,
    isLocal: false,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: RiProjectorFill,
    isLocal: false,
  },
  {
    name: "Blog",
    link: "/blog",
    icon: RiPencilFill,
    isLocal: false,
  },
  {
    name: "Admin",
    link: "/x",
    icon: RiAdminFill,
    isLocal: true,
  },
];

const Tabs = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");

  const isLocal = process.env.NODE_ENV === "development";

  useEffect(() => {
    // Extract the first part of the path
    const path = window.location.pathname.split("/")[1] || ""; // Get the first segment or an empty string
    const active = tabs.find((tab) => tab.link === `/${path}`)?.name || "Home"; // Match tab with the first segment
    setActiveTab(active);
  }, []);

  const handleTabChange = (name: string) => {
    setActiveTab(name);
    const targetTab = tabs.find((tab) => tab.name === name);
    if (targetTab) {
      router.push(targetTab.link, { scroll: false });
    }
  };

  return (
    <div className="w-full">
      <ul className="flex items-center justify-center gap-10">
        {tabs.map((tab, index) =>
          // Check if the tab is local and skip rendering it
          !isLocal && !tab.isLocal ? (
            <></>
          ) : (
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
  return (
    <li className="hover:text-[--color-accent]">
      <div className="w-max relative">
        <a
          href={link}
          onClick={(e) => {
            e.preventDefault();
            handleTabChange && handleTabChange(name);
          }}
          className={`hover:text-[--color-accent] transition-colors`}
        >
          <Icon size={24} />
        </a>
      </div>
    </li>
  );
};

export default Tabs;
