import React from 'react';
import SectionTitleComponent from '../../general/sectiontitlecomponent';

const SelfThoughtComponent = () => {
	return (
		<div className='my-12'>
			<SectionTitleComponent title='self-taught' subtitle='coder' />


			<div className='text-center mt-8 lg:text-left'>
				<p className='text-md lg:hidden text-[--color-light] font-normal opacity-60 px-8 lg:px-0'>
					As a Self-Taught Coder, I quickly learn new technologies,
					solve complex<br />problems, and continuously improve my skills through practice and dedication.
				</p>

				<p className='text-md hidden lg:block text-[--color-light] font-normal opacity-60 px-14 lg:px-0'>
					As a Self-Taught Coder, I quickly learn new<br /> technologies,
					solve complex problems, and <br />continuously improve my skills through <br />practice and dedication.
				</p>
			</div>

			<div className='flex flex-col gap-4 mt-8 p-3 lg:p-0 md:items-center lg:items-start'>
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
		<div className='flex justify-center gap-6 p-3 h-48 rounded-2xl drop-shadow-lg max-w-[576px] lg:w-max hover:bg-[--color-dark-accent] transition-colors cursor-pointer'>
			<div className="hidden lg:block">
				<div className='h-full w-36 bg-[--color-dark-accent-2] rounded-xl'
					style={{ backgroundColor: `var(${picturecolor})` }}
				/>
			</div>

			<div className='flex flex-col justify-between px-4 lg:px-0'>
				<div>
					<h1 className='text-2xl font-bold'>{title}</h1>
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