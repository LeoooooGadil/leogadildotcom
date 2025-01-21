import React from 'react';

import { FaExternalLinkAlt } from "react-icons/fa";

const HighlightsSectionComponent = () => {
	return (
		<div className="px-4 lg:px-0 my-12">
			<div className="flex flex-col md:flex-row md:justify-center space-y-6 md:space-y-0 md:gap-6">
				<HighlightComponent type="blog" title="Spaceverse" description=" How I reversed engineered an app to fit my needs" link="https://spvr.app/" color='--color-secondary' />
				<HighlightComponent type="project" title="Medstore" description="an online pharmacy" link="https://spvr.app/" color='--color-primary' />
			</div>
		</div>
	)
}

type HighlightType = 'project' | 'blog' | 'video' | 'other';

interface HighlightComponentProps {
	title: string;
	description?: string;
	type: HighlightType;
	link: string;
	color?: string;
}

const HighlightComponent = ({ title, description, type, link, color }: HighlightComponentProps) => {

	const LinkText = () => {
		switch (type) {
			case 'blog':
				return 'read blog'
			case 'project':
				return 'view project'
			case 'video':
				return 'watch video'
			case 'other':
				return 'view'
			default:
				return 'view'
		}
	}

	return (
		<div className={`flex flex-col w-full rounded-2xl p-4 drop-shadow-lg w-full max-w-[356px] lg:w-72 mx-auto h-48`}
			style={
				{
					backgroundColor: `var(${color})`
				}
			}
		>
			<div className="flex-1 flex items-center">
				<div className="flex flex-col">
					<h2 className="text-3xl font-bold">
						{title}
					</h2>

					<p className="text-sm font-normal">
						{description}
					</p>
				</div>
			</div>
			<div className="flex justify-end ">
				<a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-normal text-sm hover:underline">
					{LinkText()} <FaExternalLinkAlt />
				</a>
			</div>
		</div>
	)
}


export default HighlightsSectionComponent