import { ProjectCard } from '@/app/components/home/recentprojects/recentprojectscomponent';
import React from 'react'

const ProjectsListComponent = () => {
	return (
		<div className='mt-4'>
			<div className='text-center md:flex md:justify-center md:space-x-4 lg:flex-col lg:justify-start lg:text-left lg:space-x-0'>
				<h1 className='text-6xl font-bold lg:text-8xl'>
					PROJECT
				</h1>
				<h1 className='text-6xl lg:text-7xl font-bold text-[--color-dark-accent-2] drop-shadow-lg'>
					LIST
				</h1>
			</div>
			<div className="">
				<RecentProjectComponent />
			</div>
		</div>
	)
}

const RecentProjectComponent = () => {
	return (
		<div className="flex flex-col gap-4 mt-8 p-3 lg:p-0 md:items-center">
			<ProjectCard
				picturecolor='--color-secondary'
				title='Spaceverse'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio eget nunc ultrices fermentum.'
				link='/projects/spaceverse'
				techStack={['React', 'TailwindCSS', 'MongoDB']}
			/>
			<ProjectCard
				picturecolor='--color-primary'
				title='PhilStore'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio eget nunc ultrices fermentum.'
				link='/projects/philstore'
				techStack={['React', 'TailwindCSS', 'Firebase']}
			/>
			<ProjectCard
				picturecolor='--color-secondary'
				title='Moving Forward'
				description='is a 2D Task Management Simulation Game for Emotional Wellbeing'
				link='/projects/movingforward'
				techStack={['Unity', 'Photoshop', 'Firebase']}
			/>
			<ProjectCard
				picturecolor='--color-primary'
				title='Atlas'
				description='is a restaurant chatbot. You can ask questions about the restaurant.'
				link='/projects/movingforward'
				techStack={['Python']}
			/>
		</div>
	)
}

export default ProjectsListComponent