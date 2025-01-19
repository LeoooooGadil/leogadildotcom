import React from 'react';
import SectionTitleComponent from '../general/sectiontitlecomponent';

const SelfThoughtComponent = () => {
	return (
		<div className='my-12'>
			<SectionTitleComponent title='self-thought' subtitle='programmer' />


			<div className='text-center mt-8 lg:text-left'>
				<p className='text-md text-[--color-light] font-normal opacity-60'>
					As a Self-Taught Programmer, I quickly learn new<br /> technologies,
					solve complex problems, and <br />continuously improve my skills through <br />practice and dedication.
				</p>
			</div>

			<div className='flex flex-col gap-4 mt-8 p-3 lg:p-0 md:items-start'>
				<BlogPostComponent
					picturecolor='--color-primary'
					title='How to Create a React App from Scratch'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
					readTime='5 minutes'
					datepublished='July 20, 2021'
				/>
				<BlogPostComponent
					picturecolor='--color-secondary'
					title='The Ultimate Guide to TailwindCSS'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
					readTime='7 minutes'
					datepublished='July 20, 2021'
				/>
			</div>
		</div>
	)
}

interface BlogPostProps {
	picturecolor: string
	title: string
	description: string
	readTime: string
	datepublished: string
}

const BlogPostComponent = ({ picturecolor, title, description, readTime, datepublished }: BlogPostProps) => {
	return (
		<div className='flex gap-6 p-3 h-48 rounded-3xl drop-shadow-lg w-full max-w-[576px] lg:w-max hover:bg-[--color-dark-accent] transition-colors cursor-pointer'>
			<div>
				<div className='h-full w-36 bg-[--color-dark-accent-2] rounded-2xl'
					style={{ backgroundColor: `var(${picturecolor})` }}
				/>
			</div>

			<div className='flex flex-col justify-between'>
				<div>
					<h1 className='text-xl font-bold'>{title}</h1>
					<p className='opacity-70 text-sm mt-3'>{description}</p>
				</div>
				<div className='flex justify-between mt-4'>
					<p className='text-sm opacity-60'>{datepublished}</p>
					<p className='text-sm opacity-60'>{readTime} read</p>
				</div>
			</div>
		</div>
	)
}

export default SelfThoughtComponent

export { BlogPostComponent }