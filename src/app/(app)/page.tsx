import ProfileComponent from "@/components/ProfileCard";
import RecentProjectComponent from "@/components/section/ProjectsSection";
import SelfThoughtComponent from "@/components/section/SelfTaughtSection";
import ToolsComponent from "@/components/section/ToolsSection";
import FeaturedBlogPostComponent from "@/components/section/FeaturedBlogSection";
import ContactMeComponent from "@/components/section/ContactMeSection";
import ImGladToSeeYouHereComponent from "@/components/SpecialText";
import HeroSection from "../components/section/HeroSection";

export default function Home() {
	return (
		<div className="flex flex-col lg:flex-row lg:gap-8 mt-8">
			<div className="relative">
				<ProfileComponent />
			</div>
			<div className="mt-2 flex flex-col gap-6">
				<HeroSection />
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



