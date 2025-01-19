import React from 'react';

import SectionTitleComponent from '../general/sectiontitlecomponent';

const ToolsComponent = () => {
	return (
		<div className="my-12">
			<SectionTitleComponent title="Tools" subtitle="I've used before" />

			<div className="grid grid-cols-1 md:grid-cols-3 md:px-14 lg:grid-cols-2 gap-4 mt-8 p-3 lg:p-0">
				<ToolComponent
					title="VS Code"
					description="Code Editor"
					image="/images/vscode.png"
					link="https://code.visualstudio.com/"
				/>
				<ToolComponent
					title="Vercel"
					description="Deployment Platform"
					image="/images/vercel.svg"
					link="https://vercel.com/"
				/>
				<ToolComponent
					title="ChatGPT"
					description="AI Assistant"
					image="/images/chatgpt.png"
					link="https://chat.openai.com/"
				/>
				<ToolComponent
					title="Docker"
					description="Containerization Tool"
					image="/images/docker.webp"
					link="https://www.docker.com/"
				/>
				<ToolComponent
					title="MongoDB Atlas"
					description="Database"
					image="/images/mongodb.svg"
					link="https://www.mongodb.com/lp/cloud/atlas/try4-reg"
				/>
				<ToolComponent
					title="Figma"
					description="Design Tool"
					image="/images/figma.png"
					link="https://www.figma.com/"
				/>
				<ToolComponent
					title="React"
					description="Frontend Library"
					image="/images/react.png"
					link="https://react.dev/"
				/>
				<ToolComponent
					title="React Icons"
					description="Icon Library"
					image="/images/react-icons.svg"
					link="https://react-icons.github.io/react-icons/"
				/>
			</div>
		</div>
	);
};



interface ToolProps {
	title: string
	description: string
	image: string
	link?: string
}

const ToolComponent = ({ title, description, image, link }: ToolProps) => {
	return (
		<a className="flex gap-4 p-3 rounded-3xl drop-shadow-lg w-full hover:bg-[--color-dark-accent] transition-colors cursor-pointer"
			href={link}
			target="_blank"
			rel="noreferrer"
		>
			<div>
				<div
					className="h-16 w-16 bg-[--color-light] rounded-2xl flex items-center justify-center"
				>
					<img src={image} alt={title} className="h-10 w-10 object-contain" />
				</div>
			</div>
			<div className="flex flex-col justify-center">
				<h1 className="text-xl font-bold">{title}</h1>
				<p className="opacity-70 text-sm">{description}</p>
			</div>
		</a>
	);
};


export default ToolsComponent