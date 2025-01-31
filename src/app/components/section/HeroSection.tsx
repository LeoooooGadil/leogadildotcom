import React from 'react'
import LandingTextComponent from "@/components/LandingHero";
import HighlightTechStack from "@/components/HighlightTechStack";
import HighlightsSectionComponent from "@/components/section/HighlightCardSection";

const HeroSection = () => {
	return (
		<div className="mt-8 lg:mt-0">
			<LandingTextComponent />
			<HighlightTechStack />
			<HighlightsSectionComponent />
		</div>
	)
}

export default HeroSection