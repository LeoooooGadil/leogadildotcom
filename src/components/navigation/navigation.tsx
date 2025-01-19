import React from 'react'
import Logo from './logo'
import Tabs from './tabs'
import ContactMeButton from './contactme'
import BurgerComponent from './burger'

const Navigation = () => {
	return (
		<div className='flex items-center justify-between py-4 pt-10 lg:py-10 lg:pt-12 px-4 w-full lg:w-max mx-auto'>
			{/* <div className='flex items-center space-x-4'>
			<Logo />
		</div>
		<div className='flex items-center space-x-4'>
			<Tabs />
		</div> */}

			<div className='flex items-center justify-between space-x-12 bg-[--color-dark-accent] p-2.5 rounded-3xl drop-shadow-lg max-w-96 lg:max-w-none mx-auto w-full lg:w-max'>
				<Logo />
				<Tabs />
				<div className='flex items-center space-x-4'>
					<ContactMeButton />
					<BurgerComponent />
				</div>
			</div>
		</div>
	)
}

export default Navigation