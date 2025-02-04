"use client";

import React, { useState, JSX } from "react";

import RightTabTreeComponent from "@/app/x/components/TabTree";
import GeneralSettingsComponent from "./pages/generalsettings";
import AddAProjectComponent from "./pages/addaproject";

type Tab = {
  name: string;
  page: string;
  component: JSX.Element | null;
  tabs?: Tab[]; // Allow nested tabs
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  Icon?: any; // Optional icon for tabs
};

const admintabs: Tab[] = [
  {
    name: "General Settings",
    page: "general",
    component: <GeneralSettingsComponent key="general" />,
    tabs: [
      { name: "Announcements", page: "announcements", component: null },
      { name: "Change Password", page: "change-password", component: null },
    ],
  },
  {
    name: "Projects Settings",
    page: "projects",
    component: null,
    tabs: [
      {
        name: "Add a Project",
        page: "add-project",
        component: <AddAProjectComponent key="add-project" />,
      },
      { name: "Manage Projects", page: "manage-projects", component: null },
      { name: "Manage Featured Projects", page: "manage-featured-projects", component: null },
    ],
  },
  {
    name: "Blogs Settings",
    page: "blogs",
    component: null,
    tabs: [
      { name: "Manage Blogs", page: "manage-blogs", component: null },
      { name: "Manage Featured Blogs", page: "manage-featured-blogs", component: null },
    ],
  },
];

const renderTabComponent = (tab: Tab, activeTab: string): JSX.Element | null => {
  // If the tab has no nested tabs and it matches the activeTab, render its component
  if (tab.page === activeTab) {
    return tab.component;
  }

  // If the tab has nested tabs, check them recursively
  if (tab.tabs) {
    for (let i = 0; i < tab.tabs.length; i++) {
      const nestedTab = tab.tabs[i];
      const nestedComponent = renderTabComponent(nestedTab, activeTab);
      if (nestedComponent) {
        return nestedComponent;
      }
    }
  }

  return null; // Return null if no match
};

const Administrator = () => {
  const [activeTab, setActiveTab] = useState(admintabs[0].page);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative">
        <RightTabTreeComponent
          activeTab={activeTab} // Correct prop name
          handleTabChange={handleTabChange}
          admintabs={admintabs}
        />
      </div>
      <div className="mt-8 flex flex-col gap-10">
        {admintabs.map((tab) => {
          const component = renderTabComponent(tab, activeTab);
          if (component) {
            return component;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Administrator;
