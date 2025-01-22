import React from 'react';

import { SiTypescript, SiJavascript, SiPython, SiReact, SiTailwindcss, SiAdobepremierepro, SiAdobeaftereffects, SiAdobephotoshop } from "react-icons/si";
import { HighlightTechStack as TechStackIcon } from '@/components/TechStack';

const HighlightTechStack = () => {
	return (
		<div className="px-14 lg:px-0 my-12 mb-20">
			<div className="flex text-center justify-center lg:text-left lg:justify-start space-x-6">
				<TechStackIcon title="Typescript" Icon={SiTypescript} />
				<TechStackIcon title="Javascript" Icon={SiJavascript} />
				<TechStackIcon title="Python" Icon={SiPython} />
				<TechStackIcon title="React" Icon={SiReact} />
				<TechStackIcon title="Tailwindcss" Icon={SiTailwindcss} />
			</div>
			<div className="flex text-center justify-center lg:text-left lg:justify-start space-x-6">
				<TechStackIcon title="Adobe Premiere Pro" Icon={SiAdobepremierepro} />
				<TechStackIcon title="Adobe After Effects" Icon={SiAdobeaftereffects} />
				<TechStackIcon title="Adobe Photoshop" Icon={SiAdobephotoshop} />
			</div>
		</div>
	)
}

export default HighlightTechStack