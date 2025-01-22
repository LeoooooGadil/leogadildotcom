import React from 'react';
import SectionTitleComponent from '../SectionTitle';
import BlogCard from '@/components/BlogCard';

const FeaturedBlogPostComponent = () => {
  return (
	<div className="my-12">
		<SectionTitleComponent title="Featured" subtitle="Blog Post" />
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

export default FeaturedBlogPostComponent