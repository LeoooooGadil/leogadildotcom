import ProfileComponent from "@/components/ProfileCard";
import LandingTextComponent from "@/components/LandingHero";
import HighlightTechStack from "@/components/HighlightTechStack";
import HighlightsSectionComponent from "@/components/section/HighlightCardSection";
import RecentProjectComponent from "@/components/section/ProjectsSection";
import SelfThoughtComponent from "@/components/section/SelfTaughtSection";
import ToolsComponent from "@/components/section/ToolsSection";
import FeaturedBlogPostComponent from "@/components/section/FeaturedBlogSection";
import ContactMeComponent from "@/components/section/ContactMeSection";
import ImGladToSeeYouHereComponent from "@/components/SpecialText";

export default function Home() {
	return (
		<div className="flex flex-col lg:flex-row">
			<div className="relative">
				<ProfileComponent />
			</div>
			<div className="mt-8 flex flex-col gap-10">
				<div>
					<LandingTextComponent />
					<HighlightTechStack />
					<HighlightsSectionComponent />
				</div>
				<ImGladToSeeYouHereComponent />
				<RecentProjectComponent />
				<SelfThoughtComponent />
				<ToolsComponent />
				<FeaturedBlogPostComponent />
				<ContactMeComponent />
			</div>
		</div>
	);
}



