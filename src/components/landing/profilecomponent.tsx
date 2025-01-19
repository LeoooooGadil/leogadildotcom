import React from 'react';

import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const ProfileComponent = () => {
  return (
	<div className='px-14 mt-8 lg:mt-14 w-full lg:w-max sticky top-12'>
		<div className='flex flex-col items-center bg-[--color-light] py-4 px-10 lg:px-4 rounded-3xl drop-shadow-lg w-full max-w-[576px] lg:w-72 mx-auto'>
			{/* box profile picture */}
			<div className='flex items-center justify-center rounded-3xl bg-[--color-dark] h-48 w-48' />

			{/* name */}
			<div className='text-4xl tracking-tighter lg:text-3xl font-bold mt-6 text-[--color-dark]'>Jann Leo Gadil</div>

			<div className='h-20 hidden lg:block' />

			{/* description */}
			<div className='text-md text-center mt-4 text-[--color-dark-accent] font-medium opacity-80'>
				A passionate software<br/>developer based in Manila,<br/>Philippines
			</div>

			{/* social media */}
			<div className='flex space-x-1 mt-8'>
				<a href='https://www.facebook.com/jannleogadil' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
					<FaFacebookF className='text-[--color-accent]' size={20} />
				</a>
				<a href='https://www.github.com/jannleo' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
					<FaGithub className='text-[--color-accent]' size={24} />
				</a>
				<a href='https://www.linkedin.com/in/jannleogadil' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
					<FaLinkedin className='text-[--color-accent]' size={26} />
				</a>
				<a href='https://www.instagram.com/jannleo' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
					<FaInstagram className='text-[--color-accent]' size={24} />
				</a>
				<a href='https://www.youtube.com/c/jannleo' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
					<FaYoutube className='text-[--color-accent]' size={24} />
				</a>
			</div>
		</div>
	</div>
  )
}

export default ProfileComponent 