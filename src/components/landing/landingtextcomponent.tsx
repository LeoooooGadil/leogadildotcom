import React from 'react'

const LandingTextComponent = () => {
	return (
		<div className='mt-4'>
			<div className='text-center md:flex md:justify-center md:space-x-4 lg:flex-col lg:justify-start lg:text-left lg:space-x-0'>
				<h1 className='text-6xl font-bold lg:text-8xl'>
					SOFTWARE
				</h1>
				<h1 className='text-6xl lg:text-7xl font-bold text-[--color-dark-accent-2] drop-shadow-lg'>
					DEVELOPER
				</h1>
			</div>

			<div className='text-center mt-8 lg:mt-12 lg:text-left'>
				<p className='text-md text-[--color-light] font-normal opacity-60'>
					I am a self-taught Software Developer, Film <br/>Maker, and a recent graduate of Bachelor<br/> of Science in Computer Science.
				</p>
			</div>
		</div>
	)
}

export default LandingTextComponent