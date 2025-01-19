import React from 'react';

import { IconType } from 'react-icons';

import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";


const HighlightTechStack = () => {
	return (
		<div className="px-14 lg:px-0 my-12 mb-20">
			<div className="flex text-center justify-center lg:text-left lg:justify-start space-x-6">
				<HighlightTechStackComponent title="Typescript" Icon={SiTypescript} />
				<HighlightTechStackComponent title="Javascript" Icon={SiJavascript} />
				<HighlightTechStackComponent title="Python" Icon={SiPython} />
				<HighlightTechStackComponent title="React" Icon={SiReact} />
				<HighlightTechStackComponent title="Tailwindcss" Icon={SiTailwindcss} />
			</div>

			<div className="flex text-center justify-center lg:text-left lg:justify-start space-x-6">
				<HighlightTechStackComponent title="Adobe Premiere Pro" Icon={SiAdobepremierepro} />
				<HighlightTechStackComponent title="Adobe After Effects" Icon={SiAdobeaftereffects} />
				<HighlightTechStackComponent title="Adobe Photoshop" Icon={SiAdobephotoshop} />
			</div>
		</div>
	)
}

interface HighlightTechStackComponentProps {
	title: string;
	Icon: IconType;
}

const HighlightTechStackComponent = ({ title, Icon }: HighlightTechStackComponentProps) => {

	return (
		<div className="">
			<div className="flex flex-col">
				<div className="flex items-center justify-center w-12 h-12">
					<div className='md:hidden lg:hidden'>
						<Icon size={24} />
					</div>
					<div className='hidden md:block lg:block'>
						<Icon size={28} />
					</div>

				</div>
			</div>
		</div>
	)
}

export default HighlightTechStack