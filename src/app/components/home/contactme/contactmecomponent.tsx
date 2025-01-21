import React from 'react';
import SectionTitleComponent from '../../general/sectiontitlecomponent';

import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const ContactMeComponent = () => {
	return (
		<div className='my-12 mb-72'>
			<SectionTitleComponent title='Say Hi!' subtitle="I don't bite." />

			<div className='text-center mt-8 lg:text-left'>
				<p className='text-md text-[--color-light] font-normal opacity-60'>
					Feel free to contact me for any inquiries <br />or collaborations.
				</p>
			</div>

			<div className='relative px-14 md:px-0 mt-8 lg:mt-14 w-full lg:w-full top-12'>

				<div className='-rotate-2 overflow-hidden flex flex-col bg-[--color-light] p-6 px-10 lg:px-8 rounded-2xl drop-shadow-lg w-full max-w-[576px] lg:max-w-none mx-auto lg:mx-0'>

					<div className="w-96 h-96 -bottom-24 lg:-top-24 -right-20 opacity-60 absolute border-dotted border-4 border-[--color-primary] [border-radius:53%_47%_71%_29%/58%_25%_75%_42%]"></div>


					<div className="z-30">
						<p className='text-center lg:text-left text-md lg:text-xl font-normal text-[--color-dark]'>
							Pop me an email at <a href='mailto:leogadil04@gmail.com' className='text-[--color-accent] font-semibold'>
								leogadil04@gmail.com
							</a> <br />or connect with me on social media.
						</p>

						<div className="mt-24"></div>

						<div className="mt-24 flex justify-center lg:justify-end w-full block lg:hidden">
							<div className='flex space-x-1'>
								<a href='https://www.facebook.com/jannleogadil' aria-label='Fac ebook' target='_blank' rel='noreferrer noopener' className='flex items-center justify-center h-10 w-10 rounded-3xl'>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

// console log hello world


export default ContactMeComponent