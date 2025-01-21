import "../globals.css";
import Navigation from "@/app/components/navigation/navigation";
import FooterComponent from "@/app/components/footer/footercomponent";

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={`mx-auto max-w-screen-lg`}>
			<div className="w-full flex justify-center">
				<Navigation />
			</div>
			{children}
			<div>
				<FooterComponent />
			</div>
		</div>
	);
}
