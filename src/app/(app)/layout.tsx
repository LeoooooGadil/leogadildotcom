import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/Footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="flex justify-center">
				<Navigation />
			</div>
			{children}
			<div>
				<Footer />
			</div>
		</>
	);
}
