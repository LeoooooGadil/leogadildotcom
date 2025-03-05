"use client";

import React, { ReactNode, useRef, useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { useRouter } from "next/navigation";

import { IconType } from "react-icons";
import { SiGitbook } from "react-icons/si";
import { FaPencil } from "react-icons/fa6";
import { TbCarambolaFilled } from "react-icons/tb";

const SideBarComponent = () => {
	const router = useRouter();
	const [width, setWidth] = useState(224);
	const isResizingRef = useRef(false);
	const lastWidthRef = useRef(width);
	const prevMouseXRef = useRef(0);
	const limitCrossedRef = useRef(false);
	const [isResizing, setIsResizing] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("sidebarWidth", width.toString());
		}
	}, [width]);

	const handleMouseDown = (e: any) => {
		e.preventDefault();
		isResizingRef.current = true;
		setIsResizing(true);
		prevMouseXRef.current = e.clientX;
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
	};

	const handleMouseMove = (e: any) => {
		if (!isResizingRef.current) return;
		e.preventDefault();

		const deltaX = e.clientX - prevMouseXRef.current;
		const newWidth = lastWidthRef.current + deltaX;

		if (newWidth <= 150) {
			limitCrossedRef.current = true;
			return;
		}
		if (newWidth >= 400) {
			limitCrossedRef.current = true;
			return;
		}

		if (limitCrossedRef.current) {
			if ((newWidth > 150 && deltaX > 0) || (newWidth < 400 && deltaX < 0)) {
				limitCrossedRef.current = false;
			} else {
				return;
			}
		}

		setWidth(newWidth);
		lastWidthRef.current = newWidth;
		prevMouseXRef.current = e.clientX;
	};

	const handleMouseUp = () => {
		isResizingRef.current = false;
		setIsResizing(false);
		document.removeEventListener("mousemove", handleMouseMove);
		document.removeEventListener("mouseup", handleMouseUp);
	};

	return (
		<motion.div
			className="h-full p-2 bg-[--color-dark-accent] border-r border-[--color-dark-accent-2] relative"
			animate={{ width }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
			style={{ width }}
		>
			<div
				className={`flex flex-col items-end absolute top-0 right-0 h-full w-3 cursor-ew-resize group`}
				onMouseDown={handleMouseDown}
			>
				<div className="h-full w-0.5 transition-all group-hover:bg-[--color-dark-accent-2] group-hover:w-1" style={{ backgroundColor: isResizing ? 'var(--color-dark-accent-2)' : '' }}></div>
			</div>
			<div className="flex flex-col gap-1">
				<SidebarButton
					title="Go to Portfolio"
					Icon={TbCarambolaFilled}
					action={() => router.push("/")}
				/>
				<WorkspaceButton title="Projects">
					<SidebarButton Icon={SiGitbook} title="Spaceverse" />
					<SidebarButton Icon={SiGitbook} title="Moving Forward" />
				</WorkspaceButton>
				<WorkspaceButton title="Blogs">
					<SidebarButton
						Icon={FaPencil}
						title={"Spaceverse: How I Manage to Copy everything and make it my own"}
					/>
					<SidebarButton Icon={FaPencil} title="How to be a React Master" />
				</WorkspaceButton>
				<div className="flex flex-col gap-0.5 pt-6">
					{/* additional tabs here */}
				</div>
			</div>
		</motion.div>
	);
};

interface SidebarButton {
	Icon?: IconType;
	title: String;
	action?: () => void;
}

const SidebarButton = ({ Icon, title, action }: SidebarButton) => {
	return (
		<button
			className="hover:bg-[--color-dark-accent-2] transition-colors text-left h-8 rounded-md px-2 flex gap-2 items-center"
			onClick={action}
		>
			<div className="">
				{Icon && <Icon size={18} className="opacity-75" />}
			</div>
			<p className="text-sm opacity-75 truncate">{title}</p>
		</button>
	);
};

interface WorkspaceButtonProps {
	children: ReactNode;
	title: string;
}

const WorkspaceButton = ({ title, children }: WorkspaceButtonProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	return (
		<div className="flex flex-col gap-0.5 pt-4">
			<button
				className="hover:bg-[--color-dark-accent-2] rounded-md transition-colors duration-200 text-left h-8"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h1 className="text-xs opacity-75 ml-1">{title}</h1>
			</button>
			{isOpen && children}
		</div>
	);
};

export default SideBarComponent;
