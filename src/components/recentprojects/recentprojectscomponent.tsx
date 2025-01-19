import React, { JSX } from 'react';

import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import SectionTitleComponent from '../general/sectiontitlecomponent';

interface TechIconProps {
	iconName: string
	size: number
}

const TechIcon = ({ iconName, size }: TechIconProps): JSX.Element => {
	switch (iconName) {
		case 'Typescript':
			return <SiTypescript size={size} />
		case 'Javascript':
			return <SiJavascript size={size} />
		case 'Python':
			return <SiPython size={size} />
		case 'React':
			return <SiReact size={size} />
		case 'TailwindCSS':
			return <SiTailwindcss size={size} />
		case 'Firebase':
			return <SiFirebase size={size} />
		case 'MongoDB':
			return <SiMongodb size={size} />
		default:
			return <div />
	}
}


const RecentProjectComponent = () => {
	return (
		<div className='my-12'>
			<SectionTitleComponent title='recent' subtitle='projects' />

			<div className="flex flex-col gap-4 mt-8 p-3 lg:p-0 md:items-start">
				<ProjectCard
					picturecolor='--color-secondary'
					title='Spaceverse'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio eget nunc ultrices fermentum.'
					techStack={['React', 'TailwindCSS', 'MongoDB']}
				/>
				<ProjectCard
					picturecolor='--color-primary'
					title='PhilStore'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio eget nunc ultrices fermentum.'
					techStack={['React', 'TailwindCSS', 'Firebase']}
				/>
			</div>
		</div>
	)
}

interface ProjectCardProps {
	picturecolor?: string
	title: string
	description: string
	techStack: string[]
}

const ProjectCard = ({ title, description, techStack, picturecolor }: ProjectCardProps) => {

	return (
		<div className='flex gap-6 p-3 rounded-3xl drop-shadow-lg w-full max-w-[576px] lg:w-max hover:bg-[--color-dark-accent] transition-colors cursor-pointer'>
			<div>
				<div className='h-full w-36 bg-[--color-dark-accent-2] rounded-2xl'
					style={{ backgroundColor: `var(${picturecolor})` }}
				/>
			</div>

			<div>
				<h1 className='text-2xl font-bold'>{title}</h1>
				<p className='opacity-70 text-sm'>{description}</p>
				<div className='flex flex-wrap gap-2 pt-4 space-x-6'>
					<TechStack techStack={techStack} />
				</div>
			</div>
		</div>
	)
}

const TechStack = ({ techStack }: { techStack: string[] }) => {
	return (
		<div className='flex flex-wrap gap-2 pt-4 space-x-6'>
			{techStack.map((tech, index) => (
				<div key={index} className='flex items-center gap-6'>
					<div className='flex items-center gap-2'>
						<TechIcon iconName={tech} size={20} />
						<span className='text-sm opacity-70'>{tech}</span>
					</div>
				</div>
			))}
		</div>
	)
}

export default RecentProjectComponent