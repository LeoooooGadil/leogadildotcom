import React from 'react'

import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const SocialList = () => {
	return (
		<div className='flex space-x-1 mt-8'>
			<a href='https://www.facebook.com/jannleogadil' aria-label='Facebook' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
				<FaFacebookF className='text-[--color-accent]' size={20} />
			</a>
			<a href='https://www.github.com/jannleo' aria-label='Github' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
				<FaGithub className='text-[--color-accent]' size={24} />
			</a>
			<a href='https://www.linkedin.com/in/jannleogadil' aria-label='Linkedin' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
				<FaLinkedin className='text-[--color-accent]' size={26} />
			</a>
			<a href='https://www.instagram.com/jannleo' aria-label='Instragram' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
				<FaInstagram className='text-[--color-accent]' size={24} />
			</a>
			<a href='https://www.youtube.com/c/jannleo' aria-label='Youtube' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
				<FaYoutube className='text-[--color-accent]' size={24} />
			</a>
		</div>
	)
}

export default SocialList