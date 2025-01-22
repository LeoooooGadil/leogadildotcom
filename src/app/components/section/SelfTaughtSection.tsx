import React from 'react';
import SectionTitleComponent from '../SectionTitle';
import BlogCard from '@/components/BlogCard';

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
				<BlogCard
					picturecolor='--color-primary'
					title='How to Create a React App from Scratch'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
					readTime='5 minutes'
					datepublished='July 20, 2021'
				/>
				<BlogCard
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

export default SelfThoughtComponent