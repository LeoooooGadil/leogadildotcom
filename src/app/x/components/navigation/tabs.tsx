"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons';

import { RiLogoutBoxRFill } from "react-icons/ri";

const tabs = [
	{
		name: 'Log out',
		link: '/',
		icon: RiLogoutBoxRFill
	}
];

const Tabs = () => {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState('');

	useEffect(() => {
		// Extract the first part of the path
		const path = window.location.pathname.split('/')[1] || ''; // Get the first segment or an empty string
		const active = tabs.find((tab) => tab.link === `/${path}`)?.name || 'Home'; // Match tab with the first segment
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
		<div className="p-2">
			<ul className="flex items-center space-x-8 px-2">
				{tabs.map((tab, index) => (
					<Tab
						key={index}
						name={tab.name}
						Icon={tab.icon}
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
	Icon: IconType;
	link: string;
	active: boolean;
	handleTabChange?: (name: string) => void;
}

const Tab: React.FC<TabProps> = ({ name, Icon, link, active, handleTabChange }) => {
	return (
		<li className="hover:text-[--color-accent]">
			<div className="w-max relative">
				<a
					href={link}
					onClick={(e) => {
						e.preventDefault();
						if(handleTabChange) handleTabChange(name);
					}}
					className={`hover:text-[--color-accent] transition-colors ${active ? 'active-tab' : ''}`}
				>
					<Icon size={28} />
				</a>
			</div>
		</li>
	);
};


export default Tabs;
