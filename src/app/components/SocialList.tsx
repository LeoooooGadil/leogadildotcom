import React from 'react'

import { TbBrandFacebookFilled, TbBrandGithubFilled, TbBrandLinkedinFilled, TbBrandInstagramFilled, TbBrandYoutubeFilled } from "react-icons/tb";

const SocialList = () => {
	return (
		<div className='flex space-x-1'>
			<a href='https://www.facebook.com/jannleogadil' aria-label='Facebook' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
				<TbBrandFacebookFilled className='text-[--color-accent]' size={24} />
			</a>
			<a href='https://www.github.com/jannleo' aria-label='Github' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
				<TbBrandGithubFilled className='text-[--color-accent]' size={24} />
			</a>
			<a href='https://www.linkedin.com/in/jannleogadil' aria-label='Linkedin' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
				<TbBrandLinkedinFilled className='text-[--color-accent]' size={24} />
			</a>
			<a href='https://www.instagram.com/jannleo' aria-label='Instragram' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
				<TbBrandInstagramFilled className='text-[--color-accent]' size={24} />
			</a>
			<a href='https://www.youtube.com/c/jannleo' aria-label='Youtube' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
				<TbBrandYoutubeFilled className='text-[--color-accent]' size={24} />
			</a>
		</div>
	)
}

export default SocialList