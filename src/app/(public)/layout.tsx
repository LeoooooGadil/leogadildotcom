import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/app/components/navigation/navigation";
import FooterComponent from "@/app/components/Footer";

export const metadata: Metadata = {
	title: "Administrator",
	description: "Administrator Page for the portfolio of Leo Gadil",
};

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
