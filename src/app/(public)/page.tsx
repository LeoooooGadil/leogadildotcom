import ProfileComponent from "@/app/components/home/landing/profilecomponent";
import LandingTextComponent from "@/app/components/home/landing/landingtextcomponent";
import HighlightTechStack from "@/app/components/home/highlights/highlighttechstack";
import HighlightsSectionComponent from "@/app/components/home/highlights/highlightssection";
import RecentProjectComponent from "@/app/components/home/recentprojects/recentprojectscomponent";
import SelfThoughtComponent from "@/app/components/home/boasts/selfthoughtcomponent";
import ToolsComponent from "@/app/components/home/boasts/toolscomponent";
import FeaturedBlogPostComponent from "@/app/components/home/featuredblog/featureblogpostcomponent";
import ContactMeComponent from "@/app/components/home/contactme/contactmecomponent";
import ImGladToSeeYouHereComponent from "@/app/components/general/imgladtoseeyouherecomponent";

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
				{/* <ToolsComponent /> */}
				<FeaturedBlogPostComponent />
				<ContactMeComponent />
			</div>
		</div>
	);
}



