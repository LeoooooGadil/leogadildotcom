import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/app/components/navigation/navigation";
import FooterComponent from "@/app/components/Footer";

export const metadata: Metadata = {
	title: "Leo Gadil",
	description: "A passionate software developer based in Manila, Philippines",
};

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={`mx-auto max-w-screen-xl`}>
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
