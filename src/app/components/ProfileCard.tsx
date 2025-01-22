import React from 'react';

import SocialList from '@/components/SocialList';	

const ProfileComponent = () => {
	return (
		<div className='px-6 lg:px-14 mt-8 lg:mt-14 w-full lg:w-max sticky top-20'>
			<div className='relative overflow-hidden flex flex-col items-center bg-[--color-light] py-4 px-10 lg:px-4 rounded-2xl drop-shadow-lg w-full max-w-[576px] lg:w-72 mx-auto'>

				<div className="w-96 h-96 -left-24 -top-24 lg:-top-24 absolute opacity-60 border-dashed border-4 border-[--color-primary] [border-radius:58%_42%_66%_34%/30%_30%_70%_70%]"></div>
				
				<div className="w-80 h-72 -right-24 -bottom-24 lg:bottom-44 absolute opacity-60 border-dotted border-4 border-[--color-secondary] [border-radius:73%_27%_60%_40%/51%_74%_26%_49%]"></div>


				<div className="z-30 flex flex-col items-center">
					{/* box profile picture */}
					<div className='flex items-center justify-center rounded-2xl bg-[--color-dark] h-48 w-48 lg:w-56' />

					{/* name */}
					<div className='text-4xl tracking-tighter lg:text-3xl font-bold mt-6 text-[--color-dark]'>Jann Leo Gadil</div>

					<div className='h-20 hidden lg:block' />

					{/* description */}
					<div className='text-md text-center mt-4 text-[--color-dark-accent] font-medium opacity-80'>
						A passionate software<br />developer based in Manila,<br />Philippines
					</div>

					{/* social media */}
					<SocialList />
				</div>
			</div>
		</div>
	)
}

export default ProfileComponent 