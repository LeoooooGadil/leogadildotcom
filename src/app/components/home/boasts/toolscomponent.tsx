import React from 'react';

import SectionTitleComponent from '../../general/sectiontitlecomponent';
import { StaticImageData } from 'next/image';

import vscodeimage from '../../../assets/images/vscode.png';
import vercelimage from '../../../assets/images/vercel.svg';
import chatgptimage from '../../../assets/images/chatgpt.png';
import dockerimage from '../../../assets/images/docker.webp';
import mongodbimage from '../../../assets/images/mongodb.svg';
import figmaimage from '../../../assets/images/figma.png';
import reactimage from '../../../assets/images/react.png';
import reacticonsimage from '../../../assets/images/react-icons.svg';

const ToolsComponent = () => {
	return (
		<div className="my-12">
			<SectionTitleComponent title="Tools" subtitle="I've used before" />

			<div className="grid grid-cols-1 md:grid-cols-3 md:px-14 lg:grid-cols-2 gap-4 mt-8 p-3 lg:p-0">
				<ToolComponent
					title="VS Code"
					description="Code Editor"
					image={vscodeimage}
					link="https://code.visualstudio.com/"
				/>
				<ToolComponent
					title="Vercel"
					description="Deployment Platform"
					image={vercelimage}
					link="https://vercel.com/"
				/>
				<ToolComponent
					title="ChatGPT"
					description="AI Assistant"
					image={chatgptimage}
					link="https://chat.openai.com/"
				/>
				<ToolComponent
					title="Docker"
					description="Containerization Tool"
					image={dockerimage}
					link="https://www.docker.com/"
				/>
				<ToolComponent
					title="MongoDB Atlas"
					description="Database"
					image={mongodbimage}
					link="https://www.mongodb.com/lp/cloud/atlas/try4-reg"
				/>
				<ToolComponent
					title="Figma"
					description="Design Tool"
					image={figmaimage}
					link="https://www.figma.com/"
				/>
				<ToolComponent
					title="React"
					description="Frontend Library"
					image={reactimage}
					link="https://react.dev/"
				/>
				<ToolComponent
					title="React Icons"
					description="Icon Library"
					image={reacticonsimage}
					link="https://react-icons.github.io/react-icons/"
				/>
			</div>
		</div>
	);
};



interface ToolProps {
	title: string
	description: string
	image: StaticImageData
	link?: string
}

const ToolComponent = ({ title, description, image, link }: ToolProps) => {
	return (
		<a className="flex gap-4 p-3 rounded-2xl drop-shadow-lg w-full hover:bg-[--color-dark-accent] transition-colors cursor-pointer"
			href={link}
			target="_blank"
			rel="noreferrer"
		>
			<div>
				<div
					className="h-16 w-16 bg-[--color-light] rounded-xl flex items-center justify-center"
				>
					<img src={image.src} alt={title} className="h-10 w-10 object-contain" width={40} height={40} />
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