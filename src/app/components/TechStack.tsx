
import { JSX } from "react";
import { IconType } from "react-icons";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";

interface TechIconProps {
	iconName: string
	size: number
}

const TechIcon = ({ iconName, size }: TechIconProps): JSX.Element => {
	switch (iconName) {
		case 'Typescript':
			return <SiTypescript size={size} />
		case 'Javascript':
			return <SiJavascript size={size} />
		case 'Python':
			return <SiPython size={size} />
		case 'React':
			return <SiReact size={size} />
		case 'TailwindCSS':
			return <SiTailwindcss size={size} />
		case 'Firebase':
			return <SiFirebase size={size} />
		case 'MongoDB':
			return <SiMongodb size={size} />
		case 'Unity':
			return <SiUnity size={size} />
		case 'Photoshop':
			return <SiAdobephotoshop size={size} />
		case 'Premiere':
			return <SiAdobepremierepro size={size} />
		case 'After Effects':
			return <SiAdobeaftereffects size={size} />
		default:
			return <div />
	}
}

const TechStack = ({ techStack }: { techStack: string[] }) => {
	return (
		<div className='flex flex-wrap gap-2 pt-4 space-x-6'>
			{techStack.map((tech, index) => (
				<div key={index} className='flex items-center gap-6'>
					<div className='flex items-center gap-2'>
						<TechIcon iconName={tech} size={20} />
						<span className='text-sm opacity-70 hidden lg:block'>{tech}</span>
					</div>
				</div>
			))}
		</div>
	)
}

interface HighlightTechStackProps {
	title: string;
	Icon: IconType;
}

const HighlightTechStack = ({ title, Icon }: HighlightTechStackProps) => {
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

export { TechStack, HighlightTechStack };