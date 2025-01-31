interface BlogPostProps {
	picturecolor: string
	title: string
	description: string
	readTime: string
	datepublished: string
}

const BlogCard = ({ picturecolor, title, description, readTime, datepublished }: BlogPostProps) => {
	return (
		<div className='flex justify-left gap-6 p-3 px-1 lg:px-3 h-48 rounded-2xl drop-shadow-lg w-full max-w-[576px] lg:w-max hover:bg-[--color-dark-accent] transition-colors cursor-pointer'>
			<div className="hidden md:block">
				<div className='h-full w-36 bg-[--color-dark-accent-2] rounded-xl'
					style={{ backgroundColor: `var(${picturecolor})` }}
				/>
			</div>

			<div className='flex flex-col justify-between px-4 lg:px-0'>
				<div>
					<h1 className='text-xl lg:text-2xl font-bold'>{title}</h1>
					<p className='opacity-70 text-sm mt-3'>{description}</p>
				</div>
				<div className='flex justify-between mt-4'>
					<p className='text-xs lg:text-sm opacity-60'>{datepublished}</p>
					<p className='text-xs lg:text-sm opacity-60'>{readTime} read</p>
				</div>
			</div>
		</div>
	)
}

export default BlogCard