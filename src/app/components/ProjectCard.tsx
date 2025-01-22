import { TechStack } from '@/app/components/TechStack';

interface ProjectCardProps {
	picturecolor?: string
	title: string
	description: string
	link: string
	techStack: string[]
}

const ProjectCard = ({ title, description, techStack, picturecolor, link }: ProjectCardProps) => {
	return (
		<a className='flex gap-6 p-3 rounded-2xl drop-shadow-lg w-full max-w-[576px] lg:w-max hover:bg-[--color-dark-accent] transition-colors cursor-pointer'
			href={link}
		>
			<div>
				<div className='h-full w-36 bg-[--color-dark-accent-2] rounded-xl'
					style={{ backgroundColor: `var(${picturecolor})` }}
				/>
			</div>

			<div className="mb-2">
				<h1 className='text-2xl font-bold'>{title}</h1>
				<p className='opacity-70 text-sm'>{description}</p>
				<div className='flex flex-wrap gap-2 pt-4 space-x-6'>
					<TechStack techStack={techStack} />
				</div>
			</div>
		</a>
	)
}

export default ProjectCard