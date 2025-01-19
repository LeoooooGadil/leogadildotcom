import ProfileComponent from "@/components/landing/profilecomponent";
import LandingTextComponent from "@/components/landing/landingtextcomponent";
import HighlightTechStack from "@/components/highlights/highlighttechstack";
import HighlightsSectionComponent from "@/components/highlights/highlightssection";
import RecentProjectComponent from "@/components/recentprojects/recentprojectscomponent";
import SelfThoughtComponent from "@/components/boasts/selfthoughtcomponent";
import ToolsComponent from "@/components/boasts/toolscomponent";
import FeaturedBlogPostComponent from "@/components/featuredblog/featureblogpostcomponent";
import ContactMeComponent from "@/components/contactme/contactmecomponent";
import ImGladToSeeYouHereComponent from "@/components/general/imgladtoseeyouherecomponent";

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



