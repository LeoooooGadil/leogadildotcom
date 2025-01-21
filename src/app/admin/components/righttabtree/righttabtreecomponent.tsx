"use client";

import React, { useState, useEffect, useMemo } from "react";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Tab {
  name: string;
  page: string;
  Icon?: React.ComponentType;
  tabs?: Tab[];
}

interface TabItemProps {
  tab: Tab;
  activeTab: string;
  openTab: string | null;
  setOpenTab: (tab: string | null) => void;
  handleTabChange: (tab: string) => void;
  depth?: number; // For controlling indentation
}

const TabItem: React.FC<TabItemProps> = ({
  tab,
  activeTab,
  openTab,
  setOpenTab,
  handleTabChange,
  depth = 0,
}) => {
  const isActive = activeTab === tab.page;

  // Check if any child is active
  const isChildActive = useMemo(() => {
    const checkActiveChild = (child: Tab): boolean =>
      child.page === activeTab ||
      (child.tabs?.some(checkActiveChild) ?? false);
    return tab.tabs?.some(checkActiveChild) ?? false;
  }, [tab.tabs, activeTab]);

  const isOpen = openTab === tab.page || isChildActive;

  const toggleOpen = () => {
    if (tab.tabs && tab.tabs.length > 0) {
      setOpenTab(isOpen ? null : tab.page);
    }
  };

  const handleButtonClick = () => {
    handleTabChange(tab.page);

    if (tab.tabs && tab.tabs.length > 0) {
      toggleOpen();
    }
  };

  const hasSubtabs = tab.tabs && tab.tabs.length > 0;

  return (
    <div className="flex flex-col">
      <button
        onClick={handleButtonClick}
        className={`pl-4 pr-2 hover:bg-[--color-dark-accent] cursor-pointer py-2 rounded-xl lg:w-full flex items-center justify-between ${
          isActive ? "text-[--color-accent] font-bold" : ""
        }`}
      >
        <div className="flex items-left justify-start">
          {tab.Icon && <tab.Icon />} {/* Render optional icon */}
          <span>{tab.name}</span>
        </div>

        {hasSubtabs && (
          <div className="flex items-center">
            {isOpen ? (
              <MdOutlineKeyboardArrowDown size={24} />
            ) : (
              <MdOutlineKeyboardArrowLeft size={24} />
            )}
          </div>
        )}
      </button>

      {isOpen && hasSubtabs && (
        <div className="ml-4 opacity-100">
          {tab.tabs!.map((subtab, index) => (
            <TabItem
              key={index}
              tab={subtab}
              activeTab={activeTab}
              openTab={openTab}
              setOpenTab={setOpenTab}
              handleTabChange={handleTabChange}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface NestedTabTreeProps {
  handleTabChange: (tab: string) => void;
  admintabs: Tab[];
  activeTab: string;
}

const NestedTabTree: React.FC<NestedTabTreeProps> = ({
  handleTabChange,
  admintabs,
  activeTab,
}) => {
  // Initialize openTab to match activeTab for the default open behavior
  const [openTab, setOpenTab] = useState<string | null>(activeTab);

  // Sync openTab with activeTab when activeTab changes
  useEffect(() => {
    setOpenTab(activeTab);
  }, [activeTab]);

  return (
    <div className="px-14 mt-14 w-full lg:w-max top-12 flex justify-center">
      <ul className="flex flex-col space-y-1 w-72">
        {admintabs.map((tab, index) => (
          <TabItem
            key={index}
            tab={tab}
            activeTab={activeTab}
            openTab={openTab}
            setOpenTab={setOpenTab}
            handleTabChange={handleTabChange}
          />
        ))}
      </ul>
    </div>
  );
};

export default NestedTabTree;
