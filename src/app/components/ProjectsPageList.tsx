import ProjectCard from '@/app/components/ProjectCard';
import SectionTitleComponent from '@/app/components/SectionTitle';
import React from 'react'

const ProjectsLPageList = () => {
	return (
		<div className='mt-4'>
			<SectionTitleComponent title='recent' subtitle='projects' />
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
		</div>
	)
}

export default ProjectsLPageList