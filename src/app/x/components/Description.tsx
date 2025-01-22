import react from "react";

interface DescriptionProps {
	text: string;
}

const Description = ({ text }: DescriptionProps) => {
	return (
		<div>
			<p className="text-sm text-center lg:text-left opacity-80 my-4">{text}</p>
		</div>
	);
};

export default Description;