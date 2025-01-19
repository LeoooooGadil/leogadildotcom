import React from 'react';
import SectionTitleComponent from '../general/sectiontitlecomponent';
import { BlogPostComponent } from '../boasts/selfthoughtcomponent';

const FeaturedBlogPostComponent = () => {
  return (
	<div className="my-12">
		<SectionTitleComponent title="Featured" subtitle="Blog Post" />

		<div className='flex flex-col gap-4 mt-8 p-3 lg:p-0 md:items-start'>
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

export default FeaturedBlogPostComponent