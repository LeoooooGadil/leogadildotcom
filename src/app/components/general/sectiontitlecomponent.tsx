import React from 'react'

interface SectionTitleComponentProps {
	title: string
	subtitle: string
}

const SectionTitleComponent = ({ title, subtitle }: SectionTitleComponentProps) => {
	return (
		<div className='text-center md:flex md:justify-center md:space-x-4 lg:flex-col lg:justify-start lg:text-left lg:space-x-0'>
			<h1 className='text-5xl font-bold lg:text-6xl uppercase'>
				{title}
			</h1>
			<h1 className='text-5xl lg:text-6xl font-bold text-[--color-dark-accent-2] drop-shadow-lg uppercase'>
				{subtitle}
			</h1>
		</div>
	)
}

export default SectionTitleComponent