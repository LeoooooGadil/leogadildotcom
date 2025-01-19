"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for App Router

const tabs = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
];

const Tabs = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    // Set the active tab based on the current pathname
    const path = window.location.pathname; // Use `window.location.pathname` as `next/navigation` router does not provide pathname
    const active = tabs.find(tab => tab.link === path)?.name || 'Home';
    setActiveTab(active);
  }, []);

  const handleTabChange = (name: string) => {
    setActiveTab(name);
    const targetTab = tabs.find(tab => tab.name === name);
    if (targetTab) {
      router.push(targetTab.link, { scroll: false });
    }
  };

  return (
    <div>
      <ul className="flex items-center space-x-8 px-2 hidden lg:flex">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            name={tab.name}
            link={tab.link}
            active={tab.name === activeTab}
            handleTabChange={handleTabChange}
          />
        ))}
      </ul>
    </div>
  );
};

// Tab component
interface TabProps {
  name: string;
  link: string;
  active: boolean;
  handleTabChange?: (name: string) => void;
}

const Tab: React.FC<TabProps> = ({ name, link, active, handleTabChange }) => {
  return (
    <li className="hover:text-[--color-accent]">
      <div className="w-max relative">
        <a
          href={link}
          onClick={(e) => {
            e.preventDefault();
            handleTabChange && handleTabChange(name);
          }}
          className={`hover:text-[--color-accent] transition-colors ${active ? 'active-tab' : ''}`}
        >
          {name}
        </a>
      </div>
    </li>
  );
};


export default Tabs;
