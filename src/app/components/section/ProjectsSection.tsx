import React from 'react';

import SectionTitleComponent from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import EnterWhileInViewMotionDiv from '../motion/EnterWhileInViewMotionDiv';

const RecentProjectComponent = () => {
	return (
		<EnterWhileInViewMotionDiv>
			<div className='my-6'>
				<SectionTitleComponent title='recent' subtitle='projects' />

				<div className="flex flex-col gap-1 mt-4 p-3 lg:p-0 md:items-center lg:items-start">
					<ProjectCard
						picturecolor='--color-secondary'
						title='Spaceverse'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
						link='/projects/spaceverse'
						techStack={['React', 'TailwindCSS', 'MongoDB']}
					/>
					<ProjectCard
						picturecolor='--color-primary'
						title='PhilStore'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
						link='/projects/philstore'
						techStack={['React', 'TailwindCSS', 'Firebase']}
					/>
				</div>
			</div>
		</EnterWhileInViewMotionDiv>
	)
}

export default RecentProjectComponent