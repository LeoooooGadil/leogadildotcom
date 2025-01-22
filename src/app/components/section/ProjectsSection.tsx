import React from 'react';

import SectionTitleComponent from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';

const RecentProjectComponent = () => {
	return (
		<div className='my-12'>
			<SectionTitleComponent title='recent' subtitle='projects' />

			<div className="flex flex-col gap-4 mt-8 p-3 lg:p-0 md:items-center lg:items-start">
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
			</div>
		</div>
	)
}

export default RecentProjectComponent